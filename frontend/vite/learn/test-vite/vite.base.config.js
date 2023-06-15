import { defineConfig } from 'vite'
export default defineConfig(() => {
    optimizeDeps: {
        exclude:[]
    }
    // envPrefix:'ENV_' // 配置环境前缀
})