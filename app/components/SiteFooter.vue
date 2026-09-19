<script setup lang="ts">
import { ref } from 'vue'
import { MessageCircle, Flag, Check, QrCode } from '@lucide/vue'

const email = ref('')
const isSubscribed = ref(false)
const isSubscribing = ref(false)
const subscribeError = ref('')

async function handleSubscribe() {
  subscribeError.value = ''
  const value = email.value.trim()
  if (!value || isSubscribing.value) return

  isSubscribing.value = true
  try {
    const res = await $fetch('/api/newsletter', {
      method: 'POST',
      body: { email: value },
    })
    if (res && (res as any).ok) {
      isSubscribed.value = true
      email.value = ''
    } else {
      subscribeError.value = 'Subscription is temporarily unavailable. Please try again later.'
    }
  } catch {
    subscribeError.value = 'Subscription is temporarily unavailable. Please try again later.'
  } finally {
    isSubscribing.value = false
  }
}
</script>

<template>
  <footer class="site-footer">
    <div class="shell">
      <div class="footer-grid">
        <!-- Col 1: Brand Info -->
        <div class="footer-col brand-col">
          <NuxtLink to="/" class="footer-logo">
            <img src="/assets/images/new-logo.png" alt="AFRICOFF Industries (U) Ltd" />
            <span class="footer-logo-motto">Growing a Sustainable Future</span>
          </NuxtLink>
          <p class="footer-bio">
            AFRICOFF Industries (U) Limited bridges Ugandan smallholder farmers and global markets through sustainable agro-processing, EUDR-compliant polygon traceability, and specialty export excellence.
          </p>
          <div class="footer-origin-badge">
            <span><Flag :size="14" :stroke-width="2.5" /> Proudly Ugandan · Mount Elgon & Rwenzori Terroir</span>
          </div>
          <!-- Only channels verified for launch. Re-add LinkedIn/X/Facebook/Instagram
               pills once the official AFRICOFF page URLs exist — never link the
               bare platform homepages. -->
          <div class="footer-socials">
            <a href="https://wa.me/256784851072" target="_blank" rel="noopener" class="social-pill" aria-label="WhatsApp"><MessageCircle :size="16" /></a>
            <NuxtLink to="/contact#wechat" class="social-pill" aria-label="WeChat (scan QR code on the contact page)"><QrCode :size="16" /></NuxtLink>
          </div>
        </div>

        <!-- Col 2: Quick Links -->
        <div class="footer-col">
          <h4 class="footer-heading">Quick Navigation</h4>
          <ul class="footer-links">
            <li><NuxtLink to="/">Home Overview</NuxtLink></li>
            <li><NuxtLink to="/about">About AFRICOFF</NuxtLink></li>
            <li><NuxtLink to="/activities">Integrated Operations</NuxtLink></li>
            <li><NuxtLink to="/out-growers">Out-Growers Scheme</NuxtLink></li>
            <li><NuxtLink to="/value-chains">Value Chains</NuxtLink></li>
            <li><NuxtLink to="/programs">Programs</NuxtLink></li>
            <li><NuxtLink to="/impact">Sustainability & Impact</NuxtLink></li>
            <li><NuxtLink to="/accountability">Accountability & Resources</NuxtLink></li>
            <li><NuxtLink to="/news">News & Stories</NuxtLink></li>
            <li><NuxtLink to="/contact">Get in Touch</NuxtLink></li>
          </ul>
        </div>

        <!-- Col 3: Offerings & Compliance -->
        <div class="footer-col">
          <h4 class="footer-heading">Coffee & Traceability</h4>
          <ul class="footer-links">
            <li><NuxtLink to="/products">Bugisu Arabica AA/AB</NuxtLink></li>
            <li><NuxtLink to="/products">Rwenzori Natural Drugar</NuxtLink></li>
            <li><NuxtLink to="/products">Natural Uganda Robusta (NUR)</NuxtLink></li>
            <li><NuxtLink to="/activities">EUDR Polygon Mapping</NuxtLink></li>
            <li><NuxtLink to="/impact">Women in Coffee Program</NuxtLink></li>
            <li><NuxtLink to="/contact">Sample Request Service</NuxtLink></li>
          </ul>
        </div>

        <!-- Col 4: Newsletter & Contact -->
        <div class="footer-col">
          <h4 class="footer-heading">Stay Connected</h4>
          <p class="footer-newsletter-desc">
            Subscribe to our quarterly crop harvest updates, cupping scores, and export offerings.
          </p>
          <form class="footer-form" @submit.prevent="handleSubscribe">
            <input
              v-model="email"
              type="email"
              placeholder="Enter your email address"
              required
              class="newsletter-input"
            />
            <button type="submit" :disabled="isSubscribing" class="newsletter-btn">{{ isSubscribing ? '…' : 'Subscribe' }}</button>
          </form>
          <p v-if="isSubscribed" class="subscribe-success"><Check :size="14" :stroke-width="3" /> Thank you for subscribing!</p>
          <p v-else-if="subscribeError" class="subscribe-error" role="alert">{{ subscribeError }}</p>

          <div class="footer-contact-brief">
            <p><strong>HQ:</strong> 52 Kampala Road, King Fahad Plaza, 3rd Floor</p>
            <p><strong>PO Box:</strong> 178863, Kampala, Uganda</p>
            <p><strong>Email:</strong> info@africoffindustries.com</p>
            <p><strong>Phone:</strong> +256 784 851 072</p>
            <p><strong>Office Line:</strong> <a href="tel:+256392964836">+256 392 964836</a></p>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <p>© {{ new Date().getFullYear() }} AFRICOFF Industries (U) Limited. All rights reserved.</p>
        <div class="footer-bottom-links">
          <NuxtLink to="/privacy">Privacy & EUDR Policy</NuxtLink>
          <span>·</span>
          <NuxtLink to="/contact">Terms of Supply</NuxtLink>
          <span>·</span>
          <a href="#top">Back to Top ↑</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: var(--forest);
  color: #ffffff;
  padding: 5.5rem 0 2rem;
  border-top: 1px solid rgba(212, 163, 56, 0.2);
  position: relative;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 0.8fr 0.9fr 1.2fr;
  gap: 3.5rem;
  margin-bottom: 4.5rem;
}

/* Light chip behind the full-colour logo so it stays legible on the dark footer */
.brand-col .footer-logo {
  display: inline-block;
  background: var(--offwhite);
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 0.8rem 1.2rem;
  border-radius: 14px;
  margin-bottom: 1.25rem;
}

.brand-col .footer-logo img {
  display: block;
  height: 60px;
  width: auto;
}

.footer-logo-motto {
  display: block;
  margin-top: 0.35rem;
  font-size: 0.5rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--gold-light, #e5b93c);
}

.footer-bio {
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.92rem;
  line-height: 1.65;
  margin-bottom: 1.5rem;
}

.footer-origin-badge {
  display: inline-block;
  background: rgba(21, 128, 61, 0.25);
  border: 1px solid rgba(165, 209, 172, 0.3);
  padding: 0.35rem 0.8rem;
  border-radius: 6px;
  color: var(--sage-light);
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.footer-socials {
  display: flex;
  gap: 0.6rem;
}

.footer-origin-badge span,
.subscribe-success {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.social-pill {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 0.85rem;
  font-weight: bold;
  transition: var(--transition);
}

.social-pill:hover {
  background: var(--gold);
  color: var(--roast-espresso);
  transform: translateY(-3px);
}

.footer-heading {
  color: var(--gold-light);
  font-size: 1.1rem;
  font-family: var(--body-font);
  font-weight: 700;
  margin-bottom: 1.4rem;
  letter-spacing: 0.02em;
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.92rem;
  transition: var(--transition);
}

.footer-links a:hover {
  color: var(--gold-light);
  padding-left: 4px;
}

.footer-newsletter-desc {
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.9rem;
  margin-bottom: 1.1rem;
  line-height: 1.55;
}

.footer-form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.newsletter-input {
  flex: 1;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.75rem;
  padding: 0.7rem 1.2rem;
  color: #ffffff;
  font-size: 0.88rem;
  outline: none;
}

.newsletter-input:focus {
  border-color: var(--gold);
}

.newsletter-input::placeholder {
  color: rgba(255, 255, 255, 0.45);
  opacity: 1;
}

.newsletter-btn {
  background: var(--gold);
  color: var(--roast-espresso);
  border: none;
  border-radius: 0.75rem;
  padding: 0.7rem 1.3rem;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: var(--transition);
}

.newsletter-btn:hover {
  background: var(--gold-light);
}

.subscribe-success {
  color: var(--sage);
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.subscribe-error {
  color: #fca5a5;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.footer-contact-brief {
  margin-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.2rem;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

/* Global `p`/`a` colours (roast-umber) leak onto the dark footer — force light here */
.footer-contact-brief p,
.footer-contact-brief p strong,
.footer-contact-brief a {
  color: rgba(255, 255, 255, 0.75);
}

.footer-contact-brief a:hover {
  color: var(--gold-light);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-bottom p {
  color: rgba(255, 255, 255, 0.6);
}

.footer-bottom-links {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.footer-bottom-links a:hover {
  color: #ffffff;
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
}

@media (max-width: 600px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}
</style>
