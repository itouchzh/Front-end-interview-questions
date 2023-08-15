import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'

// 路由数组类型为RouteRecordRaw
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/school'
    },
    {
        path: '/home',
        component: () => import('../components/Home/index.vue')
    }, {
        path: '/school',
        component: () => import('../pages/school/index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    // 滚动条的滚动行为
    // scrollBehavior: (ro, from, savePositon) => {
    //     if (savePositon) {
    //         return savePositon
    //     }
    // },
})

export default router
