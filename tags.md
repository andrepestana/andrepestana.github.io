# Tags

---

<div v-if="taggedPages.length">
    <h2>Pages tagged as "{{selectedTag}}"</h2>
    <hr/>
    <div v-for="(taggedPage, index) in taggedPages" 
        :key="index">
        <a :href="taggedPage.link"><span v-html="taggedPage.title" /></a>
    </div>
</div>
<span v-for="(tag, index) in tagLabels" 
    :key="index"
    v-if="!taggedPages.length">
    <span :style="{ fontSize: tag.weight + 'px' }"><a @click="getLinksFor(tag.label)">{{ tag.label }}</a></span>&nbsp;
</span>

<p v-if="taggedPages.length" style="text-align: right"><a @click="getLinksFor('')">⬅️ Back to all Tags</a></p>&nbsp;

<script setup>
import {computed, onMounted, ref} from 'vue';
import tags from './tags.json'
import {useRouter} from "vitepress";

let queryString = {};
if (typeof window !== 'undefined') queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const tagFromQueryParams = urlParams.get('tag')
console.log('tagFromQueryParams', tagFromQueryParams)

const taggedPages = ref([])
const selectedTag = ref('')
const getLinksFor = (sTag) => {
    selectedTag.value = sTag
    taggedPages.value = []
    console.log('selectedTag', selectedTag.value)
    if (selectedTag.value) {
        for (const taggedPage of tags[selectedTag.value]) {
            taggedPages.value.push(taggedPage)
        } 
    }   
    console.log(taggedPages.value)
}
const totalOfTags = Object.keys(tags)

const tagLabels = []
Object.keys(tags).forEach(label => {
    // console.log('label', label)
    // console.log('tags[label]', )
    const weight = ((100 * tags[label].length) / Object.keys(tags).length) + 6
    tagLabels.push({label, weight})
});

if(tagFromQueryParams) {
    getLinksFor(tagFromQueryParams)
    //Remove query from browser url
    history.pushState(null, "", location.href.split("?")[0]);
}
</script>
<style>
a:hover {
 cursor:pointer;
}
</style>
