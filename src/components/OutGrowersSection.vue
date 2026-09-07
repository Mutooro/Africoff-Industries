<template>
  <section id="out-growers" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div class="relative">
          <img :src="heroImage" alt="Coffee farmers" class="rounded-3xl shadow-2xl" />
          <div class="absolute -bottom-8 -right-8 bg-africoff-brown text-white p-8 rounded-2xl shadow-xl hidden lg:block">
            <p class="font-serif text-3xl font-bold">5,000+</p>
            <p class="text-sm text-white/80">Partner Farmers</p>
          </div>
        </div>
        
        <div>
          <p class="text-africoff-green font-medium tracking-widest uppercase text-sm mb-4">Out-Growers Scheme</p>
          <h2 class="font-serif text-4xl md:text-5xl text-gray-900 leading-tight mb-6">
            Empowering <em class="text-africoff-brown">Smallholder</em> Farmers
          </h2>
          <p class="text-gray-600 text-lg leading-relaxed mb-8">
            Our scheme is designed to support smallholder farmers in Uganda, with a special focus on women farmers. 
            We partner with small-scale coffee growers to source high-quality beans while improving livelihoods.
          </p>
          
          <div class="grid sm:grid-cols-2 gap-6">
            <div v-for="benefit in benefits" :key="benefit" class="flex items-start gap-3">
              <CircleCheck class="w-6 h-6 text-africoff-green flex-shrink-0" :stroke-width="2" />
              <span class="text-gray-700 font-medium">{{ benefit }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CircleCheck } from '@lucide/vue'
import heroImage from '../assets/hero.png'

const benefits = [
  'Training & capacity building',
  'Access to high-quality inputs',
  'Technical support services',
  'Fair market prices',
  'Improved food security',
  'Women empowerment programs',
]
</script>