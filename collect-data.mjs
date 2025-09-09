import fs from 'node:fs/promises'
import matter from 'gray-matter'
import removeMd from 'remove-markdown'
import { readFileSync } from 'fs'
import path from 'node:path'

const sections = ['photography', 'projects']

let articles = {}
for (const section of sections) {
  const files = await fs.readdir(`./sections/${section}/posts`)
  const EXTENSION = '.md';
  const targetFiles = files.filter(file => {
    return path.extname(file).toLowerCase() === EXTENSION;
  });
  articles[section] = targetFiles
}

const data = {}
for (const section of sections) {
  const sectionData = await Promise.all(

    articles[section].map(async (article) => {
      const file = matter.read(`./sections/${section}/posts/${article}`)
      const excerpt = readFileSync(`./sections/${section}/posts/${article}`, 'utf8').split('<!-- excerpt -->')[1] || ''
      // console.log('excerpt', excerpt)
      const { data, path } = file
      const contents = removeMd(excerpt).trim().split(/\r\n|\n|\r/)

      return {
        ...data,
        title: data.title || contents[0].replace(/\s{2,}/g, '').trim(),
        path: path.substring(1).replace(/\.md$/, '.html'),
        excerpt: excerpt.replace(/\s{2,}/g, '').trim()
      }
    })
  )
  data[section] = sectionData
}
await fs.writeFile('./data.json', JSON.stringify(data), 'utf-8')

const allTags = {}
for (const section of sections) {
  for (const article of articles[section]) {
    const file = matter.read(`./sections/${section}/posts/${article}`)

    const { data, path } = file

    if (data.tags) {
      const arrayOfTags = data.tags.split(',')
      for (let index = 0; index < arrayOfTags.length; index++) {
        const tag = arrayOfTags[index].trim();
        // console.log('tag', tag)

        const newTag = {
          link: path.substring(1).replace(/\.md$/, '.html'),
          title: data.title
        }
        if (allTags[tag]) {
          allTags[tag].push(newTag)
        } else {
          allTags[tag] = [newTag]
        }
      }
    }
  }
}
await fs.writeFile('./tags.json', JSON.stringify(allTags), 'utf-8')
