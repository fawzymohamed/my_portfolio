<script setup lang="ts">
const route = useRoute()
const stem = route.params.stem as string

const { data: project } = await useAsyncData(`project-${stem}`, () => {
  return queryCollection('projects').where('stem', '=', `projects/${stem}`).first()
})

if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project not found',
    fatal: true
  })
}

useSeoMeta({
  title: project.value.title,
  ogTitle: project.value.title,
  description: project.value.description,
  ogDescription: project.value.description
})
</script>

<template>
  <div v-if="project">
    <UPageSection
      :ui="{
        container: 'mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14'
      }"
    >
      <!-- Project Header -->
      <Motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5 }"
      >
        <h1 class="text-4xl lg:text-5xl font-bold text-white mb-4">
          {{ project.title }}
        </h1>

        <div class="flex flex-wrap items-center gap-4 mb-8">
          <span class="px-3 py-1 text-xs font-mono font-medium rounded-full bg-slate-800 text-cyan-400 border border-slate-700">
            {{ new Date(project.date).getFullYear() }}
          </span>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="text-sm text-slate-500 font-mono"
            >
              #{{ tag }}
            </span>
          </div>
        </div>
      </Motion>

      <!-- Project Image -->
      <Motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6, delay: 0.1 }"
      >
        <div class="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 ring-1 ring-white/10 mb-10">
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-auto object-cover"
          >
        </div>
      </Motion>

      <!-- Description -->
      <Motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5, delay: 0.2 }"
      >
        <p class="text-lg text-slate-400 leading-relaxed mb-10">
          {{ project.description }}
        </p>
      </Motion>

      <!-- Action Buttons -->
      <Motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5, delay: 0.3 }"
      >
        <div class="flex flex-wrap gap-4">
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
        </div>
      </Motion>
    </UPageSection>
  </div>
</template>
