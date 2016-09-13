var webpack = require('webpack');
var path = require('path');
//var htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry : {
//       backstagemain : './public/javascripts/backstagemain.js',
//        reactmain : './public/javascripts/reactmain.js',
        ant : './public/javascripts/ant.js'
    },
    output : {
        path : path.resolve(__dirname,'./public/assents'),
        filename : '[name].js'
    },
    plugins : [
        new webpack.DllReferencePlugin({
            context : __dirname,
            manifest : require('./mainfest.json')
        })
    ],
    module:{
        loaders : [
            {
                test : /\.css$/,
                loaders : ['style','css'],
                exclude:"/node_modules/",
                include : 'public/css'
            },
            {
                test:/\.less$/,
                loaders : ['style','css','less'],
                exclude:"/node_modules/",
                include : 'public/css'
            },
            {
                test: /\.(eot|woff|svg|ttf|woff2)$/,
                exclude:"/node_modules/",
                loader : "file-loader"
            },
            { 
                test : /\.jsx?$/,
                loaders : ['react-hot','babel'],
                exclude:"/node_modules/",
                include : 'public/javascripts'
            },
            {
                test : /\.js$/,
                exclude:"/node_modules/",
                loader : 'babel-loader'
            }
        ]
    },
    resolve : {
        extensions:['','.js','.json','.jsx','.css']
    },
    devServer : {
        historyApiFallback : true,
        hot : true,
        inline : true,
        progress : true
    }
}
