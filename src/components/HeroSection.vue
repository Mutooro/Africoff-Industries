<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-africoff-cream">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0">
      <img :src="heroImage" alt="Coffee farm" class="w-full h-full object-cover opacity-40" />
      <div class="absolute inset-0 bg-gradient-to-b from-africoff-cream/80 via-transparent to-africoff-cream" />
    </div>
    
    <div class="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
      <p class="text-africoff-brown font-medium tracking-widest uppercase text-sm mb-6">Uganda · Coffee Value Chains</p>
      <h1 class="font-serif text-5xl md:text-7xl lg:text-8xl text-africoff-green leading-[1.1] mb-8">
        Home of <em class="text-africoff-brown">Sustainable</em><br />
        Coffee Excellence
      </h1>
      <p class="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed">
        Bridging smallholder farmers and global markets through quality processing, 
        fair trade practices, and gender-inclusive agriculture across Uganda.
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button class="bg-africoff-green text-white px-8 py-4 rounded-full font-medium hover:bg-africoff-light transition-all">
          Explore Our Work
        </button>
        <button class="border-2 border-africoff-green text-africoff-green px-8 py-4 rounded-full font-medium hover:bg-africoff-green hover:text-white transition-all">
          Out-Growers Scheme
        </button>
      </div>
    </div>
    
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <span class="text-xs uppercase tracking-widest text-africoff-brown">Scroll</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import heroImage from '../assets/hero.png'
</script>