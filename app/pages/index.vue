<script setup lang="ts">
import { coreValues } from '~/data/site'
import { ArrowUpRight, ArrowRight, Coffee, Check } from '@lucide/vue'

useSeoMeta({
  title: 'AFRICOFF Industries — Sustainable Coffee Value Chains in Uganda',
  description: 'AFRICOFF Industries connects Ugandan coffee smallholders with modern agro-processing, EUDR-compliant polygon traceability, and premium global markets.',
})
</script>

<template>
  <div>
    <!-- Home Hero — Quantabiz-style layout, AFRICOFF-branded -->
    <HomeHero />

    <!-- Stats Bar -->
    <!-- <StatsCounter /> -->

    <!-- About Section with Asymmetric Image Layering -->
    <section id="about" class="py-section-sm bg-offwhite">
      <div class="shell">
        <div class="about-grid">
          <!-- Left: Layered Imagery -->
          <div class="about-images">
            <img
              src="/assets/images/001.jpg"
              alt="Handpicking ripe coffee cherries"
              class="about-img-main"
              loading="lazy"
            />
            <img
              src="/assets/images/1.jpg"
              alt="Raised drying beds in Uganda"
              class="about-img-accent"
              loading="lazy"
            />
            <div class="about-badge-floating">
              <div class="badge-icon"><Coffee :size="22" :stroke-width="2" /></div>
              <div>
                <div class="badge-text-title">Specialty Origin</div>
                <div class="badge-text-val">Mount Elgon & Rwenzori</div>
              </div>
            </div>
          </div>

          <!-- Right: Text & Values -->
          <div class="about-text-col">
            <span class="section-label">About AFRICOFF Industries</span>
            <h3 class="section-title">
              Pioneering Modern Agribusiness and <em>Farmer Prosperity in Uganda</em>
            </h3>
            <p class="lead" style="margin-bottom: 1.25rem;">
              AFRICOFF Industries (U) Limited is an integrated coffee processing and export enterprise committed to creating ethical, sustainable value chains from cherry to cup.
            </p>
            <p style="margin-bottom: 1.75rem;">
              Working directly with farming communities in Uganda's renowned high-altitude regions, we provide fair-price off-take contracts, climate-smart agronomy training, and precision wet and dry milling to deliver exceptional coffee beans to the world market.
            </p>

            <!-- Core Values Pills -->
            <div style="display: flex; flex-wrap: wrap; gap: 0.65rem; margin-bottom: 2.2rem;">
              <span v-for="val in coreValues.slice(0, 4)" :key="val.title" class="value-pill">
                <Check :size="13" :stroke-width="3" /> {{ val.title }}
              </span>
            </div>

            <div style="display: flex; gap: 1.25rem; align-items: center; flex-wrap: wrap;">
              <NuxtLink to="/about" class="btn-primary">
                <span>Our Story & Mission</span>
                <ArrowRight class="btn-icon" :size="18" :stroke-width="2.5" />
              </NuxtLink>
              <NuxtLink to="/out-growers" class="text-link">
                Smallholder impact <span><ArrowRight :size="16" :stroke-width="2.5" /></span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Grid with 3D Flip Cards -->
    <ServicesGrid />

    <!-- EUDR & Traceability Spotlight Band -->
    <section class="py-section bg-forest">
      <div class="shell">
        <div class="eudr-spotlight-grid">
          <div>
            <span class="section-label light">Regulatory & Climate Leadership</span>
            <!-- <h2 class="section-title light">
              100% Verified <em>EUDR Traceability</em> From Plot to Port
            </h2> -->
            <p class="section-subtitle light" style="margin-bottom: 2rem;">
              In strict adherence to the European Union Deforestation Regulation (EUDR), AFRICOFF maps every farm polygon using high-precision GIS satellite systems to ensure zero deforestation after December 31, 2020.
            </p>

            <div class="eudr-points">
              <div class="eudr-point">
                <div class="point-num">01</div>
                <div>
                  <h4>GPS Polygon Boundary Surveys</h4>
                  <p>Every smallholder farm is digitally mapped and recorded into our centralized traceability ledger.</p>
                </div>
              </div>
              <div class="eudr-point">
                <div class="point-num">02</div>
                <div>
                  <h4>Historical Satellite Risk Verification</h4>
                  <p>Continuous deforestation risk checks verified against European Union observatory reference data.</p>
                </div>
              </div>
              <div class="eudr-point">
                <div class="point-num">03</div>
                <div>
                  <h4>Container Due-Diligence Passports</h4>
                  <p>Complete export documentation including GeoJSON lot coordinates and verifiable farmer IDs.</p>
                </div>
              </div>
            </div>

            <div style="margin-top: 2.5rem;">
              <NuxtLink to="/activities" class="btn-gold">
                <span>Explore EUDR Architecture</span>
                <ArrowUpRight class="btn-icon" :size="18" :stroke-width="2.5" />
              </NuxtLink>
            </div>
          </div>

          <div class="eudr-card-visual">
            <div class="visual-glass-card">
              <div class="card-status-pill">
                <span class="pulse-dot" style="background: var(--sage); box-shadow: 0 0 8px var(--sage);" />
                <span>TRACEABILITY SYSTEM ACTIVE</span>
              </div>
              <h3>Digital Lot Certificate #UG-ELG-2026</h3>
              <div class="lot-meta-grid">
                <div>
                  <span class="meta-label">Origin:</span>
                  <span class="meta-val">Mount Elgon, Uganda</span>
                </div>
                <div>
                  <span class="meta-label">Altitude:</span>
                  <span class="meta-val">1,850m ASL</span>
                </div>
                <div>
                  <span class="meta-label">Variety:</span>
                  <span class="meta-val">SL-14 / SL-28 Arabica</span>
                </div>
                <div>
                  <span class="meta-label">Deforestation Risk:</span>
                  <span class="meta-val" style="color: var(--sage-light);">0.00% (Compliant)</span>
                </div>
              </div>
              <div class="polygon-visual-mock">
                <div class="map-grid-line" />
                <div class="map-polygon" />
                <span class="polygon-tag">GPS Polygon Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects & Initiatives Showcase -->
    <ProjectsShowcase />

    <!-- Strategic Objectives Matrix -->
    <ObjectivesSection />

    <!-- FAQ Accordion -->
    <FaqSection />

    <!-- Call To Action -->
    <CallToAction />
  </div>
</template>

<style scoped>
.pulse-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #75f36b;
  box-shadow: 0 0 0 0 rgba(117, 243, 107, 0.7);
  animation: pulseDot 2.2s infinite;
}

@keyframes pulseDot {
  0% { box-shadow: 0 0 0 0 rgba(117, 243, 107, 0.7); }
  70% { box-shadow: 0 0 0 12px rgba(117, 243, 107, 0); }
  100% { box-shadow: 0 0 0 0 rgba(117, 243, 107, 0); }
}

/* EUDR Spotlight */
.eudr-spotlight-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 5rem;
  align-items: center;
}

.eudr-points {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.eudr-point {
  display: flex;
  gap: 1.4rem;
  align-items: flex-start;
}

.point-num {
  font-family: var(--heading-font);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--gold-light);
  background: rgba(201, 168, 76, 0.15);
  border: 1px solid rgba(201, 168, 76, 0.35);
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.eudr-point h4 {
  color: #ffffff;
  font-size: 1.15rem;
  margin-bottom: 0.35rem;
}

.eudr-point p {
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.92rem;
  line-height: 1.55;
}

.visual-glass-card {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(201, 168, 76, 0.35);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.35);
}

.card-status-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(82, 183, 136, 0.18);
  border: 1px solid rgba(82, 183, 136, 0.4);
  color: var(--sage-light);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 0.35rem 0.85rem;
  border-radius: 100px;
  margin-bottom: 1.5rem;
}

.visual-glass-card h3 {
  color: #ffffff;
  font-size: 1.35rem;
  margin-bottom: 1.5rem;
}

.lot-meta-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
  background: rgba(0, 0, 0, 0.2);
  padding: 1.25rem;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.meta-label {
  display: block;
  font-size: 0.75rem;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.2rem;
}

.meta-val {
  font-weight: 600;
  font-size: 0.95rem;
  color: #ffffff;
}

.polygon-visual-mock {
  height: 140px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(76, 175, 80, 0.45), rgba(27, 94, 32, 0.85));
  border: 1px solid rgba(255, 255, 255, 0.15);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-polygon {
  position: absolute;
  width: 90px;
  height: 70px;
  border: 2px dashed var(--gold-light);
  background: rgba(201, 168, 76, 0.18);
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
}

.polygon-tag {
  position: relative;
  z-index: 2;
  font-size: 0.82rem;
  font-weight: 700;
  color: #ffffff;
  background: rgba(27, 94, 32, 0.85);
  padding: 0.4rem 0.9rem;
  border-radius: 100px;
  border: 1px solid var(--gold);
}

@media (max-width: 1024px) {
  .eudr-spotlight-grid {
    grid-template-columns: 1fr;
    gap: 3.5rem;
  }
}
</style>
