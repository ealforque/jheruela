<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { Moon, Sun, ShipWheel, Menu, X } from 'lucide-vue-next'
import { navItems } from '../../data/siteContent'
import { useTheme } from '../../composables/useTheme'

const { isDark, toggleTheme } = useTheme()
const route = useRoute()
const isMenuOpen = ref(false)

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="site-header">
    <RouterLink class="brand" to="/" aria-label="Go to home">
      <ShipWheel :size="18" />
      <span>JOHN</span>
    </RouterLink>

    <nav aria-label="Primary navigation">
      <RouterLink
        v-for="item in navItems"
        :key="item.label"
        :to="item.to"
        class="nav-link"
        :class="{ active: route.path === item.to }"
      >
        {{ item.label }}
      </RouterLink>
    </nav>

    <div class="controls">
      <button class="theme-btn" type="button" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'" @click="toggleTheme">
        <Sun v-if="isDark" :size="16" />
        <Moon v-else :size="16" />
      </button>

      <button class="theme-btn mobile-toggle" type="button" :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'" @click="isMenuOpen = !isMenuOpen">
        <X v-if="isMenuOpen" :size="16" />
        <Menu v-else :size="16" />
      </button>
    </div>
  </header>

  <Transition name="menu-fade">
    <nav v-if="isMenuOpen" class="mobile-nav" aria-label="Mobile navigation">
      <RouterLink
        v-for="item in navItems"
        :key="item.label"
        :to="item.to"
        class="mobile-link"
        :class="{ active: route.path === item.to }"
        @click="closeMenu"
      >
        {{ item.label }}
      </RouterLink>
    </nav>
  </Transition>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
  padding: 1rem clamp(1rem, 3vw, 2rem);
  margin: 1rem;
  border-radius: 999px;
  border: 1px solid var(--card-border);
  background: color-mix(in oklab, var(--bg-primary), transparent 42%);
  backdrop-filter: blur(14px);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.12em;
  font-size: 0.8rem;
  color: var(--text-primary);
}

nav {
  display: flex;
  align-items: center;
  gap: clamp(0.8rem, 1.8vw, 1.6rem);
}

.nav-link {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.88rem;
}

.nav-link:hover,
.nav-link:focus-visible,
.nav-link.active {
  color: var(--text-primary);
}

.controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.theme-btn {
  height: 2rem;
  width: 2rem;
  display: grid;
  place-items: center;
  border-radius: 999px;
  border: 1px solid var(--card-border);
  background: transparent;
  color: var(--text-primary);
  cursor: pointer;
}

.mobile-toggle {
  display: none;
}

.mobile-nav {
  margin: 0 0.75rem;
  border-radius: 1rem;
  border: 1px solid var(--card-border);
  background: color-mix(in oklab, var(--bg-primary), transparent 24%);
  backdrop-filter: blur(14px);
  display: grid;
  padding: 0.55rem;
  gap: 0.4rem;
}

.mobile-link {
  text-decoration: none;
  color: var(--text-muted);
  border-radius: 0.7rem;
  padding: 0.65rem 0.75rem;
}

.mobile-link.active {
  background: color-mix(in oklab, var(--brand-cyan), transparent 84%);
  color: var(--text-primary);
}

.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.2s ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
}

@media (max-width: 880px) {
  .site-header {
    margin: 0.75rem;
    border-radius: 1rem;
  }

  nav {
    display: none;
  }

  .mobile-toggle {
    display: grid;
  }
}
</style>
