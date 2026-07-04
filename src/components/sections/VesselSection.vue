<script setup lang="ts">
import { vessels } from '../../data/siteContent'
import RevealMotion from '../ui/RevealMotion.vue'
import SectionHeading from '../ui/SectionHeading.vue'
</script>

<template>
  <section class="section shell">
    <SectionHeading
      eyebrow="Vessel Experience"
      title="Operational Expertise Across Global Vessel Classes"
    />

    <div class="vessel-grid">
      <RevealMotion v-for="(vessel, idx) in vessels" :key="vessel.vesselType" :delay="0.03 * idx" class="vessel-card">
        <img :src="vessel.image" :alt="`${vessel.vesselType} at sea`" loading="lazy" />

        <div class="content">
          <h3>{{ vessel.vesselType }}</h3>
          <p><strong>Engine:</strong> {{ vessel.engineManufacturer }} {{ vessel.engineModel }}</p>
          <p><strong>Generator:</strong> {{ vessel.generatorConfiguration }}</p>
          <p><strong>Cargo Capacity:</strong> {{ vessel.cargoCapacity }}</p>
          <p><strong>Routes:</strong> {{ vessel.tradingRoutes }}</p>
          <p><strong>Flag State:</strong> {{ vessel.flagState }}</p>
          <p><strong>Class:</strong> {{ vessel.classificationSociety }}</p>
        </div>
      </RevealMotion>
    </div>
  </section>
</template>

<style scoped>
.vessel-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.vessel-card {
  overflow: hidden;
  border-radius: 1rem;
  border: 1px solid var(--card-border);
  background: linear-gradient(145deg, var(--card-bg), var(--card-bg-strong));
}

img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.content {
  padding: 1rem;
}

h3 {
  margin: 0 0 0.7rem;
}

p {
  margin: 0;
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.6;
}

p + p {
  margin-top: 0.2rem;
}

strong {
  color: var(--text-primary);
}
</style>
