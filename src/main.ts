import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Frank from "./components/Frank.vue"
import Frank2 from "./components/Frank2.vue"

// 创建history对象
const history = createWebHashHistory()
// 创建router对象
const router = createRouter({
    history,
    routes: [
        { path: '/', component: Frank },
        { path: '/xxx', component: Frank2 },
    ]
})

const app = createApp(App)
// 注册
app.use(router)
app.mount('#app')
