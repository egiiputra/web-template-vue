<template>
  <div v-if="product">
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full rounded-xl shadow-lg"
            />
          </div>

          <div>
            <UiBadge variant="secondary" class="mb-4">{{ product.category }}</UiBadge>
            <h1 class="text-3xl font-bold text-foreground mb-4">{{ product.name }}</h1>
            <p class="text-4xl font-bold text-primary mb-6">${{ product.price.toFixed(2) }}</p>
            <p class="text-foreground/70 mb-8">{{ product.description }}</p>

            <div class="flex gap-4">
              <UiButton variant="primary" class="flex-1">Add to Cart</UiButton>
              <UiButton variant="outline">♡</UiButton>
            </div>

            <div class="mt-8 pt-8 border-t border-border">
              <h3 class="font-semibold text-foreground mb-4">Product Details</h3>
              <ul class="space-y-2 text-foreground/70">
                <li>• Category: {{ product.category }}</li>
                <li>• Product ID: #{{ product.id }}</li>
                <li>• In stock and ready to ship</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-muted/30">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold text-foreground mb-8">Related Products</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <NuxtLink
            v-for="related in relatedProducts"
            :key="related.id"
            :to="`/products/${related.id}`"
          >
            <UiCard class="p-0 overflow-hidden">
              <img :src="related.image" :alt="related.name" class="w-full h-40 object-cover" />
              <div class="p-4">
                <h4 class="font-semibold text-foreground mb-1">{{ related.name }}</h4>
                <p class="text-primary font-bold">${{ related.price.toFixed(2) }}</p>
              </div>
            </UiCard>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
  <div v-else class="py-16 text-center">
    <p class="text-foreground/70">Product not found.</p>
    <NuxtLink to="/products">
      <UiButton variant="primary" class="mt-4">Back to Products</UiButton>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import productsData from '~/data/products.json'

const route = useRoute()
const products = productsData as any[]
const product = computed(() => products.find(p => p.id === Number(route.params.id)))

const relatedProducts = computed(() => {
  if (!product.value) return []
  return products
    .filter(p => p.category === product.value.category && p.id !== product.value.id)
    .slice(0, 4)
})
</script>
