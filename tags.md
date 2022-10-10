# Tags


--- 
<span v-for="tag in tagLabels">
    <span :style="{ fontSize: tag.weight + 'px' }">{{ tag.label }}</span>&nbsp;
</span>

<script setup>
import tags from './tags.json'
//console.log('tags', tags)

const totalOfTags = Object.keys(tags)

const tagLabels = []
Object.keys(tags).forEach(label => {
    // console.log('label', label)
    // console.log('tags[label]', )
    const weight = (100 * tags[label].length) / Object.keys(tags).length
    tagLabels.push({label, weight})
});
</script>
