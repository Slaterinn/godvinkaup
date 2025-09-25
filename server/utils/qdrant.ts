// ~/server/utils/qdrant.ts
import { QdrantClient } from '@qdrant/js-client-rest'

const config = useRuntimeConfig()

export const qdrant = new QdrantClient({
  url: config.public.qdrantUrl as string,
  apiKey: config.qdrantApiKey as string   // ✅ server-only, not public
})