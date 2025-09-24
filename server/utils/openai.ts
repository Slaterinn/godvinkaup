import OpenAI from 'openai'

export const openai = new OpenAI({
  apiKey: process.env.NUXT_PUBLIC_OPENAI_API_KEY!
})