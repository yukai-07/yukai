const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const glob = require('glob');
const PurifyCSSPlugin = require("purifycss-webpack");
const entry = require("./webpack_config/entry_webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    mode:'development',
    //入口文件的配置项
    entry:entry,
    //出口文件的配置项
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js',
        publicPath:'http://localhost:8081/'
    },
    //模块:例如解读CSS，图片如何转换，压缩
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader','css-loader'],
                use:ExtractTextWebpackPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader:"css-loader",
                            options:{importLoaders:1}
                        },
                        "postcss-loader"
                    ]
                })
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:500,
                        outputPath:'images/'
                    }
                }]
            },
            {
                test:/\.(html|htm)$/i,
                loader:'html-withimg-loader'
            },
            {
                test:/\.scss$/,
                // use:[
                //     {
                //         loader:'style-loader'
                //     },
                //     {
                //       loader:'css-loader'
                //     },
                //     {
                //         loader:'sass-loader'
                //     }
                // ]
                use:ExtractTextWebpackPlugin.extract({
                    use: [
                        {
                            loader:"css-loader"
                        },
                        {
                            loader:"sass-loader"
                        }
                        ],
                    fallback:"style-loader"
                })
            },
            {
                test:/\.(jsx|js)$/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:[
                            "es2015"
                        ]
                    }
                },
                exclude:/node_modules/
            }
        ]

    },
    //插件，用于生产模板和各项功能
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            filename:'index.html',
            title:'index-title',
            chunks:['index'],
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        }),
        //多页面
        // new HtmlPlugin({
        //     filename:'index2.html',
        //     title:'index2-title',
        //     chunks:['index2'],
        //     minify:{
        //         removeAttributeQuotes:true
        //     },
        //     hash:true,
        //     template:'./src/index2.html'
        // })
        new ExtractTextWebpackPlugin("./css/style.css"),
        new PurifyCSSPlugin({
            paths:glob.sync(path.join(__dirname,'src/*.html'))
        }),
        new webpack.BannerPlugin('楷哥哥最帅'),
        new webpack.ProvidePlugin({
            $:"jquery"
        }),
        new CopyWebpackPlugin([{
            from:__dirname + '/src/public',
            to:'./public'
        }])
    ],
    //配置webpack开发服务功能
    devServer:{
        //设置基本目录结构
        contentBase:path.resolve(__dirname,'dist'),
        //服务器的IP地址，可以使用IP也可以使用localhost
        host:'localhost',
        //服务端压缩是否开启
        compress:true,
        //配置服务端口号
        port:8081,
        open:true,
        hot:true
    }

};