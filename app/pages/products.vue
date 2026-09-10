<script setup lang="ts">
import { ref, computed } from 'vue'
import { products, farmServices, certifications } from '~/data/site'
import { Coffee, ArrowUpRight, Package, Ship, Plane, MapPin, Cog } from '@lucide/vue'

useSeoMeta({
  title: 'Specialty Coffee Offerings and Green Bean Grades · AFRICOFF Industries',
  description: 'Explore AFRICOFF’s premium Ugandan green coffee catalogue: Bugisu Washed Arabica AA/AB, Natural Drugar, Natural Uganda Robusta (NUR) Screens 12, 15 & 18, and artisanal roasted selections.',
})

const bwanaDrinks = [
  'Cappuccino',
  'Espresso',
  'Americano',
  'Latte',
  'Mocha',
  'Macchiato',
  'Flat White',
  'Iced Cappuccino',
]

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
          <article v-for="prod in filteredProducts" :key="prod.id" class="product-catalog-card">
            <!-- Image hero with overlaid title -->
            <div class="prod-hero">
              <img v-if="prod.image" :src="prod.image" :alt="prod.name" loading="lazy" />
              <div v-else class="prod-hero-fallback" aria-hidden="true"></div>
              <div class="prod-hero-scrim" aria-hidden="true"></div>
              <span class="prod-type-pill">{{ prod.type === 'Value-Added' ? 'Roasted' : prod.type }}</span>
              <h3>{{ prod.name }}</h3>
            </div>

            <div class="prod-body">
              <p class="prod-desc">{{ prod.description }}</p>

              <!-- Compact origin & process chips -->
              <div class="prod-meta-chips">
                <span class="meta-chip" :title="`Origin: ${prod.region}`">
                  <MapPin :size="14" :stroke-width="2.5" /> {{ prod.region }}
                </span>
                <span class="meta-chip" :title="`Process: ${prod.process}`">
                  <Cog :size="14" :stroke-width="2.5" /> {{ prod.process }}
                </span>
              </div>

              <!-- Cup Profile Flavor Notes -->
              <div class="flavor-tags">
                <span v-for="note in prod.cupProfile" :key="note" class="flavor-tag">
                  <Coffee :size="13" :stroke-width="2.5" /> {{ note }}
                </span>
              </div>

              <div class="prod-card-bottom">
                <NuxtLink :to="`/contact?product=${encodeURIComponent(prod.name)}`" class="btn-primary" style="width: 100%; justify-content: center;">
                  <span>Get This Coffee</span>
                  <ArrowUpRight class="btn-icon" :size="18" :stroke-width="2.5" />
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Bwana Koffee Featured Showcase -->
    <section class="py-section bwana-section">
      <div class="shell">
        <div class="center-text" style="margin-bottom: 3rem;">
          <span class="section-label">On the market</span>
          <h2 class="section-title">Meet <em>Bwana Koffee</em></h2>
          <p class="section-subtitle">
            Our retail roasted coffee brand — natural, proudly Ugandan and organic. It's coffee o'clock!
          </p>
        </div>

        <div class="bwana-showcase">
          <div class="bwana-img-wrap">
            <img src="/assets/images/bwana_coffee.jpg" alt="Bwana Koffee 120g Medium Ground retail pack" loading="lazy" />
          </div>
          <div class="bwana-body">
            <img class="bwana-logo" src="/assets/images/bwana.jpg" alt="Bwana Koffee logo" loading="lazy" />
            <h3>Bwana Koffee — 120g Medium Ground</h3>
            <p class="bwana-tagline">"It's coffee o'clock" — a spoonful of hot water is all it takes. Ready in 4 minutes; add sugar and milk to taste.</p>
            <ul class="bwana-points">
              <li>Natural, proudly Ugandan original &amp; organic coffee</li>
              <li>Medium drum roasted and ground for everyday brewing</li>
              <li>Convenient 120g retail pack — store in a cool, dry place</li>
              <li>A product of AFRICOFF Industries (U) Limited, Kampala</li>
            </ul>
            <div class="bwana-actions">
              <NuxtLink to="/contact?product=Bwana%20Koffee" class="btn-primary">
                <span>Order Bwana Koffee</span>
                <ArrowUpRight class="btn-icon" :size="18" :stroke-width="2.5" />
              </NuxtLink>
            </div>
          </div>
          <div class="bwana-catering">
            <img class="bwana-catering-img" src="/assets/images/bwanacoffe.jpeg" alt="Bwana Koffee mobile coffee bar — drinks served at events" loading="lazy" />
            <h4>Mobile Coffee Bar for Your Events</h4>
            <p>We serve a variety of fresh coffee drinks at your function:</p>
            <div class="bwana-drinks">
              <span v-for="drink in bwanaDrinks" :key="drink" class="bwana-drink-tag">{{ drink }}</span>
            </div>
            <p class="bwana-events">Corporate events · Weddings · Baby showers · Graduations · Birthdays · Introductions &amp; more.</p>
            <a class="text-link" href="tel:+256784851072">For orders, call +256 784 851 072 <span><ArrowUpRight :size="16" :stroke-width="2.5" /></span></a>
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
.prod-card-img {
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 14px;
  margin-bottom: 1.25rem;
  background: var(--offwhite);
}

.prod-card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-catalog-card:hover .prod-card-img img {
  transform: scale(1.04);
}

/* Bwana Koffee Showcase */
.bwana-section {
  background: linear-gradient(180deg, var(--cream) 0%, var(--offwhite) 100%);
}

.bwana-showcase {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr 1fr;
  gap: 2.5rem;
  align-items: start;
}

.bwana-img-wrap {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--card-shadow-hover);
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bwana-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bwana-body {
  background: #ffffff;
  border-radius: 20px;
  padding: 2.5rem 2.4rem;
  border: 1px solid var(--line);
  box-shadow: var(--card-shadow);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.bwana-logo {
  max-width: 160px;
  margin-bottom: 1.25rem;
  border-radius: 10px;
}

.bwana-body h3 {
  font-size: 1.5rem;
  color: var(--forest);
  margin-bottom: 0.75rem;
}

.bwana-tagline {
  font-size: 1rem;
  color: var(--gold-ink);
  font-weight: 600;
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

.bwana-points {
  list-style: none;
  display: grid;
  gap: 0.6rem;
  margin-bottom: 1.75rem;
}

.bwana-points li {
  font-size: 0.94rem;
  color: var(--muted);
  padding-left: 1.4rem;
  position: relative;
}

.bwana-points li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--leaf);
  font-weight: 700;
}

.bwana-catering {
  background: var(--forest);
  border-radius: 20px;
  padding: 2.3rem 2.2rem;
  color: #ffffff;
  box-shadow: var(--card-shadow-hover);
}

.bwana-catering-img {
  width: 100%;
  border-radius: 14px;
  margin-bottom: 1.4rem;
}

.bwana-catering h4 {
  font-size: 1.25rem;
  margin-bottom: 0.55rem;
}

.bwana-catering p {
  font-size: 0.94rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 1rem;
}

.bwana-drinks {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.bwana-drink-tag {
  background: rgba(212, 163, 56, 0.18);
  border: 1px solid rgba(212, 163, 56, 0.4);
  color: var(--gold-light);
  font-size: 0.82rem;
  font-weight: 600;
  padding: 0.35rem 0.8rem;
  border-radius: 100px;
}

.bwana-events {
  font-size: 0.85rem !important;
  margin-bottom: 1.2rem !important;
}

.bwana-catering .text-link {
  color: var(--gold-light);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

@media (max-width: 1080px) {
  .bwana-showcase {
    grid-template-columns: 1fr 1fr;
  }
  .bwana-catering {
    grid-column: 1 / -1;
  }
}

@media (max-width: 768px) {
  .bwana-showcase {
    grid-template-columns: 1fr;
  }
}

.products-grid-catalog {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 2.5rem;
}

.product-catalog-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 0;
  border: 1px solid var(--line);
  box-shadow: var(--card-shadow);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: var(--transition);
}

.product-catalog-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--card-shadow-hover);
  border-color: var(--gold);
}

/* --- Image hero with overlaid title --- */
.prod-hero {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: var(--offwhite);
}

.prod-hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.product-catalog-card:hover .prod-hero img {
  transform: scale(1.06);
}

.prod-hero-fallback {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--forest) 0%, var(--roast-umber, #4a2e1b) 100%);
}

.prod-hero-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(20, 40, 28, 0.05) 30%, rgba(15, 30, 20, 0.78) 100%);
  pointer-events: none;
}

.prod-type-pill {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 2;
  background: var(--gold);
  color: #ffffff;
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.4rem 0.9rem;
  border-radius: 100px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}

.prod-hero h3 {
  position: absolute;
  left: 1.4rem;
  right: 1.4rem;
  bottom: 1.1rem;
  z-index: 2;
  color: #ffffff;
  font-size: 1.35rem;
  line-height: 1.25;
  margin: 0;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.45);
}

/* --- Card body --- */
.prod-body {
  padding: 1.6rem 1.5rem 1.8rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.prod-desc {
  font-size: 0.92rem;
  color: var(--muted);
  line-height: 1.6;
  margin-bottom: 1.1rem;
}

.prod-meta-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.1rem;
}

.meta-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  background: var(--offwhite);
  border: 1px solid rgba(26, 61, 43, 0.12);
  color: var(--forest);
  font-size: 0.78rem;
  font-weight: 600;
  padding: 0.35rem 0.75rem;
  border-radius: 100px;
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
  border: 1px solid rgba(212, 163, 56, 0.25);
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
  filter: saturate(1.06) contrast(1.04);
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
  color: var(--gold-ink);
  background: rgba(212, 163, 56, 0.15);
  border: 1px solid rgba(212, 163, 56, 0.3);
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
