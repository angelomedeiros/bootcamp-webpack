const webpack = require("webpack");

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
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", // Add o css a dom injetando a tag style :D
          "css-loader" // interpreta @import, url()
        ]
      }
    ]
  }
};
