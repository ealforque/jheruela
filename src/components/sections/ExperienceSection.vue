<script setup lang="ts">
import { experience } from '../../data/siteContent'
import RevealMotion from '../ui/RevealMotion.vue'
import SectionHeading from '../ui/SectionHeading.vue'
</script>

<template>
  <section id="experience" class="section shell">
    <SectionHeading
      eyebrow="Professional Experience"
      title="Executive Career Timeline"
      description="A premium timeline of roles, vessel environments, major responsibilities, and measurable outcomes."
    />

    <ol class="timeline">
      <li v-for="(item, idx) in experience" :key="`${item.position}-${item.dates}`">
        <RevealMotion :delay="0.08 * idx" class="timeline-card">
          <p class="dates">{{ item.dates }}</p>
          <h3>{{ item.position }}</h3>
          <p class="meta">{{ item.company }} | {{ item.vesselType }}</p>

          <h4>Responsibilities</h4>
          <ul>
            <li v-for="entry in item.responsibilities" :key="entry">{{ entry }}</li>
          </ul>

          <h4>Major Achievements</h4>
          <ul>
            <li v-for="entry in item.achievements" :key="entry">{{ entry }}</li>
          </ul>

          <h4>Technologies Used</h4>
          <p class="chips">{{ item.technologies.join(' • ') }}</p>
        </RevealMotion>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.timeline {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 1rem;
}

.timeline-card {
  position: relative;
  padding: 1.2rem;
  border-radius: 1rem;
  border: 1px solid var(--card-border);
  background: linear-gradient(145deg, var(--card-bg), var(--card-bg-strong));
}

.dates {
  margin: 0;
  color: var(--brand-cyan);
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h3 {
  margin: 0.55rem 0 0;
}

.meta {
  margin: 0.45rem 0 0.95rem;
  color: var(--text-muted);
}

h4 {
  margin: 0.85rem 0 0.5rem;
  font-size: 0.88rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
}

ul {
  margin: 0;
  padding-left: 1rem;
  color: var(--text-muted);
  display: grid;
  gap: 0.25rem;
}

.chips {
  margin: 0;
  color: var(--text-primary);
}
</style>
