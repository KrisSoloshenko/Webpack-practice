const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const path = require('path');


module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'main.js'
    }
    plugins: [
        new MiniCssExtractPlugin(),
        new CssMinimizerWebpackPlugin(),
        new TerserWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: path.join(__dirname, 'src', 'index.html'),
            filename: 'main.html',
          }),
        new ESLintPlugin(),
        new StylelintPlugin(),
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
    optimization: {
        minimizer: [ new TerserWebpackPlugin(), new CssMinimizerWebpackPlugin()],
    },
    devtool: 'source-map',
    
}
