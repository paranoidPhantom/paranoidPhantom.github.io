import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import App from './App.vue'

import './assets/main.css'

const routes = [
    {
        path: "/",
        name: "Home",
        component: ()=>import("@/views/Home.vue"),
        meta: {
            title: "Home"
        }
    },
    {
        path: "/works",
        name: "Work",
        component: ()=>import("@/views/Works.vue"),
        meta: {
            title: "Past work"
        }
    },
    {
        path: "/about",
        name: "About",
        component: ()=>import("@/views/About.vue"),
        meta: {
            title: "About"
        }
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: ()=>import("@/views/NotFound.vue"),
        meta: {
            title: "404"
        }
    }
]



const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

router.afterEach((to, from) => {
    setTimeout(() => {
        document.title = `${to.meta.title} | paranoidPhantom`
    }, 100);
});

createApp(App)
    .use(router)
    .mount('#app')
