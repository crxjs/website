---
title: 演示
description: 浏览 CRXJS 演示测试项目和贡献者演练场，查看真实的浏览器扩展示例。
icon: 'lucide:monitor-play'
---

CRXJS 示例位于
[chrome-extension-tools](https://github.com/crxjs/chrome-extension-tools)
仓库中。其中有两类实用资源：

- [演示测试项目](https://github.com/crxjs/chrome-extension-tools/tree/main/packages/vite-plugin/tests/e2e)
  涵盖了经过测试的扩展模式、框架集成、HMR 行为、内容脚本、扩展页面、消息传递以及 Web 可访问资源。
- [贡献者演练场](https://github.com/crxjs/chrome-extension-tools/tree/main/playgrounds)
  是为 CRXJS 贡献者提供的可运行项目。当你想在真实的扩展项目中尝试针对特定框架的更改时，这些项目非常实用。

## 演示测试项目

如果你想查看可正常运行的实现，可以从以下项目开始：

| 演示 | 演示内容 |
| --- | --- |
| [React 内容脚本](https://github.com/crxjs/chrome-extension-tools/tree/main/packages/vite-plugin/tests/e2e/mv3-vite-react-content-script) | 使用 Manifest V3 内容脚本注入 React 应用。 |
| [React 扩展页面](https://github.com/crxjs/chrome-extension-tools/tree/main/packages/vite-plugin/tests/e2e/mv3-vite-react-page) | 构建在 manifest 中声明的 React 扩展页面。 |
| [React 新标签页](https://github.com/crxjs/chrome-extension-tools/tree/main/packages/vite-plugin/tests/e2e/mv3-vite-react-new-tab) | 使用 React 应用替换浏览器的新标签页。 |
| [Vue 页面](https://github.com/crxjs/chrome-extension-tools/tree/main/packages/vite-plugin/tests/e2e/mv3-vite-vue-page) | 使用 Vue 构建扩展页面。 |
| [Vue 内容脚本](https://github.com/crxjs/chrome-extension-tools/tree/main/packages/vite-plugin/tests/e2e/mv3-vite-vue-content-script) | 通过内容脚本注入 Vue 应用。 |
| [Svelte 页面](https://github.com/crxjs/chrome-extension-tools/tree/main/packages/vite-plugin/tests/e2e/mv3-vite-svelte-page) | 使用 Svelte 构建扩展页面。 |
| [Svelte 内容脚本](https://github.com/crxjs/chrome-extension-tools/tree/main/packages/vite-plugin/tests/e2e/mv3-vite-svelte-content-script) | 通过内容脚本注入 Svelte 应用。 |
| [动态内容脚本](https://github.com/crxjs/chrome-extension-tools/tree/main/packages/vite-plugin/tests/e2e/mv3-vite-dynamic-content-script-hmr) | 注册动态内容脚本并对其进行热更新。 |
| [使用 ESM 的消息传递](https://github.com/crxjs/chrome-extension-tools/tree/main/packages/vite-plugin/tests/e2e/mv3-messages-esm) | 在 ESM 输出中使用扩展消息传递。 |
| [Web 可访问资源](https://github.com/crxjs/chrome-extension-tools/tree/main/packages/vite-plugin/tests/e2e/mv3-web-accessible-resources) | 让 CRXJS 为导入的公开资源生成 manifest 条目。 |

浏览
[完整的 e2e 测试项目目录](https://github.com/crxjs/chrome-extension-tools/tree/main/packages/vite-plugin/tests/e2e)，
可以查看更多针对特定场景的示例，包括 HMR、实时重载、沙箱页面、iframe 处理、CSS 注入以及 Manifest V3 边界情况。

## 贡献者演练场

演练场专为贡献者和插件开发者维护。在
`chrome-extension-tools` 仓库根目录中，运行对应的 `pnpm play:*` 脚本即可在本地启动项目。

| 演练场 | 命令 |
| --- | --- |
| [React](https://github.com/crxjs/chrome-extension-tools/tree/main/playgrounds/react) | `pnpm play:react` |
| [Solid](https://github.com/crxjs/chrome-extension-tools/tree/main/playgrounds/solid) | `pnpm play:solid` |
| [Svelte](https://github.com/crxjs/chrome-extension-tools/tree/main/playgrounds/svelte) | `pnpm play:svelte` |
| [Vanilla JS](https://github.com/crxjs/chrome-extension-tools/tree/main/playgrounds/vanilla) | `pnpm play:vanilla` |
| [Vue](https://github.com/crxjs/chrome-extension-tools/tree/main/playgrounds/vue) | `pnpm play:vue` |
