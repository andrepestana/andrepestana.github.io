import { defineConfig } from 'vitepress'
import data from '../data.json'

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
    head: [
        [
            'script',
            { "src": "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v15.0&appId=1496093344138042&autoLogAppEvents=1" },
            { "nonce": "OfwSQFPA" }
        ]
    ],
    lang: 'en-US',
    lastUpdated: true,
    lastUpdatedText: 'Update Date',
    themeConfig: {
        lastUpdated: true,
        lastUpdatedText: 'Update Date',
        siteTitle: 'Andre Pestana',
        //logo: '/logo.svg',
        nav: [
            { text: 'Blog', link: '/sections/blog/' },
            { text: 'Articles', link: '/sections/articles/' },
            { text: 'Projects', link: '/sections/projects/' },
            { text: 'Tags', link: '/tags.html' },
            { text: 'About', link: '/about.html' },
            // {
            //     text: 'Dropdown Menu',
            //     items: [
            //         { text: 'Item A', link: '/item-1' },
            //         { text: 'Item B', link: '/item-2' },
            //         { text: 'Item C', link: '/item-3' }
            //     ]
            // }
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
            // You can also add custom icons by passing SVG as string:
            // {
            //     icon: {
            //         svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
            //     },
            //     link: '...'
            // }
        ],
        footer: {
            message: 'Made by Andre Pestana with ❤️<br/>2022',
        },
        editLink: {
            pattern: 'https://github.com/andrepestana/andrepestana.github.io/edit/main/:path',
            text: 'Edit this page'
        }
    }
})

