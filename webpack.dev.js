const {merge} = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    cache: {
        type: 'memory'
    },
    entry: {
        styles: './src/page.scss',
        gallery: './src/javascript/ui/gallery-init.js'
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    optimization: {
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
        minimize: false
    },
    devServer: {
        static: './dev_build',
        hot: true,
        liveReload: false,
        watchFiles: [
            'src/**/*.scss',
            'src/**/*.html',
            'src/partArticles/**/*.html'
        ],
        client: {
            progress: true
        }
    },
    output: {
        path: path.resolve(__dirname, 'dev_build')
    }
})
