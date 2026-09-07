<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { ArrowRight } from '@lucide/vue'

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
  bgImage?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

const props = withDefaults(defineProps<Props>(), {
  badgeText: 'Enterprise AI & Autonomous Systems',
  titlePrefix: 'Intelligent',
  rotatingWords: () => ['Automation', 'Agents', 'AI', 'Workflows', 'Systems'],
  titleSuffix: 'Built For Business',
  description:
    'We put AI at the heart of your enterprise from autonomous agents that reason and act, to smart ERP systems that learn and optimize.',
  primaryBtnText: 'Get Started',
  primaryBtnLink: '#get-started',
  secondaryBtnText: 'Our Services',
  secondaryBtnLink: '#services',
  bgImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80',
  typingSpeed: 100,
  deletingSpeed: 50,
  pauseDuration: 2000,
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
    // Finished typing full word
    isPaused.value = true
    delay = props.pauseDuration
    isDeleting.value = true
  } else if (isDeleting.value && displayText.value === '') {
    // Finished deleting word
    isPaused.value = false
    isDeleting.value = false
    currentWordIndex.value = (currentWordIndex.value + 1) % props.rotatingWords.length
    delay = 400 // short pause before typing next word
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
  <section class="typewriter-hero" aria-label="Hero Section">
    <!-- Background Image -->
    <div class="hero-bg-wrapper">
      <img
        :src="bgImage"
        alt="Enterprise operations background"
        class="hero-bg-img"
        loading="eager"
      />
      <div class="hero-gradient-overlay" />
    </div>

    <!-- Main Container -->
    <div class="hero-container">
      <div class="hero-content">
        <!-- Optional Top Pill Badge -->
        <div v-if="badgeText" class="hero-pill-badge">
          <span class="live-indicator" />
          <span>{{ badgeText }}</span>
        </div>

        <!-- Animated Headline -->
        <h1 class="hero-main-title">
          <span class="title-prefix">{{ titlePrefix }} </span>
          <span class="dynamic-word-wrap" aria-live="polite">
            <span class="dynamic-word">{{ displayText }}</span>
            <span class="typing-cursor" :class="{ 'cursor-idle': isPaused }" aria-hidden="true" />
          </span>
          <br class="title-break" />
          <span class="title-suffix">{{ titleSuffix }}</span>
        </h1>

        <!-- Subtitle / Value Proposition -->
        <p class="hero-subtitle">
          {{ description }}
        </p>

        <!-- CTA Buttons -->
        <div class="hero-button-group">
          <NuxtLink :to="primaryBtnLink" class="btn-primary-green">
            <span>{{ primaryBtnText }}</span>
            <ArrowRight class="btn-arrow-icon" :size="20" :stroke-width="2.5" />
          </NuxtLink>

          <NuxtLink :to="secondaryBtnLink" class="btn-secondary-glass">
            <span>{{ secondaryBtnText }}</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.typewriter-hero {
  position: relative;
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: #0b1a11;
  color: #ffffff;
  font-family: 'Inter', system-ui, sans-serif;
}

/* Background & Overlays */
.hero-bg-wrapper {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center right;
  transform: scale(1.04);
  transition: transform 1.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-gradient-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(7, 24, 15, 0.94) 0%,
    rgba(8, 32, 20, 0.88) 35%,
    rgba(8, 32, 20, 0.55) 70%,
    rgba(7, 24, 15, 0.25) 100%
  );
  backdrop-filter: blur(1.5px);
}

/* Container & Layout */
.hero-container {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1280px;
  margin-inline: auto;
  padding: 6rem 2rem 5rem;
}

.hero-content {
  max-width: 820px;
}

/* Pill Badge */
.hero-pill-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.5rem 1.15rem;
  background: rgba(34, 197, 94, 0.12);
  border: 1px solid rgba(74, 222, 128, 0.35);
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #86efac;
  backdrop-filter: blur(12px);
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.live-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #4ade80;
  box-shadow: 0 0 10px #4ade80;
  animation: pulseDot 2s infinite ease-in-out;
}

@keyframes pulseDot {
  0% {
    transform: scale(0.9);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.35);
    opacity: 1;
    box-shadow: 0 0 14px #4ade80;
  }
  100% {
    transform: scale(0.9);
    opacity: 0.8;
  }
}

/* Main Heading */
.hero-main-title {
  font-size: clamp(2.8rem, 5.4vw, 5.2rem);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.035em;
  color: #ffffff;
  margin-bottom: 1.75rem;
}

.title-prefix,
.title-suffix {
  color: #ffffff;
}

.dynamic-word-wrap {
  display: inline-flex;
  align-items: baseline;
  position: relative;
}

.dynamic-word {
  color: #4ade80;
  text-shadow: 0 0 25px rgba(74, 222, 128, 0.3);
  font-weight: 800;
}

/* Typing Cursor */
.typing-cursor {
  display: inline-block;
  width: 4px;
  height: 0.9em;
  margin-left: 4px;
  background-color: #4ade80;
  box-shadow: 0 0 10px #4ade80;
  border-radius: 2px;
  vertical-align: middle;
  animation: cursorBlink 0.85s infinite;
}

.typing-cursor.cursor-idle {
  animation-duration: 1.1s;
}

@keyframes cursorBlink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

/* Subtitle */
.hero-subtitle {
  font-size: clamp(1.05rem, 1.6vw, 1.25rem);
  line-height: 1.68;
  color: rgba(243, 244, 246, 0.88);
  max-width: 650px;
  margin-bottom: 2.75rem;
  font-weight: 400;
}

/* CTA Buttons */
.hero-button-group {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex-wrap: wrap;
}

.btn-primary-green {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  background: linear-gradient(135deg, #4ade80, #22c55e);
  color: #062412;
  font-size: 1.02rem;
  font-weight: 700;
  padding: 0.95rem 2rem;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 24px rgba(34, 197, 94, 0.35);
  cursor: pointer;
  transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-primary-green:hover {
  background: linear-gradient(135deg, #86efac, #4ade80);
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(34, 197, 94, 0.45);
}

.btn-arrow-icon {
  transition: transform 0.25s ease;
}

.btn-primary-green:hover .btn-arrow-icon {
  transform: translateX(4px);
}

.btn-secondary-glass {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(18, 38, 26, 0.65);
  color: #ffffff;
  font-size: 1.02rem;
  font-weight: 600;
  padding: 0.95rem 2rem;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(12px);
  cursor: pointer;
  transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-secondary-glass:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.45);
  transform: translateY(-2px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-container {
    padding: 5rem 1.25rem 4rem;
  }

  .hero-button-group {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }

  .btn-primary-green,
  .btn-secondary-glass {
    width: 100%;
  }

  .hero-gradient-overlay {
    background: linear-gradient(
      180deg,
      rgba(7, 24, 15, 0.9) 0%,
      rgba(8, 32, 20, 0.95) 100%
    );
  }
}
</style>

