import { h } from 'vue'
import { createWebHashHistory, createRouter } from 'vue-router'
const Home = import("./views/Home.vue")
const Doc = import("./views/Doc.vue")
const SwitchDemo = import("./components/SwitchDemo.vue")
const ButtonDemo = import("./components/ButtonDemo.vue")
const DialogDemo = import("./components/DialogDemo.vue")
const TabsDemo = import("./components/TabsDemo.vue")
const DocDemo = import("./components/DocDemo.vue")
import Markdown from "./components/Markdown.vue"
import intro from "./markdown/intro.md"
import getStarted from "./markdown/get-started.md"
import install from "./markdown/install.md"
// 创建history对象
const history = createWebHashHistory()
const md = string => h(Markdown, { content: string, key: string })
// 创建router对象
export const router = createRouter({
    history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc',
            component: Doc,
            children: [
                { path: "", redirect: '/doc/intro' },
                { path: "intro", component: md(intro) },
                { path: "get-started", component: md(getStarted) },
                { path: "install", component: md(install) },
                { path: "switch", component: SwitchDemo },
                { path: "button", component: ButtonDemo },
                { path: "dialog", component: DialogDemo },
                { path: "tabs", component: TabsDemo },
            ]
        },
    ]
})