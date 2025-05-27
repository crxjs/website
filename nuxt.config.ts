export default defineNuxtConfig({
  extends: ['shadcn-docs-nuxt'],

  modules: [
    '@nuxt/image',
    '@nuxt/eslint',
    '@vueuse/motion/nuxt',
    '@nuxt/content',
    '@nuxt/scripts',
    'nuxt-llms',
    '@nuxt/fonts',
  ],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  devtools: { enabled: true },

  site: {
    url: 'https://crxjs.dev',
    title: 'CRXJS',
    description:
      'Modern Chrome extension development with built-in HMR and zero-config setup.',
  },

  mdc: {
    highlight: {
      langs: ['svelte', 'tsx'],
    },
  },

  compatibilityDate: '2024-07-06',

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

  llms: {
    domain: 'https://crxjs-website.netlify.app/',
    title: 'CRXJS',
    description:
      'Modern Chrome extension development with built-in HMR and zero-config setup.',
    full: {
      title: 'CRXJS Documentation',
      description: 'The complete CRXJS documentation.',
    },
  },
})
