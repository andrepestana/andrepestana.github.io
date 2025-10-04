import { defineConfig } from 'vitepress'
import { webcrypto } from 'node:crypto'
import data from '../data.json'
import { imagetools } from 'vite-imagetools'

// Shim Web Crypto for Node.js
if (!globalThis.crypto) {
    globalThis.crypto = webcrypto
}

// --- sort helpers ---
function sortByFileName(a, b) {
    // Prefer extensionless link; fall back to path
    const getName = (x) => (x.link || x.path).split('/').pop().replace(/\.html$/, '')
    const nameA = getName(a)
    const nameB = getName(b)
    return nameA.localeCompare(nameB, undefined, { sensitivity: 'base', numeric: true })
}

// --- PROJECTS ---
const projectPosts = (data['projects'] || []).sort(sortByFileName).reverse();
const projectPostItems = projectPosts.map(p => ({
    text: p.title,         // If you ever want superscripts here, you'd need a custom renderer with v-html
    link: p.link           // <-- use the extensionless, absolute route from data.json
}))

// --- PHOTOGRAPHY ---
const photographyPosts = (data['photography'] || []).sort(sortByFileName).reverse();
const photographyPostItems = photographyPosts.map(p => ({
    text: p.title,
    link: p.link           // <-- use the extensionless, absolute route
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
            { text: 'Photography', link: '/sections/photography/' },
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
