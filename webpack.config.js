const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const config = {
    mode: 'development',
    entry: path.resolve('src/index.jsx'),
    devtool: "source-map",
    output: {
        path: path.resolve('dist'),
        filename: `index.js`,
    },
    devServer: {
        writeToDisk: true,
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    module: {
        rules: [
            // load js/jsx files
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [
        new CopyPlugin([
            { from: 'src/public', to: '' },
        ]),
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
};

module.exports = config;
