# Tags

---

<div v-if="taggedPages.length">
    <h2>{{selectedTag}}</h2>
    <hr/>
    <div v-for="(taggedPage, index) in taggedPages" 
        :key="index">
        <a :href="taggedPage.link">{{taggedPage.title}}</a>
    </div>
</div>
<span v-for="(tag, index) in tagLabels" 
    :key="index"
    v-if="!taggedPages.length">
    <span :style="{ fontSize: tag.weight + 'px' }"><a @click="getLinksFor(tag.label)">{{ tag.label }}</a></span>&nbsp;
</span>

<span v-if="taggedPages.length"><a @click="getLinksFor('')"><-- Back to Tags</a></span>&nbsp;

<script setup>
import {computed, onMounted, ref} from 'vue';
import tags from './tags.json'
import {useRouter} from "vitepress";

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
    const weight = (100 * tags[label].length) / Object.keys(tags).length
    tagLabels.push({label, weight})
});
</script>
