export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      description: 'Modern Chrome extension development with built-in HMR and zero-config setup',
      getStarted: 'Get Started',
      copiedToClipboard: 'Copied "{text}" to clipboard',
    },
    zh: {
      description: 'CRXJS 是一个现代化的 Chrome 扩展开发工具，内置 HMR 和零配置。',
      getStarted: '开始使用',
      copiedToClipboard: '已复制 "{text}" 到剪贴板',
    },
  },
}))
