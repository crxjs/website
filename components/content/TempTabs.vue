<template>
  <Tabs>
    <div
      label="Vanilla"
      icon="vscode-icons:file-type-typescript-official"
    >
      <TempVanilla />
    </div>
    <div
      label="Vue"
      icon="vscode-icons:file-type-vue"
    >
      <TempVue />
    </div>
    <div
      label="React"
      icon="devicon:react"
    >
      <TempReact />
    </div>
    <div
      label="Solid"
      icon="devicon:solidjs"
    >
      <TempSolid />
    </div>
    <div
      label="Svelte"
      icon="devicon:svelte"
    >
      <TempSvelte />
    </div>
  </Tabs>
</template>
