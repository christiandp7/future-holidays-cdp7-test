const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	purge: ['./theme/**/*.liquid'],
	mode: 'jit',
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: '#273E22',
				'primary-accent': '#1B2B17',
				'primary-dark': '#1C2619',
				'primary-text': '#000000',
				muted: '#AEADAB',
				'mjh-white': '#FAF9F6',
				'mjh-cream': '#F5F3EE',
				'mjh-gray': '#E8E6E1',
			},
			fontSize: {
				h1: '60px',
				h2: '45px',
				h3: '20px',
				h4: '15px',
				body: '13px',
				tiny: '11px',
			},
			fontFamily: {
				avenir: ['"Avenir Next"', ...defaultTheme.fontFamily.serif],
			},
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1360px',
			'3xl': '1536px',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/forms')],
}
