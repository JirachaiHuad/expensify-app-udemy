const path = require('path'); // [node function]

// absolute path = /Users/jirachai/Documents/Online Courses/Udemy-React/indecision-app/public

module.exports = {  // [node function]
  entry: './src/app.js', // relative path for entry point
  output: {
    path: path.join(__dirname, 'public'), // absolute path on the computer
    filename: 'bundle.js'  // any name technically
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/, // regular expression
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
};
