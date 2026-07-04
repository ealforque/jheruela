<script setup lang="ts">
import { expertise } from '../../data/siteContent'
import RevealMotion from '../ui/RevealMotion.vue'
import SectionHeading from '../ui/SectionHeading.vue'
</script>

<template>
  <section id="expertise" class="section shell">
    <SectionHeading
      eyebrow="Core Expertise"
      title="From Machinery Integrity to Executive Technical Governance"
    />

    <div class="expertise-grid">
      <RevealMotion v-for="(group, idx) in expertise" :key="group.title" :delay="0.06 * idx" class="group-card">
        <h3>{{ group.title }}</h3>
        <ul>
          <li v-for="item in group.items" :key="item">{{ item }}</li>
        </ul>
      </RevealMotion>
    </div>
  </section>
</template>

<style scoped>
.expertise-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.group-card {
  border: 1px solid var(--card-border);
  border-radius: 1rem;
  padding: 1.1rem;
  background: linear-gradient(145deg, var(--card-bg), var(--card-bg-strong));
}

h3 {
  margin: 0;
  font-size: 1.02rem;
}

ul {
  margin: 0.8rem 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.45rem;
}

li {
  color: var(--text-muted);
  font-size: 0.95rem;
}
</style>
