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
      content: Sotware Development Javascript blog
lastUpdated: true
layout: home
hero:
  name: Andre Pestana
  text: Software Developer
  tagline: | 
    Man improves himself as he follows his path. 
    — Paulo Coelho
  image: /avatar.jpeg
  actions:
    - theme: brand
      text: Blog
      link: /sections/blog/index.html
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
    # items:
      # - icon: 🔧
      #   text: Frontend Development
      #   link: /sections/articles/frontend-development.html
      # - icon: 🔌
      #   text: Backend Development
      #   link: /sections/articles/backend-development.html
      # - icon: 📱
      #   text: Mobile Development
      #   link: /sections/articles/mobile-development.html
  - icon: 🛠️
    title: Personal Projects
    details: Some of my personal projects, hobbies and interests.
    # items:
      # - icon: 📝
      #   text: Latest Projects
      #   link: /sections/projects/index.html
      # - icon: 🌟
      #   text: Featured Projects
      #   link: /sections/projects/featured.html
      # - icon: 🧪
      #   text: Experimental Projects
      #   link: /sections/projects/experimental.html
  - icon: 📚
    title: Learning Resources
    details: Articles and resources about software development, technology, learning languages, photography and music.
    # items:
    #   - icon: 📖
    #     text: Latest Articles
    #     link: /sections/articles/index.html
    #   - icon: 🧠
    #     text: Knowledge Base
    #     link: /sections/articles/knowledge-base.html
    #   - icon: 🔍
    #     text: Research Topics
    #     link: /sections/articles/research.html
aside: false
---

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
.round .VPImage {
  border-radius: 50%;
}
</style>
