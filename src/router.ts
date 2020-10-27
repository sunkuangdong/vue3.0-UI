import { createWebHashHistory, createRouter } from 'vue-router'
import Home from "./views/Home.vue"
import Doc from "./views/Doc.vue"
import SwitchDemo from "./components/SwitchDemo.vue"
// 创建history对象
const history = createWebHashHistory()
// 创建router对象
export const router = createRouter({
    history,
    routes: [
        { path: '/', component: Home },
        { path: '/doc', component: Doc, children: [{ path: "switch", component: SwitchDemo }] },
    ]
})