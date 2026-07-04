<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import SiteHeader from './components/layout/SiteHeader.vue'
import SiteFooter from './components/layout/SiteFooter.vue'
import InteractiveBackdrop from './components/layout/InteractiveBackdrop.vue'
import RouteWheelLoader from './components/layout/RouteWheelLoader.vue'

const route = useRoute()
const isRouteLoading = ref(true)
let loaderTimer = 0

function startLoader() {
  isRouteLoading.value = true

  if (loaderTimer) {
    window.clearTimeout(loaderTimer)
  }

  loaderTimer = window.setTimeout(() => {
    isRouteLoading.value = false
  }, 1500)
}

watch(
  () => route.fullPath,
  () => {
    startLoader()
  },
  { immediate: true },
)

onBeforeUnmount(() => {
  if (loaderTimer) {
    window.clearTimeout(loaderTimer)
  }
})
</script>

<template>
  <div class="app-shell">
    <a class="skip-link" href="#main-content">Skip to content</a>
    <InteractiveBackdrop />
    <SiteHeader />
    <Transition name="loader-fade">
      <RouteWheelLoader v-if="isRouteLoading" />
    </Transition>
    <RouterView v-slot="{ Component, route }">
      <Transition name="page-transition" mode="out-in">
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
    <SiteFooter />
  </div>
</template>

<style scoped>
.app-shell {
  position: relative;
  isolation: isolate;
}

.skip-link {
  position: absolute;
  left: -9999px;
  top: 0;
}

.skip-link:focus-visible {
  left: 1rem;
  top: 1rem;
  z-index: 100;
  background: #fff;
  color: #000;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
}

.page-transition-enter-active,
.page-transition-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.page-transition-enter-from,
.page-transition-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.loader-fade-enter-active,
.loader-fade-leave-active {
  transition: opacity 0.2s ease;
}

.loader-fade-enter-from,
.loader-fade-leave-to {
  opacity: 0;
}
</style>
