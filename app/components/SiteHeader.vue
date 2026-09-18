<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { MapPin, Leaf, Mail, Phone, ArrowUpRight } from '@lucide/vue'

const route = useRoute()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Activities', path: '/activities' },
  { name: 'Out-Growers', path: '/out-growers' },
  { name: 'Value Chains', path: '/value-chains' },
  { name: 'Products', path: '/products' },
  { name: 'Impact', path: '/impact' },
  { name: 'News', path: '/news' },
  { name: 'Contact', path: '/contact' },
]

function handleScroll() {
  isScrolled.value = window.scrollY > 40
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closeMobileMenu()
}

function handleResize() {
  if (window.innerWidth > 980) closeMobileMenu()
}

function setBodyScrollLock(locked: boolean) {
  document.body.style.overflow = locked ? 'hidden' : ''
}

watch(isMobileMenuOpen, (open) => setBodyScrollLock(open))

// Close the drawer on any navigation (covers browser back/forward too)
watch(() => route.fullPath, () => closeMobileMenu())

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('keydown', handleKeydown)
  window.addEventListener('resize', handleResize, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('resize', handleResize)
  setBodyScrollLock(false)
})
</script>

<template>
  <header class="header-container" :class="{ 'is-scrolled': isScrolled }">
    <!-- Top Announcement / Contact Utility Bar -->
    <div class="top-bar">
      <div class="shell top-bar-inner">
        <div class="top-bar-left">
          <span class="top-badge"><MapPin :size="13" :stroke-width="2.5" /> Kampala, Uganda</span>
          <span class="top-compliance"><Leaf :size="13" :stroke-width="2.5" /> EUDR & Traceability Compliant</span>
        </div>
        <div class="top-bar-right">
          <a href="mailto:info@africoffindustries.com" class="top-link"><Mail :size="13" :stroke-width="2.5" /> info@africoffindustries.com</a>
          <span class="top-divider">|</span>
          <a href="tel:+256784851072" class="top-link"><Phone :size="13" :stroke-width="2.5" /> +256 784 851 072</a>
          <span class="top-divider">|</span>
          <a href="tel:+256392964836" class="top-link"><Phone :size="13" :stroke-width="2.5" /> +256 392 964836</a>
        </div>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <div class="navbar">
      <div class="shell navbar-inner">
        <!-- Logo -->
        <NuxtLink to="/" class="nav-logo" @click="closeMobileMenu">
          <img src="/assets/images/new-logo.png" alt="AFRICOFF Industries (U) Ltd" />
        </NuxtLink>

        <!-- Desktop Navigation Links -->
        <nav class="desktop-nav">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="nav-link"
          >
            {{ link.name }}
          </NuxtLink>
        </nav>

        <!-- CTA Action -->
        <div class="nav-cta-wrapper">
          <NuxtLink to="/contact" class="btn-gold btn-sm">
            <span>Partner With Us</span>
            <ArrowUpRight class="btn-icon" :size="16" :stroke-width="2.5" />
          </NuxtLink>
        </div>

        <!-- Mobile Toggle Button -->
        <button
          class="nav-toggle"
          :class="{ 'is-active': isMobileMenuOpen }"
          :aria-expanded="isMobileMenuOpen"
          aria-controls="mobile-drawer-menu"
          :aria-label="isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'"
          @click="toggleMobileMenu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </div>

    <!-- Backdrop (tap outside to close) -->
    <div
      class="drawer-backdrop"
      :class="{ 'is-open': isMobileMenuOpen }"
      aria-hidden="true"
      @click="closeMobileMenu"
    />

    <!-- Mobile Drawer Menu -->
    <div
      id="mobile-drawer-menu"
      class="mobile-drawer"
      :class="{ 'is-open': isMobileMenuOpen }"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <div class="mobile-drawer-inner">
        <nav class="mobile-nav">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="mobile-nav-link"
            @click="closeMobileMenu"
          >
            {{ link.name }}
          </NuxtLink>
        </nav>
        <div class="mobile-drawer-footer">
          <NuxtLink to="/contact" class="btn-gold" style="width: 100%; justify-content: center;" @click="closeMobileMenu">
            <span>Partner With Us</span>
            <ArrowUpRight class="btn-icon" :size="16" :stroke-width="2.5" />
          </NuxtLink>
          <div class="mobile-contact-info">
            <p><strong>AFRICOFF Industries (U) Ltd</strong></p>
            <p>Kampala, Uganda</p>
            <p>info@africoffindustries.com</p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header-container {
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  transition: all 0.3s ease;
}

/* Top Utility Bar */
.top-bar {
  background: var(--forest-dark);
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.78rem;
  padding: 0.45rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.top-bar-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.top-bar-left, .top-bar-right {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.top-badge,
.top-compliance,
.top-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.top-compliance {
  color: var(--sage);
  font-weight: 600;
}

.top-link:hover {
  color: var(--gold-light);
}

.top-divider {
  color: rgba(255, 255, 255, 0.25);
}

/* Main Navbar — light, so the full-colour logo reads naturally */
.navbar {
  background: rgba(253, 251, 247, 0.96); /* off-white */
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--parchment-border);
  padding: 0.85rem 0;
  transition: all 0.3s ease;
}

.is-scrolled .navbar {
  background: rgba(253, 251, 247, 0.97);
  padding: 0.65rem 0;
  box-shadow: 0 10px 30px rgba(35, 20, 12, 0.1);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.nav-logo img {
  height: 75px;
  width: auto;
  object-fit: contain;
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--forest);
  position: relative;
  padding: 0.4rem 0;
  transition: var(--transition);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--gold);
  transition: width 0.25s ease;
}

.nav-link:hover {
  color: var(--gold-hover);
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}

.nav-link.router-link-active {
  color: var(--forest-dark);
  font-weight: 700;
}

/* Mobile Toggle */
.nav-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  flex-direction: column;
  gap: 5px;
  z-index: 101;
}

.nav-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--forest);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.nav-toggle.is-active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
  background-color: var(--gold-hover);
}
.nav-toggle.is-active span:nth-child(2) {
  opacity: 0;
}
.nav-toggle.is-active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
  background-color: var(--gold-hover);
}

/* Backdrop overlay behind the mobile drawer */
.drawer-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(6, 18, 12, 0.6);
  backdrop-filter: blur(3px);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.35s ease, visibility 0.35s ease;
  z-index: 98; /* below the drawer (99) and the header bar (100) */
}

.drawer-backdrop.is-open {
  opacity: 1;
  visibility: visible;
}

/* Mobile Drawer */
.mobile-drawer {
  position: fixed;
  top: 0;
  right: -100%;
  width: min(85%, 360px);
  height: 100vh;
  height: 100dvh; /* correct height on iOS Safari with dynamic address bar */
  background: var(--offwhite);
  border-left: 1px solid var(--parchment-border);
  box-shadow: -10px 0 30px rgba(35, 20, 12, 0.25);
  z-index: 99;
  transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  overflow-y: auto;
  overscroll-behavior: contain;
}

.mobile-drawer.is-open {
  right: 0;
}

.mobile-drawer-inner {
  padding: 5.5rem 2rem calc(2.5rem + env(safe-area-inset-bottom, 0px));
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* Comfortable ~48px touch targets on mobile */
.mobile-nav-link {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--forest);
  padding: 0.85rem 0;
  border-bottom: 1px solid var(--parchment-border);
}

.mobile-nav-link.router-link-active {
  color: var(--gold-hover);
  border-color: var(--gold);
}

.mobile-drawer-footer {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.mobile-contact-info {
  font-size: 0.85rem;
  color: var(--muted);
  line-height: 1.6;
}

@media (max-width: 980px) {
  .top-bar-left .top-compliance {
    display: none;
  }
  .desktop-nav, .nav-cta-wrapper {
    display: none;
  }
  .nav-toggle {
    display: flex;
  }
}

@media (max-width: 600px) {
  .top-bar {
    display: none;
  }
  .navbar-inner {
    gap: 1rem;
  }
  .nav-logo img {
    height: 48px;
  }
  .nav-toggle {
    padding: 0.65rem 0.5rem; /* larger tap target */
  }
}

@media (prefers-reduced-motion: reduce) {
  .mobile-drawer,
  .drawer-backdrop,
  .nav-toggle span {
    transition: none;
  }
}
</style>
