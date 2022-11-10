const path = require('path');
const webpack = require('webpack');
const { env } = require('process');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

env.NODE_ENV = env.NODE_ENV || 'development';

if (env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test' });
} else if (env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development' });
}

module.exports = (env) => {
  const isProduction = env === 'production';

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
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
          },
        ],
      }]
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new webpack.DefinePlugin({
        'env.FIREBASE_API_KEY': JSON.stringify(env.FIREBASE_API_KEY),
        '.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(env.FIREBASE_AUTH_DOMAIN),
        'env.FIREBASE_DATABASE_URL': JSON.stringify(env.FIREBASE_DATABASE_URL),
        'env.FIREBASE_PROJECT_ID': JSON.stringify(env.FIREBASE_PROJECT_ID),
        'env.FIREBASE_STORAGE_BUCKET': JSON.stringify(env.FIREBASE_STORAGE_BUCKET),
        'env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(env.FIREBASE_MESSAGING_SENDER_ID)
      })
    ],
    devtool: isProduction? 'source-map' : 'inline-source-map',
    devServer: {
      static: path.join(__dirname, 'public'),
      historyApiFallback: true,
      devMiddleware: {
        publicPath: '/dist/'
      }
    },
    mode: 'development'
  }
}
