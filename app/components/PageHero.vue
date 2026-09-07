<script setup lang="ts">
defineProps<{
  badge?: string
  title: string
  subtitle: string
  image?: string
  breadcrumb?: string
}>()
</script>

<template>
  <section class="page-hero">
    <div class="shell page-hero-content">
      <div v-if="breadcrumb" class="hero-breadcrumb">
        <NuxtLink to="/">Home</NuxtLink>
        <span>/</span>
        <span class="current">{{ breadcrumb }}</span>
      </div>
      <div v-if="badge" class="hero-badge">
        <span class="pulse-dot" />
        <span>{{ badge }}</span>
      </div>
      <h1 v-html="title" />
      <p class="section-subtitle light">{{ subtitle }}</p>
    </div>
  </section>
</template>

<style scoped>
.page-hero {
  background: var(--forest-dark);
  display: flex;
  align-items: center;
  color: #ffffff;
  padding: 3.75rem 0;
  border-bottom: 1px solid rgba(201, 168, 76, 0.3);
}

.page-hero-content {
  max-width: 900px;
}

.hero-breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.85rem;
  font-weight: 500;
}

.hero-breadcrumb a {
  color: var(--gold-light);
}

.hero-breadcrumb a:hover {
  text-decoration: underline;
}

.hero-breadcrumb .current {
  color: #ffffff;
}

.page-hero-content h1 {
  color: #ffffff;
  margin-bottom: 1.25rem;
  line-height: 1.15;
}

.page-hero-content p {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .page-hero {
    padding: 3rem 0;
  }
}
</style>
