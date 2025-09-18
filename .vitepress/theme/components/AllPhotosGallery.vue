<template>
    <div class="ap-gallery">
        <div class="ap-grid">
            <button v-for="(img, idx) in images" :key="img.key" class="ap-thumb" @click="open(idx)"
                :aria-label="`Open ${img.alt}`">
                <img :src="img.thumb" :alt="img.alt" loading="lazy" />
            </button>
        </div>

        <div v-if="activeIndex !== null" class="ap-lightbox" tabindex="-1" ref="lightbox" @keydown.esc="close">
            <button class="ap-close" @click="close" aria-label="Close">×</button>
            <button class="ap-nav ap-prev" @click="prev" aria-label="Previous">‹</button>
            <img :src="images[activeIndex].src" :alt="images[activeIndex].alt" class="ap-full" />
            <button class="ap-nav ap-next" @click="next" aria-label="Next">›</button>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, nextTick } from 'vue'

// Thumbs (fast) + full images (constrained) generated at build time by vite-imagetools.
// Requires imagetools plugin already enabled in Vite config.
const thumbs = import.meta.glob(
    '/sections/photography/posts/**/*.{jpg,jpeg,png,webp,avif}',
    { eager: true, query: { w: '320', format: 'webp', as: 'url', imagetools: '' } }
)

const full = import.meta.glob(
    '/sections/photography/posts/**/*.{jpg,jpeg,png,webp,avif}',
    { eager: true, query: { w: '1920', format: 'webp', as: 'url', imagetools: '' } }
)

const pickUrl = (u) => {
    // eager + as=url can be: string | {default:string} | string[]
    if (Array.isArray(u)) return u.find(s => s.endsWith('.webp')) || u[0]
    return typeof u === 'string' ? u : u?.default
}
// Build the gallery list, pair thumb+full by path, sort by date folder if present.
const images = computed(() => {
    const items = Object.keys(full).map((k) => {
        const src = pickUrl(full[k])
        const thumb = pickUrl(thumbs[k])
        return thumb && src
            ? {
                key: k,
                src,
                thumb,
                alt: toAlt(k),
                date: extractDate(k)
            }
            : null
    }).filter(Boolean)

    items.sort((a, b) => {
        const da = a.date?.getTime() ?? 0
        const db = b.date?.getTime() ?? 0
        return db - da || a.key.localeCompare(b.key)
    })
    return items
})

function extractDate(p) {
    const m = p.match(/posts\/(\d{4}-\d{2}-\d{2})\//)
    if (!m) return null
    const [y, mth, d] = m[1].split('-').map(Number)
    return new Date(Date.UTC(y, mth - 1, d))
}

function toAlt(p) {
    const base = p.split('/').pop()?.replace(/\.[^.]+$/, '') ?? ''
    return base.replace(/[_-]+/g, ' ').trim()
}

const activeIndex = ref(null)
const lightbox = ref(null)

function open(i) {
    activeIndex.value = i
    nextTick(() => lightbox.value?.focus())
}
function close() { activeIndex.value = null }
function prev() {
    if (activeIndex.value === null) return
    activeIndex.value = (activeIndex.value - 1 + images.value.length) % images.value.length
}
function next() {
    if (activeIndex.value === null) return
    activeIndex.value = (activeIndex.value + 1) % images.value.length
}
</script>

<style scoped>
.ap-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: .5rem;
}

.ap-thumb {
    border: 0;
    padding: 0;
    background: none;
    cursor: zoom-in;
}

.ap-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: .5rem;
}

.ap-lightbox {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, .85);
    display: grid;
    place-items: center;
    z-index: 1000;
    outline: none;
}

.ap-full {
    max-width: 95vw;
    max-height: 90vh;
}

.ap-close,
.ap-nav {
    position: absolute;
    background: rgba(255, 255, 255, .12);
    border: 1px solid rgba(255, 255, 255, .35);
    padding: .5rem .75rem;
    border-radius: .375rem;
    color: #fff;
    cursor: pointer;
}

.ap-close {
    top: 1rem;
    right: 1rem;
    font-size: 1.25rem;
}

.ap-prev {
    left: 1rem;
}

.ap-next {
    right: 1rem;
}
</style>
