import fs from 'node:fs/promises'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import removeMd from 'remove-markdown'
import MarkdownIt from 'markdown-it'
import sanitizeHtml from 'sanitize-html'
import { decode } from 'html-entities'

const sections = ['photography', 'projects']

// Markdown-It: allow raw HTML (so real <sup> passes through when we do render)
const md = new MarkdownIt({
  html: true,
  linkify: true,
  breaks: false
})

// Detect if the excerpt already contains HTML tags
function looksLikeHtml(s) {
  return /<[^>]+>/.test((s || '').trim())
}

// Prefer <!-- excerpt:start -->...<!-- excerpt:end -->, else take content before <!-- excerpt -->,
// else first non-empty paragraph
function extractExcerptSrc(fullContent) {
  const start = '<!-- excerpt:start -->'
  const end = '<!-- excerpt:end -->'
  const i = fullContent.indexOf(start)
  const j = fullContent.indexOf(end)
  if (i !== -1 && j !== -1 && j > i) {
    return fullContent.slice(i + start.length, j).trim()
  }
  const single = '<!-- excerpt -->'
  const k = fullContent.indexOf(single)
  if (k !== -1) return fullContent.slice(0, k).trim()

  const para = fullContent.split(/\n{2,}/).map(s => s.trim()).find(Boolean)
  return para || ''
}

function renderExcerptHtml(excerptSrc) {
  // If it looks like HTML, decode entities first so <sup> becomes real tags.
  const looksLikeHtml = /<[^>]+>/.test((excerptSrc || '').trim())
  const input = looksLikeHtml ? decode(excerptSrc) : excerptSrc

  const rendered = looksLikeHtml ? input : md.render(input)

  return sanitizeHtml(rendered, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'sup']),
    allowedAttributes: {
      a: ['href', 'title', 'target', 'rel'],
      img: ['src', 'alt', 'title', 'width', 'height'],
      p: ['class'],
      span: ['class'],
      code: ['class'],
      pre: ['class'],
      sup: ['id', 'class']
    },
    transformTags: {
      a: sanitizeHtml.simpleTransform('a', { rel: 'noopener noreferrer', target: '_blank' })
    }
  })
}

// Build file lists (only .md) sorted alphabetically by filename
const articles = {}
for (const section of sections) {
  const dir = `./sections/${section}/posts`
  const files = await fs.readdir(dir)
  const targetFiles = files
    .filter(f => path.extname(f).toLowerCase() === '.md')
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
  articles[section] = targetFiles
}

const data = {}
for (const section of sections) {
  const dir = `./sections/${section}/posts`

  const sectionData = await Promise.all(
    articles[section].map(async (filename) => {
      const absPath = path.join(dir, filename)
      const raw = readFileSync(absPath, 'utf8')
      const file = matter(raw)
      const fm = file.data || {}

      const excerptSrc = extractExcerptSrc(file.content)

      const excerptHtml = renderExcerptHtml(excerptSrc)
      const excerptText = removeMd(excerptSrc).replace(/\s{2,}/g, ' ').trim()

      const base = filename.replace(/\.md$/i, '')
      const inferredTitle =
        fm.title ||
        (file.content.match(/^#\s+(.+)$/m)?.[1]?.trim()) ||
        base
      const titleHtml = sanitizeHtml(inferredTitle, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['sup']),
        allowedAttributes: { sup: ['id', 'class'] }
      })

      const linkPath = absPath
        .replace(/^\./, '')
        .replace(/\.md$/i, '.html')
        .replace(/\\/g, '/')

      return {
        ...fm,
        title: inferredTitle,      // plain text fallback
        titleHtml,                 // new field: safe HTML
        path: linkPath,
        excerpt: excerptText,
        excerptHtml
      }
    })
  )

  data[section] = sectionData
}

await fs.writeFile('./data.json', JSON.stringify(data, null, 2), 'utf-8')

// tags.json generation unchanged, but keep using the same link/title logic...
const allTags = {}
for (const section of sections) {
  const dir = `./sections/${section}/posts`
  for (const filename of articles[section]) {
    const absPath = path.join(dir, filename)
    const raw = readFileSync(absPath, 'utf8')
    const file = matter(raw)
    const fm = file.data || {}

    const base = filename.replace(/\.md$/i, '')
    const title = fm.title || (file.content.match(/^#\s+(.+)$/m)?.[1]?.trim()) || base
    const link = absPath.replace(/^\./, '').replace(/\.md$/i, '.html').replace(/\\/g, '/')

    if (fm.tags) {
      const tags = String(fm.tags).split(',').map(t => t.trim()).filter(Boolean)
      for (const tag of tags) {
        const entry = { link, title }
        if (allTags[tag]) allTags[tag].push(entry)
        else allTags[tag] = [entry]
      }
    }
  }
}
await fs.writeFile('./tags.json', JSON.stringify(allTags, null, 2), 'utf-8')
console.log('data.json and tags.json generated')
