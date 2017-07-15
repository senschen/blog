var htmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var webpack = require('webpack');
var path = require('path');
var CleanPlugin = require('clean-webpack-plugin'); // 文件夹清除工具

module.exports = {
    entry: {
        main: './src/app.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name]-[hash].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, 'node_modules')
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','postcss-loader']
                })
            },
            {
                test: /\.less/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url',
                query: {
                    limit: 30720,
                }
            },
            {
                test: /\.(xhtml)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].html'
                }
            }
        ]
    },
    plugins: [
        new CleanPlugin(['dist']),// 清空dist文件夹
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: 'body'
        }),
        new ExtractTextPlugin({
            filename: "css/[name]-[hash].css",
            disable: false,
            allChunks: true
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    require("autoprefixer")({
                        browsers: ["last 5 versions"]
                    })
                ]
            }
        })
    ],
    devServer: {
        host: 'localhost',
        port: 8188, //端口
        inline: true,
        hot: false,
    }
};