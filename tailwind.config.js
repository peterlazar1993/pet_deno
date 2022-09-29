/** @type {import('https://esm.sh/tailwindcss@3.1.8').Config} */

module.exports = {
  content: ['./src/**/*.{tsx}'],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'), 
		require('daisyui')
	],
}
