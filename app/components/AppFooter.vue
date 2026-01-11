<script setup lang="ts">
const { footer } = useAppConfig()
</script>

<template>
  <footer class="mt-10 border-t border-default">
    <UContainer class="py-10">
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p class="text-xs font-semibold uppercase tracking-widest text-muted">
            {{ footer.heading }}
          </p>
          <p
            v-if="footer.description"
            class="mt-3 text-sm text-muted"
          >
            {{ footer.description }}
          </p>
        </div>

        <div>
          <p class="text-xs font-semibold uppercase tracking-widest text-muted">
            Contact
          </p>
          <ul
            v-if="footer.contacts"
            class="mt-3 space-y-2 text-sm"
          >
            <li
              v-for="(item, index) of footer.contacts"
              :key="index"
              class="text-default"
            >
              <span class="text-muted">{{ item.label }}:</span>
              <template v-if="item.to">
                <ULink
                  :to="item.to"
                  class="ml-2 hover:underline"
                >
                  {{ item.value }}
                </ULink>
              </template>
              <span
                v-else
                class="ml-2"
              >
                {{ item.value }}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <p class="text-xs font-semibold uppercase tracking-widest text-muted">
            Links
          </p>
          <div class="mt-3 flex flex-wrap gap-2">
            <UButton
              v-for="(link, index) of footer.links"
              :key="index"
              v-bind="{ size: 'xs', color: 'neutral', variant: 'ghost', ...link }"
              class="gap-2"
            >
              <template v-if="link.icon">
                <UIcon :name="link.icon" class="size-4" />
              </template>
              <span class="text-xs">
                {{ link.label || link['aria-label'] }}
              </span>
            </UButton>
          </div>
        </div>
      </div>

      <div class="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-default pt-4 text-xs text-muted">
        <span>{{ footer.credits }}</span>
        <span v-if="footer.tagline">{{ footer.tagline }}</span>
      </div>
    </UContainer>
  </footer>
</template>
