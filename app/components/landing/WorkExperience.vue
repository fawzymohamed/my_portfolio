<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    :title="page.experience.title"
    :ui="{
      container: 'mx-auto max-w-4xl py-12',
      title: 'text-3xl font-bold tracking-tight text-white mb-8 text-glow'
    }"
  >
    <div class="relative space-y-8 pl-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-cyan-500 before:via-blue-500 before:to-transparent before:opacity-30">
      <Motion
        v-for="(experience, index) in page.experience.items"
        :key="index"
        :initial="{ opacity: 0, x: -20 }"
        :while-in-view="{ opacity: 1, x: 0 }"
        :transition="{ delay: index * 0.2 }"
        viewport="{ once: true }"
        class="relative"
      >
        <!-- Timeline Dot -->
        <div class="absolute -left-10 mt-1.5 h-4 w-4 rounded-full border-2 border-slate-900 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.6)] animate-pulse" />

        <div class="group relative rounded-lg border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div>
              <h3 class="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                {{ experience.position }}
              </h3>
              <a
                :href="experience.company.url"
                target="_blank"
                class="flex items-center gap-2 mt-1 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <UIcon
                  :name="experience.company.logo"
                  class="size-4"
                />
                <span class="font-medium tracking-wide">{{ experience.company.name }}</span>
              </a>
            </div>

            <span class="inline-flex items-center rounded-md bg-slate-800 px-3 py-1 text-xs font-medium text-cyan-400 ring-1 ring-inset ring-cyan-400/20 font-mono">
              {{ experience.date }}
            </span>
          </div>
        </div>
      </Motion>
    </div>
  </UPageSection>
</template>

<style scoped>

</style>
