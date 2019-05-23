const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  mode: 'none',
  devtool: 'source-map',
  entry: {
    notification: './src/index.js',
    'notification.min': './src/index.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    libraryExport: 'default',
    library: 'Tip',
    libraryTarget: 'umd',
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'prop-types': 'prop-types',
    'react-transition-group': 'react-transition-group'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react'],
            plugins: ['@babel/proposal-class-properties', '@babel/plugin-proposal-object-rest-spread', '@babel/plugin-syntax-dynamic-import']
          }
        }
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.min\.css$/,
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJSPlugin({
        include: /\.min\.js$/,
      }),
    ],
  },
}
