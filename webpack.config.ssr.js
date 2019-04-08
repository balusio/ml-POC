const path = require('path');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const webpackNodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: './server.js',
  target:'node',
  externals: [webpackNodeExternals()],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'server.js',
    library: 'app',
    libraryTarget: 'commonjs2'
  },
  optimization: {
    // splitChunks: {
    //   chunks: 'all'
    // },
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: false // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  // devServer configure
  // devServer: {
  //   contentBase: path.join(__dirname, 'dist'),
  //   compress: true,
  //   port: 4200
  // },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test:/\.(s*)css$/,
        use:[{
          loader: MiniCssExtractPlugin.loader,
					options: {
						name:'style.css'
					}
        },
        'css-loader', 'sass-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath:'assets/images'
            }
          }]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      path:  'dist/',
      filename: 'css/style.css'
    })
 
  
  ],
  devtool: 'false'
};