<script setup lang="ts">
import { newsArticles } from '~/data/reviewed'
import { ArrowLeft } from '@lucide/vue'

const route = useRoute()
const article = newsArticles.find(item => item.slug === route.params.slug)

if (!article || article.status !== 'published') {
  throw createError({ statusCode: 404, statusMessage: 'Story not found' })
}

useSeoMeta({
  title: () => `${article?.title || 'Story'} · AFRICOFF`,
  description: () => article?.summary || 'AFRICOFF news and field story.',
})
</script>

<template>
  <article v-if="article">
    <section class="page-intro">
      <div class="shell">
        <div class="page-intro-inner">
          <span class="section-label">{{ article.publishedAt }} · AFRICOFF</span>
          <h1>{{ article.title }}</h1>
          <p>{{ article.summary }}</p>
        </div>
      </div>
    </section>

    <section class="py-section bg-cream">
      <div class="shell article-body">
        <p class="lead">This article route is reserved for approved publication content, including location, related programme, attribution, results and image rights.</p>
        <NuxtLink to="/news" class="text-link">Back to news <span><ArrowLeft :size="16" :stroke-width="2.5" /></span></NuxtLink>
      </div>
    </section>
  </article>
</template>

<style scoped>
.article-body {
  max-width: 760px;
}
</style>
