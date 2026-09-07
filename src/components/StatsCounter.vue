<template>
  <section class="py-20 bg-white border-y border-gray-100">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <div class="font-serif text-4xl md:text-5xl font-bold text-africoff-green mb-2">
            <AnimatedCounter :end="stat.value" :suffix="stat.suffix" />
          </div>
          <p class="text-sm text-gray-500 uppercase tracking-wider">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AnimatedCounter from './ui/AnimatedCounter.vue'

const stats = [
  { value: 7, suffix: '+', label: 'Priority Value Chains' },
  { value: 6, suffix: '', label: 'Key Objectives' },
  { value: 3, suffix: '+', label: 'Active Projects' },
  { value: 100, suffix: '%', label: 'Sustainability Focus' },
]
</script>