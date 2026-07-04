<script setup lang="ts">
import { Cpu, ShieldCheck, Anchor, Gauge } from 'lucide-vue-next'
import RevealMotion from '../components/ui/RevealMotion.vue'
import PageIntroBackground from '../components/background/PageIntroBackground.vue'
import ExpertiseSection from '../components/sections/ExpertiseSection.vue'
import CertificationSection from '../components/sections/CertificationSection.vue'
import DigitalSkillsSection from '../components/sections/DigitalSkillsSection.vue'
import LeadershipSection from '../components/sections/LeadershipSection.vue'
import JourneySection from '../components/sections/JourneySection.vue'

const expertiseBadges = ['IMO', 'DNV', 'Lloyds Register', 'ABS', 'MAN ES', 'Wartsila', 'SAP', 'Power BI']
</script>

<template>
  <main id="main-content">
    <section class="section shell page-intro">
      <PageIntroBackground />

      <div class="intro-content">
        <div class="intro-grid">
        <div>
          <RevealMotion>
            <p class="eyebrow">Expertise Page</p>
          </RevealMotion>
          <RevealMotion :delay="0.08">
            <h1>Technical Authority and Engineering Governance</h1>
          </RevealMotion>
          <RevealMotion :delay="0.14">
            <p>
              A structured view of maritime engineering depth, compliance mastery, digital systems, and leadership philosophy.
            </p>
          </RevealMotion>
        </div>

        <div class="visual-stack" aria-hidden="true">
          <RevealMotion :delay="0.12" class="visual-card">
            <ShieldCheck :size="18" />
            <span>Compliance Confidence</span>
          </RevealMotion>
          <RevealMotion :delay="0.18" class="visual-card">
            <Cpu :size="18" />
            <span>Digital Engineering Depth</span>
          </RevealMotion>
          <RevealMotion :delay="0.24" class="visual-card">
            <Gauge :size="18" />
            <span>Reliability by Design</span>
          </RevealMotion>
          <RevealMotion :delay="0.3" class="visual-card">
            <Anchor :size="18" />
            <span>Fleet Technical Authority</span>
          </RevealMotion>
        </div>
      </div>

        <RevealMotion :delay="0.2" class="logo-rail-wrap">
          <div class="logo-rail">
            <span v-for="badge in expertiseBadges" :key="badge" class="logo-chip">{{ badge }}</span>
          </div>
        </RevealMotion>
      </div>
    </section>

    <ExpertiseSection />
    <DigitalSkillsSection />
    <CertificationSection />
    <LeadershipSection />
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
  animation: lift 4.2s ease-in-out infinite;
}

.visual-card:nth-child(2) {
  animation-delay: 0.4s;
}

.visual-card:nth-child(3) {
  animation-delay: 0.7s;
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
