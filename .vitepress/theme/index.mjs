import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import 'vitepress-plugin-metadata-photo-album/style.css'
import { MetadataPhotoAlbum } from 'vitepress-plugin-metadata-photo-album'
import MyLayout from './components/MyLayout.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('MetadataPhotoAlbum', MetadataPhotoAlbum)
  },
  Layout: () => {
    return h(MyLayout)
  },
}
