// TEMPORARY for local dev only — removes SSL cert checks (don't use in prod)
//process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

import { OpenAI } from 'openai';
import { QdrantClient } from '@qdrant/js-client-rest';
import { defineEventHandler, readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const query = body.query as string;

  // ✅ Validate input
  if (!query || typeof query !== 'string' || query.trim().length === 0) {
    return { result: 'Invalid input. Please ask something about wine 🍷' };
  }

  const openai = new OpenAI({
    apiKey: process.env.NUXT_PUBLIC_OPENAI_API_KEY,
  });

  // ✅ Use OpenAI to classify if it's a wine-related question
  const wineCheck = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content:
          'You are an assistant that classifies whether a message is a wine-related question. Only respond with "wine" or "not wine". The message may be in Icelandic or English.',
      },
      {
        role: 'user',
        content: `Classify this message: "${query}"`,
      },
    ],
  });

  // ✅ Safe access to classification
  const classification =
    wineCheck.choices?.[0]?.message?.content?.toLowerCase?.() ?? '';

  if (!classification.includes('wine')) {
    return { result: 'Please ask a question about wine 🍷' };
  }

  // ✅ Generate embedding
  const embeddingResponse = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: query,
  });

  //check if the env variables are loaded:
  console.log("🔐 Qdrant URL:", process.env.NUXT_PUBLIC_QDRANT_URL);
  console.log("🔐 Qdrant API Key:", process.env.NUXT_PUBLIC_QDRANT_API_KEY?.slice(0, 6) + '...');
  const qdrant = new QdrantClient({
    url: process.env.NUXT_PUBLIC_QDRANT_URL!,
    apiKey: process.env.NUXT_PUBLIC_QDRANT_API_KEY!,
  });

  try {
    const result = await qdrant.getCollections();
    console.log('List of collections:', result.collections);
  } catch (err) {
    console.error('Could not get collections:', err);
  }

  const vector = embeddingResponse.data[0].embedding;
  
  try {
    const result = await qdrant.search(process.env.NUXT_PUBLIC_QDRANT_COLLECTION!, {
      vector,
      limit: 3,
    });
    console.log('🔍 Qdrant search result:', JSON.stringify(result, null, 2));
    return {
      results: result.map((r) => r.payload),
    };
  } catch (err: any) {
    console.error('[QDRANT SEARCH ERROR]', err);
    return {
      error: 'Could not search Qdrant: ' + err?.message,
    };
  }
});
