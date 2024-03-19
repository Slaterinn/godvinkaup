
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
  modules: ['@nuxt/ui',
            '@nuxtjs/sitemap',
            '@nuxtjs/robots',
            'nuxt-icon',],
  nitro: {
    compressPublicAssets: {
      brotli: true
    }
  },
});


