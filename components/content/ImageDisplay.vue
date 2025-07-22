<script setup lang="ts">
const { url, altText } = defineProps<{
  url: string
  altText?: string
  filename: string
}>()

const iconUrl = ref('')

try {
  iconUrl.value = `https://raw.githubusercontent.com/crxjs/create-crxjs/refs/heads/main/templates${url}`
}
catch {
  console.error(`Cannot load icon: ${url}`)
}
</script>

<template>
  <div class="flex h-[400px] justify-center items-center">
    <img
      v-if="iconUrl"
      :src="iconUrl"
      :alt="altText"
      class="max-w-[400px]"
    >
    <UiAlert
      v-else
      variant="destructive"
    >
      <UiAlertTitle>Error</UiAlertTitle>
      <UiAlertDescription>
        Cannot load icon: <ProseCodeInline>{{ url }}</ProseCodeInline>
      </UiAlertDescription>
    </UiAlert>
  </div>
</template>
