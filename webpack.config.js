const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');




let serverConfig =  {

  entry: './src/server.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname + '/server-build/' ),
    filename: 'server.js'
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env','@babel/preset-react']
            }
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders : 1,
              onlyLocals : true,
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]",
              },
            }
          }
        ],
        include: /\.module\.css$/
      },
      {
        test: /\.(css|scss)$/,
        use: [
          { 
            loader : 'css-loader',
            options : {
              importLoaders : 1,
              onlyLocals : true 
            }
          }
        ],
        exclude: /\.module\.css$/
      }
    ]
  }
};

let clientConfig = {
  entry: {
    vendor : ['react'],
    app : './src/client.js'
  },
  plugins : [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  output : {
    filename : '[name].bundle.js',
    path : path.resolve(__dirname + "/dist/")
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env','@babel/preset-react']
            }
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader :  MiniCssExtractPlugin.loader,
            options : {
                publicPath : path.resolve(__dirname , '/dist/')
            }
          },
          {
            loader: 'css-loader',
            options: {
              // importLoaders: 1,
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]",
              },
            }
          }
        ],
        include: /\.module\.css$/
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader :  MiniCssExtractPlugin.loader,
            options : {
                publicPath : path.resolve(__dirname , '/dist/')
            }
          },
          'css-loader'
        ],
        exclude: /\.module\.css$/
      }
    ]
  }
};

module.exports = [ serverConfig,clientConfig]