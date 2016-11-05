var webpack = require('webpack');
var path = require('path');
var ExtractText = require('extract-text-webpack-plugin');

var config = {
    entry: {
        hello: path.join(__dirname, 'src', 'app.js'),
    },
    module: {
        loaders: [{
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                include: path.join(__dirname, 'src'),
                loader: ExtractText.extract('style', 'css!sass')

            }
        ]
    },
    plugins: [
        new ExtractText('app.css')
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    },
    devServer: {
        historyApiFallback: true,
        inline: true,
    }
};

module.exports = config;