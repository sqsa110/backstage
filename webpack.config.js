var webpack = require('webpack');
var path = require('path');
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    entry : {
//        entry1 : './entry/entry1.js',
        backstagemain : './public/javascripts/backstagemain.js',
        reactmain : './public/javascripts/reactmain.js'
/*        common : [
            './node_modules/react/dist/react.min.js',
            './node_modules/react-dom/dist/react-dom.min.js'
        ]*/
    },
    output : {
        path : path.resolve(__dirname,'./public/assents'),
        filename : '[name].js'
    },
//    plugins : [new webpack.optimize.CommonsChunkPlugin('common','common.js')],
    plugins : [
        new webpack.DllReferencePlugin({
            context : __dirname,
            manifest : require('./mainfest.json')
        })
    ],
    module:{
        loaders : [
            { 
                test : /\.js$/,
                loader : 'babel-loader',
                exclude:/node_modules/,
                query : {
                    presets : ['es2015','react']
                }
            },
            {
                test : /\.jsx$/,
                loader : 'babel-loader!jsx-loader?harmony',
                exclude : /node_modules/,
                query : {
                    presets : ['es2015','react']
                } 
           }   
        ]
    },
    resolve : {
        extensions:["",".js",".json"]
    }
}
