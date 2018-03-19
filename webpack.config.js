const path = require('path');

module.exports = {
    entry: [
      './src/front/index.js'
    ],
    module: {
      rules: [
          {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: ['babel-loader']
          },
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use: ['babel-loader','eslint-loader']
          },
          {
              test: /\.css$/,
              use: [ 'style-loader', 'css-loader' ]
          },
          {
              test: /\.(gif|png|jpe?g|svg)$/i,
              use: [
                  'file-loader',
                  {
                      loader: 'image-webpack-loader'
                  },
              ],
         }
      ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.join(__dirname + '/build'),
        publicPath: '/js',
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './build',
        port: 8080
    }
};
