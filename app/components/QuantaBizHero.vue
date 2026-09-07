<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { ArrowRight, Zap, ShieldCheck, RefreshCw, Lock } from '@lucide/vue'

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
  badgeText: 'Enterprise AI & Autonomous Systems',
  titlePrefix: 'Intelligent',
  rotatingWords: () => ['Automation', 'Agents', 'AI', 'Workflows', 'ERP Systems'],
  titleSuffix: 'Built For Business',
  description:
    'We put AI at the heart of your enterprise — from autonomous agents that reason and act, to smart ERP systems that learn and optimize operations in real time.',
  primaryBtnText: 'Get Started',
  primaryBtnLink: '#contact',
  secondaryBtnText: 'Our Services',
  secondaryBtnLink: '#services',
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
  <section class="qb-hero" aria-label="Enterprise Intelligence Hero Section">
    <!-- Ambient Background Lighting -->
    <div class="qb-ambient-glow" aria-hidden="true">
      <div class="glow-orb glow-top-left" />
      <div class="glow-orb glow-bottom-right" />
      <div class="grid-overlay" />
    </div>

    <div class="qb-container">
      <div class="qb-hero-grid">
        <!-- Left Column: Copy & CTAs -->
        <div class="qb-hero-text">
          <!-- Live Indicator Badge -->
          <div v-if="badgeText" class="qb-badge">
            <span class="pulse-indicator" aria-hidden="true" />
            <span class="badge-text">{{ badgeText }}</span>
          </div>

          <!-- Headline with Typewriter Dynamic Text -->
          <h1 class="qb-title">
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
          <p class="qb-subtitle">
            {{ description }}
          </p>

          <!-- Dual CTA Buttons -->
          <div class="qb-actions">
            <NuxtLink :to="primaryBtnLink" class="btn-primary-action">
              <span>{{ primaryBtnText }}</span>
              <ArrowRight class="btn-arrow" :size="18" :stroke-width="2.5" />
            </NuxtLink>

            <NuxtLink :to="secondaryBtnLink" class="btn-secondary-action">
              <span>{{ secondaryBtnText }}</span>
            </NuxtLink>
          </div>

          <!-- Enterprise Highlights / Social Proof -->
          <div class="qb-highlights">
            <div class="highlight-item">
              <span class="highlight-icon"><Zap :size="15" :stroke-width="2.5" /></span>
              <span>Sub-second Agent Execution</span>
            </div>
            <div class="highlight-item">
              <span class="highlight-icon"><ShieldCheck :size="15" :stroke-width="2.5" /></span>
              <span>SOC2 & GDPR Compliant</span>
            </div>
            <div class="highlight-item">
              <span class="highlight-icon"><RefreshCw :size="15" :stroke-width="2.5" /></span>
              <span>Seamless ERP Sync</span>
            </div>
          </div>
        </div>

        <!-- Right Column: Interactive Browser & Visual Dashboard Mockup -->
        <div class="qb-hero-visual" aria-hidden="true">
          <div class="browser-card-frame">
            <!-- Browser Header Bar -->
            <div class="browser-header">
              <div class="browser-dots">
                <span class="dot dot-red" />
                <span class="dot dot-yellow" />
                <span class="dot dot-green" />
              </div>
              <div class="browser-address">
                <Lock :size="13" :stroke-width="2" />
                <span>https://app.quantabiz.tech/live-agent-orchestrator</span>
              </div>
              <div class="browser-status-chip">
                <span class="chip-dot" />
                <span>ACTIVE</span>
              </div>
            </div>

            <!-- Browser Inner Screen Mockup -->
            <div class="browser-screen">
              <!-- Top Metrics Bar -->
              <div class="screen-metrics-grid">
                <div class="metric-card">
                  <span class="metric-label">Agent Latency</span>
                  <div class="metric-val">12ms <span class="trend-up">↓ 42%</span></div>
                </div>
                <div class="metric-card">
                  <span class="metric-label">Automated Tasks</span>
                  <div class="metric-val">148,290 <span class="trend-up">↑ 99.8%</span></div>
                </div>
              </div>

              <!-- Workflow Node Visualization -->
              <div class="workflow-stream">
                <div class="workflow-step active-step">
                  <div class="step-badge">01</div>
                  <div class="step-info">
                    <h4>Autonomous Trigger</h4>
                    <p>Real-time telemetry event processed</p>
                  </div>
                  <span class="step-status">Processed</span>
                </div>

                <div class="workflow-connector" />

                <div class="workflow-step processing-step">
                  <div class="step-badge">02</div>
                  <div class="step-info">
                    <h4>Agentic Decision Loop</h4>
                    <p>Evaluating multi-tier business constraints</p>
                  </div>
                  <span class="step-status running">Reasoning...</span>
                </div>

                <div class="workflow-connector" />

                <div class="workflow-step">
                  <div class="step-badge">03</div>
                  <div class="step-info">
                    <h4>ERP Ledger Reconciliation</h4>
                    <p>Automated database commit & dispatch</p>
                  </div>
                  <span class="step-status queued">Queued</span>
                </div>
              </div>

              <!-- Floating Live Activity Pill -->
              <div class="floating-telemetry-pill">
                <span class="telemetry-dot" />
                <span>1,420 operations dispatched in the last 60 seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Base Section */
.qb-hero {
  position: relative;
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: #06150c;
  color: #ffffff;
  font-family: 'Inter', system-ui, sans-serif;
}

/* Ambient Lighting & Grid */
.qb-ambient-glow {
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
  opacity: 0.22;
}

.glow-top-left {
  top: -150px;
  left: -150px;
  background: #22c55e;
}

.glow-bottom-right {
  bottom: -200px;
  right: -100px;
  background: #15803d;
  opacity: 0.28;
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-size: 40px 40px;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
}

/* Container */
.qb-container {
  position: relative;
  z-index: 2;
  width: min(1320px, calc(100% - 3rem));
  margin-inline: auto;
  padding: 6rem 0 5rem;
}

/* 2-Column Split Grid */
.qb-hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 4.5rem;
  align-items: center;
}

/* Left Column */
.qb-hero-text {
  max-width: 680px;
}

/* Badge */
.qb-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.5rem 1.1rem;
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(74, 222, 128, 0.3);
  border-radius: 9999px;
  backdrop-filter: blur(10px);
  margin-bottom: 2rem;
}

.pulse-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #4ade80;
  box-shadow: 0 0 10px #4ade80;
  animation: pulseIndicator 2s infinite ease-in-out;
}

@keyframes pulseIndicator {
  0% { transform: scale(0.95); opacity: 0.8; }
  50% { transform: scale(1.35); opacity: 1; box-shadow: 0 0 14px #4ade80; }
  100% { transform: scale(0.95); opacity: 0.8; }
}

.badge-text {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #86efac;
}

/* Title & Typewriter */
.qb-title {
  font-size: clamp(2.8rem, 4.8vw, 4.6rem);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.04em;
  color: #ffffff;
  margin-bottom: 1.6rem;
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
  color: #4ade80;
  text-shadow: 0 0 28px rgba(74, 222, 128, 0.4);
  font-weight: 800;
}

.dynamic-caret {
  display: inline-block;
  width: 4px;
  height: 0.88em;
  margin-left: 4px;
  background-color: #4ade80;
  box-shadow: 0 0 10px #4ade80;
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
.qb-subtitle {
  font-size: clamp(1.05rem, 1.4vw, 1.22rem);
  line-height: 1.68;
  color: rgba(243, 244, 246, 0.82);
  margin-bottom: 2.5rem;
  max-width: 600px;
}

/* Actions */
.qb-actions {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  flex-wrap: wrap;
  margin-bottom: 2.8rem;
}

.btn-primary-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  background: linear-gradient(135deg, #4ade80, #22c55e);
  color: #05210e;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.95rem 2rem;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 24px rgba(34, 197, 94, 0.35);
  cursor: pointer;
  transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-primary-action:hover {
  background: linear-gradient(135deg, #86efac, #4ade80);
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(34, 197, 94, 0.5);
}

.btn-arrow {
  transition: transform 0.25s ease;
}

.btn-primary-action:hover .btn-arrow {
  transform: translateX(4px);
}

.btn-secondary-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.95rem 2rem;
  border-radius: 9999px;
  border: 1.5px solid rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(12px);
  cursor: pointer;
  transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-secondary-action:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.45);
  transform: translateY(-2px);
}

/* Highlights */
.qb-highlights {
  display: flex;
  gap: 1.4rem 2rem;
  flex-wrap: wrap;
  padding-top: 1.8rem;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
}

/* Right Column - Floating Browser Mockup */
.qb-hero-visual {
  display: flex;
  justify-content: center;
  perspective: 1000px;
}

.browser-card-frame {
  width: 100%;
  max-width: 540px;
  background: rgba(14, 38, 24, 0.7);
  border: 1px solid rgba(74, 222, 128, 0.25);
  border-radius: 20px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5), 0 0 30px rgba(34, 197, 94, 0.1);
  backdrop-filter: blur(20px);
  overflow: hidden;
  animation: floatMockup 6s ease-in-out infinite;
}

@keyframes floatMockup {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.browser-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.85rem 1.25rem;
  background: rgba(8, 24, 15, 0.85);
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

.browser-status-chip {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.65rem;
  font-weight: 700;
  color: #4ade80;
  background: rgba(34, 197, 94, 0.15);
  padding: 0.25rem 0.55rem;
  border-radius: 100px;
  border: 1px solid rgba(74, 222, 128, 0.3);
}

.chip-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #4ade80;
}

/* Browser Screen Content */
.browser-screen {
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.screen-metrics-grid {
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
  font-size: 0.72rem;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.06em;
  margin-bottom: 0.3rem;
}

.metric-val {
  font-size: 1.25rem;
  font-weight: 800;
  color: #ffffff;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.trend-up {
  font-size: 0.75rem;
  font-weight: 700;
  color: #4ade80;
}

/* Workflow Steps */
.workflow-stream {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.workflow-step {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  background: rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 0.85rem 1rem;
}

.workflow-step.active-step {
  border-color: rgba(74, 222, 128, 0.4);
  background: rgba(34, 197, 94, 0.08);
}

.workflow-step.processing-step {
  border-color: rgba(234, 179, 8, 0.35);
  background: rgba(234, 179, 8, 0.06);
}

.step-badge {
  font-size: 0.75rem;
  font-weight: 800;
  width: 26px;
  height: 26px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
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
  background: rgba(74, 222, 128, 0.15);
  color: #4ade80;
}

.step-status.running {
  background: rgba(234, 179, 8, 0.15);
  color: #facc15;
}

.step-status.queued {
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.5);
}

.workflow-connector {
  width: 2px;
  height: 8px;
  background: rgba(255, 255, 255, 0.15);
  margin-left: 22px;
}

.floating-telemetry-pill {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  background: rgba(34, 197, 94, 0.12);
  border: 1px solid rgba(74, 222, 128, 0.25);
  border-radius: 8px;
  padding: 0.65rem 0.9rem;
  font-size: 0.74rem;
  font-weight: 600;
  color: #86efac;
}

.telemetry-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 8px #4ade80;
}

/* Responsive */
@media (max-width: 1024px) {
  .qb-hero-grid {
    grid-template-columns: 1fr;
    gap: 3.5rem;
    text-align: center;
  }

  .qb-hero-text {
    max-width: 100%;
    margin-inline: auto;
  }

  .qb-subtitle {
    margin-inline: auto;
  }

  .qb-actions {
    justify-content: center;
  }

  .qb-highlights {
    justify-content: center;
  }

  .workflow-connector {
    margin-inline: auto;
  }
}

@media (max-width: 768px) {
  .qb-container {
    padding: 5rem 0 4rem;
    width: min(100% - 2rem, 1320px);
  }

  .qb-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn-primary-action,
  .btn-secondary-action {
    width: 100%;
  }

  .screen-metrics-grid {
    grid-template-columns: 1fr;
  }
}

.highlight-icon {
  display: inline-flex;
  align-items: center;
  color: #4ade80;
}
</style>

