<script setup lang="ts">
import { coreValues, stats, teamMembers, companyFacts, industryMemberships } from '~/data/site'
import { Globe, Target, Flag, ArrowRight } from '@lucide/vue'

useSeoMeta({
  title: 'About Us · AFRICOFF Industries (U) Limited',
  description: 'Learn about AFRICOFF Industries: our origin story, vision, leadership, farm footprints in Mount Elgon and Rwenzori, and commitment to sustainable coffee processing in Uganda.',
})
</script>

<template>
  <div>
    <section class="page-intro">
      <div class="shell">
        <div class="page-intro-inner">
          <span class="section-label">Who we are</span>
          <h1>Building an Ethical, <em>World-Class Coffee Future</em> in Uganda</h1>
          <p>Connecting smallholder farming communities with modern agro-processing technology, verified EUDR traceability, and global specialty markets.</p>
        </div>
      </div>
    </section>

    <!-- Company Facts Strip -->
    <section class="facts-strip">
      <div class="shell facts-grid">
        <div v-for="fact in companyFacts" :key="fact.label" class="fact-box">
          <span class="fact-label">{{ fact.label }}</span>
          <span class="fact-value">{{ fact.value }}</span>
        </div>
      </div>
    </section>

    <!-- Mission & Vision Dual Cards -->
    <section class="py-section bg-offwhite">
      <div class="shell">
        <div class="center-text" style="margin-bottom: 3.5rem;">
          <span class="section-label">Our Guiding Purpose</span>
          <h3 class="section-title">
            Driven by Quality, <em>Sustained by Community</em>
          </h3>
        </div>

        <div class="vision-mission-grid">
          <div class="purpose-card vision-card">
            <div class="purpose-icon"><Globe :size="34" :stroke-width="1.8" /></div>
            <h3>Our Vision</h3>
            <p>
              To become East Africa's leading sustainable agribusiness enterprise, celebrated globally for pristine coffee quality, authentic deforestation-free traceability, and transformational prosperity for smallholder farming families.
            </p>
          </div>

          <div class="purpose-card mission-card">
            <div class="purpose-icon"><Target :size="34" :stroke-width="1.8" /></div>
            <h3>Our Mission</h3>
            <p>
              To bridge the gap between Ugandan coffee growers and the international market by deploying modern eco-processing technologies, transparent price incentives, regenerative agricultural education, and uncompromising quality assurance.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Story & Narrative -->
    <section class="py-section-lg bg-cream">
      <div class="shell">
        <div class="about-grid">
          <div class="about-images">
            <SafeImage
              src="/assets/images/image3.jpg"
              alt="Highland coffee plantation landscape"
              class="about-img-main"
              loading="lazy"
            />
            <SafeImage
              src="/assets/images/women.jpeg"
              alt="Farmer inspecting coffee harvest"
              class="about-img-accent"
              loading="lazy"
            />
            <div class="about-badge-floating">
              <div class="badge-icon"><Flag :size="22" :stroke-width="2" /></div>
              <div>
                <div class="badge-text-title">Footprint</div>
                <div class="badge-text-val">Elgon, Rwenzori & Central</div>
              </div>
            </div>
          </div>

          <div>
            <span class="section-label">Our Heritage & Origins</span>
            <h3 class="section-title">
              Rooted in the Rich Soils of <em>Uganda’s Highlands</em>
            </h3>
            <p class="lead" style="margin-bottom: 1.25rem;">
              Uganda is blessed with some of the world's most exceptional coffee-growing microclimates, from the mist-covered volcanic slopes of Mount Elgon to the snowcapped Rwenzori mountains and lush Lake Victoria basin.
            </p>
            <p style="margin-bottom: 1.25rem;">
              AFRICOFF Industries (U) Limited was founded in 2021 and incorporated in 2025 under the Companies Act of Uganda. From our headquarters in Kampala, we specialise in the production, processing, value addition, and export of high-quality coffee and other agricultural products.
            </p>
            <p style="margin-bottom: 1.25rem;">
              AFRICOFF was established to overcome traditional supply chain fragmentation. By operating decentralized washing stations and central milling hubs, we eliminate exploitative middlemen and preserve bean freshness straight from harvest.
            </p>
            <p style="margin-bottom: 2rem;">
              Today, we serve as a trusted bridge for over 5,000 smallholders, ensuring every bag exported meets rigorous international standards while rewarding growers with transparent living premiums.
            </p>
            <NuxtLink to="/activities" class="btn-primary">
              <span>Explore Our Operations</span>
              <ArrowRight class="btn-icon" :size="18" :stroke-width="2.5" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values Section -->
    <section class="py-section bg-offwhite">
      <div class="shell">
        <div class="center-text" style="margin-bottom: 3.5rem;">
          <span class="section-label">Foundational Principles</span>
          <h3 class="section-title">
            The Values That <em>Guide Every Harvest</em>
          </h3>
          <p class="section-subtitle">
            Integrity, stewardship, and equity are embedded across every level of our operations and farmer partnerships.
          </p>
        </div>

        <div class="values-grid">
          <div v-for="(val, index) in coreValues" :key="val.title" class="val-card">
            <div class="val-num">0{{ index + 1 }}</div>
            <h3>{{ val.title }}</h3>
            <p>{{ val.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Team Section -->
    <section id="team" class="py-section bg-cream">
      <div class="shell">
        <div class="center-text" style="margin-bottom: 3.5rem;">
          <span class="section-label">Leadership &amp; Governance</span>
          <h3 class="section-title">
            The People Behind <em>Every Harvest</em>
          </h3>
          <p class="section-subtitle team-subtitle">
            Behind AFRICOFF’s growth is a dedicated leadership team committed to ethical sourcing, financial integrity, and operational excellence — the people who turn Uganda’s coffee promise into a dependable supply for partners worldwide.
          </p>
        </div>

        <div class="team-grid">
          <article v-for="member in teamMembers" :key="member.name" class="team-card">
            <div class="team-avatar" aria-hidden="true">
              <span class="team-initials">{{ member.initials }}</span>
            </div>
            <h3 class="team-name">{{ member.name }}</h3>
            <span class="team-role">{{ member.role }}</span>
            <p class="team-bio">{{ member.bio }}</p>
            <span v-if="member.pending" class="team-pending">Profile pending publication</span>
          </article>
        </div>
      </div>
    </section>

    <!-- Geographic Footprint Map Strip -->
    <section class="py-section bg-forest">
      <div class="shell">
        <div class="center-text" style="margin-bottom: 3.5rem;">
          <span class="section-label light">Operational Footprint</span>
          <h2 class="section-title light">
            Where We Grow, <em>Process & Flourish</em>
          </h2>
          <p class="section-subtitle light">
            Strategically situated across Uganda's prime Arabica and Robusta cultivation corridors.
          </p>
        </div>

        <div class="regions-grid">
          <div class="region-box">
            <span class="region-badge">Eastern Region</span>
            <h3>Mount Elgon Hub (Mbale)</h3>
            <p class="region-elev">Altitude: 1,600m - 2,200m ASL</p>
            <p>Volcanic soils producing world-renowned washed Bugisu Arabica (Grades AA, AB, PB) with vibrant citric acidity and stone fruit complexity.</p>
          </div>

          <div class="region-box">
            <span class="region-badge">Western Region</span>
            <h3>Rwenzori Foothills (Kasese)</h3>
            <p class="region-elev">Altitude: 1,400m - 1,900m ASL</p>
            <p>Glacial-fed mountain streams nurturing sun-dried Natural Drugar and washed specialty micro-lots known for wild berry richness.</p>
          </div>

          <div class="region-box">
            <span class="region-badge">Central Region</span>
            <h3>Kampala HQ & Milling Facility</h3>
            <p class="region-elev">Central Export Logistics Hub</p>
            <p>Centralized modern dry milling, optical color sorting, cupping laboratory, artisanal roasting plant, and export container consolidation.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Partnerships & Industry Memberships -->
    <section class="py-section bg-offwhite">
      <div class="shell">
        <div class="center-text" style="margin-bottom: 3.5rem;">
          <span class="section-label">Partnerships &amp; collaborations</span>
          <h2 class="section-title">
            Strengthened by <em>Industry Partnerships</em>
          </h2>
          <p class="section-subtitle">
            We foster strategic partnerships with farmers, suppliers, buyers, and development organisations — and are proud members of Uganda's leading industry associations.
          </p>
        </div>

        <div class="memberships-grid">
          <article v-for="org in industryMemberships" :key="org.name" class="membership-card">
            <div class="membership-icon"><component :is="org.icon" :size="26" :stroke-width="2" /></div>
            <h3>{{ org.name }}</h3>
            <p>{{ org.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <CallToAction />
  </div>
</template>

<style scoped>
.vision-mission-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
}

.purpose-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 3rem 2.5rem;
  border: var(--card-border);
  box-shadow: var(--shadow-green);
  transition: var(--transition);
}

.purpose-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--card-shadow-hover);
  border-color: var(--gold);
}

.purpose-icon {
  display: inline-flex;
  color: var(--leaf);
  margin-bottom: 1.25rem;
}

.purpose-card h3 {
  font-size: 1.6rem;
  margin-bottom: 1rem;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.75rem;
}

.val-num {
  font-family: var(--heading-font);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--gold-ink);
  margin-bottom: 0.75rem;
}

.regions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.region-box {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 18px;
  padding: 2.5rem 2rem;
  color: #ffffff;
  transition: var(--transition);
}

.region-box:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--gold);
  transform: translateY(-3px);
}

.region-badge {
  display: inline-block;
  background: rgba(212, 163, 56, 0.2);
  border: 1px solid var(--gold);
  color: var(--gold-light);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.3rem 0.75rem;
  border-radius: 100px;
  margin-bottom: 1rem;
}

.region-box h3 {
  color: #ffffff;
  font-size: 1.4rem;
  margin-bottom: 0.4rem;
}

.region-elev {
  color: var(--sage-light);
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.region-box p:last-child {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.94rem;
  line-height: 1.6;
}

/* Our Team */
.team-subtitle {
  text-align: justify;
  text-justify: inter-word;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
  align-items: stretch;
}

.team-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 2.6rem 2rem;
  border: var(--card-border);
  box-shadow: var(--shadow-green);
  transition: var(--transition);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.team-card:hover {
  transform: translateY(-4px);
  border-color: var(--gold);
  box-shadow: var(--card-shadow-hover);
}

.team-avatar {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--forest) 0%, var(--forest-dark) 100%);
  border: 3px solid var(--gold);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.4rem;
  box-shadow: 0 8px 20px -8px rgba(11, 34, 26, 0.35);
}

.team-initials {
  font-family: var(--heading-font);
  font-size: 1.9rem;
  font-weight: 700;
  color: var(--gold-light);
  letter-spacing: 0.04em;
}

.team-name {
  font-family: var(--heading-font);
  font-size: 1.35rem;
  margin-bottom: 0.6rem;
}

.team-role {
  font-family: var(--body-font);
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--gold-hover);
  margin-bottom: 1.1rem;
}

.team-bio {
  font-family: var(--body-font);
  font-size: 0.92rem;
  color: var(--muted);
  line-height: 1.7;
  text-align: justify;
  text-justify: inter-word;
}

@media (max-width: 1024px) {
  .team-grid {
    grid-template-columns: 1fr 1fr;
  }
}

/* Company Facts Strip */
.facts-strip {
  background: var(--cream);
  border-bottom: 1px solid var(--line);
  padding: 2.75rem 0;
}

.facts-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.fact-box {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.fact-label {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--gold-hover);
}

.fact-value {
  font-family: var(--heading-font);
  font-size: 1.02rem;
  font-weight: 600;
  color: var(--forest);
  line-height: 1.4;
}

/* Industry Memberships */
.memberships-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.membership-card {
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 2.5rem 2rem;
  box-shadow: var(--card-shadow);
  transition: var(--transition);
}

.membership-card:hover {
  transform: translateY(-4px);
  border-color: var(--gold);
  box-shadow: var(--card-shadow-hover);
}

.membership-icon {
  display: inline-flex;
  color: var(--leaf);
  margin-bottom: 1.25rem;
}

.membership-card h3 {
  font-size: 1.2rem;
  margin-bottom: 0.65rem;
}

.membership-card p {
  font-size: 0.92rem;
  color: var(--muted);
  line-height: 1.6;
}

/* Pending team profile tag */
.team-pending {
  margin-top: auto;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--gold-hover);
  background: rgba(212, 163, 56, 0.12);
  border: 1px solid rgba(212, 163, 56, 0.3);
  padding: 0.35rem 0.75rem;
  border-radius: 100px;
}

@media (max-width: 900px) {
  .facts-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .vision-mission-grid, .values-grid, .regions-grid, .team-grid, .memberships-grid {
    grid-template-columns: 1fr;
  }

  .facts-grid {
    grid-template-columns: 1fr;
  }
}
</style>
