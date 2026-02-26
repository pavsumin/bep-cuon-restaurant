import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				brandGreen: '#0E2E1C',
				brandGold: '#D4AF37',
				brandLightGold: '#F2D47A',
				brandBrown: '#5A3A1A',
			},
			backgroundImage: {
				heroGradient:
					'linear-gradient(to bottom, rgba(14,46,28,0.75), rgba(14,46,28,0.95))',
			},
		},
	},
	plugins: [],
}

export default config
