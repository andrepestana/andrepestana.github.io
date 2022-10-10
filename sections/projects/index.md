# Personal Projects

Here you can find some of my personal projects.

<div v-for="project in projects">

<h2><a :href="`${constants.baseUrl}${project.path}`">{{ project.title }}</a></h2>

{{ project.excerpt }}

<p style="text-align: right"><a :href="`${constants.baseUrl}${project.path}`">Read more</a></p>

**~ {{ project.author }}** ({{ transformDate(project.updated) }})

</div>

<script setup>
import data from '../../data.json'
import constants from '../../.vitepress/constants.js'

// sort projects
const projects = (data['projects'] || []).sort(
  (a, b) => new Date(b.updated) - new Date(a.updated)
)

const transformDate = (date) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
</script>
