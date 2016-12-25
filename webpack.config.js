const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: [
    './js/app.jsx',
    './css/style.css'
  ],

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },

  module: {
	// 	preLoaders: [
	// 		{
	// 			test: /\.jsx?$/,
	// 			loader: 'eslint-loader',
	// 			exclude: /node_modules/
	// 		}
	// 	],
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				},
				include: __dirname,
			},
			{
				test: /\.json$/,
				exclude: /node_modules/,
				loader: 'json-loader',
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
			},
			{
			    test: /\.(png|gif|jpg|cur|pdf)$/,
			    loader: "url-loader"
			}
		]
	},

  plugins: [
    new ExtractTextPlugin('style.css', {
      allChunks: true,
    }),
    new webpack.ProvidePlugin({
      "$": "jquery",
      "jQuery": "jquery",
      "window.jQuery": "jquery",
			"React": "react",
			"ReactDOM": "react-dom"
    })
  ],

  resolve: {
		extensions: ['', '.js', '.jsx', '.json'],
    alias: {
      "jquery": "jquery/src/jquery"
    }
  },

	stats: {
		colors: true,
		reasons: true,
		chunks: false
	}
}