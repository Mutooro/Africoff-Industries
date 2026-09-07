<script setup lang="ts">
import { programs } from '~/data/reviewed'
import { ArrowRight } from '@lucide/vue'

useSeoMeta({
  title: 'Programs and Partnerships · AFRICOFF',
  description: 'Explore AFRICOFF programme areas and partnership opportunities across climate-smart agriculture, enterprise development and community well-being.',
})
</script>

<template>
  <div>
    <section class="page-intro">
      <div class="shell">
        <div class="page-intro-inner">
          <span class="section-label">Programs</span>
          <h1>Programs Built Around <em>Practical Outcomes</em></h1>
          <p>Explore AFRICOFF's programme areas. Detailed objectives, partners, dates and results will be published as each programme is approved for external use.</p>
        </div>
      </div>
    </section>

    <section class="py-section bg-offwhite">
      <div class="shell">
        <div class="values-grid">
          <article v-for="program in programs" :key="program.slug" class="val-card">
            <SafeImage :src="program.image" :alt="program.name" class="program-image" loading="lazy" />
            <span class="section-label">{{ program.type }} · {{ program.location }}</span>
            <h2>{{ program.name }}</h2>
            <p>{{ program.summary }}</p>
            <ul class="program-details">
              <li v-for="detail in program.details" :key="detail">{{ detail }}</li>
            </ul>
            <NuxtLink :to="`/programs/${program.slug}`" class="text-link">
              View programme record <span><ArrowRight :size="16" :stroke-width="2.5" /></span>
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.program-details {
  list-style: none;
  margin: 1.25rem 0 1.5rem;
  display: grid;
  gap: 0.7rem;
}

.program-details li {
  color: var(--muted);
  font-size: 0.92rem;
  line-height: 1.55;
  padding-left: 1rem;
  border-left: 2px solid var(--gold);
}

.program-image {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1.5rem;
}
</style>
