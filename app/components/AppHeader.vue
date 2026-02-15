<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

defineProps<{
  links: NavigationMenuItem[]
}>()

const route = useRoute()
const isProjectDetail = computed(() => !!route.params.stem)
</script>

<template>
  <div class="fixed top-2 sm:top-4 inset-x-0 z-10 pointer-events-none">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center">
    <NuxtLink
      v-if="isProjectDetail"
      to="/projects"
      class="pointer-events-auto flex items-center gap-1.5 text-sm text-slate-400 hover:text-cyan-400 transition-colors bg-slate-900/80 backdrop-blur-md rounded-full px-3 py-2.5 border border-slate-800 ring-1 ring-white/10 cursor-pointer"
    >
      <UIcon name="i-lucide-arrow-left" class="size-4" />
      <span class="hidden sm:inline">Projects</span>
    </NuxtLink>
    <div class="flex-1 flex justify-center">
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
    <div v-if="isProjectDetail" class="w-[88px] hidden sm:block" />
  </div>
  </div>
</template>
