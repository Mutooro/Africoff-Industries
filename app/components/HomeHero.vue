<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { ArrowUpRight, Leaf, Coffee, Satellite, Lock } from '@lucide/vue'

interface Props {
  badgeText?: string
  titlePrefix?: string
  rotatingWords?: string[]
  titleSuffix?: string
  description?: string
  primaryBtnText?: string
  primaryBtnLink?: string
  secondaryBtnText?: string
  secondaryBtnLink?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

const props = withDefaults(defineProps<Props>(), {
  badgeText: 'Sustainable Coffee Value Chains · Uganda',
  titlePrefix: 'Exceptional',
  rotatingWords: () => ['Ugandan Coffee', 'Arabica & Robusta', 'Specialty Lots', 'Highland Harvests'],
  titleSuffix: 'Built for a Sustainable Future.',
  description:
    'From smallholder farms to global markets, AFRICOFF delivers traceable, specialty-grade coffee that creates lasting value for growers and buyers alike.',
  primaryBtnText: 'Explore Our Coffee',
  primaryBtnLink: '/products',
  secondaryBtnText: 'Our Out-Growers',
  secondaryBtnLink: '/out-growers',
  typingSpeed: 90,
  deletingSpeed: 45,
  pauseDuration: 2200,
})

const displayText = ref('')
const currentWordIndex = ref(0)
const isDeleting = ref(false)
const isPaused = ref(false)
let timer: ReturnType<typeof setTimeout> | null = null

const currentTargetWord = computed(() => {
  return props.rotatingWords[currentWordIndex.value] || ''
})

const tick = () => {
  const currentWord = currentTargetWord.value

  if (isDeleting.value) {
    displayText.value = currentWord.substring(0, displayText.value.length - 1)
  } else {
    displayText.value = currentWord.substring(0, displayText.value.length + 1)
  }

  let delay = isDeleting.value ? props.deletingSpeed : props.typingSpeed

  if (!isDeleting.value && displayText.value === currentWord) {
    isPaused.value = true
    delay = props.pauseDuration
    isDeleting.value = true
  } else if (isDeleting.value && displayText.value === '') {
    isPaused.value = false
    isDeleting.value = false
    currentWordIndex.value = (currentWordIndex.value + 1) % props.rotatingWords.length
    delay = 350
  } else {
    isPaused.value = false
  }

  timer = setTimeout(tick, delay)
}

onMounted(() => {
  if (props.rotatingWords.length > 0) {
    displayText.value = props.rotatingWords[0].substring(0, 1)
    timer = setTimeout(tick, props.typingSpeed)
  }
})

onUnmounted(() => {
  if (timer) clearTimeout(timer)
})
</script>

<template>
  <section class="hh-hero" aria-label="AFRICOFF Home Hero">
    <div class="hh-card">
      <!-- Ambient Background Lighting -->
      <div class="hh-ambient" aria-hidden="true">
        <div class="glow-orb glow-gold" />
        <div class="glow-orb glow-forest" />
        <div class="grid-overlay" />
      </div>

      <div class="hh-grid">
        <!-- Left Column: Copy & CTAs -->
        <div class="hh-text">
          <!-- Live Indicator Badge -->
          <div v-if="badgeText" class="hh-badge">
            <span class="pulse-dot-gold" aria-hidden="true" />
            <span class="badge-text">{{ badgeText }}</span>
          </div>

          <!-- Headline with Typewriter Dynamic Text -->
          <h1 class="hh-title">
            <span class="title-prefix">{{ titlePrefix }} </span>
            <span class="typewriter-box">
              <span class="dynamic-highlight">{{ displayText }}</span>
              <span
                class="dynamic-caret"
                :class="{ 'caret-paused': isPaused }"
                aria-hidden="true"
              />
            </span>
            <br />
            <span class="title-suffix">{{ titleSuffix }}</span>
          </h1>

          <!-- Subtitle / Value Prop -->
          <p class="hh-subtitle">
            {{ description }}
          </p>

          <!-- Dual CTA Buttons -->
          <div class="hh-actions">
            <NuxtLink :to="primaryBtnLink" class="hh-btn-primary">
              <span>{{ primaryBtnText }}</span>
              <ArrowUpRight class="btn-arrow" :size="18" :stroke-width="2.5" />
            </NuxtLink>

            <NuxtLink :to="secondaryBtnLink" class="hh-btn-secondary">
              <span>{{ secondaryBtnText }}</span>
            </NuxtLink>
          </div>

          <!-- Origin Highlights / Social Proof -->
          <!-- <div class="hh-highlights">
            <div class="highlight-item">
              <span class="highlight-icon"><Leaf :size="15" :stroke-width="2.5" /></span>
              <span>100% Deforestation-Free</span>
            </div>
            <div class="highlight-item">
              <span class="highlight-icon"><Coffee :size="15" :stroke-width="2.5" /></span>
              <span>Specialty Arabica &amp; Robusta</span>
            </div>
            <div class="highlight-item">
              <span class="highlight-icon"><Satellite :size="15" :stroke-width="2.5" /></span>
              <span>GIS Polygon Traceability</span>
            </div>
          </div> -->
        </div>

        <!-- Right Column: Traceability Dashboard Mockup -->
        <div class="hh-visual" aria-hidden="true">
          <div class="trace-card-frame">
            <!-- Browser Header Bar -->
            <div class="trace-header">
              <div class="browser-dots">
                <span class="dot dot-red" />
                <span class="dot dot-yellow" />
                <span class="dot dot-green" />
              </div>
              <div class="browser-address">
                <Lock :size="13" :stroke-width="2" />
                <span>africoff.industries/traceability</span>
              </div>
              <div class="trace-status-chip">
                <span class="chip-dot" />
                <span>EUDR VERIFIED</span>
              </div>
            </div>

            <!-- Dashboard Screen Mockup -->
            <div class="trace-screen">
              <!-- Top Metrics Bar -->
              <div class="trace-metrics">
                <div class="metric-card">
                  <span class="metric-label">SCA Cup Score</span>
                  <div class="metric-val">86.5 <span class="trend-up">↑ 2 pts</span></div>
                </div>
                <div class="metric-card">
                  <span class="metric-label">Active Farmers</span>
                  <div class="metric-val">5,000+ <span class="trend-up">↑ 12%</span></div>
                </div>
              </div>

              <!-- Lot Workflow Visualization -->
              <div class="lot-stream">
                <div class="lot-step active-step">
                  <div class="step-badge">01</div>
                  <div class="step-info">
                    <h4>Cherry Intake</h4>
                    <p>Mount Elgon lot received &amp; weighed</p>
                  </div>
                  <span class="step-status">Verified</span>
                </div>

                <div class="lot-connector" />

                <div class="lot-step processing-step">
                  <div class="step-badge">02</div>
                  <div class="step-info">
                    <h4>Quality Analysis</h4>
                    <p>Cupping &amp; grading in progress</p>
                  </div>
                  <span class="step-status running">86.5 SCA</span>
                </div>

                <div class="lot-connector" />

                <div class="lot-step">
                  <div class="step-badge">03</div>
                  <div class="step-info">
                    <h4>Export Dispatch</h4>
                    <p>GeoJSON docs &amp; due-diligence filed</p>
                  </div>
                  <span class="step-status queued">Scheduled</span>
                </div>
              </div>

              <!-- Floating Live Activity Pill -->
              <div class="trace-pill">
                <span class="pill-dot" />
                <span>1,847 farm polygons verified this season</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <a href="#about" class="hh-scroll" aria-label="Scroll to content">
        <span class="scroll-text">SCROLL</span>
        <div class="scroll-line" />
      </a> -->
    </div>
  </section>
</template>

<style scoped>
/* Base Section — light page band the hero card floats on */
.hh-hero {
  position: relative;
  background: var(--offwhite);
  padding: 2.5rem 0 3.5rem;
}

/* Inset, rounded hero card (Quantabiz-style positioning) */
.hh-card {
  position: relative;
  width: min(1400px, calc(100% - 3rem));
  margin-inline: auto;
  min-height: clamp(540px, calc(100svh - 310px), 800px);
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 28px;
  background: var(--forest-dark);
  color: #ffffff;
  border: 1px solid rgba(212, 175, 55, 0.16);
  box-shadow:
    0 30px 70px rgba(10, 35, 25, 0.22),
    0 6px 18px rgba(10, 35, 25, 0.12);
}

/* Ambient Lighting & Grid */
.hh-ambient {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.glow-orb {
  position: absolute;
  width: 550px;
  height: 550px;
  border-radius: 50%;
  filter: blur(140px);
}

.glow-gold {
  top: -160px;
  left: -140px;
  background: var(--gold);
  opacity: 0.16;
}

.glow-forest {
  bottom: -220px;
  right: -120px;
  background: var(--forest-light);
  opacity: 0.24;
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-size: 40px 40px;
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  mask-image: radial-gradient(ellipse at center, black 35%, transparent 80%);
}

/* 2-Column Split Grid */
.hh-grid {
  position: relative;
  z-index: 2;
  width: min(1240px, calc(100% - 6rem));
  margin-inline: auto;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 4rem;
  align-items: center;
  padding: 4.5rem 0 4rem;
}

/* Left Column */
.hh-text {
  max-width: 680px;
  opacity: 0;
  transform: translateY(22px);
  animation: heroContentReveal 0.95s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes heroContentReveal {
  from {
    opacity: 0;
    transform: translateY(22px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Badge */
.hh-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.55rem 1.1rem;
  background: rgba(212, 175, 55, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.35);
  border-radius: 9999px;
  backdrop-filter: blur(10px);
  margin-bottom: 2rem;
}

.pulse-dot-gold {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--gold-light);
  box-shadow: 0 0 10px var(--gold-light);
  animation: goldPulse 2s infinite ease-in-out;
}

@keyframes goldPulse {
  0% { transform: scale(0.95); opacity: 0.8; }
  50% { transform: scale(1.35); opacity: 1; box-shadow: 0 0 14px var(--gold-light); }
  100% { transform: scale(0.95); opacity: 0.8; }
}

.badge-text {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--gold-light);
}

/* Title & Typewriter */
.hh-title {
  font-family: var(--heading-font);
  font-size: clamp(2.2rem, 4vw, 3.25rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: 0;
  color: #ffffff;
  margin-bottom: 1.5rem;
}

.title-prefix, .title-suffix {
  color: #ffffff;
}

.typewriter-box {
  display: inline-flex;
  align-items: baseline;
  position: relative;
  min-height: 1.1em;
}

.dynamic-highlight {
  color: var(--gold-light);
  text-shadow: 0 0 28px var(--gold-glow);
  font-weight: 700;
}

.dynamic-caret {
  display: inline-block;
  width: 4px;
  height: 0.85em;
  margin-left: 5px;
  background-color: var(--gold-light);
  box-shadow: 0 0 10px var(--gold-light);
  border-radius: 2px;
  vertical-align: middle;
  animation: blinkCaret 0.85s infinite;
}

.dynamic-caret.caret-paused {
  animation-duration: 1.1s;
}

@keyframes blinkCaret {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Subtitle */
.hh-subtitle {
  font-size: clamp(1.05rem, 1.4vw, 1.22rem);
  line-height: 1.68;
  color: rgba(249, 246, 240, 0.82);
  margin-bottom: 2.4rem;
  max-width: 620px;
}

/* Actions */
.hh-actions {
  display: flex;
  align-items: center;
  gap: 1.1rem;
  flex-wrap: wrap;
  margin-bottom: 2.6rem;
}

.hh-btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  background: linear-gradient(135deg, var(--gold-light), var(--gold));
  color: var(--forest-dark);
  font-size: 1rem;
  font-weight: 700;
  padding: 0.95rem 1.9rem;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 24px var(--gold-glow);
  transition: var(--transition);
}

.hh-btn-primary:hover {
  background: linear-gradient(135deg, #f2da8b, var(--gold-light));
  color: var(--forest-dark);
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(212, 175, 55, 0.45);
}

.btn-arrow {
  transition: transform 0.25s ease;
}

.hh-btn-primary:hover .btn-arrow {
  transform: translate(2px, -2px);
}

.hh-btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.95rem 1.9rem;
  border-radius: 9999px;
  border: 1.5px solid rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(12px);
  transition: var(--transition);
}

.hh-btn-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.45);
  transform: translateY(-2px);
  color: #ffffff;
}

/* Highlights */
.hh-highlights {
  display: flex;
  gap: 1.2rem 2rem;
  flex-wrap: wrap;
  padding-top: 1.6rem;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
}

.highlight-icon {
  display: inline-flex;
  align-items: center;
  color: var(--gold-light);
}

/* Right Column - Traceability Dashboard Mockup */
.hh-visual {
  display: flex;
  justify-content: center;
  perspective: 1000px;
}

.trace-card-frame {
  width: 100%;
  max-width: 540px;
  background: rgba(8, 26, 19, 0.7);
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 20px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5), 0 0 30px var(--gold-glow);
  backdrop-filter: blur(20px);
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px) translateX(18px) scale(0.98);
  animation:
    heroCardReveal 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards,
    floatCard 6s ease-in-out 1.3s infinite;
}

@keyframes heroCardReveal {
  from {
    opacity: 0;
    transform: translateY(30px) translateX(18px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) translateX(0) scale(1);
  }
}

@keyframes floatCard {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.trace-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.85rem 1.25rem;
  background: rgba(5, 18, 13, 0.85);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.browser-dots {
  display: flex;
  gap: 6px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.dot-red { background: #ef4444; }
.dot-yellow { background: #eab308; }
.dot-green { background: #22c55e; }

.browser-address {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.6);
  background: rgba(0, 0, 0, 0.3);
  padding: 0.35rem 0.8rem;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.trace-status-chip {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.65rem;
  font-weight: 700;
  color: var(--gold-light);
  background: rgba(212, 175, 55, 0.12);
  padding: 0.25rem 0.55rem;
  border-radius: 100px;
  border: 1px solid rgba(212, 175, 55, 0.35);
}

.chip-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: var(--gold-light);
  box-shadow: 0 0 6px var(--gold-light);
}
/* Dashboard Screen Content */
.trace-screen {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.trace-metrics {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.metric-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1rem;
}

.metric-label {
  display: block;
  font-size: 0.7rem;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
  letter-spacing: 0.08em;
  margin-bottom: 0.35rem;
}

.metric-val {
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffffff;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem;
}

.trend-up {
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--sage-light);
}

/* Lot Workflow Steps */
.lot-stream {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.lot-step {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  background: rgba(0, 0, 0, 0.32);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 0.85rem 1rem;
}

.lot-step.active-step {
  border-color: rgba(212, 175, 55, 0.4);
  background: rgba(212, 175, 55, 0.08);
}

.lot-step.processing-step {
  border-color: rgba(155, 197, 91, 0.35);
  background: rgba(155, 197, 91, 0.06);
}

.step-badge {
  font-size: 0.72rem;
  font-weight: 700;
  width: 26px;
  height: 26px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(212, 175, 55, 0.15);
  border: 1px solid rgba(212, 175, 55, 0.3);
  color: var(--gold-light);
  flex-shrink: 0;
}

.step-info h4 {
  font-size: 0.88rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.15rem;
}

.step-info p {
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.6);
}

.step-status {
  margin-left: auto;
  font-size: 0.68rem;
  font-weight: 700;
  padding: 0.25rem 0.55rem;
  border-radius: 6px;
  background: rgba(155, 197, 91, 0.15);
  color: var(--sage-light);
  flex-shrink: 0;
}

.step-status.running {
  background: rgba(212, 175, 55, 0.15);
  color: var(--gold-light);
}

.step-status.queued {
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.5);
}

.lot-connector {
  width: 2px;
  height: 8px;
  background: rgba(255, 255, 255, 0.15);
  margin-left: 22px;
}

.trace-pill {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  background: rgba(212, 175, 55, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 8px;
  padding: 0.65rem 0.9rem;
  font-size: 0.74rem;
  font-weight: 600;
  color: var(--gold-light);
}

.pill-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--gold-light);
  box-shadow: 0 0 8px var(--gold-light);
  flex-shrink: 0;
}

/* Scroll Indicator */
.hh-scroll {
  position: absolute;
  bottom: 2.2rem;
  right: 4rem;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  font-weight: 700;
}

.scroll-line {
  width: 2px;
  height: 44px;
  background: rgba(255, 255, 255, 0.25);
  position: relative;
  overflow: hidden;
}

.scroll-line::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: var(--gold-light);
  animation: scrollAnim 2s infinite ease-in-out;
}

@keyframes scrollAnim {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(200%); }
}

/* Responsive */
@media (max-width: 1024px) {
  .hh-hero {
    padding: 1.75rem 0 2.5rem;
  }

  .hh-card {
    width: calc(100% - 2.5rem);
    min-height: 0;
    border-radius: 22px;
  }

  .hh-grid {
    width: calc(100% - 4.5rem);
    grid-template-columns: 1fr;
    gap: 3.5rem;
    text-align: center;
    padding: 4rem 0 3.5rem;
  }

  .hh-text {
    max-width: 100%;
    margin-inline: auto;
  }

  .hh-subtitle {
    margin-inline: auto;
  }

  .hh-actions {
    justify-content: center;
  }

  .hh-highlights {
    justify-content: center;
  }

  .lot-connector {
    margin-inline: auto;
  }

  .hh-scroll {
    display: none;
  }
}

@media (max-width: 768px) {
  .hh-hero {
    padding: 1rem 0 1.75rem;
  }

  .hh-card {
    width: calc(100% - 1.5rem);
    border-radius: 18px;
  }

  .hh-grid {
    width: calc(100% - 2.75rem);
    padding: 3rem 0 2.75rem;
  }

  .hh-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .hh-btn-primary,
  .hh-btn-secondary {
    width: 100%;
  }

  .trace-metrics {
    grid-template-columns: 1fr;
  }
}
</style>