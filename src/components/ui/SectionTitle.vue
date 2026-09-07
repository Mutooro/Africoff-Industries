<template>
  <div class="text-center max-w-3xl mx-auto">
    <p v-if="eyebrow" class="text-africoff-green font-medium tracking-widest uppercase text-sm mb-4">{{ eyebrow }}</p>
    <h2 class="font-serif text-4xl md:text-5xl text-gray-900 leading-tight mb-6" v-html="title" />
    <p v-if="subtitle" class="text-gray-600 text-lg leading-relaxed">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  subtitle?: string
}>()
</script>