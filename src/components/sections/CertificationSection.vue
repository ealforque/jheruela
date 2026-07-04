<script setup lang="ts">
import { certifications } from '../../data/siteContent'
import RevealMotion from '../ui/RevealMotion.vue'
import SectionHeading from '../ui/SectionHeading.vue'
</script>

<template>
  <section class="section shell">
    <SectionHeading
      eyebrow="Certifications"
      title="Credentials Supporting Safe, Compliant, and High-Performance Operations"
    />

    <ul class="cert-grid" aria-label="Professional certifications">
      <RevealMotion v-for="(item, idx) in certifications" :key="item" :delay="0.03 * idx" tag="li" class="cert-item">
        {{ item }}
      </RevealMotion>
    </ul>
  </section>
</template>

<style scoped>
.cert-grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.9rem;
}

.cert-item {
  padding: 0.95rem 1rem;
  border-radius: 0.9rem;
  border: 1px solid var(--card-border);
  background: linear-gradient(150deg, var(--card-bg), var(--card-bg-strong));
}
</style>
