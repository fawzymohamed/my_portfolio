<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

const { footer, global } = useAppConfig()

defineProps<{
  page: IndexCollectionItem
}>()

const roles = ['Full Stack Web Developer', 'Vue.js & Nuxt.js Specialist', 'Enterprise Web Apps Engineer', 'Automation Engineer']
const currentRole = ref('')
const isDeleting = ref(false)
const loopNum = ref(0)
// unused typingSpeed removed

const handleType = () => {
  const i = loopNum.value % roles.length
  const fullText = roles[i] || ''

  if (isDeleting.value) {
    currentRole.value = fullText.substring(0, currentRole.value.length - 1)
  } else {
    currentRole.value = fullText.substring(0, currentRole.value.length + 1)
  }

  let typeSpeed = 100

  if (isDeleting.value) {
    typeSpeed /= 2
  }

  if (!isDeleting.value && currentRole.value === fullText) {
    isDeleting.value = false // Wait before deleting
    typeSpeed = 2000
    isDeleting.value = true
  } else if (isDeleting.value && currentRole.value === '') {
    isDeleting.value = false
    loopNum.value++
    typeSpeed = 500
  }

  setTimeout(handleType, typeSpeed)
}

onMounted(() => {
  handleType()
})
</script>

<template>
  <div class="relative isolate overflow-hidden">
    <!-- Cyber Grid Background -->
    <div class="absolute inset-0 bg-grid-pattern opacity-20 mask-image-gradient -z-10" />
    <!-- Gradient Blobs -->
    <div class="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -z-10 animate-pulse" />
    <div
      class="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse"
      style="animation-duration: 4s;"
    />

    <UPageHero
      :ui="{
        headline: 'flex items-center justify-center',
        title: 'text-shadow-md max-w-4xl mx-auto',
        links: 'mt-8 flex-col justify-center items-center'
      }"
    >
      <template #headline>
        <Motion
          :initial="{ scale: 0.5, opacity: 0 }"
          :animate="{ scale: 1, opacity: 1 }"
          :transition="{ duration: 0.5 }"
        >
          <div class="relative">
            <NuxtImg
              class="size-24 sm:size-32 rounded-full ring-2 ring-cyan-500 ring-offset-4 ring-offset-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.5)] object-cover mt-4 md:mt-8"
              :src="global.picture?.src!"
              :alt="global.picture?.alt!"
              width="256"
              height="256"
            />
            <div class="absolute bottom-0 right-0 size-6 bg-green-500 border-4 border-slate-950 rounded-full animate-pulse" />
          </div>
        </Motion>
      </template>

      <template #title>
        <Motion
          :initial="{ y: 20, opacity: 0 }"
          :animate="{ y: 0, opacity: 1 }"
          :transition="{ duration: 0.5, delay: 0.2 }"
        >
          <span class="block text-slate-100 mb-2">{{ page.title }}</span>
          <span class="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 h-[1.2em]">
            {{ currentRole }}<span class="animate-blink text-slate-500">|</span>
          </span>
        </Motion>
      </template>

      <template #description>
        <Motion
          :initial="{ y: 20, opacity: 0 }"
          :animate="{ y: 0, opacity: 1 }"
          :transition="{ duration: 0.5, delay: 0.4 }"
        >
          <p class="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {{ page.description }}
          </p>
        </Motion>
      </template>

      <template #links>
        <div class="flex flex-wrap items-center justify-center gap-4 mt-6">
          <Motion
            v-for="(link, index) of footer?.socials"
            :key="index"
            :initial="{ scale: 0, opacity: 0 }"
            :animate="{ scale: 1, opacity: 1 }"
            :transition="{ delay: 0.4 + index * 0.1 }"
          >
            <UTooltip
              :text="link['aria-label']"
              :popper="{ placement: 'top' }"
            >
              <UButton
                v-bind="{ size: 'lg', color: 'neutral', variant: 'soft', ...link }"
                class="rounded-full px-4 py-2 hover:text-cyan-400 hover:scale-105 transition-all duration-300 border border-slate-800 hover:border-cyan-500/50"
              />
            </UTooltip>
          </Motion>
        </div>
      </template>
    </UPageHero>
  </div>
</template>

<style scoped>
.animate-blink {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.mask-image-gradient {
  mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
}
</style>
