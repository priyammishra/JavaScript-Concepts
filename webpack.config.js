const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/, // all .css file use the below loader
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/i, // for all assest with the given extension add the below type loader
                type : 'asset/resource'
            }
        ]
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        open: true,
        hot: true,
        port: 3000,
        compress: true,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'CSS grid',
            filename: 'index.html',
            template: 'index.html'
        })
    ]
    
}