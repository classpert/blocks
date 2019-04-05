const path = require('path')
const outputPath = path.resolve(__dirname, 'build')
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const S3Uploader = require('webpack-s3-uploader')

// SVGO Options
const svgoSettings = require('./src/config/svgo-opts')

//
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = envVars => {

  const env = Object.assign({}, process.env, envVars)

  return {

    mode: env.NODE_ENV,

    devtool: env.NODE_ENV === 'production' ? '' : 'inline-source-map',

    entry: {
      'dist/blocks.all': './src/index.all.js',
      'dist/blocks/vue-awesome-swiper': './src/entries/vue-awesome-swiper.js',
      'dist/blocks/vue-search-bar': './src/entries/vue-search-bar.js',
      'dist/blocks/vue-local-dropdown': './src/entries/vue-local-dropdown.js',
      'dist/blocks/vue-syllabus': './src/entries/vue-syllabus.js'
    },

    output: {
      filename: '[name].js',
      path: outputPath
    },

    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            name: 'dist/blocks.cement',
            chunks: (chunk) => chunk.name !== "dist/blocks.all",
            minChunks: 2
          }
        }
      }
    },

    devServer: {
      host: '0.0.0.0',
      port: 8080,
      overlay: true,
      disableHostCheck: true,
      writeToDisk: true,
      contentBase: outputPath,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      allowedHosts: [
        'localhost',
        '127.0.0.1'
      ]
    },

    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader', options: { importLoaders: 1 }
            },
            {
              loader: 'postcss-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.svg$/,
          resourceQuery: /inline/,
          use:[
            {
              loader: 'url-loader'
            },
            {
              loader: 'svg-transform-loader'
            },
            {
              loader: 'svgo-loader',
              options: svgoSettings
            }
          ]
        }
      ]
    },
    plugins: [

      env.NODE_ENV === 'production' ? new CleanWebpackPlugin(['build']) : false,

      new VueLoaderPlugin(),

      new HtmlWebpackPlugin({
        template: "./src/docs/index.html",
        inject: false
      }),

      env.NODE_ENV === 'production' && env.RELEASE ? new S3Uploader({
        s3Options: {
          accessKeyId: env.AWS_ACCESS_KEY_ID,
          secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
          region: 'us-east-1'
        },
        s3UploadOptions: {
          Bucket: 'quero-assets/blocks'
        }
      }) : false

    ].filter(Boolean)
  }
};
