<script setup lang="ts">
defineProps<{
  image: {
    src: string
    alt: string
  }
  index: number
}>()
</script>

<template>
  <div
    class="glass-card p-2 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-0 hover:z-10 border border-slate-700 bg-slate-900"
    :class="[
      index % 2 === 0 ? '-rotate-3' : 'rotate-3'
    ]"
  >
    <img
      :src="image.src"
      :alt="image.alt"
      class="size-32 object-cover rounded-sm border border-slate-700/50"
    >
    <span class="w-32 text-xs text-slate-300 font-mono text-center mt-2 group-hover:text-cyan-400 transition-colors">
      {{ image.alt }}
    </span>
  </div>
</template>
