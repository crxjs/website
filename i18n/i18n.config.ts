export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      'description': 'Modern Chrome extension development with built-in HMR and zero-config setup',
      'getStarted': 'Get Started',
      'copiedToClipboard': 'Copied "{text}" to clipboard',
      'Edit this page': 'Edit this page',
      'On This Page': 'On This Page',
      'Back to Top': 'Back to Top',
      'Read more at': 'Read more at',
    },
    zh: {
      'description': 'CRXJS 是一个现代化的 Chrome 扩展开发工具，内置 HMR 和零配置。',
      'getStarted': '开始使用',
      'copiedToClipboard': '已复制 "{text}" 到剪贴板',
      'Edit this page': '编辑此页面',
      'On This Page': '本页目录',
      'Back to Top': '返回顶部',
      'Read more at': '更多信息请参考',
    },
  },
}))
