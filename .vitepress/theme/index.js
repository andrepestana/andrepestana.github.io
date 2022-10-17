
import DefaultTheme from "vitepress/theme";
import './custom.css'
import MyLayout from './components/MyLayout.vue'

console.log('DefaultTheme', DefaultTheme)

export default {
    ...DefaultTheme,
    Layout: MyLayout,
    enhanceApp({ app, router, siteData }) {
        //


    },
};
