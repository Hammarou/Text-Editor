const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({ template: "./index.html"}),
      new WebpackPwaManifest({
        name: "Progressive Text Editor",
        short_name: "PTE",
        description: "text editor",
        background_color: "#fff",
        theme_color: "#333333",
        
      }),
      new InjectManifest({
        swSrc: path.resolve(__dirname, "src-sw.js"),
        swDest: "src-sw.js"
      })
    ],

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"]
        }
      ],
    },
  };
};
