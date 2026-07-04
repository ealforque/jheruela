<script setup lang="ts">
import { Ship, Wrench, ChartNoAxesCombined, Fuel, ArrowRight, BriefcaseBusiness, Waves } from 'lucide-vue-next'
import RevealMotion from '../components/ui/RevealMotion.vue'
import PageIntroBackground from '../components/background/PageIntroBackground.vue'
import ExpertiseSection from '../components/sections/ExpertiseSection.vue'
import StatsSection from '../components/sections/StatsSection.vue'
import JourneySection from '../components/sections/JourneySection.vue'

const operationsBadges = ['Bulk', 'Container', 'LNG', 'LPG', 'Ro-Ro', 'CMMS', 'ISO 9001', 'Class Surveys']

const operationsDecks = [
  {
    title: 'Professional Experience',
    description: 'Full career timeline, roles, achievements, and technologies used.',
    to: '/experience',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Vessel Experience',
    description: 'Detailed vessel classes, engine models, routes, and class societies.',
    to: '/vessels',
    icon: Waves,
  },
  {
    title: 'Engineering Projects',
    description: 'Major project challenges, implementation strategies, and measurable outcomes.',
    to: '/projects',
    icon: Wrench,
  },
]
</script>

<template>
  <main id="main-content">
    <section class="section shell page-intro">
      <PageIntroBackground />

      <div class="intro-content">
        <div class="intro-grid">
        <div>
          <RevealMotion>
            <p class="eyebrow">Operations Page</p>
          </RevealMotion>
          <RevealMotion :delay="0.08">
            <h1>Fleet Performance and Operational Excellence</h1>
          </RevealMotion>
          <RevealMotion :delay="0.14">
            <p>
              Follow the engineering timeline, vessel exposure, and project delivery outcomes that define John's leadership impact.
            </p>
          </RevealMotion>
        </div>

        <div class="visual-stack" aria-hidden="true">
          <RevealMotion :delay="0.12" class="visual-card"><Ship :size="18" /><span>Multi-Vessel Operations</span></RevealMotion>
          <RevealMotion :delay="0.18" class="visual-card"><Wrench :size="18" /><span>Dry Dock Precision</span></RevealMotion>
          <RevealMotion :delay="0.24" class="visual-card"><Fuel :size="18" /><span>Fuel Optimization</span></RevealMotion>
          <RevealMotion :delay="0.3" class="visual-card"><ChartNoAxesCombined :size="18" /><span>Data-Led Reliability</span></RevealMotion>
        </div>
      </div>

        <RevealMotion :delay="0.2" class="logo-rail-wrap">
          <div class="logo-rail">
            <span v-for="badge in operationsBadges" :key="badge" class="logo-chip">{{ badge }}</span>
          </div>
        </RevealMotion>
      </div>
    </section>

    <StatsSection />
    <ExpertiseSection />

    <section class="section shell decks-section">
      <RevealMotion>
        <p class="eyebrow">Operations Decks</p>
      </RevealMotion>
      <RevealMotion :delay="0.08">
        <h2>Choose a Dedicated Operations Module</h2>
      </RevealMotion>
      <div class="decks-grid">
        <RevealMotion v-for="(deck, idx) in operationsDecks" :key="deck.title" :delay="0.08 + idx * 0.06" class="deck-card">
          <component :is="deck.icon" :size="18" class="deck-icon" />
          <h3>{{ deck.title }}</h3>
          <p>{{ deck.description }}</p>
          <RouterLink :to="deck.to" class="deck-link">Open Module <ArrowRight :size="15" /></RouterLink>
        </RevealMotion>
      </div>
    </section>

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

.decks-section h2 {
  margin: 0.35rem 0 1rem;
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 3vw, 2rem);
}

.decks-grid {
  display: grid;
  gap: 0.9rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.deck-card {
  border: 1px solid var(--card-border);
  border-radius: 1rem;
  padding: 1rem;
  background: linear-gradient(145deg, var(--card-bg), var(--card-bg-strong));
}

.deck-icon {
  color: var(--brand-cyan);
}

.deck-card h3 {
  margin: 0.55rem 0 0;
}

.deck-card p {
  margin: 0.65rem 0 0.8rem;
  color: var(--text-muted);
  line-height: 1.65;
}

.deck-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--brand-cyan);
  text-decoration: none;
  font-weight: 600;
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
  animation: lift 4.3s ease-in-out infinite;
}

.visual-card:nth-child(2) {
  animation-delay: 0.35s;
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
