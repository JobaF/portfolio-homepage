import { Variants } from "framer-motion"
import { Education, Project, Work } from "./types"

export const HOSTNAME_CDN = "https://d13m1rqoos03v0.cloudfront.net"
export const cardVariants: Variants = {
	offscreen: {
		y: 50,
		opacity: 0,
	},
	onscreen: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 0.3,
			duration: 0.5,
		},
	},
}

export const projects: Project[] = [
	{
		name: "Car Rental Website",
		projectURL: "https://carrental.jabofecht.com/",
		githubURL: "https://github.com/JobaF/car-rental",
		pageURL: "/projects/carrental",
		imageURL: "/carrental.jpg",
		description:
			"Responsive car rental demo website, where I showcase how a car rental could design their homepage. I designed it to be responsive and show features, FAQs, the team and much more. ",
		developmentItems: [
			"ReactJS",
			"NextJS",
			"TailwindCSS",
			"S3 + Cloudfront",
			"TypeScript",
		],
	},
	{
		name: "Dictionary App",
		projectURL: "https://dictionary.jabofecht.com/dictionary/keyboard",
		githubURL: "https://github.com/JobaF/dictionary-app",
		pageURL: "/projects/dictionary",
		imageURL: "/dictionary_squooshed.jpg",
		description:
			"Dynamic dictionary app where you can query every word of the dictionary fully type-safe with the help of zod. It is also possible to hear the pronunciation of the word, switch to dark mode and change the font family.",
		developmentItems: [
			"ReactJS",
			"NextJS",
			"TailwindCSS",
			"DictionaryAPI",
			"React Query",
			"TypeScript",
			"zod",
			"use-sound",
			"nextjs-progressbar",
		],
	},
	{
		name: "Pomodoro App",
		projectURL: "https://pomodoro.jabofecht.com",
		githubURL: "https://github.com/JobaF/pomodoro-app",
		pageURL: "/projects/pomodoro",
		imageURL: "/pomodoro_squooshed.jpg",
		description:
			"Customizable Pomodoro Timer: Take charge of your work sessions with a versatile Pomodoro timer. Tailor your pomodoro, short break, and long break durations according to your needs. Personalize the timer's font and color to create a visually pleasing experience.",
		developmentItems: ["ReactJS", "TailwindCSS", "Jotai", "TypeScript"],
	},
	{
		name: "Apple-style Calculator",
		projectURL: "https://jobaf.github.io/odin-calculator/",
		githubURL: "https://github.com/JobaF/odin-calculator",
		pageURL: "/projects/applecalculator",
		imageURL: "/applecalculator_squooshed.jpg",
		description:
			"Simple calculator app made in vanilla javascript which resembles the MacOS built-in calculator. ",
		developmentItems: ["VanillaJS", "Plain CSS"],
	},
]

export const education: Education[] = [
	{
		institution: "Universität zu Köln",
		degree: "Master of Science",
		infos: [
			'Master thesis: "The Impact of Responsiveness on Participant Attraction in Open Source Software" (1,7)',
			"Grade: 1,7",
		],
		period: "2019 - 2023",
	},
	{
		institution: "Universität zu Köln",
		degree: "Bachelor of Science",
		infos: [
			'Bachelor thesis: "Barrieren zur Teilnahme an der Sharing Economy" (1,7)',
			"Grade: 2,3",
		],
		period: "2014 - 2018",
	},
	{
		institution: "Ratsgymnasium Minden",
		degree: "Abitur",
		infos: ["Advanced courses: Math, computer science", "Grade: 2,3"],
		period: "2006 - 2014",
	},
]

export const workExperience: Work[] = [
	{
		institution: "ArmedAngels",
		position: "Working student",
		infos: [
			"Automation of data imports",
			"Support in monthly/annual closing",
			"Support in accounts receivable",
			"Posting of marketplaces in ERP",
		],
		period: "2019",
	},
]
