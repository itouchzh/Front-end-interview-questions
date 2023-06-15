import { defineConfig } from 'vite'
export default defineConfig(() => ({
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
            plugins:[]
        }
    }, // 配置预处理器
}))
