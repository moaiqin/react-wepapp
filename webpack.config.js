var path = require('path')//是从pakeage.json里面引入文件
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
//require('./mock/server.js');
module.exports = {
    entry: path.resolve(__dirname, 'app/index.jsx'),
    output: {
        filename: "bundle.js"
    },

    resolve:{
        //就是引入文件的时候不用写后缀名，比如import 'a.js',就可以写成import 'a'
        extensions:['', '.js','.jsx']
    },

    module: {
        loaders: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel' },
            { test: /\.less$/, exclude: /node_modules/, loader: 'style!css!postcss!less' },
            { test: /\.css$/, exclude: /node_modules/, loader: 'style!css!postcss' },
            { test:/\.(png|gif|jpg|jpeg|bmp)$/i, loader:'url-loader?limit=5000' },  // 限制大小5kb
            { test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader:'url-loader?limit=5000'} // 限制大小小于5k
        ]
    },

    postcss: [
        require('autoprefixer') //调用autoprefixer插件，例如 display: flex
    ],

    plugins: [
        // html 模板插件
        new HtmlWebpackPlugin({
            //可以给他定义lefilename:index.html就生成一个inndex.html，里面就自动引用js
            template: __dirname + '/app/index.tmpl.html'
        }),

        // 热加载插件
        new webpack.HotModuleReplacementPlugin(),

        // 自动打开浏览器
        new OpenBrowserPlugin({
          url: 'http://localhost:8080'
        }),

        // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        //比如localStore代码中引用
        new webpack.DefinePlugin({
          __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        })
    ],
    //页面实时更新先安装webpack-dev-server， 然后new webpack.HotModuleReplacementPlugin();
    //contentBase:'./public'//默认是这个文件，有了HtmlWebpackPlugin之后
    //就自动有了，但不表现出来，则热加载默认的文件就是HtmlWebpackPlugin
    //下的template文件
    devServer: {
        proxy:{
             //凡是'/api'开头的http请求，都会被代理到localhost:3000
            '/api':{
                target:"http://localhost:3000",
                secure:false
            }
        },
        colors: true, //终端中输出结果为彩色
        historyApiFallback: true, //不跳转，在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所以引用的文件就可以饮用文件名，就自动加载下面的index.html,所有的跳转将指向index.html
        inline: true, //实时刷新
        hot: true  // 使用热加载插件 HotModuleReplacementPlugin
    }
}
