<template>
  <div>
    <section class="py-20 bg-gradient-to-b from-muted/50 to-background">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-foreground mb-6">
          {{ config.brand.name }}
        </h1>
        <p class="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
          {{ config.brand.tagline }}
        </p>
        <div class="flex gap-4 justify-center">
          <NuxtLink to="/products">
            <UiButton variant="primary" class="text-lg px-8 py-3">Browse Products</UiButton>
          </NuxtLink>
          <NuxtLink to="/about">
            <UiButton variant="outline" class="text-lg px-8 py-3">Learn More</UiButton>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="py-16 bg-background">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-foreground text-center mb-12">Why Choose Us</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <UiCard v-for="feature in features" :key="feature.title">
            <div class="text-4xl mb-4">{{ feature.icon }}</div>
            <h3 class="text-xl font-semibold text-foreground mb-2">{{ feature.title }}</h3>
            <p class="text-foreground/70">{{ feature.description }}</p>
          </UiCard>
        </div>
      </div>
    </section>

    <section class="py-16 bg-muted/30">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-foreground text-center mb-12">Featured Products</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <NuxtLink
            v-for="product in featuredProducts"
            :key="product.id"
            :to="`/products/${product.id}`"
          >
            <UiCard class="p-0 overflow-hidden">
              <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover" />
              <div class="p-4">
                <h3 class="font-semibold text-foreground mb-1">{{ product.name }}</h3>
                <p class="text-primary font-bold">${{ product.price.toFixed(2) }}</p>
              </div>
            </UiCard>
          </NuxtLink>
        </div>
        <div class="text-center mt-8">
          <NuxtLink to="/products">
            <UiButton variant="outline">View All Products</UiButton>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="py-20 bg-primary text-primary-foreground">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p class="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          Join thousands of satisfied customers who trust us for their needs.
        </p>
        <NuxtLink to="/contact">
          <UiButton variant="secondary" class="text-lg px-8 py-3">Contact Us</UiButton>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { siteConfig } from '~/config/site'
import productsData from '~/data/products.json'

const config = siteConfig

const features = [
  {
    icon: '🚀',
    title: 'Fast Delivery',
    description: 'Get your products delivered quickly with our express shipping options.'
  },
  {
    icon: '💎',
    title: 'Quality Products',
    description: 'We carefully select and curate only the best products for our customers.'
  },
  {
    icon: '🎧',
    title: '24/7 Support',
    description: 'Our dedicated support team is always available to help you with any questions.'
  }
]

const featuredProducts = productsData.slice(0, 4)
</script>
