import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import MyLayout from './components/MyLayout.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(MyLayout)
  },
}
