<script setup lang="ts">
import { ref } from 'vue'
import { faqs } from '~/data/site'
import { ChevronDown } from '@lucide/vue'

const openIndex = ref<number | null>(0)

function toggleFaq(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section class="py-section bg-cream">
    <div class="shell">
      <div class="faq-grid">
        <!-- Left Sticky Image & Summary -->
        <div class="faq-image-box">
          <img
            src="/assets/images/coffee-cup.jpg"
            alt="Coffee cherries harvesting"
            loading="lazy"
          />
          <div class="faq-image-caption">
            <h4>Direct Sourcing & Inquiries</h4>
            <p>Have questions regarding origin visits, micro-lot cupping samples, or out-grower enrollment? Our trade team is here to assist.</p>
          </div>
        </div>

        <!-- Right Accordion -->
        <div>
          <span class="section-label">Frequently Asked Questions</span>
          <h3 class="section-title">
            Answers on Sourcing, Traceability and <em>Partnership</em>
          </h3>
          <p class="section-subtitle" style="margin-bottom: 2rem;">
            Common inquiries from international coffee buyers, roasters, out-grower farmers, and development partners.
          </p>

          <div class="accordion-list">
            <div
              v-for="(faq, index) in faqs"
              :key="faq.question"
              class="accordion-item"
              :class="{ active: openIndex === index }"
            >
              <div class="accordion-head" @click="toggleFaq(index)">
                <h4>{{ faq.question }}</h4>
                <div class="accordion-icon">
                  <ChevronDown :size="18" :stroke-width="2.5" />
                </div>
              </div>
              <div v-show="openIndex === index" class="accordion-body">
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

