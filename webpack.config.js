// Created by Byeonggeol Ha on 2020-05-12
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: [
        path.resolve(__dirname, 'src/main.tsx')
    ],
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
        contentBase: path.join(__dirname, 'src/public'),
        compress: true,
        port: 4444,
        disableHostCheck: true,
        proxy: {
            "**": "http://localhost:3000"
        }
    },
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: '[name].[chunkhash].js'
    },
    plugins:[
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: path.resolve(__dirname, 'docs/index.html'),
            inject: true
        })
    ],
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [{loader: 'ts-loader'}],
            exclude: [/node_modules/]
        }]
    },
    resolve: {
        alias: {
            '@src': path.resolve(__dirname, 'src')
        },
        modules: [
            path.resolve(__dirname, 'node_modules')
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        plugins: [new TsconfigPathsPlugin()]
    }
};
