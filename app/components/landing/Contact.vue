<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    :title="page.contact.title"
    :ui="{
      container: 'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14',
      title: 'text-3xl font-bold tracking-tight text-white mb-8 text-center text-glow'
    }"
  >
    <template #description>
      <Motion
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8 }"
        viewport="{ once: true }"
        class="flex flex-col items-center"
      >
        <p class="text-xl text-slate-400 text-center max-w-2xl mb-12">
          {{ page.contact.description }}
        </p>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          <Motion
            v-for="(method, index) in page.contact.methods"
            :key="method.label"
            :initial="{ opacity: 0, scale: 0.9 }"
            :while-in-view="{ opacity: 1, scale: 1 }"
            :transition="{ delay: index * 0.1 }"
            while-hover="{ scale: 1.05 }"
            class="group"
          >
            <a
              :href="method.to"
              :target="method.target"
              class="flex flex-col items-center p-8 rounded-2xl bg-slate-900/50 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] group-hover:bg-slate-800/80"
            >
              <div class="p-4 rounded-full bg-slate-800 group-hover:bg-cyan-500/10 mb-6 transition-colors">
                <UIcon
                  :name="method.icon"
                  class="size-8 text-cyan-400"
                />
              </div>
              <h3 class="text-lg font-bold text-white mb-2">{{ method.label }}</h3>
              <p class="text-slate-400 text-sm font-mono">{{ method.value }}</p>
            </a>
          </Motion>
        </div>
      </Motion>
    </template>
  </UPageSection>
</template>
