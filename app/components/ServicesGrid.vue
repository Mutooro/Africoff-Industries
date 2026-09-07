<script setup lang="ts">
import { ref, computed } from 'vue'
import { activities, type Activity } from '~/data/site'
import { ArrowRight, RefreshCw } from '@lucide/vue'

const activeFilter = ref<string>('all')
const flippedCard = ref<string | null>(null)

const filters = [
  { id: 'all', label: 'All Operations' },
  { id: 'farming', label: 'Farming & Out-Growers' },
  { id: 'processing', label: 'Wet & Dry Milling' },
  { id: 'value-addition', label: 'Value Addition & Roast' },
  { id: 'traceability', label: 'EUDR & Traceability' },
  { id: 'export', label: 'Global Logistics' },
  { id: 'trading', label: 'Buying & Selling' },
  { id: 'domestic', label: 'Local Market' },
]

const filteredActivities = computed(() => {
  if (activeFilter.value === 'all') return activities
  return activities.filter(act => act.category === activeFilter.value)
})

function toggleCard(id: string) {
  if (flippedCard.value === id) {
    flippedCard.value = null
  } else {
    flippedCard.value = id
  }
}
</script>

<template>
  <section id="services" class="py-section bg-offwhite">
    <div class="shell">
      <div class="center-text" style="margin-bottom: 2.5rem;">
        <span class="section-label">Integrated Agro-Processing</span>
        <h2 class="section-title">
          Excellence Across Every Node of the <em>Coffee Value Chain</em>
        </h2>
        <p class="section-subtitle">
          From high-altitude shade farming and precision eco-milling to digital EUDR traceability and direct trade logistics.
        </p>
      </div>

      <!-- Filters -->
      <div class="service-filters">
        <button
          v-for="filter in filters"
          :key="filter.id"
          class="filter-btn"
          :class="{ active: activeFilter === filter.id }"
          @click="activeFilter = filter.id"
        >
          {{ filter.label }}
        </button>
      </div>

      <!-- 3D Flip Card Grid -->
      <div class="services-grid">
        <div
          v-for="activity in filteredActivities"
          :key="activity.id"
          class="service-card-wrap"
          @click="toggleCard(activity.id)"
        >
          <div class="service-card-inner" :class="{ flipped: flippedCard === activity.id }">
            <!-- Card Front -->
            <div class="card-front">
              <div>
                <div class="card-front-top">
                  <span class="service-number">{{ activity.number }}</span>
                  <div class="service-icon-box">
                    <component :is="activity.icon" :size="26" :stroke-width="2" />
                  </div>
                </div>
                <h3>{{ activity.title }}</h3>
                <p>{{ activity.shortDesc }}</p>
              </div>
              <div class="card-hint">
                <span>Click / Hover to explore specs</span>
                <RefreshCw :size="14" :stroke-width="2.5" />
              </div>
            </div>

            <!-- Card Back -->
            <div class="card-back">
              <div>
                <div class="card-front-top">
                  <span class="service-number" style="color: var(--gold-light);">{{ activity.number }}</span>
                  <div class="service-icon-box" style="background: rgba(255, 255, 255, 0.12); color: #fff;">
                    <component :is="activity.icon" :size="26" :stroke-width="2" />
                  </div>
                </div>
                <h3>{{ activity.title }}</h3>
                <ul class="card-back-features">
                  <li v-for="feat in activity.features" :key="feat">
                    {{ feat }}
                  </li>
                </ul>
              </div>
              <div class="card-back-cta">
                <NuxtLink to="/activities" class="text-link light">
                  View full operational process <span><ArrowRight :size="16" :stroke-width="2.5" /></span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

