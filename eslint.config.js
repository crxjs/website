// @ts-check
import antfu from '@antfu/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

export default antfu(
  {
    formatters: {
      markdown: false,
    },
    markdown: false,
  },
).append(nuxt())
