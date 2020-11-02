import { createWebHashHistory, createRouter } from 'vue-router'
const Home = import("./views/Home.vue")
const Doc = import("./views/Doc.vue")
const SwitchDemo = import("./components/SwitchDemo.vue")
const ButtonDemo = import("./components/ButtonDemo.vue")
const DialogDemo = import("./components/DialogDemo.vue")
const TabsDemo = import("./components/TabsDemo.vue")
const DocDemo = import("./components/DocDemo.vue")
const Intro = import("./views/Intro.vue")
const GetStarted = import("./views/GetStarted.vue")
const Install = import("./views/Install.vue")
// 创建history对象
const history = createWebHashHistory()
// 创建router对象
export const router = createRouter({
    history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc',
            component: Doc,
            children: [
                { path: "", component: DocDemo },
                { path: "intro", component: Intro },
                { path: "get-started", component: GetStarted },
                { path: "install", component: Install },
                { path: "switch", component: SwitchDemo },
                { path: "button", component: ButtonDemo },
                { path: "dialog", component: DialogDemo },
                { path: "tabs", component: TabsDemo },
            ]
        },
    ]
})