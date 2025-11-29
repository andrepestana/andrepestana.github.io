<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Comments from './Comments.vue'
import SimpleLayout from './SimpleLayout.vue'

const { Layout: DefaultLayout } = DefaultTheme
const { frontmatter, page } = useData()

const isSimpleLayout = computed(() => frontmatter.value?.layout === 'simple')
const layoutComponent = computed(() => (isSimpleLayout.value ? SimpleLayout : DefaultLayout))
</script>

<template>
  <component :is="layoutComponent">
    <template v-if="!isSimpleLayout" #home-hero-after>
      <div class="home-features">
        <div class="container">
          <div class="features">
            <div v-for="(feature, index) in frontmatter.customFeatures" :key="index" class="feature">
              <h2 v-if="feature.icon || feature.title" class="title">
                <span v-if="feature.icon" class="icon">{{ feature.icon }}</span>
                {{ feature.title }}
              </h2>
              <p v-if="feature.details" class="details">{{ feature.details }}</p>
              <div v-if="feature.items" class="items">
                <div v-for="(item, itemIndex) in feature.items" :key="itemIndex" class="item">
                  <a v-if="item.link" :href="item.link" class="item-link">
                    <span v-if="item.icon" class="item-icon">{{ item.icon }}</span>
                    <span class="item-text">{{ item.text }}</span>
                  </a>
                  <div v-else class="item-content">
                    <span v-if="item.icon" class="item-icon">{{ item.icon }}</span>
                    <span class="item-text">{{ item.text }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <div v-if="!isSimpleLayout" id="fb-root"></div>
    <template v-if="!isSimpleLayout" #doc-before>
      <div class="vp-doc">
        <h1 id="frontmatter-title" tabindex="-1">
          <div v-html="frontmatter.title"></div>
          <a class="header-anchor" href="#frontmatter-title" aria-hidden="true">#</a>
        </h1>
        <span v-if="frontmatter.tags" style="padding-bottom: 20px">
          tags:
          <span v-for="(tag, index) in frontmatter.tags.split(',').map(element => element.trim())" :key="index">
            🏷️<a :href="`/tags.html?tag=${tag}`">{{ tag }}&nbsp;</a>
          </span>
        </span>
        <div v-if="frontmatter.giphy" style="margin-bottom: 20px; margin-top: 20px">
          <div :style="{
            'width': '100%',
            'height': '0',
            'padding-bottom': frontmatter.giphyPaddingBottom,
            'position': 'relative'
          }"><iframe :src="frontmatter.giphy" width="100%" height="100%" style="position:absolute" frameBorder="0"
              class="giphy-embed" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </template>
    <template v-if="!isSimpleLayout" #doc-after>
      <Comments v-if="!page.frontmatter.home && frontmatter.comments !== false" />
    </template>
  </component>
</template>
<style scoped>
.home-features {
  padding: 2.5rem 0;
  max-width: 1152px;
  margin: 0 auto;
}

.container {
  margin: 0 auto;
  max-width: 1152px;
  padding: 0 1.5rem;
}

.features {
  display: flex;
  flex-wrap: wrap;
  margin: -0.5rem;
}

.feature {
  flex: 1 1 30%;
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  transition: background-color 0.5s;
}

.title {
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.icon {
  display: inline-block;
  margin-right: 0.5rem;
  font-size: 1.2rem;
}

.details {
  margin: 0.5rem 0 1rem;
  color: var(--vp-c-text-2);
}

.items {
  margin-top: 1rem;
}

.item {
  margin: 0.5rem 0;
}

.item-link {
  display: flex;
  align-items: center;
  color: var(--vp-c-brand);
  text-decoration: none;
  transition: color 0.2s;
}

.item-link:hover {
  color: var(--vp-c-brand-dark);
  text-decoration: underline;
}

.item-content {
  display: flex;
  align-items: center;
}

.item-icon {
  margin-right: 0.5rem;
}

@media (max-width: 768px) {
  .features {
    flex-direction: column;
  }

  .feature {
    flex: 1 1 100%;
  }
}


/* Base width tokens used across the default theme */
:root {
  /* overall max width of the layout (nav, home, docs) */
  --vp-layout-max-width: 1280px;
  /* default ~1100–1200; bump a bit */
  /* width of the reading column inside docs pages */
  --vp-layout-content-width: 860px;
  /* default ~720–780; widen slightly */
  /* optional: widen sidebar if you use long titles */
  --vp-sidebar-width: 288px;
}

/* Scale up on big screens */
@media (min-width: 1400px) {
  :root {
    --vp-layout-max-width: 1440px;
    --vp-layout-content-width: 920px;
  }
}

@media (min-width: 1680px) {
  :root {
    --vp-layout-max-width: 1600px;
    --vp-layout-content-width: 980px;
  }
}

/* Ensure containers honor the variables (future-proof selectors) */
.VPContent,
.VPDoc .container,
.VPHome,
.VPNavBar .container {
  max-width: var(--vp-layout-max-width);
  margin-left: auto;
  margin-right: auto;
}

/* Keep text readable: cap paragraph line-length */
.VPDoc .content {
  max-width: var(--vp-layout-content-width);
}

/* Optional: slightly widen the right “On this page” aside */
.VPDoc.aside .aside {
  width: 280px;
}
</style>
