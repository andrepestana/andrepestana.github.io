---
layout: doc
---

# Latest posts

<div v-for="post in posts">

<h2><a :href="`${constants.baseUrl}${post.path}`">{{ post.title }}</a></h2>

{{ post.excerpt }}

<p style="text-align: right"><a :href="`${constants.baseUrl}${post.path}`">📖 Read more</a></p>

**~ {{ post.author }}** ({{ transformDate(post.updated) }})

</div>

<script setup>
import data from '../../data.json'
import constants from '../../.vitepress/constants.js'

// sort posts
const posts = data['blog'].sort(
  (a, b) => new Date(b.updated) - new Date(a.updated)
)

const transformDate = (date) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
</script>
