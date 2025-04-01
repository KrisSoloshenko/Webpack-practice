const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js'
    },
    devServer: {
        static: {directory: path.join(__dirname, 'dist')},
        open: true,
        hot: true,
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: path.join(__dirname, 'src', 'index.html'),
            filename: 'main.html',
          })
    ],
    module: {
        rules: [
          { test: /\.css$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                  esModule: true,
                },
              },
    , 'css-loader'] }
        ]
    },
    devtool: 'inline-source-map',
    
}
