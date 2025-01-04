/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#167DB7',
				'accent': '#FE5230',
				'ij-black':'#212121',
				'ij-red': '#FF421C',
				'ij-yellow': '#EFA500',
				'ij-green': '#00A550',
				'ij-blue': '#007AFF',
			},
			backgroundImage: {
				'hero-pattern': 'url(/hero-pattern.webp)',
			},
			borderColor: {
				'4xl': '3rem',
			},
			letterSpacing: {
				'separated': '0.35px',
			}
		},
	},
	plugins: [],
}
