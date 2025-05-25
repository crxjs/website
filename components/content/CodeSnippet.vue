<script setup lang="ts">
const { url, language, filename } = defineProps<{
  url: string
  language: string
  filename: string
}>()

const loadedCode = ref('')

if (import.meta.client) {
  try {
    const data = await $fetch<string>(
      `https://raw.githubusercontent.com/crxjs/create-crxjs/refs/heads/main${url}`,
      { parseResponse: txt => txt },
    )
    if (data) {
      loadedCode.value = data
    }
  }
  catch {
    console.error(`Cannot load code: ${url}`)
  }
}

const md = `
\`\`\`\`${language} ${filename && `[${filename}]`} height=400
${loadedCode.value}
\`\`\`\`
`
</script>

<template>
  <ClientOnly>
    <MDC
      v-if="loadedCode"
      :value="md"
      class="first:-mb-5"
    />
    <UiAlert
      v-else
      variant="destructive"
    >
      <UiAlertTitle>Error</UiAlertTitle>
      <UiAlertDescription>
        Cannot load code: <ProseCodeInline>{{ url }}</ProseCodeInline>
      </UiAlertDescription>
    </UiAlert>
  </ClientOnly>
</template>
