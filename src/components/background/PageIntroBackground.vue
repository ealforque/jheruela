<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const OceanCanvas = defineAsyncComponent(() => import('./OceanCanvas.vue'))
</script>

<template>
  <div class="intro-bg" aria-hidden="true">
    <OceanCanvas />
    <div class="grid-overlay" />
    <div class="ship ship-a" />
    <div class="ship ship-b" />
  </div>
</template>

<style scoped>
.intro-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, color-mix(in oklab, var(--brand-cyan), transparent 90%) 1px, transparent 1px),
    linear-gradient(to bottom, color-mix(in oklab, var(--brand-cyan), transparent 90%) 1px, transparent 1px);
  background-size: 3rem 3rem;
  mask-image: radial-gradient(circle at center, black 45%, transparent 90%);
  animation: drift 22s linear infinite;
}

.ship {
  position: absolute;
  width: 68px;
  height: 15px;
  border-radius: 10px 10px 4px 4px;
  background: linear-gradient(
    to right,
    color-mix(in oklab, var(--brand-cyan), white 45%),
    color-mix(in oklab, var(--brand-cyan), transparent 20%)
  );
  opacity: 0.4;
}

.ship::after {
  content: '';
  position: absolute;
  left: 26%;
  top: -9px;
  width: 18px;
  height: 7px;
  border-radius: 2px;
  background: color-mix(in oklab, var(--brand-gold), white 20%);
}

.ship-a {
  right: 10%;
  bottom: 22%;
  animation: floatShip 17s linear infinite;
}

.ship-b {
  left: 8%;
  bottom: 45%;
  transform: scale(0.78);
  animation: floatShip 20s linear infinite reverse;
}

@media (prefers-reduced-motion: reduce) {
  .grid-overlay,
  .ship {
    animation: none;
  }
}

@keyframes drift {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(2rem, 1rem, 0);
  }
}

@keyframes floatShip {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(-28px);
  }

  100% {
    transform: translateX(0);
  }
}
</style>
