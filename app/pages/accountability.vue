<script setup lang="ts">
import { accountabilityResources } from '~/data/reviewed'
import { ArrowRight, ArrowUpRight } from '@lucide/vue'

useSeoMeta({
  title: 'Accountability and Resources · AFRICOFF',
  description: 'Find AFRICOFF governance information, policies, reports and due-diligence resources for partners and stakeholders.',
})
</script>

<template>
  <div>
    <section class="page-intro">
      <div class="shell">
        <div class="page-intro-inner">
          <span class="section-label">Accountability & resources</span>
          <h1>Evidence for <em>Responsible Partnership</em></h1>
          <p>Policies, governance information and reports will be published here with clear ownership, dates and approval status.</p>
        </div>
      </div>
    </section>

    <section class="py-section bg-offwhite">
      <div class="shell">
        <div class="center-text" style="margin-bottom: 3.5rem;">
          <span class="section-label">Due diligence library</span>
          <h2 class="section-title">A Growing Home for <em>Public Documents</em></h2>
          <p class="section-subtitle">Pending items are labelled openly so partners can distinguish published material from documents still awaiting approval.</p>
        </div>

        <div class="values-grid">
          <article v-for="resource in accountabilityResources" :key="resource.title" class="val-card">
            <span class="section-label">{{ resource.type }} · {{ resource.status === 'published' ? 'Published' : 'Pending approval' }}</span>
            <h3>{{ resource.title }}</h3>
            <p>{{ resource.description }}</p>
            <NuxtLink v-if="resource.href" :to="resource.href" class="text-link">
              Open resource <span><ArrowRight :size="16" :stroke-width="2.5" /></span>
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <section class="py-section bg-cream">
      <div class="shell about-grid">
        <div>
          <span class="section-label">Contact the right desk</span>
          <h2 class="section-title">Questions About <em>Due Diligence?</em></h2>
        </div>
        <div>
          <p class="lead">For requests involving governance, safeguarding, complaints, anti-fraud controls or impact evidence, contact AFRICOFF so the request can be routed to the responsible owner.</p>
          <NuxtLink to="/contact" class="btn-primary" style="margin-top: 1.5rem;">
            <span>Send a due-diligence enquiry</span>
            <ArrowUpRight class="btn-icon" :size="18" :stroke-width="2.5" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
