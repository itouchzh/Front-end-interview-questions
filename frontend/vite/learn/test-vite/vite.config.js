// export default {
//     optimizeDeps: {
//         exclude:['lodash'] //  不进行依赖预构建
//     }
// }
/** @type import("vite").UserConfig */
// export default {

// }

import { defineConfig, loadEnv } from 'vite'
import viteBaseConfig from './vite.base.config'
import viteDevConfig from './vite.dev.config'
import viteProdConfig from './vite.prod.config'


//  策略模式
const envResolver = {
    build: () => Object.assign({}, viteBaseConfig, viteProdConfig),
    serve: () => Object.assign({}, viteBaseConfig, viteDevConfig),
    //  等价于
    // "build": () => ({ ...viteBaseConfig, ...viteProdConfig }),
    // "serve": () => ({...viteBaseConfig, ...viteDevConfig})
}
export default defineConfig(({ command, mode }) => {
    //  读取env
    const env = loadEnv(mode, process.cwd(), '')
    // console.log(env);
    // console.log(command);
    return envResolver[command]()

})

//  在客户端使用环境变量要使用
