<template>
  <div :style="colorVars">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { siteConfig } from '~/config/site'

const colorVars = computed(() => ({
  '--color-primary': siteConfig.colors.primary,
  '--color-primary-foreground': siteConfig.colors.primaryForeground,
  '--color-secondary': siteConfig.colors.secondary,
  '--color-accent': siteConfig.colors.accent,
  '--color-background': siteConfig.colors.background,
  '--color-foreground': siteConfig.colors.foreground,
  '--color-muted': '#F1F5F9',
  '--color-border': '#E2E8F0',
}))
</script>
