<script setup lang="ts">
</script>

<template>
  <CodeTree
    default-value="manifest.config.ts"
    title="crxjs-react"
  >
    <ImageDisplay
      url="/template-vanilla-ts/public/logo.png"
      alt-text="crx_logo"
      filename="public/logo.png"
    />
    <ImageDisplay
      url="/template-vanilla-ts/src/assets/crx.svg"
      alt-text="crx_logo"
      filename="src/assets/crx.svg"
    />
    <ImageDisplay
      url="/template-react-ts/src/assets/react.svg"
      alt-text="react_logo"
      filename="src/assets/react.svg"
    />
    <ImageDisplay
      url="/template-vanilla-ts/src/assets/vite.svg"
      alt-text="vite_logo"
      filename="src/assets/vite.svg"
    />

    <CodeSnippet
      url="/template-react-ts/src/components/HelloWorld.tsx"
      language="tsx"
      filename="src/components/HelloWorld.tsx"
    />

    <CodeSnippet
      url="/template-react-ts/src/content/views/App.css"
      language="css"
      filename="src/content/views/App.css"
    />
    <CodeSnippet
      url="/template-react-ts/src/content/views/App.tsx"
      language="tsx"
      filename="src/content/views/App.tsx"
    />
    <CodeSnippet
      url="/template-react-ts/src/content/main.tsx"
      language="tsx"
      filename="src/content/main.tsx"
    />

    <CodeSnippet
      url="/template-react-ts/src/popup/App.css"
      language="css"
      filename="src/popup/App.css"
    />
    <CodeSnippet
      url="/template-react-ts/src/popup/App.tsx"
      language="tsx"
      filename="src/popup/App.tsx"
    />
    <CodeSnippet
      url="/template-react-ts/src/popup/index.css"
      language="css"
      filename="src/popup/index.css"
    />
    <CodeSnippet
      url="/template-react-ts/src/popup/index.html"
      language="html"
      filename="src/popup/index.html"
    />
    <CodeSnippet
      url="/template-react-ts/src/popup/main.tsx"
      language="tsx"
      filename="src/popup/main.tsx"
    />

    <CodeSnippet
      url="/template-vanilla-ts/manifest.config.ts"
      language="ts"
      filename="manifest.config.ts"
    />
    <CodeSnippet
      url="/template-react-ts/package.json"
      language="json"
      filename="package.json"
    />
    <CodeSnippet
      url="/template-react-ts/tsconfig.json"
      language="json"
      filename="tsconfig.json"
    />
    <CodeSnippet
      url="/template-react-ts/vite.config.ts"
      language="ts"
      filename="vite.config.ts"
    />
  </CodeTree>
</template>
