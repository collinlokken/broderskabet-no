const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
        publicPath: '/'
    },
    devServer: {
        host: '127.0.0.1',
        port: 3000,
        watchContentBase: true,
        open: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|jpe?g|gif|ico)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[ext]",
                        outputPath: "img",
                        esModule: false
                    }
                  },
                ],
            }
        ]
    },
    resolve: {
        alias: {
            Components: path.resolve(__dirname, 'src/components'),
            Images: path.resolve(__dirname, 'src/img')
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Broderskabet',
            template: './src/index.html',
            filename: './index.html',
        })
    ],
};