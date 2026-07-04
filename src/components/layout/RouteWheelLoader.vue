<template>
  <div class="loader-overlay" role="status" aria-live="polite" aria-label="Loading page">
    <div class="loader-card">
      <div class="wheel-wrap" aria-hidden="true">
        <svg viewBox="0 0 24 24" class="wheel" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="2" />
          <path d="M12 3v7" />
          <path d="M12 14v7" />
          <path d="M3 12h7" />
          <path d="M14 12h7" />
          <path d="m5.6 5.6 4.9 4.9" />
          <path d="m13.5 13.5 4.9 4.9" />
        </svg>
      </div>
      <p>Navigating Deck...</p>
    </div>
  </div>
</template>

<style scoped>
.loader-overlay {
  position: fixed;
  inset: 0;
  z-index: 120;
  display: grid;
  place-items: center;
  background: color-mix(in oklab, var(--bg-primary), transparent 22%);
  backdrop-filter: blur(10px);
}

.loader-card {
  border: 1px solid var(--card-border);
  border-radius: 1rem;
  padding: 1rem 1.2rem;
  min-width: 190px;
  display: grid;
  justify-items: center;
  gap: 0.6rem;
  background: linear-gradient(150deg, var(--card-bg), var(--card-bg-strong));
  box-shadow: var(--card-shadow);
}

.wheel-wrap {
  color: var(--brand-cyan);
}

.wheel {
  width: 2.5rem;
  height: 2.5rem;
  animation: spin 1s linear infinite;
}

p {
  margin: 0;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
}

@media (prefers-reduced-motion: reduce) {
  .wheel {
    animation: none;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
