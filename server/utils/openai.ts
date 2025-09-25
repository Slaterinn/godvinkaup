// server/utils/openai.ts
import OpenAI from 'openai'

export const openai = () => {
  const config = useRuntimeConfig()
  return new OpenAI({
    apiKey: config.openaiApiKey, // private, server-only
  })
}
