const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
            },
          },
          {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader",
              },
            ],
          },
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
        ],
      },
    
      plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html",
        }),
        new MiniCssExtractPlugin(),
      ],
 };