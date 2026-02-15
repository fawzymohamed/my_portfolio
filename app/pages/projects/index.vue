<script setup lang="ts">
const { data: page } = await useAsyncData('projects-page', () => {
  return queryCollection('pages').path('/projects').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const { data: projects } = await useAsyncData('projects', () => {
  return queryCollection('projects').all()
})

// const { global } = useAppConfig()

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description
})
</script>

<template>
  <div v-if="page">
    <UPageHero
      :title="page.title"
      :description="page.description"
      :links="page.links"
      :ui="{
        container: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 max-h-[500px]',
        title: '!mx-0 text-left',
        description: '!mx-0 text-left mt-12',
        links: 'justify-start'
      }"
    />

    <div class="h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent mb-12 md:mb-20" />

    <UPageSection
      :ui="{
        container: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-12'
      }"
    >
      <div
        v-for="(project, index) in projects"
        :key="project.title"
        class="mb-36 last:mb-0"
      >
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Image Column -->
          <Motion
            class="relative group"
            :class="{ 'lg:order-last': index % 2 === 1 }"
            :initial="{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }"
            :while-in-view="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.8 }"
            viewport="{ once: true }"
          >
            <div class="absolute -inset-1 bg-linear-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
            <div class="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 ring-1 ring-white/10">
              <div class="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              >
            </div>
          </Motion>

          <!-- Content Column -->
          <Motion
            class="flex flex-col justify-center space-y-6"
            :initial="{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }"
            :while-in-view="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.8, delay: 0.2 }"
            viewport="{ once: true }"
          >
            <div
              class="flex items-center gap-3"
              :class="{ 'flex-row-reverse': index % 2 === 1 }"
            >
              <span class="px-3 py-1 text-xs font-mono font-medium rounded-full bg-slate-800 text-cyan-400 border border-slate-700">
                {{ new Date(project.date).getFullYear() }}
              </span>
              <div class="h-px bg-slate-800 flex-1" />
            </div>

            <h3 class="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              {{ project.title }}
            </h3>

            <p class="text-lg text-slate-400 leading-relaxed">
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="text-sm text-slate-500 font-mono"
              >
                #{{ tag }}
              </span>
            </div>

            <div class="pt-4 flex flex-wrap gap-3">
              <UButton
                v-if="project.repoUrl"
                :to="project.repoUrl"
                target="_blank"
                variant="outline"
                color="primary"
                size="lg"
                icon="i-simple-icons-github"
                class="cursor-pointer hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View Repo
              </UButton>
              <UButton
                v-if="project.liveUrl"
                :to="project.liveUrl"
                target="_blank"
                variant="outline"
                color="primary"
                size="lg"
                icon="i-lucide-external-link"
                class="cursor-pointer hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View Live
              </UButton>
              <UButton
                :to="`/projects/${project.stem.replace('projects/', '')}`"
                variant="outline"
                color="primary"
                size="lg"
                icon="i-lucide-arrow-right"
                class="cursor-pointer hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                More Details
              </UButton>
            </div>
          </Motion>
        </div>
      </div>
    </UPageSection>
  </div>
</template>
