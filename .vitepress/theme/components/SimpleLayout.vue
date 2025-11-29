<script setup>
import { Content } from 'vitepress'
</script>

<template>
  <div class="simple-page">
    <main class="simple-page__body">
      <div class="vp-doc">
        <Content />
      </div>
    </main>
  </div>
</template>

<style scoped>
.simple-page {
  min-height: 100vh;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  display: flex;
}

.simple-page__body {
  width: min(880px, 100%);
  margin: 0 auto;
  padding: 2.5rem 1.5rem 3rem;
}

@media (max-width: 640px) {
  .simple-page__body {
    padding: 1.75rem 1rem 2.5rem;
  }
}
</style>
