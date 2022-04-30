const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = (env) => {
  const mode = env && env.NODE_ENV ? env.NODE_ENV : "";

  return {
    entry: "./src/index.tsx",
    devtool: mode === "production" ? false : "inline-source-map",
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(woff(2)?|ttf|eot|png|jpe?g|gif)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
        {
          test: /\.svg/,
          use: {
            loader: "svg-url-loader",
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
      ],
    },
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html",
      }),
      new CleanWebpackPlugin(),
    ],
    performance: {
      hints: false,
    },
  };
};
