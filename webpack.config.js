const webpack           =	require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const LiveReloadPlugin = require('webpack-livereload-plugin');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const env = process.env.NODE_ENV || "development";
const devMode = env !== "production"
const sourceMap = env === "production" ? "source-map" : "eval";

const plugins = {
	development: [
		new webpack.NoEmitOnErrorsPlugin(),
		new LiveReloadPlugin({
			port: 8888,
		}),
	],
}

module.exports = {
	mode: devMode ? "development" : "production",

	context: __dirname,

	entry: {
		'app': './index.js',
	},
	output: {
		filename: "js/[name].js",
		chunkFilename: 'js/[name].bundle.js',
		path: __dirname + "/public",
	},
	optimization: {
		splitChunks: {
      chunks: "all",
			cacheGroups: {
				vendor: {
					test: /node_modules/,
					name: "vendor",
					chunks: "initial",
					enforce: true
				}
			}
		}
	},

  devServer: {
    inline: true,
    historyApiFallback: {
      index: '/'
    },
  },

	watch: env === "development",

	watchOptions: {
		aggregateTimeout: 100
	},

	devtool: sourceMap,

	plugins: plugins[env],

	resolveLoader: {
		modules: ['node_modules'],
		extensions: ['.js', '.json']
	},

	module: {
		rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ["transform-decorators-legacy", "syntax-dynamic-import"],
          presets: [ 'react', [  'es2015'  ],  'stage-0',  ]
        }
      },
      {
				test: /\.scss$/,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader'
					},
					{
						loader: 'resolve-url-loader'
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						}
					}
				]
      },

			{
        test: /\.(woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader?name=../fonts/[name].[ext]'
      },

			{
				test: /\.css$/,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader' ,
					{
						loader: 'resolve-url-loader',
						options: {
							sourceMap: true,
						}
					},
				]
			},

		]
	}

}
