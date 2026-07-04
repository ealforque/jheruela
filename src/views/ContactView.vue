<script setup lang="ts">
import { Globe, Handshake, Radio, Compass } from 'lucide-vue-next'
import RevealMotion from '../components/ui/RevealMotion.vue'
import PageIntroBackground from '../components/background/PageIntroBackground.vue'
import TestimonialsSection from '../components/sections/TestimonialsSection.vue'
import ContactSection from '../components/sections/ContactSection.vue'
import JourneySection from '../components/sections/JourneySection.vue'

const contactBadges = ['Global Routes', '24/7 Readiness', 'Technical Advisory', 'Fleet Owners', 'Marine Managers', 'Captains']
</script>

<template>
  <main id="main-content">
    <section class="section shell page-intro">
      <PageIntroBackground />

      <div class="intro-content">
        <div class="intro-grid">
        <div>
          <RevealMotion>
            <p class="eyebrow">Contact Page</p>
          </RevealMotion>
          <RevealMotion :delay="0.08">
            <h1>Let’s Navigate the Next Engineering Mission</h1>
          </RevealMotion>
          <RevealMotion :delay="0.14">
            <p>
              Connect directly for senior maritime technical leadership opportunities, consultancy, or strategic fleet initiatives.
            </p>
          </RevealMotion>
        </div>

        <div class="visual-stack" aria-hidden="true">
          <RevealMotion :delay="0.12" class="visual-card"><Globe :size="18" /><span>Global Maritime Reach</span></RevealMotion>
          <RevealMotion :delay="0.18" class="visual-card"><Handshake :size="18" /><span>Executive Collaboration</span></RevealMotion>
          <RevealMotion :delay="0.24" class="visual-card"><Radio :size="18" /><span>Rapid Technical Response</span></RevealMotion>
          <RevealMotion :delay="0.3" class="visual-card"><Compass :size="18" /><span>Strategic Direction</span></RevealMotion>
        </div>
      </div>

        <RevealMotion :delay="0.2" class="logo-rail-wrap">
          <div class="logo-rail">
            <span v-for="badge in contactBadges" :key="badge" class="logo-chip">{{ badge }}</span>
          </div>
        </RevealMotion>
      </div>
    </section>

    <TestimonialsSection />
    <ContactSection />
    <JourneySection />
  </main>
</template>

<style scoped>
.page-intro {
  position: relative;
  overflow: hidden;
}

.intro-content {
  position: relative;
  z-index: 2;
}

.intro-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: minmax(0, 1.3fr) minmax(240px, 0.9fr);
  align-items: center;
}

.page-intro h1 {
  margin: 0;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-family: var(--font-display);
}

.page-intro p {
  margin: 0.9rem 0 0;
  max-width: 65ch;
  color: var(--text-muted);
  line-height: 1.7;
}

.eyebrow {
  margin: 0 0 0.8rem;
  color: var(--brand-cyan);
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.75rem;
}

.visual-stack {
  display: grid;
  gap: 0.65rem;
}

.visual-card {
  border: 1px solid var(--card-border);
  border-radius: 0.85rem;
  background: linear-gradient(145deg, var(--card-bg), var(--card-bg-strong));
  padding: 0.7rem 0.8rem;
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  color: var(--text-primary);
  animation: lift 4.1s ease-in-out infinite;
}

.visual-card:nth-child(2) {
  animation-delay: 0.35s;
}

.visual-card:nth-child(3) {
  animation-delay: 0.75s;
}

.visual-card:nth-child(4) {
  animation-delay: 1s;
}

.logo-rail-wrap {
  margin-top: 1rem;
}

.logo-rail {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}

.logo-chip {
  border: 1px solid var(--card-border);
  border-radius: 999px;
  padding: 0.4rem 0.72rem;
  font-size: 0.8rem;
  color: var(--text-muted);
  background: color-mix(in oklab, var(--bg-primary), transparent 26%);
}

@media (max-width: 900px) {
  .intro-grid {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .visual-card {
    animation: none;
  }
}

@keyframes lift {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-3px);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
