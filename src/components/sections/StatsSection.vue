<script setup lang="ts">
import { stats } from '../../data/siteContent'
import MetricCounter from '../ui/MetricCounter.vue'
import RevealMotion from '../ui/RevealMotion.vue'
import SectionHeading from '../ui/SectionHeading.vue'
</script>

<template>
  <section class="section shell">
    <SectionHeading
      eyebrow="Executive Statistics"
      title="Measured Performance Across Fleet Engineering"
      description="Premium metrics that reflect operational rigor, technical reliability, and leadership consistency."
    />

    <div class="stats-grid">
      <RevealMotion v-for="(item, idx) in stats" :key="item.label" :delay="0.04 * idx" class="stat-card">
        <MetricCounter :value="item.value" :suffix="item.suffix" />
        <h3>{{ item.label }}</h3>
        <p>{{ item.description }}</p>
      </RevealMotion>
    </div>
  </section>
</template>

<style scoped>
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.stat-card {
  border: 1px solid var(--card-border);
  border-radius: 1rem;
  padding: 1rem;
  background: linear-gradient(145deg, var(--card-bg), var(--card-bg-strong));
}

h3 {
  margin: 0.75rem 0 0.4rem;
  font-size: 1rem;
}

p {
  margin: 0;
  color: var(--text-muted);
  line-height: 1.6;
}
</style>
