import type { LLMsSection } from 'nuxt-llms'

export default defineNuxtConfig({
  extends: ['shadcn-docs-nuxt'],

  modules: [
    '@nuxt/eslint',
    'motion-v/nuxt',
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

  compatibilityDate: '2025-06-21',

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
    domain: 'https://crxjs-website.netlify.app',
    title: 'CRXJS Documentation',
    description: 'Modern Chrome extension development with built-in HMR and zero-config setup.',
    sections: [
      {
        title: 'Getting Started',
        description: 'Learn how to set up and use CRXJS',
        links: [
          {
            title: 'Introduction',
            href: '/guide/introduction',
            description: 'Overview of CRXJS features and capabilities',
          },
          {
            title: 'Quick Start with create-crxjs',
            href: '/guide/installation/create-crxjs',
            description: 'Create a new project using the official starter template',
          },
          {
            title: 'Manual Setup',
            href: '/guide/installation/from-scratch',
            description: 'Step-by-step guide for manual installation',
          },
          {
            title: 'Loading Extensions',
            href: '/guide/installation/loading',
            description: 'How to load and test your extension in Chrome',
          },
          {
            title: 'Building for Production',
            href: '/guide/installation/packaging',
            description: 'Prepare your extension for distribution',
          },
        ],
      },
      {
        title: 'Core Concepts',
        description: 'Key concepts for CRXJS development',
        links: [
          {
            title: 'Manifest Configuration',
            href: '/concepts/manifest',
            description: 'Understanding the manifest.json file structure',
          },
          {
            title: 'Background Scripts',
            href: '/concepts/background',
            description: 'Working with extension background processes',
          },
          {
            title: 'Content Scripts',
            href: '/concepts/content',
            description: 'Injecting scripts into web pages',
          },
          {
            title: 'Extension Pages',
            href: '/concepts/pages',
            description: 'Creating popup and options pages',
          },
        ],
      },
    ],
  },
})
