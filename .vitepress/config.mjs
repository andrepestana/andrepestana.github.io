import { defineConfig } from 'vitepress'
import { webcrypto } from 'node:crypto'
import data from '../data.json'

// Shim Web Crypto for Node.js
if (!globalThis.crypto) {
    globalThis.crypto = webcrypto;
}

const blogPosts = (data['blog'] || []).sort(
    (a, b) => new Date(b.updated) - new Date(a.updated)
)
const blogPostItems = []
for (const blogPost of blogPosts) {
    blogPostItems.push({ text: `${blogPost.title}`, link: blogPost.path.split('.html')[0] })
}

const articlePosts = (data['articles'] || []).sort(
    (a, b) => new Date(b.updated) - new Date(a.updated)
)
const articlePostItems = []
for (const articlePost of articlePosts) {
    articlePostItems.push({ text: `${articlePost.title}`, link: articlePost.path.split('.html')[0] })
}

const projectPosts = (data['projects'] || []).sort(
    (a, b) => new Date(b.updated) - new Date(a.updated)
)
const projectPostItems = []
for (const projectPost of projectPosts) {
    projectPostItems.push({ text: `${projectPost.title}`, link: projectPost.path.split('.html')[0] })
}

export default defineConfig({
    description: 'Andre Pestana website',
    lang: 'en-US',
    lastUpdated: true,
    themeConfig: {
        siteTitle: 'Andre Pestana',
        nav: [
            { text: 'Blog', link: '/sections/blog/' },
            { text: 'Articles', link: '/sections/articles/' },
            { text: 'Projects', link: '/sections/projects/' },
            { text: 'Tags', link: '/tags.html' },
            { text: 'About', link: '/about.html' },
        ],
        sidebar: {
            '/sections/blog/': [
                {
                    text: 'Blog',
                    items: blogPostItems
                }
            ],
            '/sections/articles/': [
                {
                    text: 'Articles',
                    items: articlePostItems
                }
            ],
            '/sections/projects/': [
                {
                    text: 'Projects',
                    items: projectPostItems
                }
            ]
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/andrepestana' },
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/andrepestana/' },
        ],
        footer: {
            message: 'Made by Andre Pestana with ❤️<br/>2022-2025',
            copyright: ''
        },
        editLink: {
            pattern: 'https://github.com/andrepestana/andrepestana.github.io/edit/main/:path',
            text: 'Edit this page'
        },
        lastUpdatedText: 'Update Date',
    }
})
