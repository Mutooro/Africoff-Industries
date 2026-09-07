<script setup lang="ts">
defineProps<{
  title?: string
  subtitle?: string
}>()
</script>

<template>
  <section class="cta-banner">
    <div class="shell">
      <div class="cta-inner">
        <span class="section-label light">Direct Trade & Partnership</span>
        <h2>
          {{ title || 'Ready to Source Exceptional, Sustainable Ugandan Coffee?' }}
        </h2>
        <p>
          {{ subtitle || 'Whether you are an international green coffee buyer, specialty roaster, or local farmer cooperative, AFRICOFF welcomes you to build a shared, sustainable future.' }}
        </p>
        <div class="cta-actions">
          <NuxtLink to="/contact" class="btn-gold">
            <span>Request Green Coffee Samples</span>
            <ArrowUpRight class="btn-icon" :size="18" :stroke-width="2.5" />
          </NuxtLink>
          <NuxtLink to="/out-growers" class="btn-outline">
            <span>Join the Out-Growers Scheme</span>
            <ArrowRight class="btn-icon" :size="18" :stroke-width="2.5" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
