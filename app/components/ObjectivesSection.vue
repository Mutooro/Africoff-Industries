<script setup lang="ts">
import { strategicObjectives } from '~/data/site'
import { ArrowRight } from '@lucide/vue'
</script>

<template>
  <section class="py-section bg-offwhite">
    <div class="shell">
      <div class="objectives-grid">
        <div>
          <span class="section-label">Strategic Roadmap</span>
          <h3 class="section-title">
            Our Commitment to a Resilient, <em>Inclusive Coffee Economy</em>
          </h3>
          <p class="lead" style="margin-bottom: 1.5rem;">
            AFRICOFF operates on foundational pillars that unite commercial viability with social justice and ecological protection across Uganda.
          </p>
          <p style="margin-bottom: 2rem;">
            By integrating smallholders directly into the high-value specialty export supply chain, we deliver tangible benefits from soil to international cups.
          </p>
          <NuxtLink to="/about" class="btn-outline-dark">
            <span>Learn About Our Mission</span>
            <ArrowRight class="btn-icon" :size="18" :stroke-width="2.5" />
          </NuxtLink>
        </div>

        <div class="obj-list">
          <div v-for="obj in strategicObjectives" :key="obj.num" class="obj-item">
            <div class="obj-num">{{ obj.num }}</div>
            <h4>{{ obj.title }}</h4>
            <p>{{ obj.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

