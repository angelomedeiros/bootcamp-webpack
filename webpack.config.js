const webpack = require("webpack");

/*
 * 1º Dizer se tá no "mode" "development" ou "production" e indicar o "entry"
 * 2º Configurar o "output" "output.filename" "output.path"
 */

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "main.js",
    path: __dirname + "/public"
  }
};
