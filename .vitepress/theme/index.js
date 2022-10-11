
import DefaultTheme from "vitepress/theme";
import './custom.css'
//import VueDisqus from 'vue-disqus';

export default {
    ...DefaultTheme,
    async enhanceApp({ app }) {

        //app.use(VueDisqus, { shortname: 'andre-pestana' })

    },
};