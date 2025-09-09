import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import MyLayout from './components/MyLayout.vue'
import FolderGallery from './components/FolderGallery.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('FolderGallery', FolderGallery)
  },
  Layout: () => {
    return h(MyLayout)
  },
}
