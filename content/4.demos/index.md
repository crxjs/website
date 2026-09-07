---
title: Demos
description: Browse CRXJS demo fixtures and contributor playgrounds for real browser extension examples.
icon: 'lucide:monitor-play'
---

The CRXJS examples live in the
[chrome-extension-tools](https://github.com/crxjs/chrome-extension-tools)
repository. There are two useful collections:

- [Demo fixtures](https://github.com/crxjs/chrome-extension-tools/tree/main/packages/vite-plugin/tests/e2e)
  cover tested extension patterns, framework integrations, HMR behavior, content
  scripts, extension pages, messaging, and web accessible resources.
- [Contributor playgrounds](https://github.com/crxjs/chrome-extension-tools/tree/main/playgrounds)
  are runnable projects for people working on CRXJS itself. They are useful when
  you want to try framework-specific changes against a real extension project.

## Demo Fixtures

Start with these fixtures when you want to inspect a working implementation:

| Demo | What it shows |
| --- | --- |
| [React content script](https://github.com/crxjs/chrome-extension-tools/tree/main/packages/vite-plugin/tests/e2e/mv3-vite-react-content-script) | Inject a React app with a Manifest V3 content script. |
| [React extension page](https://github.com/crxjs/chrome-extension-tools/tree/main/packages/vite-plugin/tests/e2e/mv3-vite-react-page) | Build a React-powered extension page declared from the manifest. |
| [React new tab](https://github.com/crxjs/chrome-extension-tools/tree/main/packages/vite-plugin/tests/e2e/mv3-vite-react-new-tab) | Replace the browser new tab page with a React app. |
| [Vue page](https://github.com/crxjs/chrome-extension-tools/tree/main/packages/vite-plugin/tests/e2e/mv3-vite-vue-page) | Build an extension page with Vue. |
| [Vue content script](https://github.com/crxjs/chrome-extension-tools/tree/main/packages/vite-plugin/tests/e2e/mv3-vite-vue-content-script) | Inject a Vue app from a content script. |
| [Svelte page](https://github.com/crxjs/chrome-extension-tools/tree/main/packages/vite-plugin/tests/e2e/mv3-vite-svelte-page) | Build an extension page with Svelte. |
| [Svelte content script](https://github.com/crxjs/chrome-extension-tools/tree/main/packages/vite-plugin/tests/e2e/mv3-vite-svelte-content-script) | Inject a Svelte app from a content script. |
| [Dynamic content script](https://github.com/crxjs/chrome-extension-tools/tree/main/packages/vite-plugin/tests/e2e/mv3-vite-dynamic-content-script-hmr) | Register and hot-update dynamic content scripts. |
| [Messaging with ESM](https://github.com/crxjs/chrome-extension-tools/tree/main/packages/vite-plugin/tests/e2e/mv3-messages-esm) | Use extension messaging with ESM output. |
| [Web accessible resources](https://github.com/crxjs/chrome-extension-tools/tree/main/packages/vite-plugin/tests/e2e/mv3-web-accessible-resources) | Let CRXJS generate manifest entries for imported public assets. |

Browse the
[full e2e fixture directory](https://github.com/crxjs/chrome-extension-tools/tree/main/packages/vite-plugin/tests/e2e)
for more focused scenarios, including HMR, live reload, sandbox pages, iframe
handling, CSS injection, and Manifest V3 edge cases.

## Contributor Playgrounds

Playgrounds are maintained for contributors and plugin development. From the
`chrome-extension-tools` repo root, use the matching `pnpm play:*` script to run
one locally.

| Playground | Command |
| --- | --- |
| [React](https://github.com/crxjs/chrome-extension-tools/tree/main/playgrounds/react) | `pnpm play:react` |
| [Solid](https://github.com/crxjs/chrome-extension-tools/tree/main/playgrounds/solid) | `pnpm play:solid` |
| [Svelte](https://github.com/crxjs/chrome-extension-tools/tree/main/playgrounds/svelte) | `pnpm play:svelte` |
| [Vanilla JS](https://github.com/crxjs/chrome-extension-tools/tree/main/playgrounds/vanilla) | `pnpm play:vanilla` |
| [Vue](https://github.com/crxjs/chrome-extension-tools/tree/main/playgrounds/vue) | `pnpm play:vue` |
