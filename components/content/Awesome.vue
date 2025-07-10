<script setup lang="ts">
const md = ref('')
const loading = ref(true)
const MARKER = '<!-- document-render-end-flag -->'

if (import.meta.client) {
  try {
    const data = await $fetch<string>(
      `https://raw.githubusercontent.com/crxjs/awesome-crxjs/refs/heads/main/README.md`,
      { parseResponse: txt => txt },
    )
    if (data) {
      // Filter Markdown content to keep only specific parts
      const startIndex = data.indexOf(MARKER)

      if (startIndex !== -1) {
        // Keep all content from the marker to the end
        md.value = data.substring(startIndex)
      }
      else {
        md.value = data // If marker not found, show all content
      }
    }
  }
  catch {
    console.error(`Failed to load content`)
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="container">
    <div v-if="loading" class="flex justify-center items-center min-h-[200px]">
      <div class="animate-spin rounded-full h-8 w-8 border-4 border-primary border-t-transparent" />
    </div>
    <MDC v-else :value="md" class="first:-mb-5" />
  </div>
</template>
