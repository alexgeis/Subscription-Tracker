const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");

module.exports = () => {
  return {
    mode: "development",
    // Entry point for files
    entry: {
      main: "./src/index.js",
      install: "./src/install.js",
    },
    // Output for our bundles
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "./public"),
      //  path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      // Webpack plugin that generates our html file and injects our bundles.
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        title: "Subscription Tracker",
      }),

      // Injects our custom service worker
      new InjectManifest({
        swSrc: "./src-sw.js",
        swDest: "src-sw.js",
      }),

      // Creates a manifest.json file.
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: "Subscription Tracker",
        short_name: "SubTracker",
        description: "Track your total subscription costs and budget with ease",
        background_color: "#59c9A5",
        theme_color: "#59c9A5",
        start_url: "/",
        publicPath: "/",
        icons: [
          {
            src: path.resolve("src/components/images/logo3.png"),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join("assets", "icons"),
          },
        ],
      }),
    ],

    module: {
      // CSS loaders
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          // We use babel-loader in order to use ES6.
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: [
                "@babel/plugin-proposal-object-rest-spread",
                "@babel/transform-runtime",
              ],
            },
          },
        },
      ],
    },
    resolve: {
      extensions: ["*", ".js", ".jsx"],
    },
  };
};
