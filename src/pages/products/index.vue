<template>
  <div>
    <section class="py-16 bg-muted/30">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-foreground text-center mb-4">Our Products</h1>
        <p class="text-xl text-foreground/70 text-center max-w-2xl mx-auto">
          Browse our collection of quality products
        </p>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap gap-4 mb-8">
          <UiButton
            v-for="cat in categories"
            :key="cat"
            :variant="selectedCategory === cat ? 'primary' : 'outline'"
            @click="selectedCategory = cat"
          >
            {{ cat }}
          </UiButton>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <NuxtLink
            v-for="product in filteredProducts"
            :key="product.id"
            :to="`/products/${product.id}`"
          >
            <UiCard class="p-0 overflow-hidden h-full">
              <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover" />
              <div class="p-4">
                <UiBadge variant="secondary" class="mb-2">{{ product.category }}</UiBadge>
                <h3 class="font-semibold text-foreground mb-1">{{ product.name }}</h3>
                <p class="text-primary font-bold text-lg">${{ product.price.toFixed(2) }}</p>
              </div>
            </UiCard>
          </NuxtLink>
        </div>

        <div v-if="filteredProducts.length === 0" class="text-center py-12">
          <p class="text-foreground/70">No products found in this category.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import productsData from '~/data/products.json'

const products = productsData as any[]

const categories = ['All', ...new Set(products.map(p => p.category))]
const selectedCategory = ref('All')

const filteredProducts = computed(() => {
  if (selectedCategory.value === 'All') return products
  return products.filter(p => p.category === selectedCategory.value)
})
</script>
