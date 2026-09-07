<script setup lang="ts">
useSeoMeta({
  title: 'Privacy Policy & EUDR Data Governance · AFRICOFF Industries',
  description: 'AFRICOFF Industries data privacy policy, GIS polygon information governance, and compliance with EUDR and Ugandan data protection regulations.',
})
</script>

<template>
  <div>
    <section class="page-intro">
      <div class="shell">
        <div class="page-intro-inner">
          <span class="section-label">Legal & data governance</span>
          <h1>Privacy Policy & <em>Traceability Standards</em></h1>
          <p>How AFRICOFF Industries (U) Limited manages business inquiries, smallholder farmer polygon records, and trade data.</p>
        </div>
      </div>
    </section>

    <section class="py-section-lg bg-offwhite">
      <div class="shell" style="max-width: 860px;">
        <div class="legal-card">
          <span class="section-label">Effective Date: September 2026</span>
          <h2 class="section-title">Data Protection & Privacy Commitment</h2>

          <div class="legal-content">
            <h3>1. Introduction</h3>
            <p>
              AFRICOFF Industries (U) Limited ("AFRICOFF", "we", "our") is dedicated to upholding the highest standards of data security, ethical sourcing transparency, and personal privacy in compliance with the Uganda Data Protection and Privacy Act (2019) and the European Union General Data Protection Regulation (GDPR).
            </p>

            <h3>2. Information We Collect</h3>
            <p>We collect information in three operational contexts:</p>
            <ul>
              <li><strong>Business & Trade Inquiries:</strong> Contact name, corporate email address, telephone numbers, country of operation, and product specifications provided via our website or email.</li>
              <li><strong>Out-Grower Farmer Registry:</strong> Farmer names, cooperative affiliation, national identification numbers, farm plot GPS polygon coordinates, tree counts, and harvest delivery records for EUDR compliance.</li>
              <li><strong>Website Analytics:</strong> Anonymous diagnostic telemetry to improve user experience and site navigation.</li>
            </ul>

            <h3>3. EUDR & GIS Polygon Data Stewardship</h3>
            <p>
              In accordance with European Union Regulation (EU) 2023/1115 (EUDR), farm geolocation coordinates and polygon maps collected from our out-grower network are utilized exclusively to substantiate due-diligence statements, verify zero-deforestation compliance after December 31, 2020, and ensure legal harvest authorization. Farmer identities are safeguarded with strict role-based access controls.
            </p>

            <h3>4. Data Sharing & Third Parties</h3>
            <p>
              AFRICOFF does not sell, rent, or monetize personal information. Data is shared only with certified regulatory entities (such as the Coffee Department of the Ministry of Agriculture, Animal Industry and Fisheries and the EU Information System) and authorized logistics providers solely for freight fulfillment and phytosanitary verification.
            </p>

            <h3>5. Security & Retention</h3>
            <p>
              All trade and farmer data is stored in encrypted, redundant cloud repositories adhering to ISO/IEC 27001 standards. Due diligence records are retained for a minimum of 5 years in alignment with statutory EUDR mandates.
            </p>

            <h3>6. Contact Our Data Protection Officer</h3>
            <p>
              For inquiries regarding data access, corrections, or polygon registration status, contact our compliance desk at:
              <br /><br />
              <strong>Data Protection Desk:</strong> <a href="mailto:privacy@africoff.com" style="color: var(--leaf); font-weight: 700;">privacy@africoff.com</a><br />
              AFRICOFF Industries (U) Limited, 52 Kampala Road, King Fahad Plaza, 3rd Floor, P.O Box 178863, Kampala, Uganda.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.legal-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 3.5rem 3rem;
  border: 1px solid var(--line);
  box-shadow: var(--card-shadow);
}

.legal-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
}

.legal-content h3 {
  font-size: 1.35rem;
  color: var(--forest);
  margin-top: 1rem;
}

.legal-content p {
  font-size: 1rem;
  color: #3b4e41;
  line-height: 1.7;
}

.legal-content ul {
  padding-left: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  color: #3b4e41;
}

.legal-content li strong {
  color: var(--forest);
}

@media (max-width: 600px) {
  .legal-card {
    padding: 2rem 1.5rem;
  }
}
</style>
