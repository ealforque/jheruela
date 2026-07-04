<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { ArrowDownRight, Download, Mail } from 'lucide-vue-next'
import RevealMotion from '../ui/RevealMotion.vue'

const OceanCanvas = defineAsyncComponent(() => import('../background/OceanCanvas.vue'))

type HeroVessel = {
  id: number
  top: string
  left: string
  scale: number
  duration: number
  delay: number
  opacity: number
}

const vesselCount = 7

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min
}

const vessels: HeroVessel[] = Array.from({ length: vesselCount }, (_, index) => ({
  id: index + 1,
  top: `${randomBetween(8, 88).toFixed(2)}%`,
  left: `${randomBetween(6, 92).toFixed(2)}%`,
  scale: Number(randomBetween(0.62, 1.28).toFixed(2)),
  duration: Number(randomBetween(14, 28).toFixed(2)),
  delay: Number(randomBetween(0, 9).toFixed(2)),
  opacity: Number(randomBetween(0.3, 0.62).toFixed(2)),
}))
</script>

<template>
  <section id="top" class="hero" aria-label="Hero section">
    <OceanCanvas />

    <div class="grid-overlay" aria-hidden="true" />
    <div
      v-for="vessel in vessels"
      :key="vessel.id"
      class="ship"
      :style="{
        top: vessel.top,
        left: vessel.left,
        transform: `translate(-50%, -50%) scale(${vessel.scale})`,
        opacity: vessel.opacity,
        animationDuration: `${vessel.duration}s`,
        animationDelay: `${vessel.delay}s`,
      }"
      aria-hidden="true"
    />

    <div class="hero-layout">
      <div class="hero-content">
        <RevealMotion>
          <p class="eyebrow">Executive Maritime Leadership</p>
        </RevealMotion>

        <RevealMotion :delay="0.1">
          <h1>John</h1>
        </RevealMotion>

        <RevealMotion :delay="0.18">
          <p class="title">Maritime Chief Engineer</p>
        </RevealMotion>

        <RevealMotion :delay="0.24">
          <p class="subtitle">Technical Superintendent</p>
        </RevealMotion>

        <RevealMotion :delay="0.32">
          <p class="tagline">
            Delivering engineering excellence through technical leadership, operational reliability,
            fleet performance, and decades of maritime expertise.
          </p>
        </RevealMotion>

        <RevealMotion :delay="0.4">
          <div class="hero-actions">
            <RouterLink to="/operations" class="btn btn-primary"><ArrowDownRight :size="16" />View Experience</RouterLink>
            <a href="/resume-john.pdf" class="btn btn-secondary" download><Download :size="16" />Download Resume</a>
            <RouterLink to="/contact" class="btn btn-secondary"><Mail :size="16" />Contact Me</RouterLink>
          </div>
        </RevealMotion>
      </div>

      <div class="portrait-wrap">
        <div class="portrait-card" role="img" aria-label="Portrait of John">
          <div class="portrait-ring" />
          <p>John</p>
          <span>Maritime Chief Engineer</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: calc(100svh - 88px);
  display: grid;
  align-items: center;
  width: 100vw;
  margin: 0 0 2rem;
  margin-inline: calc(50% - 50vw);
  border-radius: 0;
  overflow: hidden;
  padding-block: clamp(2rem, 7vw, 6rem);
  border: 1px solid var(--card-border);
  border-inline-width: 0;
  background:
    radial-gradient(circle at 20% 20%, color-mix(in oklab, var(--brand-cyan), transparent 80%), transparent 40%),
    radial-gradient(circle at 80% 0%, color-mix(in oklab, var(--brand-gold), transparent 86%), transparent 50%),
    linear-gradient(160deg, color-mix(in oklab, var(--bg-primary), black 4%), color-mix(in oklab, var(--bg-primary), #03101d 26%));
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, color-mix(in oklab, var(--brand-cyan), transparent 90%) 1px, transparent 1px),
    linear-gradient(to bottom, color-mix(in oklab, var(--brand-cyan), transparent 90%) 1px, transparent 1px);
  background-size: 3.5rem 3.5rem;
  mask-image: radial-gradient(circle at center, black 40%, transparent 90%);
  animation: drift 22s linear infinite;
  pointer-events: none;
}

.ship {
  position: absolute;
  width: 70px;
  height: 16px;
  border-radius: 10px 10px 4px 4px;
  background: linear-gradient(to right, color-mix(in oklab, var(--brand-cyan), white 45%), color-mix(in oklab, var(--brand-cyan), transparent 20%));
  animation: floatShip 20s linear infinite;
}

.ship::after {
  content: '';
  position: absolute;
  left: 25%;
  top: -10px;
  width: 20px;
  height: 8px;
  border-radius: 2px;
  background: color-mix(in oklab, var(--brand-gold), white 20%);
}

.hero-layout {
  position: relative;
  z-index: 2;
  display: grid;
  width: min(1300px, calc(100% - 1.2rem));
  margin-inline: auto;
  padding-inline: calc(clamp(1rem, 3vw, 2rem) + 1rem);
  box-sizing: border-box;
  grid-template-columns: minmax(0, 1.45fr) minmax(250px, 0.9fr);
  align-items: center;
  gap: clamp(1.2rem, 3.4vw, 3rem);
}

.hero-content {
  max-width: 760px;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.75rem;
  color: var(--text-muted);
}

h1 {
  margin: 0.4rem 0;
  font-size: clamp(2.8rem, 8vw, 6.3rem);
  line-height: 0.93;
  letter-spacing: -0.04em;
  font-family: var(--font-display);
}

.title,
.subtitle {
  margin: 0;
  font-size: clamp(1.2rem, 2.8vw, 2.4rem);
  letter-spacing: -0.02em;
}

.subtitle {
  color: var(--brand-cyan);
  font-weight: 500;
}

.tagline {
  margin-top: 1.3rem;
  max-width: 65ch;
  color: var(--text-muted);
  line-height: 1.8;
}

.hero-actions {
  margin-top: 1.8rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 500;
  padding: 0.72rem 1rem;
  border: 1px solid transparent;
  transition: transform 0.25s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background: linear-gradient(130deg, var(--brand-cyan), color-mix(in oklab, var(--brand-cyan), white 14%));
  color: #072034;
}

.btn-secondary {
  border-color: var(--card-border);
  color: var(--text-primary);
  background: color-mix(in oklab, var(--bg-primary), transparent 38%);
}

.portrait-wrap {
  display: flex;
  justify-content: flex-end;
}

.portrait-card {
  width: clamp(230px, 22vw, 320px);
  aspect-ratio: 3 / 4;
  padding: clamp(0.9rem, 1.4vw, 1.2rem);
  border-radius: 1.25rem;
  border: 1px solid var(--card-border);
  background: linear-gradient(160deg, color-mix(in oklab, var(--bg-primary), white 10%), color-mix(in oklab, var(--bg-primary), black 8%));
  backdrop-filter: blur(16px);
  display: grid;
  place-content: center;
  text-align: center;
  z-index: 2;
}

.portrait-card p {
  margin: 0;
  font-weight: 600;
}

.portrait-card span {
  margin-top: 0.4rem;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.portrait-ring {
  margin-inline: auto;
  width: 68px;
  aspect-ratio: 1;
  border-radius: 50%;
  margin-bottom: 0.85rem;
  border: 1px solid var(--card-border);
  box-shadow: inset 0 0 0 5px color-mix(in oklab, var(--brand-cyan), transparent 83%);
}

@media (max-width: 950px) {
  .hero-layout {
    grid-template-columns: 1fr;
    gap: 1.4rem;
  }

  .portrait-wrap {
    justify-content: start;
  }

  .portrait-card {
    width: min(280px, 100%);
  }
}

@media (max-width: 880px) {
  .hero-layout {
    padding-inline: 1.75rem;
  }
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
    transform: translateX(-32px);
  }

  100% {
    transform: translateX(0);
  }
}
</style>
