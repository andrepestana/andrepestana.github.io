# Latest posts

<div v-for="article in articles">

<h2><a :href="`${constants.baseUrl}${article.path}`">{{ article.title }}</a></h2>

{{ article.excerpt }}

**~ {{ article.author }}** ({{ transformDate(article.updated) }})

</div>

<script setup>
import data from '../../data.json'
import constants from '../../.vitepress/constants.js'

// sort articles
const articles = data['blog'].sort(
  (a, b) => new Date(b.updated) - new Date(a.updated)
)

const transformDate = (date) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
</script>
