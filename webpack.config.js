const modoDev = process.env.NODE_ENV !== "production";
const webpack = require("webpack");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/*
 * 1º Dizer se tá no "mode" "development" ou "production" e indicar o "entry"
 * 2º Configurar o "output" "output.filename" "output.path"
 * 3º Add loader
 * 4º Add cross-env
 * 5º Devserver, extract html
 */

module.exports = {
  mode: modoDev ? "development" : "production",
  entry: "./src/main.js",
  // devServer: {
  //   contentBase: "./dist"
  // },
  // output: {
  //   filename: "main.js",
  //   path: __dirname + "/dist"
  // },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader, // Extrai o css do js para o arquivo especificado na instanciação do plugin
          // "style-loader", // Add o css a dom injetando a tag style :D
          "css-loader", // interpreta @import, url()
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)/,
        use: ["file-loader"]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      }
    ]
  }
};
