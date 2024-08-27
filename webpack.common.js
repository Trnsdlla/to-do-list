const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js', // Specify the entry point of your application
  plugins: [
    new HtmlWebpackPlugin({
        template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, // Handle CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/i, // handles HTML img files
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // handles JS img files
        type: "asset/resource",
      }
    ],
  },
  devServer: {
    static: './dist',
  },
};