const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

const dest = '/theme/assets'

module.exports = {
	output: {
		path: __dirname + dest,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
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
	stats: 'minimal',
}
