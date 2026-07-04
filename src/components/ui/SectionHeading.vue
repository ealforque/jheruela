<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description?: string
}>()
</script>

<template>
  <header class="section-heading">
    <p class="eyebrow">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <p v-if="description" class="description">{{ description }}</p>
  </header>
</template>

<style scoped>
.section-heading {
  max-width: 780px;
  margin-bottom: 2rem;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.74rem;
  color: var(--text-muted);
  margin: 0 0 0.9rem;
}

h2 {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 3rem);
  line-height: 1.12;
  letter-spacing: -0.03em;
}

.description {
  margin: 1rem 0 0;
  color: var(--text-muted);
  line-height: 1.7;
  max-width: 66ch;
}
</style>
