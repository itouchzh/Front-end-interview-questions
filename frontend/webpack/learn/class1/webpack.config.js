const path = require('path')
const ESLintWebpackPlugin = require('eslint-webpack-plugin')
// 处理html
const HtmlWebpackPlugin = require('html-webpack-plugin')

/**@type {import('webpack'.Configuration)} */
module.exports = {
    // 入口
    // entry: './src/main.js',
    // entry配置为对象
    entry: {
        //  从input到output为一个chunk,一个chunk必定会输出一些文件，这些文件叫做bundles
        main: {
            filename: 'target.js', // 输出结果名称
            import: './src/main.js', // 指定的入口文件
            runtime: '', // 配置当前chunk的运行时环境,如果有的话就直接重用，没有就创建一个
            // dependOn:'', // 与runtime相同，但是没有环境就会报错，不会自己构建， 与runtime不能同时存在
        },
    },
    // 出口
    output: {
        path: path.resolve(__dirname, 'dist'),
        // 输出文件名
        filename: 'static/js/main.js',
        // 自动清空上次打包资源
        clean: true,
    },
    // 加载器
    module: {
        rules: [
            {
                // 处理css文件
                test: /\.css$/,
                // loader执行顺序，从左到右
                use: ['style-loader', 'css-loader'],
            },
            // 处理less
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            // 处理sass和scss
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            // 处理图片：
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                type: 'asset',
                // 小于10kb会处理为base64
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024,
                    },
                },
                generator: {
                    // 改变图片打包目录：
                    // 将图片文件输出到 static/imgs 目录中
                    // 将图片文件命名 [hash:8][ext][query]
                    // [hash:8]: hash值取8位
                    // [ext]: 使用之前的文件扩展名
                    // [query]: 添加之前的query参数
                    filename: 'static/imgs/[hash:8][ext][query]',
                },
            },
            // 处理字体图标：
            {
                test: /\.(ttf|woff2?|map4|map3|avi)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/media/[hash:8][ext][query]',
                },
            },

            {
                test: /\.js$/,
                exclude: /node_modules/, // 排除node_modules代码不编译
                loader: 'babel-loader',
            },
        ],
    },
    // 插件
    plugins: [
        new ESLintWebpackPlugin({
            // 指定检查文件的根目录
            context: path.resolve(__dirname, 'src'),
        }),
        new HtmlWebpackPlugin({
            // 以 public/index.html 为模板创建文件
            // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
            template: path.resolve(__dirname, 'public/index.html'),
        }),
    ],
    // 开发服务器设置
    devServer: {
        host: 'localhost',
        port: '3000',
        open: true,
    },
    // 模式
    mode: 'development',
}
