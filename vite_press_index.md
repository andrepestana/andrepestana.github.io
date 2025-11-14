---
title: Andre Pestana
editLink: true
description: Andre Pestana's website
head:
  - - meta
    - name: description
      content: Andre Pestana's website
  - - meta
    - name: keywords
      content: Software Development Javascript blog photography
lastUpdated: true
layout: home
# adds a page-level class to target styles just on this page
pageClass: landing-fixed-bg
hero:
  name: Andre Pestana
  text: Software Developer
  tagline: |
    Man improves himself as he follows his path.
    — Paulo Coelho
  image: /avatar.jpeg
  actions:
    - theme: brand
      text: Photography
      link: /sections/photography/index.html
    - theme: alt
      text: View on GitHub
      link: https://github.com/andrepestana/
    - theme: alt
      text: View on Linkedin
      link: https://www.linkedin.com/in/andrepestana/
customFeatures:
  - icon: 💻
    title: Software Development
    details: Full stack developer with experience in Javascript, TypeScript, Vue.js, Node.js, Java, Python, RESTful APIs, Databases and Agile Development.
  - icon: 🛠️
    title: Hobbies and Personal Projects
    details: Some of my personal hobbies, projects and interests.
    items:
      - icon: 📷
        text: Photography
        link: /sections/photography/index.html
      - icon: 🔨
        text: Projects
        link: /sections/projects/index.html
aside: false
---

<!--
  Replace the image URLs below with your own (ideally ~2500–3000px wide, compressed).
  Each section uses a fixed background on desktop; on mobile it scrolls for performance.
-->

<section class="ap-section fixed-bg" style="--bg: url('/images/landing/bg-1.jpg')">
  <div class="ap-inner">
    <h2>Photography</h2>
    <p>Wildlife and landscapes from Vancouver Island and beyond. High‑resolution galleries, EXIF details, and field notes.</p>
    <p>
      <a class="VPButton brand" href="/sections/photography/index.html">Explore photos</a>
    </p>
  </div>
</section>

<section class="ap-section content-card">
  <div class="ap-inner two-col">
    <div>
      <h3>Software Development</h3>
      <p>Full‑stack engineer: TypeScript · Vue · Node · Python · Java · REST · SQL/NoSQL · CI/CD · Cloud‑native.</p>
      <p>
        <a class="VPButton" href="/sections/projects/index.html">See projects</a>
      </p>
    </div>
    <ul class="ap-feature-list">
      <li><span>⚡</span> Frontend architecture with accessibility in mind</li>
      <li><span>🧪</span> QA automation and performance testing</li>
      <li><span>☁️</span> DevOps, containers, and IaC workflows</li>
    </ul>
  </div>
</section>

<section class="ap-section fixed-bg" style="--bg: url('/images/landing/bg-2.jpg')">
  <div class="ap-inner">
    <h2>Blog & Notes</h2>
    <p>Short, practical write‑ups on engineering, learning languages, and creative experiments.</p>
    <p>
      <a class="VPButton" href="/sections/articles/index.html">Read the blog</a>
    </p>
  </div>
</section>

<section class="ap-section content-card">
  <div class="ap-inner">
    <h3>Get in touch</h3>
    <p>
      Say hello on <a href="https://www.linkedin.com/in/andrepestana/" target="_blank" rel="noopener">LinkedIn</a> or check my code on <a href="https://github.com/andrepestana/" target="_blank" rel="noopener">GitHub</a>.
    </p>
  </div>
</section>

<section class="ap-section fixed-bg" style="--bg: url('/images/landing/bg-3.jpg')">
  <div class="ap-inner">
    <h2>Thanks for visiting 👋</h2>
    <p>Scroll, explore, and enjoy the static backgrounds. Images stay put — content glides.</p>
  </div>
</section>

<script setup>
import { onMounted, onUnmounted } from 'vue'
onMounted(() => {
  document.body.classList.add('round')
})
onUnmounted(() => {
  document.body.classList.remove('round')
})
</script>

<style>
/* --- Global tweaks for this page only --- */
.landing-fixed-bg .VPImage { border-radius: 50%; }

/* Layout rhythm */
.ap-section { position: relative; scroll-snap-align: start; }
.landing-fixed-bg .VPContent { scroll-snap-type: y proximity; }

/* Constrain inner content and spacing */
.ap-inner {
  position: relative; /* ensure z-index applies */
  z-index: 1; /* place content on top of overlay */
  max-width: var(--vp-layout-max-width, 1100px);
  margin: 0 auto;
  padding: 18vh 1.25rem 20vh;
}

/* Fixed background sections (desktop) */
.fixed-bg {
  position: relative;
  min-height: 100vh;
  width: 100vw; /* span full viewport width */
  margin-left: calc(50% - 50vw); /* break out of site container */
  background-image: var(--bg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; /* key effect */
  isolation: isolate; /* create stacking context for overlay */
}
.fixed-bg::before {
  content: "";
  position: absolute; inset: 0;
  background:
    linear-gradient(to bottom, rgba(0,0,0,.35), rgba(0,0,0,.35)),
    radial-gradient(1200px 400px at 50% 30%, rgba(0,0,0,.25), transparent 70%);
  z-index: 0; /* sit above bg but below content */
}
.fixed-bg h2, .fixed-bg p { color: white; text-shadow: 0 2px 12px rgba(0,0,0,.35); }

/* Card content sections that float above the page background */
.content-card { background: transparent; }
.content-card .ap-inner {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 22px;
  box-shadow: 0 10px 30px rgba(0,0,0,.05);
}

/* Two-column helper */
.two-col { display: grid; gap: 1.25rem; align-items: start; }
@media (min-width: 860px) {
  .two-col { grid-template-columns: 1.1fr 0.9fr; }
}

/* Feature list */
.ap-feature-list { list-style: none; padding: 0; margin: 0; }
.ap-feature-list li { display: flex; gap: .5rem; align-items: baseline; padding: .35rem 0; }
.ap-feature-list span { font-size: 1.15rem; line-height: 1; }

/* Button look that matches VitePress brand button */
.VPButton.brand { background: var(--vp-c-brand-1); color: white; }
.VPButton.brand:hover { background: var(--vp-c-brand-2); }

/* Improve readability on narrow screens and iOS (performance) */
@media (max-width: 860px) {
  .fixed-bg { background-attachment: scroll; }
  .ap-inner { padding: 14vh 1rem 14vh; }
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .landing-fixed-bg .VPContent { scroll-snap-type: none; }
}
</style>

