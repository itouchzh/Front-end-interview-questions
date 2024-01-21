import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteVueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), viteVueSetupExtend()],
})
