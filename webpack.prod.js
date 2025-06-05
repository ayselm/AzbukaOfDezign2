const {merge} = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    optimization: {
        minimize: true,
        splitChunks: {
            chunks: 'all'
        }
    },
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: '[name].[contenthash].js'
    }
})
