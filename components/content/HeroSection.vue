<script setup lang="ts">
defineProps<{
  announcement: {
    title: string
    icon: string
    to: string
    target: string
  }
}>()
const isDark = computed(() => useColorMode().value === 'dark')

const { locale } = useI18n()
function startPage() {
  const lang = locale.value === 'en' ? '' : `/${locale.value}`
  return `${lang}/guide/installation/create-crxjs`
}
</script>

<template>
  <section
    class="relative mx-auto flex min-h-[52rem] max-w-[800px] flex-col items-center justify-center gap-2 py-8 max-sm:min-h-[28rem] lg:py-24 lg:pb-20 md:py-12 md:pb-8"
  >
    <ParticlesBg
      class="fixed inset-0 z-[-3]"
      :quantity="250"
      :ease="100"
      :color="isDark ? '#FFF' : '#000'"
      :staticity="10"
      refresh
    />
    <span
      class="fixed top-0 z-[-1] h-screen w-full bg-white opacity-40 dark:bg-black dark:opacity-50"
    />
    <NuxtLink
      :to="announcement.to"
      :target="announcement.target"
      class="inline-flex items-center rounded-full bg-muted px-4 py-1.5 text-sm font-medium hover:cursor-pointer"
    >
      <SmartIcon
        :name="announcement.icon"
        :size="16"
      />
      <UiSeparator
        class="mx-2 h-4 dark:bg-gray-600"
        orientation="vertical"
      />
      <span class="underline-offset-4 hover:underline">{{ announcement.title }}</span>
      <Icon
        name="lucide:arrow-right"
        class="ml-1 size-4"
      />
    </NuxtLink>
    <h1
      class="transition-all duration-300 text-center text-3xl font-bold leading-tight tracking-tighter lg:leading-[1.1] md:text-6xl"
    >
      <SparklesText
        text="CRXJS"
        :colors="{ first: '#9E7AFF', second: '#FE8BBB' }"
        :sparkles-count="4"
        class="my-8"
      />
    </h1>

    <span class="mt-4 text-center text-lg text-gray-600 sm:text-xl dark:text-gray-200">
      {{ $t('description') }}
    </span>

    <div class="mt-4 flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
      <NuxtLink :to="startPage()">
        <RainbowButton> {{ $t('getStarted') }} </RainbowButton>
      </NuxtLink>
      <NuxtLink
        to="https://github.com/crxjs/chrome-extension-tools"
        target="_blank"
      >
        <UiButton variant="outline">
          <SmartIcon
            name="lucide:github"
            class="mr-1"
          />
          Github
        </UiButton>
      </NuxtLink>
    </div>
  </section>
</template>
