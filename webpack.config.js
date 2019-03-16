const path = require("path");

module.exports = {
  mode: 'production',
  entry: [
    './src/index.js'
  ],
  output:{
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve:{
    extensions: ['.js','.json']
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:[ 
          {
            loader: 'babel-loader',
            options: {
              presets: [
                "@babel/env",
                "@babel/preset-react"
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules'
        ]
      }
    ]
  }
};