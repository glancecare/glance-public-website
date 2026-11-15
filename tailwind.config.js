/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts,md}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-pattern': "url('/src/lib/images/g1.svg')"
			}
		},
		container: {
			screens: {
				xl: '80rem',
				'2xl': '80rem'
			}
		}
	},
	plugins: []
};
