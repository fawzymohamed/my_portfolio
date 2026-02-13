<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()

const { data: projects } = await useAsyncData('landing-projects', () =>
  queryCollection('projects').limit(3).order('date', 'DESC').all()
)
</script>

<template>
  <UPageSection
    v-if="page.projects"
    class="relative z-10"
    :title="page.projects.title"
    :description="page.projects.description"
    :ui="{
      container: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14',
      title: 'text-3xl font-bold tracking-tight text-white mb-4 lg:text-4xl text-glow',
      description: 'text-lg text-slate-400 mb-8 max-w-2xl mx-auto text-center'
    }"
  >
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
      <Motion
        v-for="(project, index) in projects"
        :key="project.url"
        :initial="{ opacity: 0, y: 50 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ delay: index * 0.1, duration: 0.5 }"
      >
        <div class="group relative h-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-colors duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col">
          <!-- Image Container -->
          <div class="relative h-48 w-full overflow-hidden border-b border-slate-800">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
            <img
              :src="project.image"
              :alt="project.title"
              class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            >

            <!-- Tech Badges -->
            <div class="absolute bottom-3 left-3 z-20 flex flex-wrap gap-2">
              <span
                v-for="tag in project.tags.slice(0, 3)"
                :key="tag"
                class="px-2 py-1 text-xs font-mono font-medium rounded bg-slate-900/80 border border-slate-700 text-cyan-400 backdrop-blur-md"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6 flex flex-1 flex-col">
            <h3 class="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              {{ project.title }}
            </h3>
            <p class="mt-2 text-sm text-slate-400 line-clamp-3">
              {{ project.description }}
            </p>

            <div class="mt-auto pt-6 flex items-center justify-between">
              <span class="text-xs text-slate-500 font-mono">
                {{ new Date(project.date).getFullYear() }}
              </span>
              <UButton
                :to="project.url"
                target="_blank"
                variant="ghost"
                color="primary"
                icon="i-heroicons-arrow-right"
                class="group-hover:translate-x-1 transition-transform"
              >
                View System
              </UButton>
            </div>
          </div>
        </div>
      </Motion>
    </div>

    <div
      v-if="page.projects.links?.length"
      class="mt-12 flex justify-center"
    >
      <UButton
        v-bind="page.projects.links[0]"
        size="lg"
        class="border border-slate-700 hover:border-cyan-500 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300"
      />
    </div>
  </UPageSection>
</template>
