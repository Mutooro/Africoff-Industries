<script setup lang="ts">
import { valueChains } from '~/data/reviewed'
import { ArrowRight, ArrowUpRight } from '@lucide/vue'

useSeoMeta({
  title: 'Coffee, Cocoa and Honey Value Chains · AFRICOFF',
  description: 'Explore AFRICOFF value-chain information for buyers and partners, including Ugandan coffee and developing cocoa and honey offerings.',
})
</script>

<template>
  <div>
    <section class="page-intro">
      <div class="shell">
        <div class="page-intro-inner">
          <span class="section-label">Value chains</span>
          <h1>From Ugandan Origins to <em>Responsible Markets</em></h1>
          <p>Explore current product information and register interest in AFRICOFF's developing cocoa and honey value chains.</p>
        </div>
      </div>
    </section>

    <section class="py-section bg-offwhite">
      <div class="shell">
        <div class="center-text" style="margin-bottom: 3.5rem;">
          <span class="section-label">Buyer information</span>
          <h2 class="section-title">Clearer Origin Data for <em>Better Decisions</em></h2>
          <p class="section-subtitle">Published details are separated from information awaiting commercial and programme-owner approval.</p>
        </div>

        <div class="values-grid">
          <article v-for="chain in valueChains" :key="chain.slug" class="val-card">
            <span class="section-label">{{ chain.status === 'published' ? 'Information available' : 'Details in review' }}</span>
            <h3>{{ chain.name }}</h3>
            <p>{{ chain.summary }}</p>
            <ul class="chain-details">
              <li v-for="detail in chain.details" :key="detail">{{ detail }}</li>
            </ul>
            <NuxtLink
              v-if="chain.slug === 'coffee'"
              to="/products"
              class="text-link"
            >
              View coffee catalogue <span><ArrowRight :size="16" :stroke-width="2.5" /></span>
            </NuxtLink>
            <NuxtLink v-else to="/contact" class="text-link">
              Register buyer interest <span><ArrowRight :size="16" :stroke-width="2.5" /></span>
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <section class="py-section bg-forest">
      <div class="shell quality-standards-grid">
        <div>
          <span class="section-label light">Commercial enquiry</span>
          <h2 class="section-title light">Need an Origin Sheet or <em>Sample?</em></h2>
          <p class="section-subtitle light">Tell us which value chain, origin or format you are evaluating and the team can confirm current availability.</p>
        </div>
        <NuxtLink to="/contact" class="btn-gold">
          <span>Contact AFRICOFF</span>
          <ArrowUpRight class="btn-icon" :size="18" :stroke-width="2.5" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.chain-details {
  list-style: none;
  margin: 1.25rem 0 1.5rem;
  display: grid;
  gap: 0.7rem;
}

.chain-details li {
  color: var(--muted);
  font-size: 0.92rem;
  line-height: 1.55;
  padding-left: 1rem;
  border-left: 2px solid var(--gold);
}
</style>
