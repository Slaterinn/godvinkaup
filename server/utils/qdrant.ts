// server/utils/qdrant.ts
import { QdrantClient } from '@qdrant/js-client-rest'

export const qdrant = () => {
  const config = useRuntimeConfig()
  return new QdrantClient({
    url: config.public.qdrantUrl,
    apiKey: config.qdrantApiKey, // server-only
  })
}
