const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/*
 * 1º Dizer se tá no "mode" "development" ou "production" e indicar o "entry"
 * 2º Configurar o "output" "output.filename" "output.path"
 * 3º Add loader
 */

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "main.js",
    path: __dirname + "/public"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // Extrai o css do js para o arquivo especificado na instanciação do plugin
          // "style-loader", // Add o css a dom injetando a tag style :D
          "css-loader" // interpreta @import, url()
        ]
      }
    ]
  }
};
