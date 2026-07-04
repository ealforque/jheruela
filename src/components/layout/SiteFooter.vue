<script setup lang="ts">
import { Linkedin, Mail, Phone } from 'lucide-vue-next'
</script>

<template>
  <footer class="site-footer">
    <div>
      <p class="title">John</p>
      <p>Maritime Chief Engineer | Technical Superintendent</p>
    </div>

    <nav aria-label="Footer navigation" class="footer-nav">
      <RouterLink to="/">Overview</RouterLink>
      <RouterLink to="/experience">Experience</RouterLink>
      <RouterLink to="/operations">Operational Expertise</RouterLink>
      <RouterLink to="/projects">Engineering Projects</RouterLink>
      <RouterLink to="/contact">Contacts</RouterLink>
    </nav>

    <div class="socials" aria-label="Social links">
      <a href="mailto:john.engineering@example.com" aria-label="Send email">
        <Mail :size="16" />
      </a>
      <a href="tel:+00000000000" aria-label="Call phone number">
        <Phone :size="16" />
      </a>
      <a href="https://www.linkedin.com" aria-label="Open LinkedIn" target="_blank" rel="noreferrer noopener">
        <Linkedin :size="16" />
      </a>
    </div>

    <p class="copyright">© {{ new Date().getFullYear() }} John. Engineered with Precision.</p>
  </footer>
</template>

<style scoped>
.site-footer {
  margin-top: 4rem;
  padding: 2rem clamp(1rem, 4vw, 3rem) 3rem;
  border-top: 1px solid var(--card-border);
  display: grid;
  gap: 1.2rem;
  color: var(--text-muted);
}

.title {
  margin: 0;
  color: var(--text-primary);
  font-family: var(--font-display);
  font-size: 1.2rem;
}

.footer-nav,
.socials {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
}

.footer-nav a,
.socials a {
  color: inherit;
  text-decoration: none;
}

.socials a {
  height: 2rem;
  width: 2rem;
  border-radius: 999px;
  border: 1px solid var(--card-border);
  display: grid;
  place-items: center;
}

.copyright {
  margin: 0.75rem 0 0;
  font-size: 0.88rem;
}
</style>
