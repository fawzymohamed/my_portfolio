<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    :title="page.skills.title"
    :description="page.skills.description"
    :ui="{
      container: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20',
      title: 'text-3xl font-bold tracking-tight text-white mb-4 text-glow',
      description: 'text-lg text-slate-400 mb-12 max-w-2xl mx-auto text-center'
    }"
  >
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <Motion
        v-for="(group, index) in page.skills.groups"
        :key="group.title"
        :initial="{ opacity: 0, scale: 0.9 }"
        :while-in-view="{ opacity: 1, scale: 1 }"
        :transition="{ delay: index * 0.1 }"
        viewport="{ once: true }"
        class="group relative"
      >
        <div class="h-full bg-slate-900 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden">
          <!-- Cyber Decoration -->
          <div class="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
            <UIcon
              name="i-heroicons-cpu-chip"
              class="size-12 text-cyan-500"
            />
          </div>

          <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            {{ group.title }}
          </h3>

          <ul class="space-y-3">
            <li
              v-for="item in group.items"
              :key="item"
              class="flex items-center gap-2 text-sm text-slate-400 group-hover:text-slate-200 transition-colors"
            >
              <UIcon
                name="i-heroicons-check-circle-20-solid"
                class="size-4 text-green-500/50 group-hover:text-green-500 transition-colors"
              />
              <span class="font-mono">{{ item }}</span>
            </li>
          </ul>

          <!-- Corner Accents -->
          <div class="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-500/30 rounded-br-lg" />
          <div class="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-lg" />
        </div>
      </Motion>
    </div>
  </UPageSection>
</template>
