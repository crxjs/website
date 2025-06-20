<script setup lang="ts">
import { useToast } from 'shadcn-docs-nuxt/components/ui/toast/use-toast'

const { text } = defineProps<{
  text: string
}>()

const { copy } = useClipboard({
  source: text,
  legacy: true,
})

const { toast } = useToast()

const { t } = useI18n()

async function handleClick() {
  await copy(text)
  toast({
    description: t('copiedToClipboard', { text }),
  })
}
</script>

<template>
  <code
    class="inline-code relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono cursor-pointer hover:underline"
    @click="handleClick"
  >
    {{ text }}
  </code>
</template>
