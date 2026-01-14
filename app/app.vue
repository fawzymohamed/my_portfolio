<script setup lang="ts">
const themeColor = '#020618'

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
    class: 'dark'
  }
})

useSeoMeta({
  titleTemplate: '%s - Nuxt Portfolio Template',
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/portfolio-light.png',
  twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/portfolio-light.png',
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
