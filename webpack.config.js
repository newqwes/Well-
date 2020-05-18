const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
    const isProduction = options.mode === 'production';

    const config = {
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? 'none' : 'source-map',
        watch: !isProduction,
        entry: [ './src/index.js','./src/sass/style.scss' ],
        devServer: {
            contentBase: './dist', // liveserver
            },
        output: {
            path: path.join(__dirname, '/dist'),
            filename: '[name].js'
        },
        module: {
            rules: [
              {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              },
              {
                test: /\.html$/,
                loader: 'html-loader',
              },
               {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
              }, {
                    test: /\.(png|svg|jpe?g|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                        }
                    ]
              }

            ]
          },
        plugins: [
            //new CleanWebpackPlugin(),
            new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }), // говорит чтобы не удалял при пересборке html файлы
            new HtmlWebpackPlugin({
                template: 'index.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'tablet.html',
                template: 'tablet.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'monoblock.html',
                template: 'monoblock.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'mobile-phone.html',
                template: 'mobile-phone.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'computer.html',
                template: 'computer.html'
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            }),
            new MiniCssExtractPlugin({
                filename: 'style.css'
            })
        ]
    }
    return config;
}