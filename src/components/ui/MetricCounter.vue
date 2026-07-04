<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const props = defineProps<{
  value: number
  suffix?: string
}>()

const shownValue = ref(0)
const rootEl = ref<HTMLElement | null>(null)

const formatted = computed(() => {
  const hasDecimals = props.value % 1 !== 0

  return `${shownValue.value.toLocaleString(undefined, {
    minimumFractionDigits: hasDecimals ? 1 : 0,
    maximumFractionDigits: hasDecimals ? 1 : 0,
  })}${props.suffix ?? ''}`
})

onMounted(() => {
  if (!rootEl.value) {
    return
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReducedMotion) {
    shownValue.value = props.value
    return
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) {
        return
      }

      observer.disconnect()

      const duration = 1200
      const start = performance.now()

      const tick = (timestamp: number) => {
        const progress = Math.min((timestamp - start) / duration, 1)
        shownValue.value = Number((props.value * progress).toFixed(1))

        if (progress < 1) {
          requestAnimationFrame(tick)
        }
      }

      requestAnimationFrame(tick)
    },
    { threshold: 0.5 },
  )

  observer.observe(rootEl.value)
})
</script>

<template>
  <strong ref="rootEl" class="metric-counter">{{ formatted }}</strong>
</template>

<style scoped>
.metric-counter {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 2.5vw, 2.35rem);
  letter-spacing: -0.03em;
  color: var(--text-primary);
}
</style>
