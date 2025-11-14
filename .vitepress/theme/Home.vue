<template>
  <Layout>
    <template #home-hero-after>
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
    <template #doc-before>
      <div class="vp-doc">
        <h1 id="frontmatter-title" tabindex="-1">
          {{ frontmatter.title }}
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
    <template #doc-after>
      <Comments v-if="!page.frontmatter.home && frontmatter.comments !== false" />
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

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
</style>