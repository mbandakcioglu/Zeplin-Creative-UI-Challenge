/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx,pug}",
	],
	theme: {
		extend: {
			container: {
				center: true,
				screens: {
					xs: "375px",
					sm: "640px",
					md: "768px",
					lg: "1024px",
					xl: "1140px",
					"2xl": "1440px",
				},
				padding: {
					DEFAULT: "1rem",
					sm: "2rem",
					lg: "4rem",
					xl: "0",
				},
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"],
			},
		},
	},
	plugins: [],
};
