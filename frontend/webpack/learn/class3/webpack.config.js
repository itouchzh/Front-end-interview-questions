const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
/** @type {import('webpack'.Configuration)} */
module.exports = {
    entry: {
        // main: {
        //     filename: 'target.js',
        //     import:'./src/index.js'
        // }
        app: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash:8].js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'MiniCssExtractPlugin.loader',
                    // 开启css模块化，防止重名冲突
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [],
    mode: 'development',
}

/**
 * 1. dependencies 与 devdependencies 的区别
 * dependencies 是生产依赖，而devdependencies是开发依赖
 * 一般情况下，混写不会影响生产环境，despendencies代表核心包，当发布一个npm包时候，用户会默认安装dependencies里面的依赖。
 * 但是需要SSR的时候，会造成性能问题
 *
 *
 *
 *
 *
 *
 */
