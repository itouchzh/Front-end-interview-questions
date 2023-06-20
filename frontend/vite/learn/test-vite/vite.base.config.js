import { defineConfig } from 'vite'
import path from 'path'
import MyViteAliases from './plugins/ViteAliases'
import { createHtmlPlugin } from 'vite-plugin-html'
import { viteMockServe } from 'vite-plugin-mock'
export default defineConfig({
    resolve: {
        // 配置路径别名
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    optimizeDeps: {
        exclude: [],
    },
    // envPrefix:'ENV_' // 配置环境前缀
    css: {
        modules: {
            // 对css模块化的默认行为进行覆盖
            localsConvention: 'camelCase', // 改名字， 驼峰还是中划线
            scopeBehaviour: 'local', // 配置当前模块化行为是模块化还是全局化（有hash值就是模块化，通过hash控制样式不被重名覆盖）
            generateScopedName: '[name]_[local]_[hash:5]', // 修改类名
            globalModulePaths: [''], // 不使用css模块化的路径
            hashPrefix: 'hello', // 生成哈希值的时候会根据这个加其他的进行生成
        },
        preprocessorOptions: {
            less: {
                math: 'alwoys', // 可以进行数学计算
                globalVars: {
                    // 定义全局变量
                    mainColor: 'red',
                },
            },
        },
        devSourcemap: false,
        postcss: {
            plugins: [],
        },
    },
    // 配置打包
    build: {
        rollupOptions: {
            output: {
                // 文件名字
                assetFileNames: '[hash].[name].[ext]',
            },
        },
        assetsInlineLimit: 4096, // 4kb，当文件不超过4kb就会输出base64
        outDir: 'testDist', // 打包输出目录，默认为dist
        assetsDir: 'static', // 静态资源目录名字
        emptyOutDir: true, // 清除dist原始打包目录
    },
    plugins: [
        MyViteAliases(),
        createHtmlPlugin({
            inject: {
                data: {
                    title: '首页',
                },
            },
        }),
        viteMockServe()
    ],
})
