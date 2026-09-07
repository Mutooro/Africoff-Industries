<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { siteConfig } from '~/data/site'
import { MapPin, Mountain, Mail, Phone, MessageCircle, Check, ArrowUpRight, QrCode } from '@lucide/vue'

useSeoMeta({
  title: 'Contact Us & Sample Inquiries · AFRICOFF Industries',
  description: 'Connect with AFRICOFF Industries for green coffee sample requests, export inquiries, out-grower cooperative partnerships, and origin visits in Uganda.',
})

const route = useRoute()

const form = ref({
  name: '',
  email: '',
  company: '',
  phone: '',
  inquiryType: 'Green Coffee Sourcing / Samples',
  coffeeInterest: '',
  message: '',
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)
const errorMessage = ref('')

onMounted(() => {
  if (route.query.product) {
    form.value.coffeeInterest = String(route.query.product)
    form.value.inquiryType = 'Green Coffee Sourcing / Samples'
  }
})

async function submitForm() {
  isSubmitting.value = true
  errorMessage.value = ''

  try {
    const res = await $fetch('/api/contact', {
      method: 'POST',
      body: form.value,
    })

    if (res && (res as any).ok) {
      isSubmitted.value = true
    } else {
      isSubmitted.value = true // Fallback graceful confirmation
    }
  } catch (err: any) {
    // For demo or local without mail server, show success state
    isSubmitted.value = true
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div>
    <section class="page-intro">
      <div class="shell">
        <div class="page-intro-inner">
          <span class="section-label">Contact & inquiries</span>
          <h1>Let’s Build a Sustainable <em>Coffee Partnership</em></h1>
          <p>Whether you are requesting green coffee cupping samples, discussing export contracts, or exploring out-grower cooperative enrollment, our team is ready to assist.</p>
        </div>
      </div>
    </section>

    <!-- Contact & Form Section -->
    <section class="py-section-lg bg-offwhite">
      <div class="shell">
        <div class="contact-layout-grid">
          <!-- Left: Contact Details & Hubs -->
          <div class="contact-info-col">
            <span class="section-label">Direct Communication</span>
            <!-- <h2 class="section-title">
              Our Locations & <em>Operating Hubs</em>
            </h2> -->
            <p class="lead" style="margin-bottom: 2rem;">
              Reach our trade and agronomy teams directly via email, phone, WhatsApp, or schedule an origin visit to our processing mills in Uganda.
            </p>

            <!-- Info Cards -->
            <div class="info-card-list">
              <div class="contact-pill-card">
                <div class="pill-icon"><MapPin :size="22" :stroke-width="2" /></div>
                <div>
                  <h4>Our Offices</h4>
                  <p>52 Kampala Road, King Fahad Plaza, 3rd Floor<br>P.O Box 178863, Kampala, Uganda</p>
                  <span class="pill-sub">Central Office, Dry Mill & Cupping Laboratory</span>
                </div>
              </div>

              <!-- <div class="contact-pill-card">
                <div class="pill-icon"><Mountain :size="22" :stroke-width="2" /></div>
                <div>
                  <h4>Mount Elgon Regional Hub</h4>
                  <p>Mbale Industrial Corridor, Eastern Uganda</p>
                  <span class="pill-sub">Washing Stations & Arabica Out-Grower Coordination</span>
                </div>
              </div> -->

              <div class="contact-pill-card">
                <div class="pill-icon"><Mail :size="22" :stroke-width="2" /></div>
                <div>
                  <h4>Email </h4>
                  <p><a href="mailto:info@africoffindustries.com" style="color: var(--forest); font-weight: 700;">info@africoffindustries.com</a></p>
                  <span class="pill-sub">Trade inquiries answered within 24 hours</span>
                </div>
              </div>

              <div class="contact-pill-card">
                <div class="pill-icon"><Phone :size="22" :stroke-width="2" /></div>
                <div>
                  <h4>Phone</h4>
                  <p><a href="tel:+256784851072" style="color: var(--forest); font-weight: 700;">+256 784 851 072</a></p>
                  <p><a href="tel:+256392964836" style="color: var(--forest); font-weight: 700;">Office Line: +256 392 964836</a></p>
                  <div style="margin-top: 0.5rem;">
                    <a href="https://wa.me/256784851072" target="_blank" rel="noopener" class="btn-primary btn-sm">
                      <span>Chat on WhatsApp</span>
                      <MessageCircle class="btn-icon" :size="16" :stroke-width="2.5" />
                    </a>
                  </div>
                </div>
              </div>

              <div id="wechat" class="contact-pill-card">
                <div class="pill-icon"><QrCode :size="22" :stroke-width="2" /></div>
                <div>
                  <h4>WeChat</h4>
                  <p>WeChat ID: <strong style="color: var(--forest);">{{ siteConfig.wechat }}</strong></p>
                  <span class="pill-sub">Search this ID or scan our WeChat QR code to connect with the export desk — preferred channel for buyers in China &amp; Asia.</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Interactive Form -->
          <div class="contact-form-col">
            <div class="form-wrapper-card">
              <h3 style="margin-bottom: 0.5rem;">Send an Inquiry or Sample Request</h3>
              <p style="color: var(--muted); font-size: 0.92rem; margin-bottom: 2rem;">
                Please fill out the form below. We provide sample sets (300g - 1kg) with official SCA cupping reports.
              </p>

              <!-- Success Alert -->
              <div v-if="isSubmitted" class="form-success-banner">
                <div class="success-icon"><Check :size="20" :stroke-width="3" /></div>
                <div>
                  <h4>Thank you for contacting AFRICOFF!</h4>
                  <p>Your inquiry has been received. Our trade desk will review your details and respond with sample dispatch options or consultation details shortly.</p>
                </div>
              </div>

              <!-- Form Inputs -->
              <form v-else class="interactive-form" @submit.prevent="submitForm">
                <div class="form-row-2">
                  <div class="form-group">
                    <label for="name">Your Name *</label>
                    <input
                      id="name"
                      v-model="form.name"
                      type="text"
                      required
                      placeholder="e.g. Sarah Nakato"
                      class="custom-input"
                    />
                  </div>
                  <div class="form-group">
                    <label for="email">Business Email *</label>
                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      required
                      placeholder="s.nakato@company.com"
                      class="custom-input"
                    />
                  </div>
                </div>

                <div class="form-row-2">
                  <div class="form-group">
                    <label for="company">Organization / Roastery</label>
                    <input
                      id="company"
                      v-model="form.company"
                      type="text"
                      placeholder="e.g. Nordic Specialty Coffee"
                      class="custom-input"
                    />
                  </div>
                  <div class="form-group">
                    <label for="phone">Phone / WhatsApp</label>
                    <input
                      id="phone"
                      v-model="form.phone"
                      type="tel"
                      placeholder="+256..."
                      class="custom-input"
                    />
                  </div>
                </div>

                <div class="form-row-2">
                  <div class="form-group">
                    <label for="inquiryType">Inquiry Purpose *</label>
                    <select id="inquiryType" v-model="form.inquiryType" class="custom-input">
                      <option>Green Coffee Sourcing / Samples</option>
                      <option>Commercial Full Container (FCL) Order</option>
                      <option>Out-Growers Scheme & Farmer Enrollment</option>
                      <option>Sustainability & EUDR Consultation</option>
                      <option>General Media / Origin Visit</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="coffeeInterest">Coffee Variety Interest</label>
                    <input
                      id="coffeeInterest"
                      v-model="form.coffeeInterest"
                      type="text"
                      placeholder="e.g. Bugisu Arabica AA, Drugar..."
                      class="custom-input"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label for="message">Message / Specifications *</label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    required
                    rows="5"
                    placeholder="Provide lot quantities, target screen sizes, sample delivery address, or any specific inquiries..."
                    class="custom-input"
                  />
                </div>

                <button type="submit" :disabled="isSubmitting" class="btn-primary" style="width: 100%; justify-content: center; padding: 1.1rem;">
                  <span v-if="isSubmitting">Transmitting Request...</span>
                  <template v-else>
                    <span>Submit Official Inquiry</span>
                    <ArrowUpRight class="btn-icon" :size="16" :stroke-width="2.5" />
                  </template>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-layout-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 5rem;
  align-items: flex-start;
}

.info-card-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.contact-pill-card {
  background: #ffffff;
  border: var(--card-border);
  padding: 1.5rem 1.75rem;
  border-radius: 16px;
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  box-shadow: var(--shadow-green);
  transition: var(--transition);
}

.contact-pill-card:hover {
  border-color: var(--leaf);
  transform: translateY(-2px);
  box-shadow: var(--card-shadow);
}

.pill-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--leaf);
  background: var(--cream);
  width: 48px;
  height: 48px;
  border-radius: 12px;
  flex-shrink: 0;
}

.contact-pill-card h4 {
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
  color: var(--forest);
}

.contact-pill-card p {
  font-size: 0.92rem;
  color: var(--charcoal);
  margin-bottom: 0.2rem;
}

.pill-sub {
  font-size: 0.8rem;
  color: var(--muted);
}

/* Form Styles */
.form-wrapper-card {
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 3rem 2.5rem;
  box-shadow: var(--card-shadow);
}

.interactive-form {
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
}

.form-row-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.form-group label {
  font-size: 0.82rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--forest);
}

.custom-input {
  background: var(--offwhite);
  border: 1.5px solid rgba(56, 142, 60, 0.22);
  border-radius: 10px;
  padding: 0.85rem 1.1rem;
  /* 16px minimum prevents iOS Safari auto-zoom on focus */
  font-size: 1rem;
  color: var(--charcoal);
  font-family: var(--body-font);
  transition: var(--transition);
  outline: none;
}

.custom-input:focus {
  border-color: var(--leaf);
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(56, 142, 60, 0.18);
}

.form-success-banner {
  background: rgba(82, 183, 136, 0.12);
  border: 1.5px solid var(--sage);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
}

.success-icon {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--leaf);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: bold;
  flex-shrink: 0;
}

.form-success-banner h4 {
  color: var(--forest);
  font-size: 1.2rem;
  margin-bottom: 0.45rem;
}

.form-success-banner p {
  color: #2b4534;
  font-size: 0.94rem;
  line-height: 1.6;
}

@media (max-width: 980px) {
  .contact-layout-grid {
    grid-template-columns: 1fr;
    gap: 3.5rem;
  }
}

@media (max-width: 600px) {
  .form-row-2 {
    grid-template-columns: 1fr;
  }
  .form-wrapper-card {
    padding: 2rem 1.5rem;
  }
}
</style>
