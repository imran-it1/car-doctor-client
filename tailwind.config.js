/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamilyL: {
				poppins: "'Poppins', sans-serif",
			},
		},
	},
	plugins: [require("daisyui"), require("@tailwindcss/forms")],
};
