#!/usr/bin/env node
import { promises as fs } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const SRC_ROOT = path.resolve('sections')                 // where your images live
const OUT_THUMBS = path.resolve('public/_thumbs/sections')// thumbnails output

// ---------- config ----------
const THUMB_WIDTHS = [320, 640]

// Replace originals in-place under this budget (bytes)
const BUDGET_BYTES = 500 * 1024            // 500 KB
const MASTER_WIDTHS = [2048, 1600, 1280]   // try largest first
const JPEG_QUALITIES = [82, 78, 74, 70]    // try higher first
const WEBP_QUALITIES = [80, 76, 72]        // for .webp inputs
// ----------------------------

const exts = new Set([
    '.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif',
    '.JPG', '.JPEG', '.PNG', '.WEBP', '.GIF', '.AVIF'
])

async function walk(dir, files = []) {
    const entries = await fs.readdir(dir, { withFileTypes: true })
    for (const e of entries) {
        const full = path.join(dir, e.name)
        if (e.isDirectory()) await walk(full, files)
        else if (e.isFile() && exts.has(path.extname(e.name))) files.push(full)
    }
    return files
}

async function ensureDir(p) { await fs.mkdir(p, { recursive: true }) }

async function upToDate(src, out) {
    try {
        const [s, o] = await Promise.all([fs.stat(src), fs.stat(out)])
        return o.mtimeMs >= s.mtimeMs
    } catch { return false }
}

async function generateThumbs(srcAbs) {
    const relFromSections = path.relative(SRC_ROOT, srcAbs).replace(/\\/g, '/')
    const relDir = path.dirname(relFromSections)
    const nameNoExt = path.basename(relFromSections).replace(/\.[^.]+$/, '')

    await ensureDir(path.join(OUT_THUMBS, relDir))
    for (const w of THUMB_WIDTHS) {
        const outWebp = path.join(OUT_THUMBS, relDir, `${nameNoExt}-${w}w.webp`)
        if (!(await upToDate(srcAbs, outWebp))) {
            await sharp(srcAbs)
                .rotate()
                .resize({ width: w, withoutEnlargement: false })
                .webp({ quality: 80, effort: 4 })
                .toFile(outWebp)
            console.log('thumb:', path.relative(process.cwd(), outWebp))
        }
    }
}

async function fileSize(p) { try { return (await fs.stat(p)).size } catch { return 0 } }

async function optimizeOriginalInPlace(srcAbs) {
    const ext = path.extname(srcAbs).toLowerCase()
    const origSize = await fileSize(srcAbs)

    // Skip tiny files already under budget
    if (origSize && origSize <= BUDGET_BYTES) return { skipped: true, reason: 'already <= budget' }

    const qualities = (ext === '.webp') ? WEBP_QUALITIES : JPEG_QUALITIES
    let bestBuf = null, bestMeta = null

    for (const w of MASTER_WIDTHS) {
        for (const q of qualities) {
            let s = sharp(srcAbs).rotate().resize({ width: w, withoutEnlargement: true })
            if (ext === '.webp') {
                s = s.webp({ quality: q, effort: 4 })
            } else { // default to jpeg for jpg/jpeg and others
                s = s.jpeg({ quality: q, progressive: true, chromaSubsampling: '4:2:0' })
            }
            const buf = await s.toBuffer()
            if (!bestBuf || buf.length < bestBuf.length) {
                bestBuf = buf
                bestMeta = { w, q, size: buf.length }
            }
            if (buf.length <= BUDGET_BYTES) {
                const tmp = srcAbs + '.tmp'
                await fs.writeFile(tmp, buf)
                await fs.rename(tmp, srcAbs)
                return { replaced: true, ...bestMeta }
            }
        }
    }

    // None met the budget — write the smallest attempt anyway (usually 1280 @ lowest q)
    if (bestBuf) {
        const tmp = srcAbs + '.tmp'
        await fs.writeFile(tmp, bestBuf)
        await fs.rename(tmp, srcAbs)
        return { replaced: true, ...bestMeta, note: 'did not meet budget; wrote smallest candidate' }
    }
    return { replaced: false, reason: 'no attempts produced a buffer' }
}

async function buildOne(srcAbs) {
    // 1) generate thumbs
    await generateThumbs(srcAbs)

    // 2) replace original in place to fit the budget
    const res = await optimizeOriginalInPlace(srcAbs)
    if (res.skipped) {
        console.log('kept original (<= budget):', path.relative(process.cwd(), srcAbs))
    } else if (res.replaced) {
        console.log(
            `replaced original: ${path.relative(process.cwd(), srcAbs)} -> ` +
            `${(res.size / 1024).toFixed(0)}KB @ width ${res.w}, q=${res.q}` +
            (res.note ? ` (${res.note})` : '')
        )
    } else {
        console.warn('failed to replace original:', path.relative(process.cwd(), srcAbs), res.reason)
    }
}

const all = await walk(SRC_ROOT)
if (!all.length) {
    console.warn(`No images found under ${SRC_ROOT}`)
} else {
    console.log(`Processing ${all.length} images...`)
    for (const f of all) await buildOne(f)
    console.log('Done.')
}
