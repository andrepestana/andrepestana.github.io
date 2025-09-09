<template>
    <div class="ap-gallery">
        <div class="ap-grid">
            <button v-for="(img, idx) in images" :key="img.path" class="ap-thumb" @click="open(idx)"
                :aria-label="`Open image ${img.name}`">
                <!-- replace your button content with this -->
                <img :src="img.thumb" :srcset="img.srcset"
                    sizes="(min-width:1200px) 200px, (min-width:640px) 22vw, 45vw" :alt="img.alt" loading="lazy"
                    decoding="async" />
            </button>
        </div>

        <div v-if="lightboxOpen" class="ap-lightbox" @click.self="close">
            <button class="ap-close" @click="close" aria-label="Close">&times;</button>
            <button class="ap-nav ap-prev" @click.stop="prev" aria-label="Previous">‹</button>

            <figure class="ap-figure" v-if="current">
                <img :src="current.full" :alt="current.alt" />
                <figcaption v-if="current.alt">{{ current.alt }}</figcaption>
            </figure>

            <button class="ap-nav ap-next" @click.stop="next" aria-label="Next">›</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

interface Props { dir: string; sort?: 'name-asc' | 'name-desc' }
const props = withDefaults(defineProps<Props>(), { sort: 'name-asc' })

function normalizeDir(d: string) {
    let out = (d || '/').replace(/\\/g, '/')
    if (!out.startsWith('/')) out = '/' + out
    return out.replace(/\/+$/, '')
}
const baseDir = normalizeDir(props.dir)

// originals for lightbox (scope to /sections only)
const originals = import.meta.glob(
    '/sections/**/*.{jpg,jpeg,png,webp,gif,avif,JPG,JPEG,PNG,WEBP,GIF,AVIF}',
    { eager: true, as: 'url' }
) as Record<string, string>

type GalleryItem = {
    path: string
    name: string
    alt: string
    full: string
    thumb: string
    srcset: string
}

function filenameToAlt(name: string) {
    return name.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ')
}

// Build thumbnail URLs that mirror the source tree under /public/_thumbs/sections/
function makeThumbs(pathAbs: string) {
    // pathAbs like "/sections/photography/.../_DSC8468.jpg"
    const relFromSections = pathAbs.replace(/^\/sections\//, '') // "photography/.../_DSC8468.jpg"
    const baseNoExt = relFromSections.replace(/\.[^.]+$/, '')
    const t320 = `/_thumbs/sections/${baseNoExt}-320w.webp`
    const t640 = `/_thumbs/sections/${baseNoExt}-640w.webp`
    return { t320, t640 }
}

const images = ref<GalleryItem[]>(
    Object.entries(originals)
        .map(([p, full]) => [p.replace(/\\/g, '/'), full] as const)
        .filter(([p]) => p.startsWith(baseDir + '/'))  // <— strict match
        .map(([path, full]) => {
            const name = path.split('/').pop() || ''
            const alt = name.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ')
            const rel = path.replace(/^\/sections\//, '') // "photography/.../_DSC8468.jpg"
            const baseNoExt = rel.replace(/\.[^.]+$/, '')
            const t320 = `/_thumbs/sections/${baseNoExt}-320w.webp`
            const t640 = `/_thumbs/sections/${baseNoExt}-640w.webp`
            const srcset = `${t320} 320w, ${t640} 640w`
            return { path, name, alt, full: full as string, thumb: t320, srcset }
        })
        .sort((a, b) => props.sort === 'name-desc' ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name))
)

const lightboxOpen = ref(false)
const index = ref(0)
const current = computed(() => images.value[index.value])

function open(i: number) { index.value = i; lightboxOpen.value = true }
function close() { lightboxOpen.value = false }
function prev() { index.value = (index.value + images.value.length - 1) % images.value.length }
function next() { index.value = (index.value + 1) % images.value.length }

function onKey(e: KeyboardEvent) {
    if (!lightboxOpen.value) return
    if (e.key === 'Escape') close()
    else if (e.key === 'ArrowLeft') prev()
    else if (e.key === 'ArrowRight') next()
}
onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>

<style scoped>
.ap-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 10px;
}

.ap-thumb {
    padding: 0;
    border: none;
    background: transparent;
    cursor: zoom-in;
}

.ap-thumb img {
    width: 100%;
    height: 130px;
    object-fit: cover;
    border-radius: 10px;
}

/* Lightbox (portrait-safe) */
.ap-lightbox {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, .9);
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: 1fr;
    place-items: center;
    z-index: 1000;
    padding: 20px;
    overflow: auto;
    --chrome: 96px;
}

.ap-figure {
    margin: 0;
    max-width: min(1200px, 95vw);
    max-height: calc(100vh - var(--chrome));
    display: flex;
    flex-direction: column;
    align-items: center;
}

.ap-figure img {
    object-fit: contain;
    width: auto;
    height: auto;
    max-width: 95vw;
    max-height: calc(100vh - var(--chrome));
}

.ap-close {
    position: fixed;
    top: 16px;
    right: 16px;
    font-size: 32px;
    width: 44px;
    height: 44px;
    border: 0;
    border-radius: 6px;
    background: rgba(255, 255, 255, .1);
    color: #fff;
    cursor: pointer;
}

.ap-nav {
    font-size: 48px;
    border: 0;
    background: transparent;
    color: #fff;
    cursor: pointer;
    user-select: none;
    width: 64px;
    height: 64px;
}

.ap-prev {
    justify-self: start;
}

.ap-next {
    justify-self: end;
}

figcaption {
    color: #bbb;
    text-align: center;
    margin-top: 8px;
    font-size: 0.9rem;
    max-width: 95vw;
    overflow-wrap: anywhere;
}

@media (max-width: 640px) {
    .ap-lightbox {
        --chrome: 72px;
    }
}
</style>
