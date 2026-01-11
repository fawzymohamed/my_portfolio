<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    v-if="page.projects"
    :title="page.projects.title"
    :description="page.projects.description"
    :ui="{
      container: '!p-0',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'text-left mt-3 text-sm sm:text-md lg:text-sm text-muted'
    }"
  >
    <div
      v-if="page.projects.links?.length"
      class="mt-4"
    >
      <UButton v-bind="page.projects.links[0]" />
    </div>
  </UPageSection>
</template>
