<script setup lang="ts">
const md = ref('')
const loading = ref(true)
const MARKER = '<!--document-render-start-flag-->'
const { t } = useI18n()

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
    <div class="max-w-3xl mx-auto">
      <div class="pb-6 border-b border-border">
        <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 transition-colors hover:text-primary">
          {{ t('Awesome-CRXJS') }}
        </h1>
        <p class="text-xl text-muted-foreground mb-4">
          {{ t('awesome-detail') }}
        </p>
        <a
          href="https://github.com/crxjs/awesome-crxjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InteractiveHoverButton :text="t('Contribute your CRXJS project')" />
        </a>
      </div>
      <div v-if="loading" class="flex justify-center items-center min-h-[200px]">
        <div class="animate-spin rounded-full h-8 w-8 border-4 border-primary border-t-transparent" />
      </div>
      <MDC :value="md" class="first:-mb-5 mt-8" />
    </div>
  </div>
</template>
