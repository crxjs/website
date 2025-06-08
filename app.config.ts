export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'CRXJS',
      description: 'Modern Chrome extension development with built-in HMR and zero-config setup',
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
      nav: [],
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
        'manifest.config.js': 'vscode-icons:file-type-config',
        'manifest.config.ts': 'vscode-icons:file-type-config',
      },
    },
    footer: {
      credits: 'Copyright © 2025',
      links: [
        {
          icon: 'simple-icons:discord',
          to: 'https://discord.gg/xGaY4bV8',
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
      inAside: false,
    },
  },
})
