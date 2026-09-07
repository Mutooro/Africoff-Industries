<template>
  <section id="objectives" class="py-24 bg-africoff-green text-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p class="text-africoff-gold font-medium tracking-widest uppercase text-sm mb-4">Our Direction</p>
          <h2 class="font-serif text-4xl md:text-5xl leading-tight mb-6">
            Key <em class="text-africoff-gold">Objectives</em> Driving Our Work
          </h2>
          <p class="text-white/80 text-lg leading-relaxed">
            We are guided by clear, impact-driven objectives that shape every partnership, 
            project, and program we undertake across Uganda's coffee sector.
          </p>
        </div>
        
        <div class="space-y-6">
          <div v-for="(obj, idx) in objectives" :key="idx" class="flex gap-6 group">
            <div class="flex-shrink-0 w-12 h-12 rounded-full border-2 border-africoff-gold/30 flex items-center justify-center font-serif font-bold text-africoff-gold group-hover:bg-africoff-gold group-hover:text-africoff-green transition-all">
              {{ String(idx + 1).padStart(2, '0') }}
            </div>
            <div>
              <h3 class="font-semibold text-lg mb-1">{{ obj.title }}</h3>
              <p class="text-white/70 text-sm leading-relaxed">{{ obj.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const objectives = [
  { title: 'Quality & Sustainability', desc: 'Produce high-quality coffee while adopting environmentally friendly and sustainable agricultural practices.' },
  { title: 'Community Development', desc: 'Improve livelihoods of partner coffee growers through fair trade, training, and capacity building.' },
  { title: 'Market Expansion', desc: 'Establish strong market presence in Uganda, Africa, and globally, promoting Ugandan coffee.' },
  { title: 'Women Empowerment', desc: 'Promote gender balance and empower women in agriculture through leadership and economic opportunities.' },
  { title: 'Innovation', desc: 'Develop new coffee products and value-added services such as roasted and ground coffee.' },
  { title: 'Partnerships', desc: 'Foster strategic partnerships with growers, suppliers, buyers, and development organisations.' },
]
</script>