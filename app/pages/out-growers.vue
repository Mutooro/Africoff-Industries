<script setup lang="ts">
import { testimonials } from '~/data/site'
import { BookOpen, Sprout, Coins, Satellite, Users, HeartPulse, Handshake, ArrowRight, CircleCheck } from '@lucide/vue'

useSeoMeta({
  title: 'Out-Growers Scheme & Farmer Prosperity · AFRICOFF Industries',
  description: 'Empowering over 5,000 smallholder coffee farming families across Uganda with agronomy training, micro-input financing, and guaranteed premium market access.',
})

const schemePillars = [
  {
    icon: BookOpen,
    title: 'Good Agricultural Practices (GAP)',
    desc: 'Hands-on field training in pruning, regenerative composting, soil rejuvenation, and shade-tree management to boost yields sustainably.',
  },
  {
    icon: Sprout,
    title: 'Certified Seedlings & Inputs',
    desc: 'Subsidized distribution of high-yield, disease-tolerant coffee seedlings, organic bio-fertilizers, and essential pruning gear.',
  },
  {
    icon: Coins,
    title: 'Transparent Pricing & Living Wage',
    desc: 'Cash-on-delivery payments with additional quality loyalty bonuses paid out directly to farming households without delay.',
  },
  {
    icon: Satellite,
    title: 'Free EUDR Polygon Mapping',
    desc: 'We map and certify farmers’ land parcels with GPS polygons at no cost to the farmer, guaranteeing international market continuity.',
  },
  {
    icon: Users,
    title: 'Women & Youth Empowerment',
    desc: 'Specialized programs ensuring women coffee producers hold registered accounts, receive direct payments, and participate in leadership.',
  },
  {
    icon: HeartPulse,
    title: 'Community Welfare & Resilience',
    desc: 'Supporting local health camps, clean water initiatives, and climate micro-insurance to shield smallholders from drought and extreme weather.',
  },
]

const schemeBenefits = [
  'Improved livelihoods through increased income',
  'Enhanced food security through improved agricultural productivity',
  'Empowerment of women farmers through training and capacity building',
  'Improved environmental sustainability through sustainable agriculture',
]
</script>

<template>
  <div>
    <section class="page-intro">
      <div class="shell">
        <div class="page-intro-inner">
          <span class="section-label">Farmer partnerships</span>
          <h1>Empowering Smallholder Farmers, <em>Transforming Rural Livelihoods</em></h1>
          <p>Partnering with over 5,000 coffee families across Mount Elgon and the Rwenzori mountains to build sustainable prosperity from the roots up.</p>
        </div>
      </div>
    </section>

    <!-- Scheme Intro & Impact Strip -->
    <section class="py-section bg-offwhite">
      <div class="shell">
        <div class="about-grid">
          <div class="about-images">
            <img
              src="/assets/images/image2.jpg"
              alt="Ugandan smallholder farmers"
              class="about-img-main"
              loading="lazy"
            />
            <div class="about-badge-floating">
              <div class="badge-icon"><Handshake :size="22" :stroke-width="2" /></div>
              <div>
                <div class="badge-text-title">Active Network</div>
                <div class="badge-text-val">5,000+ Registered Farmers</div>
              </div>
            </div>
          </div>

          <div>
            <span class="section-label">Community-Centric Agribusiness</span>
            <h2 class="section-title">
              Fair Trade, Living Wages & <em>Generational Growth</em>
            </h2>
            <p class="lead" style="margin-bottom: 1.25rem;">
              Smallholder farmers are the beating heart of Uganda's coffee industry. However, volatile cherry prices, predatory middlemen, and climate shocks have historically left families vulnerable.
            </p>
            <p style="margin-bottom: 1.25rem;">
              The AFRICOFF Out-Growers Scheme solves this by creating direct, enduring partnerships. We provide smallholders with the technical agronomy knowledge, certified nursery stock, and pre-harvest financial stability required to produce Grade A cherries.
            </p>
            <p style="margin-bottom: 2rem;">
              When our farmers thrive, bean quality soars, creating a virtuous cycle of shared value from Ugandan soils to international roasters.
            </p>

            <div style="display: flex; gap: 1.25rem; align-items: center; flex-wrap: wrap;">
              <NuxtLink to="/contact" class="btn-primary">
                <span>Join or Register a Cooperative</span>
                <ArrowRight class="btn-icon" :size="18" :stroke-width="2.5" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6 Pillars of the Scheme -->
    <section class="py-section-lg bg-cream">
      <div class="shell">
        <div class="center-text" style="margin-bottom: 3.5rem;">
          <span class="section-label">The Support Framework</span>
          <h2 class="section-title">
            Six Pillars of the <em>AFRICOFF Farmer Model</em>
          </h2>
          <p class="section-subtitle">
            Comprehensive extension support designed to elevate crop yields, protect soils, and ensure living family incomes.
          </p>
        </div>

        <div class="pillars-grid">
          <div v-for="pillar in schemePillars" :key="pillar.title" class="pillar-card">
            <div class="pillar-icon"><component :is="pillar.icon" :size="26" :stroke-width="2" /></div>
            <h3>{{ pillar.title }}</h3>
            <p>{{ pillar.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Scheme Benefits Strip -->
    <section class="py-section bg-cream">
      <div class="shell">
        <div class="center-text" style="margin-bottom: 3rem;">
          <span class="section-label">Scheme benefits</span>
          <h2 class="section-title">
            What the Scheme <em>Delivers</em>
          </h2>
        </div>

        <div class="benefits-grid">
          <div v-for="benefit in schemeBenefits" :key="benefit" class="benefit-item">
            <CircleCheck :size="22" :stroke-width="2" />
            <span>{{ benefit }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Farmer Testimonials -->
    <section class="py-section bg-forest">
      <div class="shell">
        <div class="center-text" style="margin-bottom: 3.5rem;">
          <span class="section-label light">Voices From the Field</span>
          <h2 class="section-title light">
            Real Stories of <em>Transformational Change</em>
          </h2>
        </div>

        <div class="testimonials-grid">
          <div v-for="test in testimonials" :key="test.author" class="testimonial-card">
            <div class="quote-mark">“</div>
            <p class="quote-text">{{ test.quote }}</p>
            <div class="quote-author">
              <h4>{{ test.author }}</h4>
              <span>{{ test.role }} · {{ test.location }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <CallToAction
      title="Are You a Coffee Farmer or Cooperative Leader in Uganda?"
      subtitle="Discover how the AFRICOFF Out-Growers Scheme can help you improve cherry quality, secure premium prices, and achieve EUDR compliance."
    />
  </div>
</template>

<style scoped>
.pillars-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 2rem;
}

.pillar-card {
  background: #ffffff;
  border-radius: 18px;
  padding: 2.5rem 2rem;
  border: 1px solid var(--line);
  box-shadow: 0 4px 20px rgba(26, 61, 43, 0.04);
  transition: var(--transition);
}

.pillar-card:hover {
  transform: translateY(-4px);
  border-color: var(--leaf);
  box-shadow: var(--card-shadow);
}

.pillar-icon {
  display: inline-flex;
  color: var(--leaf);
  margin-bottom: 1.25rem;
}

.pillar-card h3 {
  font-size: 1.35rem;
  margin-bottom: 0.75rem;
}

.pillar-card p {
  font-size: 0.94rem;
  color: var(--muted);
  line-height: 1.6;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
}

.testimonial-card {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(201, 168, 76, 0.3);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 3rem 2.5rem;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.quote-mark {
  font-family: var(--heading-font);
  font-size: 3.5rem;
  color: var(--gold-light);
  line-height: 0.8;
  margin-bottom: 1rem;
}

.quote-text {
  font-size: 1.15rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  font-style: italic;
}

.quote-author h4 {
  color: var(--gold-light);
  font-size: 1.15rem;
  margin-bottom: 0.2rem;
}

.quote-author span {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
}

/* Scheme Benefits */
.benefits-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem 2rem;
  max-width: 950px;
  margin: 0 auto;
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 1.25rem 1.5rem;
  font-weight: 600;
  color: var(--forest);
  font-size: 0.95rem;
  line-height: 1.45;
}

.benefit-item svg {
  color: var(--leaf);
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .pillars-grid, .testimonials-grid, .benefits-grid {
    grid-template-columns: 1fr;
  }
}
</style>
