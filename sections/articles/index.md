# Latest articles

<div v-for="article in articles">

<h2><a :href="`${constants.baseUrl}${article.path}`">{{ article.title }}</a></h2>

{{ article.excerpt }}

<p style="text-align: right"><a :href="`${constants.baseUrl}${article.path}`">Read more</a></p>

**~ {{ article.author }}** ({{ transformDate(article.updated) }})

</div>

<script setup>
import data from '../../data.json'
import constants from '../../.vitepress/constants.js'

const articles = data['articles'].sort(
  (a, b) => new Date(b.updated) - new Date(a.updated)
)

const transformDate = (date) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
</script>
