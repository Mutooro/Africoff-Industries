<template>
  <div class="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-africoff-green/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
    <div class="absolute top-0 right-0 w-32 h-32 bg-africoff-green/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
    
    <div class="relative z-10">
      <div class="w-14 h-14 bg-africoff-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-africoff-green group-hover:text-white transition-colors">
        <component :is="icons[icon]" class="w-7 h-7 text-africoff-green group-hover:text-white transition-colors" />
      </div>
      
      <h3 class="font-serif text-xl font-semibold text-gray-900 mb-3">{{ title }}</h3>
      <p class="text-gray-600 leading-relaxed text-sm">{{ description }}</p>
      
      <div class="mt-6 flex items-center text-africoff-green font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
        Explore Service
        <ArrowRight class="w-4 h-4 ml-2" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  FlaskConical,
  Cog,
  Globe,
  Flame,
  ShieldCheck,
  Users,
  ArrowRight,
} from '@lucide/vue'

defineProps<{
  title: string
  description: string
  icon: string
}>()

const icons: Record<string, any> = {
  Seedling: FlaskConical,
  Cog: Cog,
  Globe: Globe,
  Fire: Flame,
  ShieldCheck: ShieldCheck,
  Users: Users,
}
</script>