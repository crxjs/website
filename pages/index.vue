<template>
  <div class="flex flex-col items-center justify-center px-4 py-6 font-heading md:px-8 h-[calc(100vh-190px)]">
    <HeroSection :announcement />
  </div>
</template>

<script setup lang="ts">
// const config = useConfig()

// useSeoMeta({
//   title: `Uni Helper`,
//   ogTitle: `Uni Helper`,
//   description:
//     '旨在增强 uni-app 系列产品的开发体验',
//   ogDescription:
//     '旨在增强 uni-app 系列产品的开发体验',
//   ogImage: config.value.site.ogImage,
//   twitterCard: 'summary_large_image',
// })

const announcement = {
  title: 'Release create-crxjs',
  icon: 'i-mdi:package-variant-closed',
  to: 'https://github.com/crxjs/create-crxjs',
  target: '_blank',
}
</script>
