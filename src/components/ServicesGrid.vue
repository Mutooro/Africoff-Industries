<template>
  <section id="services" class="py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6">
      <SectionTitle 
        eyebrow="What We Do"
        title="Our <em>Business</em> Activities"
        subtitle="From farm to cup, we deliver excellence across the entire coffee value chain."
      />
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        <ServiceCard 
          v-for="(service, idx) in services" 
          :key="idx"
          :title="service.title"
          :description="service.description"
          :icon="service.icon"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from './ui/SectionTitle.vue'
import ServiceCard from './ui/ServiceCard.vue'

const services = [
  {
    title: 'Coffee Production',
    description: 'Establish and manage coffee plantations, promoting sustainable agricultural practices and ensuring high-quality Arabica and Robusta beans.',
    icon: 'Seedling',
  },
  {
    title: 'Coffee Processing',
    description: 'State-of-the-art processing facilities ensuring efficient, high-quality processing using modern equipment and technology.',
    icon: 'Cog',
  },
  {
    title: 'Export',
    description: 'We export our coffee products to international markets across Europe, North America, and Asia with full compliance.',
    icon: 'Globe',
  },
  {
    title: 'Value Addition',
    description: 'Roasted coffee, ground coffee, and coffee-based beverages that bring out the unique flavour of Ugandan coffee.',
    icon: 'Fire',
  },
  {
    title: 'Quality Assurance',
    description: 'Rigorous quality control systems with experienced specialists monitoring every stage of production.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Out-Growers Scheme',
    description: 'Supporting smallholder farmers with training, inputs, and fair market access — with a focus on women farmers.',
    icon: 'Users',
  },
]
</script>