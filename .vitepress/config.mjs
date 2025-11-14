// .vitepress/config.mjs
import { defineConfig, createMarkdownRenderer } from 'vitepress'
import { webcrypto } from 'node:crypto'
import { readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import url from 'node:url'
import { imagetools } from 'vite-imagetools'

if (!globalThis.crypto) globalThis.crypto = webcrypto

// ───────────────────────────────────────────────────────────
// Paths & helpers
// ───────────────────────────────────────────────────────────
const rootDir = path.dirname(url.fileURLToPath(import.meta.url)) // …/.vitepress
const repoRoot = path.join(rootDir, '..')                          // project root
const projectsDir = path.join(repoRoot, 'sections', 'projects')       // markdown dir
const dataJsonPath = path.join(repoRoot, 'data.json')                  // data.json
const DEBUG = !!process.env.DEBUG_EXCERPTS

async function readMarkdownFiles(dir) {
    const out = []
    let entries = []
    try {
        entries = await readdir(dir, { withFileTypes: true })
    } catch {
        return out
    }
    for (const e of entries) {
        const p = path.join(dir, e.name)
        if (e.isDirectory()) out.push(...(await readMarkdownFiles(p)))
        else if (e.isFile() && p.endsWith('.md')) out.push(p)
    }
    return out
}

function stripFrontmatter(text) {
    return text.startsWith('---') ? text.replace(/^---[\s\S]*?---\s*/, '') : text
}

// Paired:  <!-- excerpt --> ... <!-- /excerpt -->
// Single:  take FIRST non-empty block *after* <!-- excerpt -->
function extractExcerptBlock(md) {
    const paired = md.match(/<!--\s*excerpt\s*-->\s*([\s\S]*?)\s*<!--\s*\/\s*excerpt\s*-->/i)
    if (paired && paired[1].trim()) return paired[1].trim()

    const m = md.match(/<!--\s*excerpt\s*-->/i)
    if (m) {
        const after = md.slice(m.index + m[0].length)
        const nextBlock = (after.split(/\n\s*\n/).find(b => b.trim()) || '').trim()
        if (nextBlock) return nextBlock
        return ''
    }

    return (md.split(/\n\s*\n/).find(p => p.trim()) || '').trim()
}

function toPlain(s = '') {
    return s
        .replace(/```[\s\S]*?```/g, '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/[#_*`>~\[\]\(\)!|-]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
}

function toHtmlRoute(fileAbs) {
    const rel = path
        .relative(repoRoot, fileAbs)
        .replace(/\\/g, '/')
        .replace(/(^|\/)index\.md$/, '/')
        .replace(/\.md$/, '.html')
    return '/' + rel.replace(/^\/+/, '')
}

// Normalize so '/a/b', '/a/b/', '/a/b.html' → '/a/b.html'
function normalizeRouteKey(route) {
    if (!route) return ''
    let r = route.trim()
    if (!r.startsWith('/')) r = '/' + r
    r = r.replace(/\/{2,}/g, '/').replace(/\/index\.html$/i, '/')
    if (r.endsWith('/')) r = r.slice(0, -1) + '.html'
    if (!r.endsWith('.html')) r = r + '.html'
    return r
}

// ───────────────────────────────────────────────────────────
// Generate excerpts and merge into data.json
// (now rendering MD → HTML using VitePress' renderer)
// ───────────────────────────────────────────────────────────
async function ensureProjectExcerptsInDataJson() {
    let dataObj
    try {
        dataObj = JSON.parse(await readFile(dataJsonPath, 'utf8'))
    } catch {
        dataObj = { projects: [], photography: [] }
    }

    const files = await readMarkdownFiles(projectsDir)
    if (DEBUG) {
        console.log(`[excerpts] root=${repoRoot}`)
        console.log(`[excerpts] projectsDir=${projectsDir}`)
        console.log(`[excerpts] md files found: ${files.length}`)
    }

    // Create the markdown renderer once
    // base '/' is fine; we just need HTML rendering for snippets
    const mdRenderer = await createMarkdownRenderer(repoRoot, {}, '/')

    const excerptByKey = new Map()

    for (const file of files) {
        const raw = await readFile(file, 'utf8')
        const content = stripFrontmatter(raw)
        const mdBlock = extractExcerptBlock(content)     // markdown (or html) block
        // Render markdown → HTML (handles links like [VitePress](...))
        const htmlRendered = mdRenderer.render(mdBlock || '')
        const plain = toPlain(htmlRendered)

        const htmlRoute = toHtmlRoute(file)             // '/x/y/z.html'
        const key = normalizeRouteKey(htmlRoute)

        // Always store something (even empty <p></p>) to prove it ran
        const safeHtml = htmlRendered || '<p></p>'
        const safePlain = plain || ''

        excerptByKey.set(key, { html: safeHtml, plain: safePlain, file })

        if (DEBUG) {
            console.log(`[excerpts] ${path.relative(repoRoot, file)} → key=${key} htmlLen=${safeHtml.length} plainLen=${safePlain.length}`)
        }
    }

    let matched = 0
    dataObj.projects = (dataObj.projects || []).map((p) => {
        const k1 = normalizeRouteKey(p.path || '')
        const k2 = normalizeRouteKey(p.link || '')
        const hit = excerptByKey.get(k1) || excerptByKey.get(k2)
        if (hit) {
            matched++
            return {
                ...p,
                excerptHtml: hit.html,  // HTML (rendered from MD)
                excerpt: hit.plain      // plain fallback
            }
        }
        return { ...p }
    })

    if (DEBUG) console.log(`[excerpts] matched ${matched}/${(dataObj.projects || []).length} projects`)
    await writeFile(dataJsonPath, JSON.stringify(dataObj, null, 2), 'utf8')
    return dataObj
}

const data = await ensureProjectExcerptsInDataJson()

// ───────────────────────────────────────────────────────────
// Sorting & sidebar
// ───────────────────────────────────────────────────────────
function sortByFileName(a, b) {
    const getName = (x) => (x.link || x.path).split('/').pop().replace(/\.html$/, '')
    const nameA = getName(a)
    const nameB = getName(b)
    return nameA.localeCompare(nameB, undefined, { sensitivity: 'base', numeric: true })
}

const projectPosts = (data['projects'] || []).sort(sortByFileName).reverse()
const projectPostItems = projectPosts.map((p) => ({ text: p.title, link: p.link }))

const photographyPosts = (data['photography'] || []).sort(sortByFileName).reverse()
const photographyPostItems = photographyPosts.map((p) => ({ text: p.title, link: p.link }))

// ───────────────────────────────────────────────────────────
// Export VitePress config
// ───────────────────────────────────────────────────────────
export default defineConfig({
    description: 'Andre Pestana website',
    lang: 'en-US',
    lastUpdated: true,
    vite: { plugins: [imagetools()] },
    themeConfig: {
        siteTitle: 'Andre Pestana',
        nav: [
            { text: 'Photography', link: '/sections/photography/' },
            { text: 'Projects', link: '/sections/projects/' },
            { text: 'Tags', link: '/tags.html' },
            { text: 'About', link: '/about.html' }
        ],
        sidebar: {
            '/sections/photography/': [{ text: 'Photography', items: photographyPostItems }],
            '/sections/projects/': [{ text: 'Projects', items: projectPostItems }]
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/andrepestana' },
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/andrepestana/' }
        ],
        footer: {
            message: 'Made by Andre Pestana with ❤️<br/>2022-2025',
            copyright: ''
        },
        editLink: {
            pattern: 'https://github.com/andrepestana/andrepestana.github.io/edit/main/:path',
            text: 'Edit this page'
        },
        lastUpdatedText: 'Update Date'
    }
})
