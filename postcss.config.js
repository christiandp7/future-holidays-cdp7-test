module.exports = {
	plugins: [
		'tailwindcss/nesting',
		'tailwindcss',
		[
			'postcss-preset-env',
			{
				autoprefixer: {
					flexbox: 'no-2009',
				},
				stage: 3,
				browsers: 'last 4 versions',
			},
		],
	],
}