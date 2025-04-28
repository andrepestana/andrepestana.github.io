<script setup>
import { ref, onMounted } from 'vue'
import Giscus from '@giscus/vue'
import { useData } from 'vitepress'

const { frontmatter, theme } = useData()
const giscusTheme = ref('preferred_color_scheme')

onMounted(() => {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  if (prefersDark) {
    giscusTheme.value = 'dark'
  } else {
    giscusTheme.value = 'light'
  }
})
</script>

<template>
  <div class="comments-wrapper">
    <div class="comments-divider"></div>
    <h2>Comments</h2>
    <Giscus
      id="comments"
      repo="andrepestana/andrepestana.github.io"
      repo-id="R_kgDOILPNYQ"
      category="Ideas"
      category-id="DIC_kwDOILPNYc4CpUlS"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      :theme="giscusTheme"
      lang="en"
      loading="lazy"
	  crossorigin="anonymous"
    />
  </div>
</template>

<style>
.comments-wrapper {
  margin-top: 2rem;
}

.comments-divider {
  border-top: 1px solid var(--vp-c-divider);
  margin: 2rem 0 1rem;
}
</style>
