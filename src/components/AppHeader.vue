<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 bg-africoff-green rounded-full flex items-center justify-center">
          <span class="text-white font-serif font-bold text-lg">A</span>
        </div>
        <div class="leading-tight">
          <h1 class="font-serif text-xl font-bold text-africoff-green">AFRICOFF</h1>
          <p class="text-[10px] uppercase tracking-widest text-africoff-brown">Industries (U) Ltd</p>
        </div>
      </div>
      
      <nav class="hidden md:flex items-center gap-8">
        <a v-for="link in navLinks" :key="link" :href="`#${link.toLowerCase()}`" 
           class="text-sm font-medium text-gray-600 hover:text-africoff-green transition-colors">
          {{ link }}
        </a>
      </nav>
      
      <button class="bg-africoff-green text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-africoff-light transition-colors">
        Contact Us
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
const navLinks = ['About', 'Services', 'Objectives', 'Out-Growers', 'Products', 'Contact']
</script>