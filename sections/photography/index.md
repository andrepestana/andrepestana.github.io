---
layout: doc
---

# Photography

Here you can find some of my shots. It's been a long time since I bought a Nikon D3200 in 2011 but the hobby started kick me in in 2024/2025.

<div v-for="article in photography" :key="article.path">
  <h2><a :href="`${constants.baseUrl}/${article.path}`" v-html="article.titleHtml"></a></h2>
  <div v-html="article.excerptHtml"></div>
  <p style="text-align: right"><a :href="`${constants.baseUrl}/${article.path}`">Read more</a></p>
  <strong>~ {{ article.author }}</strong> ({{ transformDate(article.updated) }})
</div>

<script setup>
import data from '../../data.json'
import constants from '../../.vitepress/constants.js'

// sort photography
const photography = (data['photography'] || []).sort(
  (a, b) => new Date(b.updated) - new Date(a.updated)
)

const transformDate = (date) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
</script>
