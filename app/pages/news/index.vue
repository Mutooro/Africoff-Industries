<script setup lang="ts">
import { newsArticles } from '~/data/reviewed'
import { ArrowUpRight, ArrowRight } from '@lucide/vue'

// Only approved, published stories may appear publicly — drafts stay behind this filter.
const publishedArticles = newsArticles.filter(article => article.status === 'published')

useSeoMeta({
  title: 'News and Stories · AFRICOFF',
  description: 'Read AFRICOFF updates, programme stories and evidence from Uganda coffee value chains.',
})
</script>

<template>
  <div>
    <section class="page-intro">
      <div class="shell">
        <div class="page-intro-inner">
          <span class="section-label">News & stories</span>
          <h1>Field Updates With <em>Useful Evidence</em></h1>
          <p>Published stories will include dates, attribution, locations, related programmes, image rights and a short results section.</p>
        </div>
      </div>
    </section>

    <section class="py-section bg-offwhite">
      <div class="shell">
        <div v-if="publishedArticles.length" class="values-grid">
          <article v-for="article in publishedArticles" :key="article.slug" class="val-card">
            <span class="section-label">{{ article.publishedAt }}</span>
            <h2>{{ article.title }}</h2>
            <p>{{ article.summary }}</p>
            <NuxtLink :to="`/news/${article.slug}`" class="text-link">Read story <span><ArrowRight :size="16" :stroke-width="2.5" /></span></NuxtLink>
          </article>
        </div>
        <div v-else class="empty-state">
          <span class="section-label">Publishing workflow pending</span>
          <h2>Stories Will Appear <em>When Approved</em></h2>
          <p>AFRICOFF does not yet have an approved article set in this workspace. The route is ready for publication once an editorial owner confirms the source material, dates, results and image rights.</p>
          <NuxtLink to="/contact" class="btn-primary" style="margin-top: 1.5rem;">
            <span>Contact AFRICOFF</span>
            <ArrowUpRight class="btn-icon" :size="18" :stroke-width="2.5" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.empty-state {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
  padding: 4rem 2rem;
  background: #ffffff;
  border: var(--card-border);
  border-radius: 16px;
}

.empty-state h2 {
  margin: 0.75rem 0 1rem;
}

.empty-state p {
  color: var(--muted);
  line-height: 1.7;
}
</style>
