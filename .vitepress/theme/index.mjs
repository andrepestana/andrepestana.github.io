import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import MyLayout from './components/MyLayout.vue'
import FolderGallery from './components/FolderGallery.vue'
import AllPhotosGallery from './components/AllPhotosGallery.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('FolderGallery', FolderGallery),
      app.component('AllPhotosGallery', AllPhotosGallery)
  },
  Layout: () => {
    return h(MyLayout)
  },
}
