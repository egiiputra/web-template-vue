<template>
  <div>
    <section class="py-16 bg-muted/30">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-foreground text-center mb-4">About Us</h1>
        <p class="text-xl text-foreground/70 text-center max-w-2xl mx-auto">
          We are dedicated to providing the best products and services to our customers.
        </p>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <p class="text-foreground/70 mb-4">
              Founded in 2020, {{ config.brand.name }} started with a simple mission: to make quality products accessible to everyone.
            </p>
            <p class="text-foreground/70 mb-4">
              Since then, we've grown to serve thousands of happy customers worldwide. We believe in quality, transparency, and putting our customers first.
            </p>
            <p class="text-foreground/70">
              Our team is passionate about what we do, and we're constantly working to improve and expand our offerings.
            </p>
          </div>
          <div class="bg-muted rounded-xl h-80 flex items-center justify-center">
            <span class="text-foreground/40 text-6xl">🏢</span>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-muted/30">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-foreground text-center mb-12">Our Mission</h2>
        <div class="max-w-3xl mx-auto text-center">
          <p class="text-xl text-foreground/70 mb-8">
            To deliver exceptional products that enhance our customers' lives while maintaining the highest standards of quality and service.
          </p>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-foreground text-center mb-12">Our Stats</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-4xl font-bold text-primary mb-2">{{ stat.value }}</div>
            <div class="text-foreground/70">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-muted/30">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-foreground text-center mb-12">Meet Our Team</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <UiCard v-for="member in team" :key="member.name" class="text-center">
            <div class="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
              <span class="text-3xl">{{ member.avatar }}</span>
            </div>
            <h3 class="font-semibold text-foreground">{{ member.name }}</h3>
            <p class="text-primary text-sm">{{ member.role }}</p>
          </UiCard>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { siteConfig } from '~/config/site'

const config = siteConfig

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '10K+', label: 'Happy Customers' },
  { value: '100+', label: 'Products' },
  { value: '24/7', label: 'Support' }
]

const team = [
  { name: 'John Doe', role: 'CEO', avatar: '👨‍💼' },
  { name: 'Jane Smith', role: 'CTO', avatar: '👩‍💻' },
  { name: 'Mike Johnson', role: 'Designer', avatar: '👨‍🎨' },
  { name: 'Sarah Williams', role: 'Marketing', avatar: '👩‍📢' }
]
</script>
