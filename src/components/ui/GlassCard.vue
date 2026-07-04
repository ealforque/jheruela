<script setup lang="ts">
defineProps<{
  as?: keyof HTMLElementTagNameMap
}>()
</script>

<template>
  <component :is="as || 'article'" class="glass-card">
    <slot />
  </component>
</template>

<style scoped>
.glass-card {
  border: 1px solid var(--card-border);
  border-radius: 1.2rem;
  background: linear-gradient(155deg, var(--card-bg), var(--card-bg-strong));
  box-shadow: var(--card-shadow);
  backdrop-filter: blur(16px);
}
</style>
