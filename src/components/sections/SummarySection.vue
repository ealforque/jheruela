<script setup lang="ts">
import { summaryHighlights } from '../../data/siteContent'
import RevealMotion from '../ui/RevealMotion.vue'
import SectionHeading from '../ui/SectionHeading.vue'
</script>

<template>
  <section id="summary" class="section shell">
    <RevealMotion>
      <SectionHeading
        eyebrow="Executive Summary"
        title="A Trusted Technical Leader for Complex Marine Operations"
        description="John is an accomplished Maritime Chief Engineer and Technical Superintendent with extensive experience managing marine engineering systems, technical operations, fleet maintenance, dry dock projects, regulatory compliance, and engineering teams across global commercial fleets."
      />
    </RevealMotion>

    <ul class="highlight-grid" aria-label="Executive highlights">
      <RevealMotion
        v-for="(item, idx) in summaryHighlights"
        :key="item"
        :delay="0.05 * idx"
        tag="li"
        class="highlight-item"
      >
        <span>{{ item }}</span>
      </RevealMotion>
    </ul>
  </section>
</template>

<style scoped>
.highlight-grid {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.7rem;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  grid-auto-rows: 1fr;
}

.highlight-item {
  padding: 0.92rem 1rem;
  border-radius: 0.9rem;
  border: 1px solid var(--card-border);
  background: color-mix(in oklab, var(--bg-primary), transparent 35%);
  color: var(--text-primary);
  display: grid;
  align-items: center;
  min-height: 4.1rem;
}
</style>
