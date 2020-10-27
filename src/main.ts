import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import { router } from "./router"

const app = createApp(App)
// 注册
app.use(router)
app.mount('#app')
