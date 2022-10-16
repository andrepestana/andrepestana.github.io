<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
    <Layout>
        <template #doc-before>
            <div class="vp-doc">
                <h1 id="frontmatter-title" tabindex="-1">
                    {{ $frontmatter.title }}
                    <a class="header-anchor" href="#frontmatter-title" aria-hidden="true">#</a>
                </h1>
                <template v-if="$frontmatter.tags">
                    tags:
                    <span v-for="(tag, index) in $frontmatter.tags.split(',').map(element => element.trim())"
                        :key="index">
                        🏷️<a :href=" `/tags.html?tag=${tag}`">{{tag}}&nbsp;</a>
                    </span>
                </template>
                <div v-if="$frontmatter.giphy">
                    <div :style="{
                    'width': '100%', 
                    'height': '0',
                    'padding-bottom': $frontmatter.giphyPaddingBottom,
                    'position': 'relative'}"><iframe :src="$frontmatter.giphy" width="100%" height="100%"
                            style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </template>
        <!-- <template #doc-after>
            doc-after
        </template>
        <template #aside-top></template>
        side-top
        <template #aside-bottom>
            aside-bottom
        </template>
        <template #aside-outline-before>
            aside-outline-before
        </template>
        <template #aside-outline-after>
            aside-outline-after
        </template>
        <template #aside-ads-before>
            aside-ads-before
        </template>
        <template #aside-ads-after>
            aside-ads-after
        </template> -->
    </Layout>
</template>