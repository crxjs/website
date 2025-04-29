<template>
  <code
    @click="handleClick"
    class="inline-code relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono cursor-pointer hover:underline"
  >
    {{ text }}
  </code>
</template>

<script setup lang="ts">
import { useToast } from 'shadcn-docs-nuxt/components/ui/toast/use-toast';

const {text} = defineProps<{
  text: string
}>()

const { copy } = useClipboard({
  source: text,
  legacy: true,
})

const { toast } = useToast();

async function handleClick() {
  await copy(text)
  toast({
    description: `Copied "${text}" to clipboard`,
  });
}
</script>
