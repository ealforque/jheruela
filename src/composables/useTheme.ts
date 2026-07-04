import { computed, ref, watchEffect } from 'vue'

type Theme = 'dark' | 'light'

const storageKey = 'john-theme'
const theme = ref<Theme>('dark')

const canUseWindow = typeof window !== 'undefined'

if (canUseWindow) {
  const savedTheme = window.localStorage.getItem(storageKey) as Theme | null

  if (savedTheme === 'dark' || savedTheme === 'light') {
    theme.value = savedTheme
  }
}

watchEffect(() => {
  if (!canUseWindow) {
    return
  }

  document.documentElement.dataset.theme = theme.value
  document.documentElement.style.colorScheme = theme.value
  window.localStorage.setItem(storageKey, theme.value)
})

export function useTheme() {
  const isDark = computed(() => theme.value === 'dark')

  function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  return {
    theme,
    isDark,
    toggleTheme,
  }
}
