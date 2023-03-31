import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)

// 全局前置守卫
router.beforeEach((to, form, next) => {
    console.log(to, form, next)
    next()
})
app.mount('#app')
