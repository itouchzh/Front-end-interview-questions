const path = require('path')
const reslove = (dir) => path.join(__dirname, dir)
module.exports = {
    webpack: {
        alis: {
            '@': reslove('src'),
        },
    },
    // 跨域代理配置
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3001',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/api',
                },
            },
        },
    },
}
