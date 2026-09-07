<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { MapPin, Leaf, Mail, Phone, ArrowUpRight } from '@lucide/vue'

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

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
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
        </div>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <div class="navbar">
      <div class="shell navbar-inner">
        <!-- Logo -->
        <NuxtLink to="/" class="nav-logo" @click="closeMobileMenu">
          <img src="/africoff.png" alt="AFRICOFF Industries (U) Ltd" />
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
          aria-label="Toggle Navigation Menu"
          @click="toggleMobileMenu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </div>

    <!-- Mobile Drawer Menu -->
    <div class="mobile-drawer" :class="{ 'is-open': isMobileMenuOpen }">
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

/* Main Navbar */
.navbar {
  background: rgba(26, 61, 43, 0.95);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(201, 168, 76, 0.18);
  padding: 0.85rem 0;
  transition: all 0.3s ease;
}

.is-scrolled .navbar {
  background: rgba(15, 39, 27, 0.98);
  padding: 0.65rem 0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.nav-logo img {
  height: 48px;
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
  color: rgba(255, 255, 255, 0.88);
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
  background-color: var(--gold-light);
  transition: width 0.25s ease;
}

.nav-link:hover {
  color: var(--gold-light);
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}

.nav-link.router-link-active {
  color: #ffffff;
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
  background-color: #ffffff;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.nav-toggle.is-active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
  background-color: var(--gold-light);
}
.nav-toggle.is-active span:nth-child(2) {
  opacity: 0;
}
.nav-toggle.is-active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
  background-color: var(--gold-light);
}

/* Mobile Drawer */
.mobile-drawer {
  position: fixed;
  top: 0;
  right: -100%;
  width: 85%;
  max-width: 360px;
  height: 100vh;
  background: var(--forest-dark);
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
  z-index: 99;
  transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  overflow-y: auto;
}

.mobile-drawer.is-open {
  right: 0;
}

.mobile-drawer-inner {
  padding: 5.5rem 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.mobile-nav-link {
  font-size: 1.15rem;
  font-weight: 600;
  color: #ffffff;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.mobile-nav-link.router-link-active {
  color: var(--gold-light);
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
  color: rgba(255, 255, 255, 0.7);
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
}
</style>
