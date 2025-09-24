// ~/server/utils/qdrant.ts
import { QdrantClient } from '@qdrant/js-client-rest'

export const qdrant = new QdrantClient({
  url: process.env.NUXT_PUBLIC_QDRANT_URL,
  apiKey: process.env.NUXT_PUBLIC_QDRANT_API_KEY
})