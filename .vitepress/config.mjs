import { defineConfig } from 'vitepress'
import { webcrypto } from 'node:crypto'
import data from '../data.json'
import { imagetools } from 'vite-imagetools'

// Shim Web Crypto for Node.js
if (!globalThis.crypto) {
    globalThis.crypto = webcrypto;
}


// --- sort helpers ---
function sortByFileName(a, b) {
    const nameA = a.path.split('/').pop().replace('.html', '')
    const nameB = b.path.split('/').pop().replace('.html', '')
    return nameA.localeCompare(nameB, undefined, { sensitivity: 'base' })
}

// --- PROJECTS ---
const projectPosts = (data['projects'] || []).sort(sortByFileName)
const projectPostItems = projectPosts.map(projectPost => ({
    text: projectPost.title,
    link: projectPost.path.split('.html')[0]
}))

// --- PHOTOGRAPHY ---
const photographyPosts = (data['photography'] || []).sort(sortByFileName)
const photographyPostItems = photographyPosts.map(photographyPost => ({
    text: photographyPost.title,
    link: photographyPost.path.split('.html')[0]
}))

export default defineConfig({
    description: 'Andre Pestana website',
    lang: 'en-US',
    lastUpdated: true,
    vite: {
        plugins: [imagetools()]
    },
    themeConfig: {
        siteTitle: 'Andre Pestana',
        nav: [
            //{ text: 'Blog', link: '/sections/blog/' },
            { text: 'Photography', link: '/sections/photography/' },
            //{ text: 'Articles', link: '/sections/articles/' },
            { text: 'Projects', link: '/sections/projects/' },
            { text: 'Tags', link: '/tags.html' },
            { text: 'About', link: '/about.html' },
        ],
        sidebar: {
            '/sections/photography/': [
                {
                    text: 'Photography',
                    items: photographyPostItems
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
