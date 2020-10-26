import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import { createWebHashHistory, createRouter } from 'vue-router'
import Home from "./views/Home.vue"
import Doc from "./views/Doc.vue"

// 创建history对象
const history = createWebHashHistory()
// 创建router对象
const router = createRouter({
    history,
    routes: [
        { path: '/', component: Home },
        { path: '/doc', component: Doc },
    ]
})

const app = createApp(App)
// 注册
app.use(router)
app.mount('#app')
