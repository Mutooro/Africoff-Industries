<script setup lang="ts">
import { ref, computed } from 'vue'
import { products, farmServices, certifications } from '~/data/site'
import { Coffee, ArrowUpRight, Package, Ship, Plane } from '@lucide/vue'

useSeoMeta({
  title: 'Specialty Coffee Offerings and Green Bean Grades · AFRICOFF Industries',
  description: 'Explore AFRICOFF’s premium Ugandan green coffee catalogue: Bugisu Washed Arabica AA/AB, Natural Drugar, Natural Uganda Robusta (NUR) Screens 12, 15 & 18, and artisanal roasted selections.',
})

const activeFilter = ref<'All' | 'Arabica' | 'Robusta' | 'Value-Added'>('All')

const filteredProducts = computed(() => {
  if (activeFilter.value === 'All') return products
  return products.filter(p => p.type === activeFilter.value)
})
</script>

<template>
  <div>
    <section class="page-intro">
      <div class="shell">
        <div class="page-intro-inner">
          <span class="section-label">Coffee offerings</span>
          <h1>Single-Origin Specialty Lots and <em>High-Grade Robusta</em></h1>
          <p>Carefully harvested from Uganda's prime volcanic slopes and high-altitude mountain forests. Hand-sorted, cup-tested, and hermetically packaged for global export.</p>
        </div>
      </div>
    </section>

    <!-- Products Catalogue Section -->
    <section class="py-section bg-offwhite">
      <div class="shell">
        <div class="center-text" style="margin-bottom: 2.5rem;">
          <span class="section-label">Export Catalogue</span>
          <h2 class="section-title">
            Exceptional Terroirs, <em>Distinct Sensory Profiles</em>
          </h2>
          <p class="section-subtitle">
            All lots are certified by the Coffee Department of the Ministry of Agriculture, Animal Industry and Fisheries (MAAIF), defect-sorted, and available in GrainPro lined 60kg jute bags.
          </p>
        </div>

        <!-- Type Filter -->
        <div class="service-filters">
          <button
            v-for="cat in (['All', 'Arabica', 'Robusta', 'Value-Added'] as const)"
            :key="cat"
            class="filter-btn"
            :class="{ active: activeFilter === cat }"
            @click="activeFilter = cat"
          >
            {{ cat === 'Value-Added' ? 'Roasted and Value-Added' : cat }}
          </button>
        </div>

        <!-- Products Grid -->
        <div class="products-grid-catalog">
          <div v-for="prod in filteredProducts" :key="prod.id" class="product-catalog-card">
            <div class="product-card-top">
              <span class="prod-type-pill">{{ prod.type }}</span>
              <span class="prod-grade-pill">{{ prod.grade }}</span>
            </div>

            <h3>{{ prod.name }}</h3>
            <p class="prod-desc">{{ prod.description }}</p>

            <div class="prod-spec-table">
              <div class="spec-row">
                <span class="spec-k">Origin:</span>
                <span class="spec-v">{{ prod.region }}</span>
              </div>
              <div class="spec-row">
                <span class="spec-k">Altitude:</span>
                <span class="spec-v">{{ prod.altitude }}</span>
              </div>
              <div class="spec-row">
                <span class="spec-k">Processing:</span>
                <span class="spec-v">{{ prod.process }}</span>
              </div>
              <div class="spec-row">
                <span class="spec-k">Screen Size:</span>
                <span class="spec-v">{{ prod.screen }}</span>
              </div>
            </div>

            <!-- Cup Profile Flavor Notes -->
            <div class="cup-profile-box">
              <span class="cup-label">Cup Sensory Notes:</span>
              <div class="flavor-tags">
                <span v-for="note in prod.cupProfile" :key="note" class="flavor-tag">
                  <Coffee :size="13" :stroke-width="2.5" /> {{ note }}
                </span>
              </div>
            </div>

            <div class="prod-card-bottom">
              <NuxtLink :to="`/contact?product=${encodeURIComponent(prod.name)}`" class="btn-primary" style="width: 100%; justify-content: center;">
                <span>Request Sample / Spec Sheet</span>
                <ArrowUpRight class="btn-icon" :size="18" :stroke-width="2.5" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Farm Services -->
    <section class="py-section bg-cream">
      <div class="shell">
        <div class="center-text" style="margin-bottom: 3.5rem;">
          <span class="section-label">Farm services</span>
          <h2 class="section-title">
            Beyond the Bean: <em>Farm Services</em>
          </h2>
          <p class="section-subtitle">
            Alongside our coffee catalogue, we provide production-side services that keep quality high from the nursery to the harvest.
          </p>
        </div>

        <div class="farm-services-grid">
          <article v-for="service in farmServices" :key="service.id" class="farm-service-card">
            <div class="farm-service-img">
              <SafeImage :src="service.image" :alt="service.name" loading="lazy" />
            </div>
            <div class="farm-service-body">
              <div class="farm-service-icon"><component :is="service.icon" :size="24" :stroke-width="2" /></div>
              <h3>{{ service.name }}</h3>
              <p class="farm-service-summary">{{ service.summary }}</p>
              <ul class="farm-service-points">
                <li v-for="point in service.points" :key="point">{{ point }}</li>
              </ul>
              <NuxtLink to="/contact" class="text-link">
                Request service details <span><ArrowUpRight :size="16" :stroke-width="2.5" /></span>
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Packaging and Freight Specifications -->
    <section class="py-section bg-forest">
      <div class="shell">
        <div class="center-text" style="margin-bottom: 3.5rem;">
          <span class="section-label light">Packaging and Logistics</span>
          <h2 class="section-title light">
            Export Standards and <em>Quality Packaging</em>
          </h2>
          <p class="section-subtitle light">
            We ensure bean freshness and prevent ambient degradation during international ocean transit.
          </p>
        </div>

        <div class="export-specs-grid">
          <div class="spec-box">
            <div class="spec-box-icon"><Package :size="26" :stroke-width="1.8" /></div>
            <h4>60kg GrainPro Hermetic Bags</h4>
            <p>Moisture-barrier high-density polyethylene liner bags inside natural jute to safeguard aromatics and prevent condensation.</p>
          </div>
          <div class="spec-box">
            <div class="spec-box-icon"><Ship :size="26" :stroke-width="1.8" /></div>
            <h4>Full Container Loads (FCL)</h4>
            <p>Standard 20ft dry containers holding 320 x 60kg bags (19.2 Metric Tons) with desiccants and craft paper lining.</p>
          </div>
          <div class="spec-box">
            <div class="spec-box-icon"><Plane :size="26" :stroke-width="1.8" /></div>
            <h4>Air Express Sample Service</h4>
            <p>300g to 1kg green coffee sample batches dispatched via DHL/FedEx worldwide within 48 hours of cupping confirmation.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Certification and Compliance -->
    <section class="py-section bg-offwhite">
      <div class="shell">
        <div class="center-text" style="margin-bottom: 3.5rem;">
          <span class="section-label">Certification and compliance</span>
          <h2 class="section-title">
            Standards We Are <em>Working Toward</em>
          </h2>
          <p class="section-subtitle">
            We are committed to complying with international standards and regulations. Certification programmes below are targeted and currently in progress across our operations.
          </p>
        </div>

        <div class="cert-grid">
          <article v-for="cert in certifications" :key="cert.name" class="cert-card">
            <div class="cert-icon"><component :is="cert.icon" :size="26" :stroke-width="2" /></div>
            <h3>{{ cert.name }}</h3>
            <p>{{ cert.description }}</p>
            <span class="cert-status">{{ cert.status }}</span>
          </article>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <CallToAction />
  </div>
</template>

<style scoped>
.products-grid-catalog {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 2.5rem;
}

.product-catalog-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 2.5rem 2.2rem;
  border: 1px solid var(--line);
  box-shadow: var(--card-shadow);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: var(--transition);
}

.product-catalog-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--card-shadow-hover);
  border-color: var(--gold);
}

.product-card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
}

.prod-type-pill {
  background: rgba(76, 175, 80, 0.14);
  color: var(--forest);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.35rem 0.8rem;
  border-radius: 100px;
}

.prod-grade-pill {
  background: rgba(201, 168, 76, 0.15);
  color: #7d5e16;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.35rem 0.8rem;
  border-radius: 100px;
  border: 1px solid rgba(201, 168, 76, 0.3);
}

.product-catalog-card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.8rem;
  color: var(--forest);
}

.prod-desc {
  font-size: 0.94rem;
  color: var(--muted);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.prod-spec-table {
  background: var(--offwhite);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(26, 61, 43, 0.06);
}

.spec-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.88rem;
}

.spec-k {
  color: var(--muted);
  font-weight: 600;
}

.spec-v {
  color: var(--forest);
  font-weight: 700;
  text-align: right;
}

.cup-profile-box {
  margin-bottom: 2rem;
}

.cup-label {
  display: block;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 700;
  color: var(--leaf);
  margin-bottom: 0.65rem;
}

.flavor-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.flavor-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  background: var(--cream);
  color: #4a3b2c;
  font-size: 0.82rem;
  font-weight: 600;
  padding: 0.35rem 0.75rem;
  border-radius: 8px;
  border: 1px solid rgba(201, 168, 76, 0.25);
}

.export-specs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.spec-box {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 18px;
  padding: 2.5rem 2rem;
  color: #ffffff;
  transition: var(--transition);
}

.spec-box:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--gold);
  transform: translateY(-3px);
}

.spec-box-icon {
  display: inline-flex;
  color: var(--gold-light);
  margin-bottom: 1rem;
}

.spec-box h4 {
  color: var(--gold-light);
  font-size: 1.25rem;
  margin-bottom: 0.65rem;
}

.spec-box p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.92rem;
  line-height: 1.6;
}

/* Farm Services */
.farm-services-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
}

.farm-service-card {
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid var(--line);
  box-shadow: var(--card-shadow);
  display: flex;
  flex-direction: column;
  transition: var(--transition);
}

.farm-service-card:hover {
  transform: translateY(-4px);
  border-color: var(--gold);
  box-shadow: var(--card-shadow-hover);
}

.farm-service-img {
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.farm-service-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.farm-service-card:hover .farm-service-img img {
  transform: scale(1.04);
}

.farm-service-body {
  padding: 2rem 2.2rem 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
}

.farm-service-icon {
  display: inline-flex;
  color: var(--leaf);
  margin-bottom: 1rem;
}

.farm-service-body h3 {
  font-size: 1.4rem;
  margin-bottom: 0.65rem;
  color: var(--forest);
}

.farm-service-summary {
  font-size: 0.94rem;
  color: var(--muted);
  line-height: 1.6;
  margin-bottom: 1.1rem;
}

.farm-service-points {
  list-style: none;
  display: grid;
  gap: 0.55rem;
  margin-bottom: 1.6rem;
}

.farm-service-points li {
  font-size: 0.9rem;
  color: var(--muted);
  padding-left: 1.35rem;
  position: relative;
}

.farm-service-points li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--leaf);
  font-weight: 700;
}

/* Certification and Compliance */
.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.cert-card {
  background: #ffffff;
  border-radius: 18px;
  padding: 2.5rem 2rem;
  border: 1px solid var(--line);
  box-shadow: var(--card-shadow);
  transition: var(--transition);
  display: flex;
  flex-direction: column;
}

.cert-card:hover {
  transform: translateY(-4px);
  border-color: var(--gold);
  box-shadow: var(--card-shadow-hover);
}

.cert-icon {
  display: inline-flex;
  color: var(--leaf);
  margin-bottom: 1.25rem;
}

.cert-card h3 {
  font-size: 1.2rem;
  margin-bottom: 0.65rem;
}

.cert-card p {
  font-size: 0.92rem;
  color: var(--muted);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.cert-status {
  margin-top: auto;
  align-self: flex-start;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #7d5e16;
  background: rgba(201, 168, 76, 0.15);
  border: 1px solid rgba(201, 168, 76, 0.3);
  padding: 0.35rem 0.75rem;
  border-radius: 100px;
}

@media (max-width: 980px) {
  .farm-services-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .products-grid-catalog, .export-specs-grid {
    grid-template-columns: 1fr;
  }
}
</style>
