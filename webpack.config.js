var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: __dirname + '/public/index.html',
    output: {
      path: __dirname + '/public/dist',
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      },
      {
          test: /\.js$/,
          loader: 'babel-loader',
          resolve: {
            modules: [path.join(__dirname, 'node_modules')]
          }
      },
      { 
          test: /\.(sass|scss)$/, 
          loaders: ["style-loader", "css-loader", "postcss-loader", "sass-loader"] 
      },
      {
          test: /\.(jpe?g)?$/, 
          use: [{ loader: 'url-loader', options:{ mimetype: 'image/jpeg'} } ] 
      },
    ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
  }