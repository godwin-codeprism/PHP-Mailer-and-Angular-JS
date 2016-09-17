var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'godwin.js',
    },
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
        })
    ],
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {
                test: /\.html$/,
                loader: "html"
            },
            { test: /\.(png|jpg|eot|woff2|woff|svg|ttf)$/, loader: "url-loader?limit=100000" },
        ]
    }
}