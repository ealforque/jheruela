<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { pageLinks } from '../../data/siteContent'
import RevealMotion from '../ui/RevealMotion.vue'
import SectionHeading from '../ui/SectionHeading.vue'
</script>

<template>
  <section class="section shell journey">
    <SectionHeading
      eyebrow="Executive Journey"
      title="Choose the Next Deck"
      description="Each destination reveals a different layer of technical authority, operational command, and leadership impact."
    />

    <div class="journey-grid">
      <RevealMotion v-for="(item, idx) in pageLinks" :key="item.title" :delay="0.08 * idx" class="journey-card">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <RouterLink :to="item.to" class="explore-link">
          Explore <ArrowRight :size="15" />
        </RouterLink>
      </RevealMotion>
    </div>
  </section>
</template>

<style scoped>
.journey {
  overflow: hidden;
  position: relative;
}

.journey::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 10% 20%, color-mix(in oklab, var(--brand-cyan), transparent 85%), transparent 35%),
    radial-gradient(circle at 82% 80%, color-mix(in oklab, var(--brand-gold), transparent 88%), transparent 32%);
  pointer-events: none;
}

.journey-grid {
  position: relative;
  display: grid;
  gap: 0.9rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.journey-card {
  border: 1px solid var(--card-border);
  border-radius: 1rem;
  padding: 1.05rem;
  background: linear-gradient(160deg, var(--card-bg), var(--card-bg-strong));
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.journey-card:hover {
  transform: translateY(-4px);
  border-color: color-mix(in oklab, var(--brand-cyan), white 25%);
}

h3 {
  margin: 0;
  font-size: 1.05rem;
}

p {
  margin: 0.7rem 0;
  color: var(--text-muted);
  line-height: 1.65;
}

.explore-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  text-decoration: none;
  color: var(--brand-cyan);
  font-weight: 600;
}
</style>
