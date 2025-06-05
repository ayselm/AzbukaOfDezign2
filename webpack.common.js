const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const {renderDictionaryForLetter, renderDictionary} = require('./src/javascript/ui/alphabetNewCode.js');
const {articles} = require('./src/javascript/article_code/articles.js');

const path = require('path');
const glob = require('glob');

const generateHtmlPlugins = () => {
    return glob.sync('./src/articles/*.html').map(file => {
        const filename = path.basename(file);
        return new HtmlWebpackPlugin({
            hash: true,
            scriptLoading: 'blocking',
            template: file,
            filename: 'articles/' + filename,
            chunks: ['styles', 'article', 'liveSearch', 'articleWork', 'gallery', 'relatedArticles']
        });
    });
};

// Russian alphabet for dynamic page generation
const russianAlphabet = [
    'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П',
    'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'
];

const generateAlphabetHtmlPlugins = () => {
    return russianAlphabet.map(letter => {
        return new HtmlWebpackPlugin({
            hash: true,
            scriptLoading: 'blocking',
            template: './src/alphabet-letter.html', // Template for alphabet-<letter>.html
            filename: `./alphabet-${letter}.html`,
            chunks: ['styles', 'article', 'alphabetCode'],
            templateParameters: {
                letter: letter.toUpperCase(),
                articles: renderDictionaryForLetter(letter, articles)
            }
        });
    });
};

module.exports = {
    cache: {
        type: 'memory'
    },
    devtool: 'eval-cheap-module-source-map',
    watchOptions: {
        poll: 1000,
        ignored: /node_modules/
    },
    entry: {
        styles: './src/page.scss',
        alphabetCode: './src/javascript/ui/alphabetCode.js',
        article: './src/javascript/article_code/articles.js',
        articleWork: './src/javascript/article_code/articlesWork.js',
        testsWork: './src/javascript/article_code/testsWork.js',
        gallery: './src/javascript/ui/gallery-init.js',
        categories: './src/javascript/ui/categories.js',
        relatedArticles: './src/javascript/ui/related-articles.js',
        liveSearch: './src/javascript/ui/liveSearch.js',
        test1: './src/javascript/ui/test1.js',
        test2: './src/javascript/ui/test2.js',
        test3: './src/javascript/ui/test3.js',
        test4: './src/javascript/ui/test4.js',
        footer: './src/javascript/ui/footer.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'docs')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name].[ext]'
                }
            },
            {
                test: /\.(ttf|otf|woff|woff2)$/i,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {from: 'public', to: ''},
            ],
        }),
        // Landing page
        new HtmlWebpackPlugin({
            hash: true,
            scriptLoading: 'blocking',
            template: './src/index.html',
            filename: './index.html',
            chunks: ['styles', 'article', 'liveSearch', 'articleWork', 'categories', 'gallery', 'relatedArticles']
        }),
        // Alphabet page
        new HtmlWebpackPlugin({
            hash: true,
            scriptLoading: 'blocking',
            template: './src/alphabet.html',
            filename: './alphabet.html',
            chunks: ['styles', 'article', 'liveSearch', 'alphabetCode']
        }),
        // Dictionary page
        new HtmlWebpackPlugin({
            hash: true,
            scriptLoading: 'blocking',
            template: './src/dictionary.html',
            filename: './dictionary.html',
            chunks: ['styles', 'article', 'liveSearch', 'alphabetCode'],
            templateParameters: {
                dictionaryContent: renderDictionary(articles) // Pass rendered dictionary HTML
            }
        }),
        // Other internal pages
        new HtmlWebpackPlugin({
            hash: true,
            scriptLoading: 'blocking',
            template: './src/catalog.html',
            filename: './catalog.html',
            chunks: ['styles', 'article', 'liveSearch', 'articleWork']
        }),
        new HtmlWebpackPlugin({
            hash: true,
            scriptLoading: 'blocking',
            template: './src/testsList.html',
            filename: './testsList.html',
            chunks: ['styles', 'article', 'liveSearch', 'testsWork']
        }),
        new HtmlWebpackPlugin({
            hash: true,
            scriptLoading: 'blocking',
            template: './src/test1.html',
            filename: './test1.html',
            chunks: ['styles', 'article', 'liveSearch', 'test1', 'footer']
        }),
        new HtmlWebpackPlugin({
            hash: true,
            scriptLoading: 'blocking',
            template: './src/test2.html',
            filename: './test2.html',
            chunks: ['styles', 'article', 'liveSearch', 'test2', 'footer']
        }),
        new HtmlWebpackPlugin({
            hash: true,
            scriptLoading: 'blocking',
            template: './src/test3.html',
            filename: './test3.html',
            chunks: ['styles', 'article', 'liveSearch', 'test3', 'footer']
        }),
        new HtmlWebpackPlugin({
            hash: true,
            scriptLoading: 'blocking',
            template: './src/test4.html',
            filename: './test4.html',
            chunks: ['styles', 'article', 'liveSearch', 'test4', 'footer']
        }),
        new HtmlWebpackPlugin({
            hash: true,
            scriptLoading: 'blocking',
            template: './src/404.html',
            filename: './404.html',
            chunks: ['styles', 'article', 'liveSearch']
        }),
        // Partials
        new HtmlWebpackPartialsPlugin([
            {
                path: path.join(__dirname, './src/partArticles/head.html'),
                location: 'head',
                template_filename: '*',
                priority: 'replace'
            }, {
                path: path.join(__dirname, './src/partArticles/header.html'),
                location: 'header_main',
                template_filename: '*',
                priority: 'replace'
            },
            {
                path: path.join(__dirname, './src/partArticles/breadcrumbs.html'),
                location: 'breadcrumbs',
                template_filename: '*',
                priority: 'replace'
            },
            {
                path: path.join(__dirname, './src/partArticles/footer.html'),
                location: 'footer',
                template_filename: '*',
                priority: 'replace'
            },
            {
                path: path.join(__dirname, './src/partArticles/head.html'),
                location: 'heads',
                template_filename: '*',
                priority: 'replace'
            },
            {
                path: path.join(__dirname, './src/partArticles/relatedArticles.html'),
                location: 'relatedArticles',
                template_filename: '*',
                priority: 'replace'
            },
            {
                path: path.join(__dirname, './src/partArticles/relatedArticlesIndex.html'),
                location: 'relatedArticlesIndex',
                template_filename: '*',
                priority: 'replace'
            },
            {
                path: path.join(__dirname, './src/partArticles/helloAbc.html'),
                location: 'helloAbc',
                template_filename: '*',
                priority: 'replace'
            },
            {
                path: path.join(__dirname, './src/partArticles/categories.html'),
                location: 'categories',
                template_filename: '*',
                priority: 'replace'
            },
            {
                path: path.join(__dirname, './src/partArticles/alphabet.html'),
                location: 'alphabet',
                template_filename: '*',
                priority: 'replace'
            },
            {
                path: path.join(__dirname, './src/partArticles/pagination.html'),
                location: 'pagination',
                template_filename: '*',
                priority: 'replace'
            },
            {
                path: path.join(__dirname, './src/partArticles/testsList.html'),
                location: 'testsList',
                template_filename: '*',
                priority: 'replace'
            },
            {
                path: path.join(__dirname, './src/partArticles/testsFilter.html'),
                location: 'testsFilter',
                template_filename: '*',
                priority: 'replace'
            },
            {
                path: path.join(__dirname, './src/partArticles/catalogFilter.html'),
                location: 'catalogFilter',
                template_filename: '*',
                priority: 'replace'
            }
        ]),
        // Generate static article and alphabet pages
        ...generateHtmlPlugins(),
        ...generateAlphabetHtmlPlugins()
    ],
    optimization: {
        minimize: false
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'docs'),
        },
        historyApiFallback: {
            index: '404.html',
        },
    },
};