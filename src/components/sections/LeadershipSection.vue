<template>
  <section class="section shell">
    <blockquote class="leadership-quote">
      Engineering leadership is not only about maintaining machinery. It is about building reliable
      systems, developing exceptional people, driving operational excellence, and ensuring every vessel
      performs safely, efficiently, and sustainably.
    </blockquote>
  </section>
</template>

<style scoped>
.leadership-quote {
  margin: 0;
  padding: clamp(1.6rem, 5vw, 3rem);
  border-radius: 1.2rem;
  border: 1px solid var(--card-border);
  font-family: var(--font-display);
  font-size: clamp(1.2rem, 2.8vw, 2rem);
  line-height: 1.45;
  letter-spacing: -0.02em;
  background:
    radial-gradient(circle at top left, color-mix(in oklab, var(--brand-cyan), transparent 84%), transparent 38%),
    linear-gradient(150deg, var(--card-bg), var(--card-bg-strong));
}
</style>
