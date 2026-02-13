<script setup lang="ts">
import { navLinks } from '~/utils/links'

const { footer } = useAppConfig()
</script>

<template>
  <footer class="relative mt-16">
    <!-- Gradient top border -->
    <div class="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <!-- Main grid -->
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <!-- Brand column -->
        <div class="sm:col-span-2 lg:col-span-1">
          <h3 class="text-lg font-bold text-white text-glow">
            {{ footer.heading }}
          </h3>
          <p
            v-if="footer.description"
            class="mt-3 text-sm text-slate-400 leading-relaxed"
          >
            {{ footer.description }}
          </p>
        </div>

        <!-- Navigation column -->
        <div>
          <h4 class="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
            Navigation
          </h4>
          <ul class="space-y-3">
            <li
              v-for="link of navLinks"
              :key="link.to as string"
            >
              <NuxtLink
                :to="link.to"
                class="group flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <UIcon
                  v-if="link.icon"
                  :name="link.icon"
                  class="size-4 text-slate-600 group-hover:text-cyan-400 transition-colors duration-200"
                />
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact column -->
        <div>
          <h4 class="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
            Contact
          </h4>
          <ul
            v-if="footer.contacts"
            class="space-y-3"
          >
            <li
              v-for="(item, index) of footer.contacts"
              :key="index"
            >
              <component
                :is="item.to ? 'a' : 'span'"
                :href="item.to"
                class="group flex items-center gap-3 text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <UIcon
                  v-if="item.icon"
                  :name="item.icon"
                  class="size-4 text-slate-600 group-hover:text-cyan-400 transition-colors duration-200"
                />
                <span>{{ item.value }}</span>
              </component>
            </li>
          </ul>
        </div>

        <!-- Connect column -->
        <div>
          <h4 class="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
            Connect
          </h4>
          <ul class="space-y-3">
            <li
              v-for="(social, index) of footer.socials"
              :key="index"
            >
              <a
                :href="social.to"
                :target="social.target"
                class="group flex items-center gap-3 text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <UIcon
                  :name="social.icon"
                  class="size-4 text-slate-600 group-hover:text-cyan-400 transition-colors duration-200"
                />
                {{ social.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="mt-10 pt-6 border-t border-slate-800/50">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>{{ footer.credits }}</span>
          <span
            v-if="footer.tagline"
            class="font-mono tracking-wider text-slate-600"
          >
            {{ footer.tagline }}
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>
