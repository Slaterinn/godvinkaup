// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {},
    baseURL: '/https://slaterinn.github.io/godvinkaup/'
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
  modules: ['@nuxt/ui']
});


