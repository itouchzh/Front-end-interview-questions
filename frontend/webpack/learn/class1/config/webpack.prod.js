const os = require('os')
const path = require('path')
const ESLintWebpackPlugin = require('eslint-webpack-plugin')
// 处理html
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 提取css成单独的文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// css压缩
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
// 多线程打包
const TerserPlugin = require('terser-webpack-plugin')
// 无损压缩图片
// const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
// cpu核心数量
const threads = os.cpus().length

// 获取处理样式的Loaders
const getStyleLoaders = (preProcessor) => {
    return [
        MiniCssExtractPlugin.loader,
        'css-loader',
        {
            loader: 'postcss-loader',
            options: {
                postcssOptions: {
                    plugins: [
                        'postcss-preset-env', // 能解决大多数样式兼容性问题
                    ],
                },
            },
        },
        preProcessor,
    ].filter(Boolean)
}
module.exports = {
    // 入口
    entry: './src/main.js',
    // 出口
    output: {
        path: path.resolve(__dirname, '../dist'),
        // 开发模式没有输出
        // path: undefined,
        // 输出文件名
        filename: 'static/js/main.js',
        // 自动清空上次打包资源
        clean: true,
    },
    // 加载器
    module: {
        rules: [
            {
                oneOf: [
                    {
                        // 处理css文件
                        test: /\.css$/,
                        // loader执行顺序，从左到右
                        use: getStyleLoaders(),
                    },
                    // 处理less
                    {
                        test: /\.less$/,
                        use: getStyleLoaders('less-loader'),
                    },
                    // 处理sass和scss
                    {
                        test: /\.s[ac]ss$/,
                        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
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
                        test: /\.(ttf|woff2?|mp4|mp3|avi)$/,
                        type: 'asset/resource',
                        generator: {
                            filename: 'static/media/[hash:8][ext][query]',
                        },
                    },

                    {
                        test: /\.js$/,
                        exclude: /node_modules/, // 排除node_modules代码不编译
                        // loader: 'babel-loader',
                        // 缓存编译
                        // options: {
                        //     cacheDirectory: true, // 开启babel编译缓存
                        //     cacheCompression: false, // 缓存文件不要压缩
                        // },
                        use: [
                            {
                                loader: 'thread-loader', // 开启多进程
                                options: {
                                    workers: threads, // 数量
                                },
                            },
                            {
                                loader: 'babel-loader',
                                options: {
                                    cacheDirectory: true, // 开启babel编译缓存
                                    plugins: ["@babel/plugin-transform-runtime"], // 减少代码体积
                                },
                            },
                        ],
                    },
                ],
            },
        ],
    },
    // 插件
    plugins: [
        new ESLintWebpackPlugin({
            // 指定检查文件的根目录
            context: path.resolve(__dirname, '../src'),
            exclude: 'node_modules', // 默认值
            cache: true, // 开启缓存
            // 缓存目录
            cacheLocation: path.resolve(__dirname, '../node_modules/.cache/.eslintcache'),
            threads, // 开启多线程
        }),
        new HtmlWebpackPlugin({
            // 以 public/index.html 为模板创建文件
            // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
            template: path.resolve(__dirname, '../public/index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: 'static/css/main.css',
        }),
        
        // 压缩css
        // new CssMinimizerPlugin(),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            // css压缩也可以写到optimization.minimizer里面，效果一样的
            new CssMinimizerPlugin(),
            // 当生产模式会默认开启TerserPlugin，但是我们需要进行其他配置，就要重新写了
            new TerserPlugin({
                parallel: threads, // 开启多进程
            }),
            
        ],
    },
    // 开发服务器设置
    // devServer: {
    //     host: 'localhost',
    //     port: '3000',
    //     open: true,
    // },
    // 模式
    mode: 'production',
    // 包含行列映射
    // devtool:'source-map'
    devtool: 'cheap-module-source-map',
}
