<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

defineProps<{
  links: NavigationMenuItem[]
}>()
</script>

<template>
  <div class="fixed top-2 sm:top-4 inset-x-0 flex justify-center z-10 pointer-events-none">
    <UNavigationMenu
      :items="links"
      variant="link"
      color="neutral"
      class="pointer-events-auto bg-slate-900/80 backdrop-blur-md rounded-full px-2 sm:px-4 border border-slate-800 shadow-xl shadow-cyan-500/5 ring-1 ring-white/10"
      :ui="{
        link: 'px-2 py-1',
        linkLeadingIcon: 'hidden'
      }"
    />
  </div>
</template>
