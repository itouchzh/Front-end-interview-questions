import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'

// 路由数组类型为RouteRecordRaw
const routes: Array<RouteRecordRaw> = [
    {
        path: '/virturalList',
        // 命名路由
        name: 'VirturalList',
        component: () => import('../components/VirtualList/VirturalList.vue'),
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('../components/Home/Home.vue'),
    },
    {
        path: '/blockrender',
        component:() => import('../components/VirtualList/BlockRender.vue')
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
