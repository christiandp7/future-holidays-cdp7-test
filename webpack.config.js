const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJsPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

const dest = '/theme/assets'

module.exports = {
	output: {
		path: __dirname + dest,
	},
	optimization: {
		minimizer: [new TerserJsPlugin(), new OptimizeCssAssetsPlugin()],
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
						},
					},
					'postcss-loader',
				],
			},
		],
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/assets'),
					to: __dirname + dest + '/[name][ext]',
				},
			],
		}),
		new MiniCssExtractPlugin({
			filename: 'styles.css',
		}),
	],
	// stats: 'summary',
}
