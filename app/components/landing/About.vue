<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    :ui="{
      container: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12'
    }"
  >
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <!-- Text Content -->
      <Motion
        :initial="{ opacity: 0, x: -50 }"
        :while-in-view="{ opacity: 1, x: 0 }"
        :transition="{ duration: 0.8 }"
        viewport="{ once: true }"
      >
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6 text-glow">
          {{ page.about.title }}
        </h2>
        <div class="prose prose-invert prose-lg text-slate-400">
          <p class="whitespace-pre-line leading-relaxed">
            {{ page.about.description }}
          </p>
        </div>
      </Motion>

      <!-- Terminal Visual -->
      <Motion
        :initial="{ opacity: 0, x: 50 }"
        :while-in-view="{ opacity: 1, x: 0 }"
        :transition="{ duration: 0.8, delay: 0.2 }"
        viewport="{ once: true }"
        class="relative"
      >
        <div class="rounded-lg bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden font-mono text-sm">
          <!-- Terminal Header -->
          <div class="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
            <div class="flex gap-1.5">
              <div class="size-3 rounded-full bg-red-500/80" />
              <div class="size-3 rounded-full bg-yellow-500/80" />
              <div class="size-3 rounded-full bg-green-500/80" />
            </div>
            <div class="text-xs text-slate-400 ml-2">
              fawzy@security-hub:~/profile
            </div>
          </div>

          <!-- Terminal Body -->
          <div class="p-6 space-y-4">
            <div class="flex gap-2 text-green-400">
              <span class="text-blue-400">➜</span>
              <span>whoami</span>
            </div>
            <div class="text-slate-300">
              {<br>
              &nbsp;&nbsp;"role": "Senior Full Stack Dev",<br>
              &nbsp;&nbsp;"security_clearance": "Level 5",<br>
              &nbsp;&nbsp;"mission": "Zero-Cost Ops",<br>
              &nbsp;&nbsp;"status": "Online"<br>
              }
            </div>

            <div class="flex gap-2 text-green-400 pt-2">
              <span class="text-blue-400">➜</span>
              <span class="animate-pulse">_</span>
            </div>
          </div>
        </div>

        <!-- Decoration -->
        <div class="absolute -z-10 top-10 -right-10 size-40 bg-cyan-500/20 blur-3xl rounded-full" />
      </Motion>
    </div>
  </UPageSection>
</template>

<style scoped>

</style>
