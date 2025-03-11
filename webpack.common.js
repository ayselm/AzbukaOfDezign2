const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const glob = require('glob');

const generateHtmlPlugins = () => {
  return glob.sync('./src/articles/*.html').map(file => {
    const filename = path.basename(file);
    return new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: file,
      filename: 'articles/'+filename,
      chunks: ['styles']
    });
  });
};

module.exports = {
  entry: {
    index: './src/javascript/ui/index.js',
    shortArticle: './src/javascript/ui/shortArticle.js',
    catalog: './src/javascript/ui/catalog.js',
    alphabet: './src/javascript/ui/alphabet.js',
    testsList: './src/javascript/ui/testsList.js',
    test1: './src/javascript/ui/test1.js',
    404: './src/javascript/ui/error.js',
    styles: './src/page.css',
    article: './src/javascript/article_code/articles.js',
    articleWork: './src/javascript/article_code/articlesWork.js'
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
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
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
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),


    new CopyWebpackPlugin({
      patterns: [
        { from: 'public', to: '' }, // Копирует все файлы из public в docs
      ],
    }),

    // Landing page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/index.html',
      filename: './index.html',
      chunks: ['index', 'article', 'articleWork']
    }),

    // Internal pages
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/shortArticle.html',
      filename: './shortArticle.html',
      chunks: ['shortArticle']
    }),

    // Internal pages
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/alphabet.html',
      filename: './alphabet.html',
      chunks: ['alphabet']
    }),

    // Internal pages
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/catalog.html',
      filename: './catalog.html',
      chunks: ['catalog', 'article', 'articleWork']
    }),

    // Internal pages
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/alphabet.html',
      filename: './alphabet.html',
      chunks: ['alphabet']
    }),

    // Internal pages
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/testsList.html',
      filename: './testsList.html',
      chunks: ['testsList']
    }),

    // Internal pages
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/test1.html',
      filename: './test1.html',
      chunks: ['test1']
    }),

    // Internal pages
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/404.html',
      filename: './404.html',
      chunks: ['404']
    }),

    // Генерация статичных HTML страниц из articles
    ...generateHtmlPlugins()
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
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