import './index.scss'
import './lib/gulu.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from "./router"

const app = createApp(App)
// 注册
app.use(router)
app.mount('#app')
