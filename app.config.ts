export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'CRXJS',
      description: 'Build cross-browser extensions with native HMR and zero-config setup',
      umami: {
        enable: true,
        src: 'https://crxjs.dev/',
        dataWebsiteId: '53be2965-3ce3-41a8-ad89-eb8d22892b00',
      },
    },
    theme: {
      customizable: true,
      color: 'zinc',
      radius: 0.5,
    },
    header: {
      title: 'CRXJS',
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg',
      },
      nav: [{
        title: 'Docs',
        links: [{
          title: 'Getting Started',
          to: '/guide/installation/create-crxjs',
          description: 'Create a CRXJS project',
          icon: 'lucide:rocket',
        }, {
          title: 'Concepts',
          to: '/concepts/manifest',
          description: 'Concepts and features',
          icon: 'lucide:book-open',
        }],
      }, {
        title: 'Awesome-CRXJS',
        to: '/awesome',
        target: '_self',
        showLinkIcon: false,
      }, {
        title: 'rollup-plugin',
        to: 'https://www.extend-chrome.dev/rollup-plugin',
        target: '_blank',
      }],
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/crxjs/chrome-extension-tools',
        target: '_blank',
      }],
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
      codeCopyToast: true,
      imageZoom: false,
      codeCopyIcon: 'lucide:clipboard',
      editLink: {
        enable: true,
        pattern: 'https://github.com/crxjs/website/edit/main/content/:path',
        text: 'Edit this page',
        icon: 'lucide:square-pen',
        placement: ['docsFooter'],
      },
      codeIcon: {
        'vite.config.ts': 'vscode-icons:file-type-vite',
        'vite.config.js': 'vscode-icons:file-type-vite',
        'html': 'vscode-icons:file-type-html',
        'svg': 'vscode-icons:file-type-svg',
        'png': 'vscode-icons:file-type-image',
        'svelte': 'vscode-icons:file-type-svelte',
        'manifest.config.js': 'vscode-icons:file-type-manifest',
        'manifest.config.ts': 'vscode-icons:file-type-manifest',
      },
    },
    footer: {
      credits: 'This site is powered by [**Netlify**](https://www.netlify.com)',
      links: [
        {
          icon: 'simple-icons:discord',
          to: 'https://discord.com/invite/FnnE4XR7Wj',
          target: '_blank',
        },
        {
          icon: 'lucide:github',
          to: 'https://github.com/crxjs/chrome-extension-tools',
          target: '_blank',
        },
      ],
    },
    toc: {
      enable: true,
      title: 'On This Page',
      links: [{
        title: 'Star on GitHub',
        icon: 'lucide:star',
        to: 'https://github.com/crxjs/chrome-extension-tools',
        target: '_blank',
      }, {
        title: 'Create Issues',
        icon: 'lucide:circle-dot',
        to: 'https://github.com/crxjs/chrome-extension-tools/issues',
        target: '_blank',
      }],
    },
    search: {
      enable: true,
      inAside: true,
    },
  },
})
