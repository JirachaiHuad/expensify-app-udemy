const path = require('path') // [node function]
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// absolute path = /Users/jirachai/Documents/Online Courses/Udemy-React/indecision-app/public

module.exports = (env) => {  // [node function]
  const isProduction = env === 'production'
  const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' })

  console.log(env)

  return {
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
          MiniCssExtractPlugin.loader,
          {
              loader: 'css-loader',
              options: {
                  sourceMap: true
              }
          },
          {
              loader: 'sass-loader',
              options: {
                  sourceMap: true
              }
          }
        ]
      }]
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  }
}
