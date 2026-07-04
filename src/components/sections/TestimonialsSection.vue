<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { testimonials } from '../../data/siteContent'
import SectionHeading from '../ui/SectionHeading.vue'

const activeIndex = ref(0)
let intervalId = 0

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReducedMotion) {
    return
  }

  intervalId = window.setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % testimonials.length
  }, 4200)
})

onUnmounted(() => {
  if (intervalId) {
    window.clearInterval(intervalId)
  }
})
</script>

<template>
  <section class="section shell">
    <SectionHeading eyebrow="Testimonials" title="Trusted by Fleet Leaders and Maritime Stakeholders" />

    <div class="carousel" role="region" aria-live="polite" aria-label="Recommendations carousel">
      <article class="slide">
        <p class="quote">“{{ testimonials[activeIndex].quote }}”</p>
        <p class="author">{{ testimonials[activeIndex].author }}</p>
        <p class="role">{{ testimonials[activeIndex].role }}</p>
      </article>

      <div class="dots" aria-hidden="true">
        <button
          v-for="(item, idx) in testimonials"
          :key="item.author"
          type="button"
          class="dot"
          :class="{ active: idx === activeIndex }"
          :aria-label="`Show testimonial ${idx + 1}`"
          @click="activeIndex = idx"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.carousel {
  border-radius: 1rem;
  border: 1px solid var(--card-border);
  padding: clamp(1.2rem, 4vw, 2rem);
  background: linear-gradient(150deg, var(--card-bg), var(--card-bg-strong));
}

.slide {
  min-height: 210px;
}

.quote {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(1.12rem, 2.2vw, 1.6rem);
  line-height: 1.6;
}

.author {
  margin: 1rem 0 0;
  color: var(--text-primary);
  font-weight: 600;
}

.role {
  margin: 0.35rem 0 0;
  color: var(--text-muted);
}

.dots {
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 1.8rem;
  height: 0.3rem;
  border-radius: 999px;
  border: 0;
  background: color-mix(in oklab, var(--text-muted), transparent 45%);
  cursor: pointer;
}

.dot.active {
  background: var(--brand-cyan);
}
</style>
