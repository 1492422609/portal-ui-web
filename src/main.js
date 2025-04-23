import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import Vant from "vant"
import "vant/lib/index.css"
import "portal-post-package/portal-post-package.css"; //引入组件样式
import PP from "portal-post-package"; //引入下载后的组件
import { createPinia } from 'pinia'
const pinia = createPinia()
import './font/iconfont.css';

// createApp(App).mount('#app')
const app = createApp(App)
app.use(Vant)
app.use(PP)
app.use(router)
app.use(pinia)
app.mount('#app')