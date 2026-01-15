<script setup lang="ts">
const themeColor = '#020617' // Slate-950/Midnight Blue

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: themeColor }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en',
    class: 'dark' // Force Dark Mode
  }
})

useSeoMeta({
  titleTemplate: '%s - Fawzy Mohamed Fawzy',
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/portfolio-light.png', // Update later
  twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/portfolio-light.png', // Update later
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <UMain class="relative">
        <NuxtPage />
      </UMain>
    </NuxtLayout>
  </UApp>
</template>
