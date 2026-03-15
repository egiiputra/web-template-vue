<template>
  <footer class="bg-muted border-t border-border">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-lg font-bold text-foreground mb-4">{{ config.brand.name }}</h3>
          <p class="text-foreground/70">{{ config.brand.tagline }}</p>
        </div>

        <div>
          <h4 class="font-semibold text-foreground mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li v-for="link in config.nav.links" :key="link.path">
              <NuxtLink :to="link.path" class="text-foreground/70 hover:text-primary transition-colors">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold text-foreground mb-4">Contact</h4>
          <ul class="space-y-2 text-foreground/70">
            <li>{{ config.contact.email }}</li>
            <li>{{ config.contact.phone }}</li>
            <li>{{ config.contact.address }}</li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold text-foreground mb-4">Follow Us</h4>
          <div class="flex gap-4">
            <a :href="config.contact.social.twitter" target="_blank" class="text-foreground/70 hover:text-primary transition-colors">
              Twitter
            </a>
            <a :href="config.contact.social.facebook" target="_blank" class="text-foreground/70 hover:text-primary transition-colors">
              Facebook
            </a>
            <a :href="config.contact.social.instagram" target="_blank" class="text-foreground/70 hover:text-primary transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-foreground/60 text-sm">{{ config.footer.copyright }}</p>
        <div class="flex gap-6">
          <NuxtLink
            v-for="link in config.footer.links"
            :key="link.path"
            :to="link.path"
            class="text-foreground/60 text-sm hover:text-primary transition-colors"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { siteConfig } from '~/config/site'

const config = siteConfig
</script>
