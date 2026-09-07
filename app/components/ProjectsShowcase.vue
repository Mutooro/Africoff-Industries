<script setup lang="ts">
import { ref, computed } from 'vue'
import { projects } from '~/data/site'
import { ArrowRight } from '@lucide/vue'

const activeCategory = ref<string>('All')
const categories = ['All', 'Quality', 'Empowerment', 'Climate', 'Traceability']

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') return projects
  return projects.filter(p => p.category === activeCategory.value)
})
</script>

<template>
  <section class="py-section bg-cream">
    <div class="shell">
      <div class="center-text" style="margin-bottom: 2.5rem;">
        <span class="section-label">Proven Impact & Initiatives</span>
        <h2 class="section-title">
          Transforming Uganda’s Coffee Landscape <em>Through Action</em>
        </h2>
        <p class="section-subtitle">
          Explore our strategic field programs elevating bean quality, empowering female farmers, and safeguarding biodiversity.
        </p>
      </div>

      <!-- Categories -->
      <div class="service-filters">
        <button
          v-for="cat in categories"
          :key="cat"
          class="filter-btn"
          :class="{ active: activeCategory === cat }"
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="projects-grid">
        <div v-for="proj in filteredProjects" :key="proj.id" class="project-card">
          <SafeImage :src="proj.image" :alt="proj.title" loading="lazy" />
          <div class="project-overlay" />
          
          <div class="project-header-tags">
            <span v-for="tag in proj.tags" :key="tag" class="project-tag">{{ tag }}</span>
          </div>

          <div class="project-content">
            <div class="project-metric-box">
              <span class="project-metric-val">{{ proj.metric }}</span>
              <span class="project-metric-lbl">{{ proj.metricLabel }}</span>
            </div>
            <h3>{{ proj.title }}</h3>
            <p>{{ proj.summary }}</p>
            <NuxtLink to="/impact" class="text-link light">
              Explore initiative results <span><ArrowRight :size="16" :stroke-width="2.5" /></span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

