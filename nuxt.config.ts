// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css' },
      ],
      script: [{ src: 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js' }],
      htmlAttrs: {
        lang: 'en',
      },
    }
  },

  runtimeConfig: {
    qdrantApiKey: import.meta.env.QDRANT_API_KEY,
    openaiApiKey: import.meta.env.OPENAI_API_KEY,
    public: {
      blogJsonUrl: '/blogs/posts.json', // Optional, used only if fetching directly from the JSON file
      qdrantUrl: import.meta.env.QDRANT_URL,
      qdrantCollection: import.meta.env.QDRANT_COLLECTION,
    }
  },

  devtools: { enabled: true },

  alias: {
  },

  css: ["~/assets/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    '@nuxt/ui',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-icon',
    'nuxt-gtag',
    "@nuxt/image"
  ],

  gtag: {
    enabled: true,
    id: 'G-D0Q8GFPQZ6' // Your Google Analytics tracking ID
  },

  nitro: {
    compressPublicAssets: {
      brotli: true
    }
  },

  compatibilityDate: '2024-08-17',
});