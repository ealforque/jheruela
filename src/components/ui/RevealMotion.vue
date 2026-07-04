<script setup lang="ts">
import { Motion } from 'motion-v'

withDefaults(
  defineProps<{
    delay?: number
    y?: number
    tag?: string
  }>(),
  {
    delay: 0,
    y: 18,
    tag: 'div',
  },
)
</script>

<template>
  <Motion
    :is="tag"
    :initial="{ opacity: 0, y }"
    :while-in-view="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.8, delay, ease: [0.2, 0.7, 0.2, 1] }"
    :in-view-options="{ once: true, amount: 0.25 }"
  >
    <slot />
  </Motion>
</template>
