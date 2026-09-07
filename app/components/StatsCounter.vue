<script setup lang="ts">
import { stats } from '~/data/site'
</script>

<template>
  <section class="stats-bar">
    <div class="shell">
      <div class="stats-grid">
        <div v-for="stat in stats" :key="stat.label" class="stat-item">
          <span class="stat-num">{{ stat.num }}</span>
          <span class="stat-label">{{ stat.label }}</span>
          <span class="stat-desc">{{ stat.desc }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

