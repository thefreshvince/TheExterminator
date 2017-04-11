const path = require('path'),
      LiveReloadPlugin = require('webpack-livereload-plugin');


module.exports = {
  entry: './source/entry.js',
  output: {
    filename: 'CallTheExterminator.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [

      // For all js files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },

      // For SCSS
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }

    ]
  },
  plugins: [
    new LiveReloadPlugin()
  ],
  watch: true
};