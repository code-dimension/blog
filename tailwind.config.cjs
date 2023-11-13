/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
	theme: {
		extend: {
			colors: {
				white: '#f8f9fa',
				primary: '#6657ec'
			},
			fontFamily: {
				body: ['Manrope', ...defaultTheme.fontFamily.sans]
			},
			gridTemplateColumns: {
				list: 'repeat(auto-fill, minmax(400px, max-content))'
			},
			typography: {
				DEFAULT: {
					css: {
						// remove the quotes ("")
						blockquote: {
							'p:before, p:after': {
								content: 'none'
							}
						}
					}
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
}
