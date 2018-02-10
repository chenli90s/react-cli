const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const isDev = process.env.NODE_ENV == 'development'

const config = {
    entry:{
        app: path.join(__dirname, '../src/index.js')
    },
    output:{
        filename: '[name].[hash].js',
        path: path.join(__dirname, '../dist'),
        // publicPath: '/public',
    },
    module: {
        rules: [{
            test: /.js/,
            loader: 'babel-loader',
            exclude: path.join(__dirname, '../node_modules'),
        },
            {
                test: /.jsx/,
                loader: 'babel-loader',
            }
        ]
    },
    plugins: [
        new HTMLPlugin({
                template: path.join(__dirname, '../src/index.html')
            })
    ],

}


if(isDev){
    config.entry = {
        app: ['react-hot-loader/patch',
            path.join(__dirname, '../src/index.js')],
    }

    config.devServer = {
            host: 'localhost',
            port: '8580',
            contentBase: path.join(__dirname, '../dist'),
            open: true,
            hot: true,
            overlay: {  //显示错误提示
                errors: true
            },
            // publicPath: '/public',
            // historyApiFallback: {
            // index: '/public/index.html'
            // }
        }
        config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config
