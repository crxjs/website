export default defineNuxtConfig({
  extends: ['shadcn-docs-nuxt'],

  modules: [
    '@nuxt/eslint',
    '@vueuse/motion/nuxt',
    'nuxt-llms',
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

  i18n: {
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        name: 'English',
        language: 'en-US',
      },
    ],
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
