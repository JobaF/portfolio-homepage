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
		name: "Car rental",
		projectURL: "https://carrental.jabofecht.com/",
		githubURL: "https://github.com/JobaF/car-rental",
		pageURL: "/projects/carrental",
		imageURL: "/mockup_carrental_macbook.jpg",
		description:
			"Responsive demo website that showcases a car rental page including a hero section, car picker, FAQ, team presentation and much more. ",
	},
	{
		name: "Dictionary app",
		projectURL: "https://dictionary.jabofecht.com/dictionary/keyboard",
		githubURL: "https://github.com/JobaF/dictionary-app",
		pageURL: "/projects/dictionary",
		imageURL: "/mockup_dictionary_macbook.jpg",
		description:
			"Mobile ready dictionary app that shows meanings and synonyms for every word of the english language. It is also possible to change between dark and light mode and change the font family.",
	},
	{
		name: "Pomodoro app",
		projectURL: "https://pomodoro.jabofecht.com",
		githubURL: "https://github.com/JobaF/pomodoro-app",
		pageURL: "/projects/pomodoro",
		imageURL: "/mockup_pomodoro_macbook.jpg",
		description:
			"Responsive demo website that showcases a car rental page including a hero section, car picker, FAQ, team presentation and much more. ",
	},
	{
		name: "Age calculator",
		projectURL: "https://datecalculator.jabofecht.com/",
		githubURL: "https://github.com/JobaF/frontendmentor-age-calculator",
		pageURL: "/projects/agecalculator",
		imageURL: "/mockup_agecalculator_macbook.jpg",
		description:
			"Responsive demo website that showcases a car rental page including a hero section, car picker, FAQ, team presentation and much more. ",
	},
	{
		name: "Apple-style calculator",
		projectURL: "https://jobaf.github.io/odin-calculator/",
		githubURL: "https://github.com/JobaF/odin-calculator",
		pageURL: "/projects/applecalculator",
		imageURL: "/mockup_calculator_macbook.jpg",
		description:
			"Responsive demo website that showcases a car rental page including a hero section, car picker, FAQ, team presentation and much more. ",
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
