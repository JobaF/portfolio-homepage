const defaultTheme = require("tailwindcss/defaultTheme")
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		//If you're using the src/ directory
		"./src/**/*.{js,ts,jsx,tsx}",

		//If you're using the default paths:
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				crimson: ["Sora", ...defaultTheme.fontFamily.sans],
			},
			backgroundImage: {
				pomodoro: "url(/pomodoro.jpg)",
				dictionary: "url(/dictionary.jpg)",
				clock: "url(/clock.jpg)",
				calculator: "url(/calculator.jpg)",
				carRental: "url(/carRental.png)",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0", transform: "translate(0px,50px)" },
					"100%": { opacity: "1" },
				},
			},
			animation: {
				fade1: "fadeIn 1s ease-in-out",
			},
		},
	},
	plugins: [],
}
