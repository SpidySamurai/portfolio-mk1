const path = require("path"); //Access where you move dir, local or cloud
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  resolve: {
    extensions: [".js"],
    alias: {
      "@utils": path.resolve(__dirname, "src/utils"),
      // "@templates": path.resolve(__dirname, "src/templates"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@images": path.resolve(__dirname, "src/assets/images"),
    },
  },
  plugins: [
    new htmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCSSExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, "src", "assets/images"), //one file or the full dir
    //       to: "assets/images",
    //     },
    //   ],
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css|.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCSSExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.svg|.png|.jpeg/,
        type: "asset/resource",
      },
    ],
  },
};
