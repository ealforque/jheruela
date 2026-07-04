<script setup lang="ts">
import { digitalSkills } from '../../data/siteContent'
import RevealMotion from '../ui/RevealMotion.vue'
import SectionHeading from '../ui/SectionHeading.vue'
</script>

<template>
  <section class="section shell">
    <SectionHeading
      eyebrow="Software & Digital Skills"
      title="A Digital-First Technical Management Toolkit"
    />

    <div class="dashboard">
      <RevealMotion v-for="(skill, idx) in digitalSkills" :key="skill" :delay="0.02 * idx" class="skill-pill">
        {{ skill }}
      </RevealMotion>
    </div>
  </section>
</template>

<style scoped>
.dashboard {
  border-radius: 1rem;
  border: 1px solid var(--card-border);
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  background:
    radial-gradient(circle at top right, color-mix(in oklab, var(--brand-gold), transparent 80%), transparent 40%),
    linear-gradient(150deg, var(--card-bg), var(--card-bg-strong));
}

.skill-pill {
  border: 1px solid var(--card-border);
  border-radius: 999px;
  padding: 0.5rem 0.88rem;
  background: color-mix(in oklab, var(--bg-primary), transparent 30%);
  color: var(--text-primary);
  font-size: 0.88rem;
}
</style>
