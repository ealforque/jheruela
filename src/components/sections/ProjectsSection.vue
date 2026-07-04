<script setup lang="ts">
import { projects } from '../../data/siteContent'
import RevealMotion from '../ui/RevealMotion.vue'
import SectionHeading from '../ui/SectionHeading.vue'
</script>

<template>
  <section id="projects" class="section shell">
    <SectionHeading
      eyebrow="Engineering Projects"
      title="Programs That Improved Reliability, Efficiency, and Business Outcomes"
    />

    <div class="project-grid">
      <RevealMotion v-for="(project, idx) in projects" :key="project.title" :delay="0.08 * idx" class="project-card">
        <h3>{{ project.title }}</h3>
        <p><strong>Challenge:</strong> {{ project.challenge }}</p>
        <p><strong>Solution:</strong> {{ project.solution }}</p>
        <p><strong>Implementation:</strong> {{ project.implementation }}</p>
        <p><strong>Business Impact:</strong> {{ project.impact }}</p>
        <p><strong>Results:</strong> {{ project.results }}</p>
      </RevealMotion>
    </div>
  </section>
</template>

<style scoped>
.project-grid {
  display: grid;
  gap: 1rem;
}

.project-card {
  border-radius: 1rem;
  border: 1px solid var(--card-border);
  padding: 1.1rem;
  background: linear-gradient(145deg, var(--card-bg), var(--card-bg-strong));
}

h3 {
  margin: 0 0 0.65rem;
}

p {
  margin: 0;
  color: var(--text-muted);
  line-height: 1.7;
}

p + p {
  margin-top: 0.3rem;
}

strong {
  color: var(--text-primary);
}
</style>
