
import DefaultTheme from "vitepress/theme";
import './custom.css'
import MyLayout from './components/MyLayout.vue'

console.log('DefaultTheme', DefaultTheme)

export default {
    ...DefaultTheme,
    Layout: MyLayout,
    enhanceApp({ app, router, siteData }) {
        //

        // var disqus_config = function () {
        //     this.page.url = window.location.href;  // Replace PAGE_URL with your page's canonical URL variable
        //     this.page.identifier = 'andre-pestana'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
        // };
        // var d = document, s = d.createElement('script');
        // s.src = 'https://andre-pestana.disqus.com/embed.js';
        // s.setAttribute('data-timestamp', +new Date());
        // (d.head || d.body).appendChild(s);
    },
};
