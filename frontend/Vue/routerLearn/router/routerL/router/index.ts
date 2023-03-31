import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'

// 路由数组类型为RouteRecordRaw
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        // 命名路由
        name: 'Home',
        component: () => import('../components/Home.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../components/About.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    // 滚动条的滚动行为
    scrollBehavior: (ro, from, savePositon) => {
        if (savePositon) {
            return savePositon
        }
    },
})

export default router
