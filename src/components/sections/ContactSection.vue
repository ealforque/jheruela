<script setup lang="ts">
import { Linkedin, Mail, Phone, Download } from 'lucide-vue-next'
import SectionHeading from '../ui/SectionHeading.vue'
</script>

<template>
  <section id="contact" class="section shell">
    <SectionHeading
      eyebrow="Contact"
      title="Open to Strategic Technical Leadership Opportunities"
      description="Available for senior maritime engineering and technical superintendent roles with global operators, owners, and management organizations."
    />

    <div class="contact-grid">
      <form class="contact-form" aria-label="Contact form" @submit.prevent>
        <label>
          Name
          <input type="text" name="name" autocomplete="name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" autocomplete="email" required />
        </label>
        <label>
          Message
          <textarea name="message" rows="4" required />
        </label>
        <button type="submit">Send Message</button>
      </form>

      <aside class="contact-panel">
        <div class="map" aria-hidden="true">
          <span class="route r1" />
          <span class="route r2" />
          <span class="route r3" />
        </div>

        <a href="mailto:john.engineering@example.com"><Mail :size="16" /> john.engineering@example.com</a>
        <a href="tel:+00000000000"><Phone :size="16" /> +00 000 000 0000</a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer noopener"><Linkedin :size="16" /> LinkedIn</a>
        <a href="/resume-john.pdf" download><Download :size="16" /> Download CV</a>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.contact-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1.2fr 1fr;
}

.contact-form,
.contact-panel {
  border-radius: 1rem;
  border: 1px solid var(--card-border);
  padding: 1rem;
  background: linear-gradient(150deg, var(--card-bg), var(--card-bg-strong));
}

.contact-form {
  display: grid;
  gap: 0.85rem;
}

label {
  display: grid;
  gap: 0.45rem;
  color: var(--text-muted);
  font-size: 0.9rem;
}

input,
textarea,
button {
  font: inherit;
}

input,
textarea {
  border-radius: 0.7rem;
  border: 1px solid var(--card-border);
  background: color-mix(in oklab, var(--bg-primary), transparent 30%);
  color: var(--text-primary);
  padding: 0.66rem 0.75rem;
}

button {
  border: 0;
  border-radius: 999px;
  padding: 0.75rem 1rem;
  width: fit-content;
  background: linear-gradient(125deg, var(--brand-cyan), color-mix(in oklab, var(--brand-cyan), white 12%));
  color: #062132;
  font-weight: 600;
  cursor: pointer;
}

.contact-panel {
  display: grid;
  gap: 0.7rem;
  align-content: start;
}

.contact-panel a {
  text-decoration: none;
  color: var(--text-primary);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.map {
  position: relative;
  min-height: 180px;
  margin-bottom: 0.75rem;
  border-radius: 0.8rem;
  background:
    radial-gradient(circle at 20% 30%, color-mix(in oklab, var(--brand-cyan), transparent 80%), transparent 24%),
    radial-gradient(circle at 72% 68%, color-mix(in oklab, var(--brand-gold), transparent 78%), transparent 28%),
    linear-gradient(150deg, color-mix(in oklab, var(--bg-primary), black 10%), color-mix(in oklab, var(--bg-primary), #02131f 24%));
  overflow: hidden;
}

.route {
  position: absolute;
  border-top: 2px dotted color-mix(in oklab, var(--brand-cyan), white 30%);
  width: 160px;
  animation: routeMove 6.5s linear infinite;
}

.r1 {
  top: 28%;
  left: 8%;
}

.r2 {
  top: 52%;
  left: 30%;
  width: 130px;
  animation-delay: 1.6s;
}

.r3 {
  top: 76%;
  left: 15%;
  width: 180px;
  animation-delay: 2.4s;
}

@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .route {
    animation: none;
  }
}

@keyframes routeMove {
  0% {
    transform: translateX(-8px);
    opacity: 0.35;
  }

  50% {
    transform: translateX(8px);
    opacity: 1;
  }

  100% {
    transform: translateX(-8px);
    opacity: 0.35;
  }
}
</style>
