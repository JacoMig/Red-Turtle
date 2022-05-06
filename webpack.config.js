const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = (env) => {
  const mode = env && env.NODE_ENV ? env.NODE_ENV : "";

  return {
    entry: path.join(__dirname, "src", "index.tsx"),
    devtool: mode === "production" ? false : "inline-source-map",
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    devServer: {
      contentBase: path.resolve(__dirname, "./public"),
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: "/node_modules/",
        },
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.svg/,
          use: {
            loader: "svg-url-loader",
          },
        },
        {
          test: /\.(jpe?g|gif|png)$/i,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 10000,
                name: "[name].[ext]",
              },
            },
          ],
        },
      ],
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "public"),
      publicPath: "/",
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: path.join(__dirname, "src", "index.html"),
      }),
    ],
    performance: {
      hints: false,
    },
  };
};
