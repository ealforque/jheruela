<script setup lang="ts">
import { Wrench, ChartNoAxesCombined, ShieldCheck } from 'lucide-vue-next'
import RevealMotion from '../components/ui/RevealMotion.vue'
import PageIntroBackground from '../components/background/PageIntroBackground.vue'
import ProjectsSection from '../components/sections/ProjectsSection.vue'
import JourneySection from '../components/sections/JourneySection.vue'
</script>

<template>
  <main id="main-content">
    <section class="section shell page-intro">
      <PageIntroBackground />
      <div class="intro-content">
        <div class="intro-grid">
          <div>
            <RevealMotion>
              <p class="eyebrow">Engineering Projects</p>
            </RevealMotion>
            <RevealMotion :delay="0.08">
              <h1>Project Delivery with Measurable Business Impact</h1>
            </RevealMotion>
            <RevealMotion :delay="0.14">
              <p>
                Structured project execution from overhaul campaigns to automation upgrades, with strong outcomes in uptime, safety, and cost control.
              </p>
            </RevealMotion>
          </div>
          <div class="visual-stack" aria-hidden="true">
            <RevealMotion :delay="0.14" class="visual-card"><Wrench :size="18" /><span>Program Execution</span></RevealMotion>
            <RevealMotion :delay="0.2" class="visual-card"><ChartNoAxesCombined :size="18" /><span>Business Outcomes</span></RevealMotion>
            <RevealMotion :delay="0.26" class="visual-card"><ShieldCheck :size="18" /><span>Risk-Controlled Delivery</span></RevealMotion>
          </div>
        </div>
      </div>
    </section>

    <ProjectsSection />
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
  grid-template-columns: minmax(0, 1.25fr) minmax(240px, 0.8fr);
  align-items: center;
}

h1 {
  margin: 0;
  font-size: clamp(2rem, 5vw, 3.3rem);
  font-family: var(--font-display);
}

p {
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
}

@media (max-width: 900px) {
  .intro-grid {
    grid-template-columns: 1fr;
  }
}
</style>
