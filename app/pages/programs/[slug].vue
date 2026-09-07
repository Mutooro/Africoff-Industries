<script setup lang="ts">
import { programs } from '~/data/reviewed'
import { ArrowUpRight } from '@lucide/vue'

const route = useRoute()
const program = programs.find(item => item.slug === route.params.slug)

if (!program) {
  throw createError({ statusCode: 404, statusMessage: 'Programme not found' })
}

useSeoMeta({
  title: () => `${program?.name || 'Programme'} · AFRICOFF`,
  description: () => program?.summary || 'AFRICOFF programme information.',
})
</script>

<template>
  <div v-if="program">
    <section class="page-intro">
      <div class="shell">
        <div class="page-intro-inner">
          <span class="section-label">{{ program.type }} · {{ program.location }}</span>
          <h1>{{ program.name }}</h1>
          <p>{{ program.summary }}</p>
        </div>
      </div>
    </section>

    <section class="py-section bg-cream">
      <div class="shell program-detail-grid">
        <div>
          <SafeImage :src="program.image" :alt="program.name" class="program-detail-image" loading="eager" />
        </div>
        <div>
          <span class="section-label">Programme record</span>
          <h2 class="section-title">Evidence Before <em>Expectation</em></h2>
          <p class="lead">This programme is sourced from AFRICOFF's project records. Public details will be expanded after the programme owner approves its objectives, geography, dates, partners, beneficiaries and results.</p>
          <ul class="program-details">
            <li v-for="detail in program.details" :key="detail">{{ detail }}</li>
          </ul>
          <NuxtLink to="/contact" class="btn-primary">
            <span>Discuss a partnership</span>
            <ArrowUpRight class="btn-icon" :size="18" :stroke-width="2.5" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.program-details {
  list-style: none;
  margin: 1.5rem 0 2rem;
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

.program-detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.program-detail-image {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 16px;
}

@media (max-width: 768px) {
  .program-detail-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
