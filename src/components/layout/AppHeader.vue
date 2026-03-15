<template>
  <header class="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <NuxtLink :to="config.brand.logo ? '/' : '/'" class="flex items-center gap-3">
          <img v-if="config.brand.logo" :src="config.brand.logo" :alt="config.brand.name" class="h-8" />
          <span class="text-xl font-bold text-foreground">{{ config.brand.name }}</span>
        </NuxtLink>

        <nav class="hidden md:flex items-center gap-8">
          <NuxtLink
            v-for="link in config.nav.links"
            :key="link.path"
            :to="link.path"
            class="text-foreground/80 hover:text-primary transition-colors font-medium"
            active-class="text-primary"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <div class="flex items-center gap-4">
          <NuxtLink to="/login">
            <UiButton variant="primary">Sign In</UiButton>
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { siteConfig } from '~/config/site'

const config = siteConfig
</script>
