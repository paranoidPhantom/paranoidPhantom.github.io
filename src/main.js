import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import App from './App.vue'

import './assets/main.css'

const routes = [
    {
        path: "/",
        name: "Home",
        component: ()=>import("@/views/Home.vue"),
    },
    {
        path: "/works",
        name: "Work",
        component: ()=>import("@/views/Works.vue"),
    },
    {
        path: "/about",
        name: "About",
        component: ()=>import("@/views/About.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: ()=>import("@/views/NotFound.vue"),
    }
]



const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

createApp(App)
    .use(router)
    .mount('#app')
