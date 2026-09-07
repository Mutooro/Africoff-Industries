<script setup lang="ts">
import { stats, projects, socialCommitments } from '~/data/site'
import { Leaf, Satellite, Users, Droplets } from '@lucide/vue'

useSeoMeta({
  title: 'Sustainability & Community Impact · AFRICOFF Industries',
  description: 'Discover AFRICOFF’s verifiable impact across Uganda: EUDR zero-deforestation compliance, shade-tree agroforestry, gender equity in coffee, and smallholder prosperity.',
})
</script>

<template>
  <div>
    <section class="page-intro">
      <div class="shell">
        <div class="page-intro-inner">
          <span class="section-label">Sustainability & ESG</span>
          <h1>Driving Climate Action & <em>Equitable Prosperity</em> in Uganda</h1>
          <p>Balancing commercial coffee excellence with genuine ecological regeneration, women farmer empowerment, and strict EUDR deforestation-free compliance.</p>
        </div>
      </div>
    </section>

    <!-- Key Impact Metrics Strip -->
    <StatsCounter />

    <!-- Impact Pillars -->
    <section class="py-section-lg bg-offwhite">
      <div class="shell">
        <div class="center-text" style="margin-bottom: 4rem;">
          <span class="section-label">Strategic ESG Pillars</span>
          <h2 class="section-title">
            Measurable Outcomes for <em>People and Planet</em>
          </h2>
          <p class="section-subtitle">
            Our environmental and social governance framework aligns with UN Sustainable Development Goals (SDGs 1, 5, 8, 12, 13, and 15).
          </p>
        </div>

        <div class="impact-pillars-grid">
          <!-- Pillar 1 -->
          <div class="impact-pillar-card">
            <div class="pillar-top-badge"><Leaf :size="13" :stroke-width="2.5" /> Climate & Biodiversity</div>
            <h3>Shade-Tree Agroforestry & Carbon Insetting</h3>
            <p>
              We promote multi-strata shade canopies by distributing indigenous tree seedlings (such as Cordia africana, Albizia, and fruit varieties) to smallholders. This prevents soil erosion on steep slopes, preserves bird corridors, and sequesters atmospheric carbon directly at the farm level.
            </p>
            <div class="impact-stat-pill">
              <strong>45,000+</strong> Indigenous Trees Planted
            </div>
          </div>

          <!-- Pillar 2 -->
          <div class="impact-pillar-card">
            <div class="pillar-top-badge"><Satellite :size="13" :stroke-width="2.5" /> Traceability & Compliance</div>
            <h3>100% Zero-Deforestation (EUDR) Verification</h3>
            <p>
              Our GIS mapping team surveys every farmer parcel to generate certified digital polygons. We cross-reference historical satellite imagery against the December 31, 2020 cutoff date to guarantee that not a single cherry is sourced from deforested land.
            </p>
            <div class="impact-stat-pill">
              <strong>5,000+</strong> Farm Polygons Digitally Mapped
            </div>
          </div>

          <!-- Pillar 3 -->
          <div class="impact-pillar-card">
            <div class="pillar-top-badge"><Users :size="13" :stroke-width="2.5" /> Gender Equity</div>
            <h3>Women in Coffee Leadership Initiative</h3>
            <p>
              Women perform the majority of farm labor yet historically receive less than 20% of agricultural proceeds. AFRICOFF guarantees direct bank/mobile-money payouts to female heads of household, supports female-led producer groups, and sponsors agronomy leadership academies.
            </p>
            <div class="impact-stat-pill">
              <strong>40%+</strong> Women-Led Producer Groups
            </div>
          </div>

          <!-- Pillar 4 -->
          <div class="impact-pillar-card">
            <div class="pillar-top-badge"><Droplets :size="13" :stroke-width="2.5" /> Eco-Processing</div>
            <h3>Water Conservation & Eco-Pulping</h3>
            <p>
              Traditional wet mills consume up to 20 liters of fresh water per kilogram of green coffee. AFRICOFF installs modern Pinhalense and Penagos eco-pulpers that recirculate water, reducing consumption by 80% while treating effluents in biological vetiver grass ponds.
            </p>
            <div class="impact-stat-pill">
              <strong>80%</strong> Fresh Water Reduction
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Responsibility Commitments -->
    <section class="py-section bg-cream">
      <div class="shell">
        <div class="center-text" style="margin-bottom: 3.5rem;">
          <span class="section-label">Social responsibility</span>
          <h2 class="section-title">
            Commitments We <em>Never Compromise</em>
          </h2>
          <p class="section-subtitle">
            We promote social responsibility and sustainability in every operation. These principles govern how we work with our employees, out-growers, and communities.
          </p>
        </div>

        <div class="commitments-grid">
          <div v-for="commitment in socialCommitments" :key="commitment.title" class="commitment-card">
            <div class="commitment-icon"><component :is="commitment.icon" :size="26" :stroke-width="2" /></div>
            <h3>{{ commitment.title }}</h3>
            <p>{{ commitment.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <ProjectsShowcase />

    <!-- Call to Action -->
    <CallToAction
      title="Partner With Us on Transformative Agro-Forestry & Gender Programs"
      subtitle="We collaborate with international development agencies, roasters, and carbon offset initiatives to co-finance scalable impact across Ugandan coffee communities."
    />
  </div>
</template>

<style scoped>
.impact-pillars-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 2.5rem;
}

.impact-pillar-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 2.8rem 2.2rem;
  border: 1px solid var(--line);
  box-shadow: var(--card-shadow);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: var(--transition);
}

.impact-pillar-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--card-shadow-hover);
  border-color: var(--leaf);
}

.pillar-top-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--forest);
  background: var(--cream);
  padding: 0.4rem 0.9rem;
  border-radius: 100px;
  margin-bottom: 1.25rem;
  align-self: flex-start;
}

.impact-pillar-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--forest);
}

.impact-pillar-card p {
  font-size: 0.95rem;
  color: var(--muted);
  line-height: 1.65;
  margin-bottom: 2rem;
}

.impact-stat-pill {
  background: rgba(45, 106, 79, 0.08);
  border: 1px solid rgba(45, 106, 79, 0.2);
  color: var(--forest);
  padding: 0.65rem 1rem;
  border-radius: 10px;
  font-size: 0.9rem;
}

.impact-stat-pill strong {
  color: var(--leaf);
  font-size: 1.05rem;
}

/* Social Responsibility Commitments */
.commitments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.commitment-card {
  background: #ffffff;
  border-radius: 18px;
  padding: 2.5rem 2rem;
  border: 1px solid var(--line);
  box-shadow: var(--card-shadow);
  transition: var(--transition);
}

.commitment-card:hover {
  transform: translateY(-4px);
  border-color: var(--leaf);
  box-shadow: var(--card-shadow-hover);
}

.commitment-icon {
  display: inline-flex;
  color: var(--leaf);
  margin-bottom: 1.25rem;
}

.commitment-card h3 {
  font-size: 1.3rem;
  margin-bottom: 0.65rem;
}

.commitment-card p {
  font-size: 0.94rem;
  color: var(--muted);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .impact-pillars-grid {
    grid-template-columns: 1fr;
  }
}
</style>
