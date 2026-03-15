<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    :class="[
      'w-full px-4 py-2 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors',
      { 'border-red-500 focus:ring-red-500': error }
    ]"
  />
</template>

<script setup lang="ts">
interface Props {
  modelValue?: string
  type?: string
  placeholder?: string
  error?: boolean
}

withDefaults(defineProps<Props>(), {
  type: 'text',
  error: false
})

defineEmits(['update:modelValue'])
</script>
