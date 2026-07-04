<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const x = ref(50)
const y = ref(30)

const onMove = (event: MouseEvent) => {
  x.value = (event.clientX / window.innerWidth) * 100
  y.value = (event.clientY / window.innerHeight) * 100
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }

  window.addEventListener('mousemove', onMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMove)
})
</script>

<template>
  <div class="interactive-backdrop" :style="{ '--x': `${x}%`, '--y': `${y}%` }" aria-hidden="true" />
</template>

<style scoped>
.interactive-backdrop {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: -1;
  background:
    radial-gradient(circle at var(--x) var(--y), color-mix(in oklab, var(--brand-cyan), transparent 92%), transparent 22%),
    radial-gradient(circle at calc(var(--x) * 0.8) calc(var(--y) * 1.2), color-mix(in oklab, var(--brand-gold), transparent 94%), transparent 24%);
}

@media (prefers-reduced-motion: reduce) {
  .interactive-backdrop {
    display: none;
  }
}
</style>
