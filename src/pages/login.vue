<template>
  <div>
    <UiCard class="w-full max-w-md mx-4">
      <div class="text-center mb-8">
        <h1 class="text-2xl font-bold text-foreground">Welcome Back</h1>
        <p class="text-foreground/70">Sign in to your account</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="block text-foreground font-medium mb-2">Email</label>
          <UiInput v-model="form.email" type="email" placeholder="your@email.com" />
        </div>
        <div>
          <label class="block text-foreground font-medium mb-2">Password</label>
          <UiInput v-model="form.password" type="password" placeholder="••••••••" />
        </div>

        <div class="flex items-center justify-between">
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" v-model="form.remember" class="w-4 h-4 rounded border-border text-primary focus:ring-primary" />
            <span class="text-sm text-foreground/70">Remember me</span>
          </label>
          <a href="#" class="text-sm text-primary hover:underline">Forgot password?</a>
        </div>

        <UiButton type="submit" variant="primary" class="w-full">Sign In</UiButton>
      </form>

      <div class="mt-6 text-center">
        <p class="text-foreground/70">
          Don't have an account?
          <a href="#" class="text-primary hover:underline">Sign up</a>
        </p>
      </div>
    </UiCard>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})

const form = reactive({
  email: '',
  password: '',
  remember: false
})

const handleLogin = () => {
  alert('Login functionality is for UI demonstration only.')
}
</script>
