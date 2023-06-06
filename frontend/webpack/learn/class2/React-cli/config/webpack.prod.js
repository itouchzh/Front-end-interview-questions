const path = require('path')
const ESLintWebpackPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const getStyleLoaders = (preProcessor) => {
    return [
        MiniCssExtractPlugin.loader,
        'css-loader',
        {
            // 配合package.json中的文件
            loader: 'postcss-loader',
            options: {
                postcssOptions: {
                    plugins: ['postcss-preset-env'],
                },
            },
        },
        preProcessor,
    ].filter(Boolean)
}

module.exports = {
    // 入口
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'static/js/[name].[contenthash:10].js',
        // chunk名称
        chunkFilename: 'static/js/[name].[contenthash:10].chunk.js',
        assetModuleFilename: 'static/media/[hash:10][ext][query]',
        clean: true,
    },
    module: {
        rules: [
            {
                oneOf: [
                    {
                        // 用来匹配 .css 结尾的文件
                        test: /\.css$/,
                        // use 数组里面 Loader 执行顺序是从右到左
                        use: getStyleLoaders(),
                    },
                    {
                        test: /\.less$/,
                        use: getStyleLoaders('less-loader'),
                    },
                    {
                        test: /\.s[ac]ss$/,
                        use: getStyleLoaders('sass-loader'),
                    },
                    {
                        test: /\.styl$/,
                        use: getStyleLoaders('stylus-loader'),
                    },
                    {
                        test: /\.(png|jpe?g|gif|svg)$/,
                        type: 'asset',
                        parser: {
                            dataUrlCondition: {
                                maxSize: 10 * 1024, // 小于10kb的图片会被base64处理
                            },
                        },
                    },
                    {
                        test: /\.(ttf|woff2?)$/,
                        type: 'asset/resource',
                    },
                    // 处理jsp
                    {
                        test: /\.(jsx|js)$/,
                        include: path.resolve(__dirname, '../src'),
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            cacheCompression: false,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new ESLintWebpackPlugin({
            context: path.resolve(__dirname, '../src'),
            exclude: 'node_modules',
            cache: true,
            cacheLocation: path.resolve(__dirname, '../node_modules/.cache/.eslintcache'),
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
        }),
        // 将css文件抽离成单独文件
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[contenthash:10].css',
            chunkFilename: 'static/css/[name].[contenthash:10].chunk.css',
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, '../public'),
                    to: path.resolve(__dirname, '../dist'),
                    toType: 'dir',
                    noErrorOnMissing: true, // 不生成错误
                    globOptions: {
                        // 忽略文件
                        ignore: ['**/index.html'],
                    },
                    info: {
                        // 跳过terser压缩js
                        minimized: true,
                    },
                },
            ],
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        runtimeChunk: {
            name: (entrypoint) => `runtime~${entrypoint.name}`,
        },
        // 压缩的操作
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserWebpackPlugin(),
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminGenerate,
                    options: {
                        plugins: [
                            ['gifsicle', { interlaced: true }],
                            ['jpegtran', { progressive: true }],
                            ['optipng', { optimizationLevel: 5 }],
                            [
                                'svgo',
                                {
                                    plugins: [
                                        'preset-default',
                                        'prefixIds',
                                        {
                                            name: 'sortAttrs',
                                            params: {
                                                xmlnsOrder: 'alphabetical',
                                            },
                                        },
                                    ],
                                },
                            ],
                        ],
                    },
                },
            }),
        ],
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json'], // 自动补全文件扩展名，让jsx可以使用
    },
    mode: 'production',
    devtool: 'source-map',
}
