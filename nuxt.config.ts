// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['shadcn-docs-nuxt'],
  modules: [
    '@nuxt/eslint',
    '@vueuse/motion/nuxt',
    '@nuxt/content',
    '@nuxt/scripts',
  ],
  components: [
    {
      path: '@/components',
      pathPrefix: false,
      ignore: ['**/*.ts'],
    },
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-07-06',
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
