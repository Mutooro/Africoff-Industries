<script setup lang="ts">
import { activities, researchDevelopment, targetMarkets } from '~/data/site'
import { Microscope, ShieldCheck, Check, ArrowUpRight, ArrowRight, FlaskConical } from '@lucide/vue'

const categoryLabels: Record<string, string> = {
  farming: 'Farming',
  processing: 'Processing',
  'value-addition': 'Value Addition',
  traceability: 'Traceability',
  export: 'Export',
  trading: 'Buying & Selling',
  domestic: 'Domestic Market',
}

useSeoMeta({
  title: 'Our Activities & Integrated Operations · AFRICOFF Industries',
  description: 'Explore the full operational spectrum of AFRICOFF Industries: sustainable plantations, eco-washing stations, modern dry milling, roasting, and global export.',
})
</script>

<template>
  <div>
    <section class="page-intro">
      <div class="shell">
        <div class="page-intro-inner">
          <span class="section-label">Operations & value addition</span>
          <h1>Precision Engineering Across the <em>Coffee Value Chain</em></h1>
          <p>From sustainable seedling propagation and eco-friendly wet washing to digital EUDR polygon verification and direct container exports.</p>
        </div>
      </div>
    </section>

    <!-- Operations Overview Grid -->
    <section class="py-section bg-offwhite">
      <div class="shell">
        <div class="center-text" style="margin-bottom: 4rem;">
          <span class="section-label">Integrated Agro-Processing</span>
          <h2 class="section-title">
            Step-by-Step Excellence From <em>Tree to Port</em>
          </h2>
          <p class="section-subtitle">
            Explore the comprehensive lifecycle of AFRICOFF coffee, managed with meticulous attention to environmental standards and bean integrity.
          </p>
        </div>

        <div class="activity-detailed-list">
          <div
            v-for="(act, index) in activities"
            :key="act.id"
            class="activity-row"
            :class="{ 'row-reverse': index % 2 === 1 }"
          >
            <!-- Image Column -->
            <div class="activity-img-col">
              <SafeImage :src="act.image" :alt="act.title" loading="lazy" />
              <div class="activity-img-badge">
                <span class="act-num-lg">{{ act.number }}</span>
              </div>
            </div>

            <!-- Content Column -->
            <div class="activity-text-col">
              <div class="act-icon-header">
                <span class="act-icon"><component :is="act.icon" :size="24" :stroke-width="2" /></span>
                <span class="act-cat-tag">{{ categoryLabels[act.category] ?? act.category }}</span>
              </div>
              <h3>{{ act.title }}</h3>
              <p class="lead" style="margin-bottom: 1.25rem;">{{ act.shortDesc }}</p>
              <p style="margin-bottom: 1.75rem;">{{ act.fullDesc }}</p>

              <div class="features-checklist">
                <h4>Core Operational Highlights:</h4>
                <ul>
                  <li v-for="feat in act.features" :key="feat">
                    <span><Check :size="15" :stroke-width="3" /></span> {{ feat }}
                  </li>
                </ul>
              </div>

              <div style="margin-top: 2rem;">
                <NuxtLink to="/contact" class="text-link">
                  Discuss a commercial partnership <span><ArrowRight :size="16" :stroke-width="2.5" /></span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Milling & Quality Standards Band -->
    <section class="py-section bg-forest">
      <div class="shell">
        <div class="quality-standards-grid">
          <div>
            <span class="section-label light">Quality Assurance</span>
            <h2 class="section-title light">
              SCA Cupping Protocols & <em>Zero-Defect Sorting</em>
            </h2>
            <p class="section-subtitle light" style="margin-bottom: 2rem;">
              Every lot passing through our Kampala and regional mills undergoes moisture testing (target 11.0% - 12.0%), gravimetric density grading, optical trichromatic color sorting, and sensory cupping led by certified Q-graders. A dedicated team of experienced quality-control specialists monitors every stage of the coffee production process — from cherry selection to container loading.
            </p>
            <NuxtLink to="/products" class="btn-gold">
              <span>View Green Coffee Specifications</span>
              <ArrowUpRight class="btn-icon" :size="18" :stroke-width="2.5" />
            </NuxtLink>
          </div>

          <div class="standards-cards">
            <div class="std-card">
              <div class="std-icon"><Microscope :size="28" :stroke-width="1.8" /></div>
              <h4>Certified Cupping Lab</h4>
              <p>Sensory profiling conducted under strict Specialty Coffee Association (SCA) protocol with blind evaluations.</p>
            </div>
            <div class="std-card">
              <div class="std-icon"><ShieldCheck :size="28" :stroke-width="1.8" /></div>
              <h4>GrainPro Hermetic Packing</h4>
              <p>Green beans packaged in multi-layer hermetic bags to preserve moisture equilibrium and prevent ambient odor absorption.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Research & Development -->
    <section class="py-section bg-offwhite">
      <div class="shell rd-grid">
        <div>
          <span class="section-label">Research &amp; development</span>
          <h2 class="section-title">
            Innovating for <em>Better Coffee</em>
          </h2>
          <p class="section-subtitle">
            {{ researchDevelopment.lead }} {{ researchDevelopment.text }}
          </p>
          <NuxtLink to="/contact" class="btn-primary" style="margin-top: 1.5rem;">
            <span>Partner on Product Innovation</span>
            <ArrowUpRight class="btn-icon" :size="18" :stroke-width="2.5" />
          </NuxtLink>
        </div>

        <div class="rd-card">
          <div class="rd-icon"><FlaskConical :size="28" :stroke-width="1.8" /></div>
          <h4>Our R&amp;D Focus</h4>
          <ul class="rd-list">
            <li v-for="point in researchDevelopment.points" :key="point">{{ point }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Markets We Serve -->
    <section class="py-section bg-cream">
      <div class="shell">
        <div class="center-text" style="margin-bottom: 3.5rem;">
          <span class="section-label">Target markets</span>
          <h2 class="section-title">
            Markets We <em>Serve</em>
          </h2>
          <p class="section-subtitle">
            From Ugandan cafés and regional buyers to roasters across three continents — building a loyal customer base for Ugandan coffee at every level.
          </p>
        </div>

        <div class="markets-grid">
          <div v-for="market in targetMarkets" :key="market.name" class="market-card">
            <div class="market-icon"><component :is="market.icon" :size="26" :stroke-width="2" /></div>
            <h3>{{ market.name }}</h3>
            <p>{{ market.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call To Action -->
    <CallToAction />
  </div>
</template>

<style scoped>
.activity-detailed-list {
  display: flex;
  flex-direction: column;
  gap: 6rem;
}

.activity-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

.activity-row.row-reverse {
  grid-template-columns: 1fr 1fr;
  direction: rtl;
}

.activity-row.row-reverse .activity-text-col {
  direction: ltr;
}

.activity-row.row-reverse .activity-img-col {
  direction: ltr;
}

.activity-img-col {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--card-shadow);
  aspect-ratio: 4/3;
}

.activity-img-col img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.activity-img-col:hover img {
  transform: scale(1.04);
}

.activity-img-badge {
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  background: var(--forest);
  color: var(--gold-light);
  padding: 0.5rem 1.25rem;
  border-radius: 12px;
  border: 1px solid var(--gold);
}

.act-num-lg {
  font-family: var(--heading-font);
  font-size: 1.6rem;
  font-weight: 700;
}

.act-icon-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.act-icon {
  font-size: 1.8rem;
}

.act-cat-tag {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 700;
  color: var(--leaf);
  background: rgba(45, 106, 79, 0.1);
  padding: 0.3rem 0.75rem;
  border-radius: 100px;
}

.activity-text-col h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--forest);
}

.features-checklist {
  background: #ffffff;
  border: 1px solid var(--line);
  padding: 1.5rem;
  border-radius: 14px;
}

.features-checklist h4 {
  font-size: 0.95rem;
  font-family: var(--body-font);
  font-weight: 700;
  color: var(--forest);
  margin-bottom: 0.75rem;
}

.features-checklist ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.features-checklist li {
  font-size: 0.92rem;
  color: var(--muted);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.features-checklist li span {
  color: var(--leaf);
  font-weight: 700;
}

.quality-standards-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4.5rem;
  align-items: center;
}

.standards-cards {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.std-card {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(201, 168, 76, 0.3);
  padding: 1.8rem;
  border-radius: 16px;
  color: #ffffff;
}

.std-icon {
  display: inline-flex;
  color: var(--gold-light);
  margin-bottom: 0.75rem;
}

.std-card h4 {
  color: var(--gold-light);
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.std-card p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.92rem;
  line-height: 1.55;
}

/* Research & Development */
.rd-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4.5rem;
  align-items: center;
}

.rd-card {
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 2.25rem;
  box-shadow: var(--card-shadow);
}

.rd-icon {
  display: inline-flex;
  color: var(--leaf);
  margin-bottom: 0.75rem;
}

.rd-card h4 {
  font-size: 1.2rem;
  color: var(--forest);
  margin-bottom: 1rem;
}

.rd-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.rd-list li {
  font-size: 0.92rem;
  color: var(--muted);
  padding-left: 1.4rem;
  position: relative;
  line-height: 1.55;
}

.rd-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--leaf);
  font-weight: 700;
}

/* Markets We Serve */
.markets-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.market-card {
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 2.5rem 2rem;
  box-shadow: var(--card-shadow);
  transition: var(--transition);
}

.market-card:hover {
  transform: translateY(-4px);
  border-color: var(--gold);
  box-shadow: var(--card-shadow-hover);
}

.market-icon {
  display: inline-flex;
  color: var(--leaf);
  margin-bottom: 1.25rem;
}

.market-card h3 {
  font-size: 1.35rem;
  margin-bottom: 0.65rem;
}

.market-card p {
  font-size: 0.94rem;
  color: var(--muted);
  line-height: 1.6;
}

@media (max-width: 980px) {
  .activity-row, .activity-row.row-reverse {
    grid-template-columns: 1fr;
    direction: ltr;
    gap: 2.5rem;
  }
  .quality-standards-grid, .rd-grid {
    grid-template-columns: 1fr;
  }
  .markets-grid {
    grid-template-columns: 1fr;
  }
}
</style>
