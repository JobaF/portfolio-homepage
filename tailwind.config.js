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
			},
			keyframes: {
				"open-menu": {
					"0%": { transform: "scaleY(0)" },
					"80%": { transform: "scaleY(1.2)" },
					"100%": { transform: "scaleY(1)" },
				},
			},
			animation: {
				"open-menu": "open-menu 0.5s ease-in-out forwards",
			},
		},
	},
	plugins: [],
}
