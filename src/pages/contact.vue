<template>
  <div>
    <section class="py-16 bg-muted/30">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-foreground text-center mb-4">Contact Us</h1>
        <p class="text-xl text-foreground/70 text-center max-w-2xl mx-auto">
          Have questions? We'd love to hear from you.
        </p>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 class="text-2xl font-bold text-foreground mb-6">Send us a message</h2>
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div>
                <label class="block text-foreground font-medium mb-2">Name</label>
                <UiInput v-model="form.name" placeholder="Your name" />
              </div>
              <div>
                <label class="block text-foreground font-medium mb-2">Email</label>
                <UiInput v-model="form.email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <label class="block text-foreground font-medium mb-2">Message</label>
                <textarea
                  v-model="form.message"
                  placeholder="How can we help?"
                  rows="5"
                  class="w-full px-4 py-2 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
                ></textarea>
              </div>
              <UiButton type="submit" variant="primary" class="w-full">Send Message</UiButton>
            </form>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
            <div class="space-y-6">
              <UiCard>
                <div class="flex items-start gap-4">
                  <span class="text-2xl">📍</span>
                  <div>
                    <h3 class="font-semibold text-foreground">Address</h3>
                    <p class="text-foreground/70">{{ config.contact.address }}</p>
                  </div>
                </div>
              </UiCard>
              <UiCard>
                <div class="flex items-start gap-4">
                  <span class="text-2xl">📧</span>
                  <div>
                    <h3 class="font-semibold text-foreground">Email</h3>
                    <p class="text-foreground/70">{{ config.contact.email }}</p>
                  </div>
                </div>
              </UiCard>
              <UiCard>
                <div class="flex items-start gap-4">
                  <span class="text-2xl">📞</span>
                  <div>
                    <h3 class="font-semibold text-foreground">Phone</h3>
                    <p class="text-foreground/70">{{ config.contact.phone }}</p>
                  </div>
                </div>
              </UiCard>
            </div>

            <div class="mt-8">
              <h3 class="font-semibold text-foreground mb-4">Follow Us</h3>
              <div class="flex gap-4">
                <a
                  :href="config.contact.social.twitter"
                  target="_blank"
                  class="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  𝕏
                </a>
                <a
                  :href="config.contact.social.facebook"
                  target="_blank"
                  class="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  f
                </a>
                <a
                  :href="config.contact.social.instagram"
                  target="_blank"
                  class="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  📷
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { siteConfig } from '~/config/site'

const config = siteConfig

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  alert(`Thank you, ${form.name}! Your message has been sent.`)
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>
