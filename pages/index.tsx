"use client"

import Image from "next/image"
import ArrowTopRightIcon from "./components/icons/ArrowTopRightIcon"
import BurgerIcon from "./components/icons/BurgerIcon"
import GithubIcon from "./components/icons/GithubIcon"
import Credits from "./components/Credits"

type Project = {
	name: string
	projectURL: string
	githubURL: string
	tailwindImageTag: string
}
type Education = {
	institution: string
	degree: string
	infos: string[]
	period: string
}
type Work = {
	institution: string
	position: string
	infos: string[]
	period: string
}

export default function Home() {
	const projects: Project[] = [
		{
			name: "Pomodoro app",
			projectURL: "https://pomodoro.jabofecht.com",
			githubURL: "https://github.com/JobaF/pomodoro-app",
			tailwindImageTag: "bg-pomodoro",
		},
		{
			name: "Dictionary app",
			projectURL: "https://dictionary.jabofecht.com/dictionary/keyboard",
			githubURL: "https://github.com/JobaF/dictionary-app",
			tailwindImageTag: "bg-dictionary",
		},
		{
			name: "Age calculator",
			projectURL: "https://datecalculator.jabofecht.com/",
			githubURL: "https://github.com/JobaF/frontendmentor-age-calculator",
			tailwindImageTag: "bg-clock",
		},
		{
			name: "Apple-style calculator",
			projectURL: "https://jobaf.github.io/odin-calculator/",
			githubURL: "https://github.com/JobaF/odin-calculator",
			tailwindImageTag: "bg-calculator",
		},
	]

	const education: Education[] = [
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

	const workExperience: Work[] = [
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

	return (
		<div className="flex flex-col bg-gray-900 font-crimson text-white">
			<nav className="z-10 flex h-14 items-center justify-between bg-gray-800 px-8">
				<p className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border bg-gray-700 p-1 text-lg ">
					JF
				</p>
				<BurgerIcon />
			</nav>
			<section>
				<div className="mt-14 flex flex-col items-center justify-center">
					<div className="absolute z-0 aspect-square h-72 rounded-full bg-gradient-to-r from-sky-600 to-indigo-600 opacity-60 blur-xl"></div>
					<div className="relative z-10 aspect-square h-60">
						<Image
							src={"/portraitlogo.png"}
							alt="Avatar"
							fill={true}
							loading="eager"
						/>
					</div>
				</div>
				<div className="text-center">
					<h3 className="mt-12 text-4xl">
						Hey, <br />
						I&apos;m Jabo Fecht
					</h3>
					<p className="mt-2 text-gray-400">Frontend Developer</p>
					<p className="text-gray-400">M. Sc. Information Systems</p>
					<a
						href="mailto:hi@jabofecht.com"
						className="mt-4 flex items-center justify-center"
					>
						<div className="flex h-12 w-32 items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 drop-shadow-xl hover:bg-gradient-to-r hover:from-sky-800 hover:to-indigo-800 hover:shadow-inner hover:shadow-black">
							Contact me
						</div>
					</a>
				</div>
			</section>

			<section className="mb-12 mt-20 flex flex-col items-center">
				<div className="text-3xl underline">My Projects</div>
				{projects.map((project, i) => (
					<div
						key={project.name + i}
						className="mt-8 h-72 w-72 items-start justify-center overflow-hidden rounded-lg shadow-lg shadow-black"
					>
						<div
							className={`${project.tailwindImageTag} relative inset-0 flex h-full w-full items-start justify-between rounded-md bg-cover px-3 pt-2 text-left`}
						>
							<span className="text-xl ">{project.name}</span>
							<ArrowTopRightIcon url={project.projectURL} />
							<GithubIcon url={project.githubURL} />
						</div>
					</div>
				))}
			</section>
			<section className="mb-10 mt-10 flex flex-col items-center">
				<div className="mb-4 text-center text-3xl underline">Education</div>
				{education.map((item, i) => (
					<div
						key={i}
						className="mt-4 flex w-72 flex-col rounded-lg bg-gray-800 p-6 shadow-md shadow-black"
					>
						<div className="text-lg">{item.degree}</div>
						<div className="text-sm text-gray-400">{item.institution}</div>
						<div className="text-sm text-gray-400">{item.period}</div>
						<ul className="flex list-disc flex-col gap-1 pl-3 pt-2 text-sm">
							{item.infos.map((info, i) => (
								<li key={item.degree + i}>{info}</li>
							))}
						</ul>
					</div>
				))}
			</section>
			<section className="mb-10 mt-10 flex flex-col items-center">
				<div className="mb-4 text-center text-3xl underline">
					Work Experience
				</div>
				{workExperience.map((item, i) => (
					<div
						key={i}
						className="mt-4 flex w-72 flex-col rounded-lg bg-gray-800 p-6 shadow-md shadow-black"
					>
						<div className="text-xl">{item.position}</div>
						<div className="text-sm text-gray-400">{item.institution}</div>
						<div className="text-sm text-gray-400">{item.period}</div>
						<ul className="flex list-disc flex-col gap-1 pl-3 pt-2 text-sm">
							{item.infos.map((info, i) => (
								<li key={item.institution + i}>{info}</li>
							))}
						</ul>
					</div>
				))}
			</section>
			<Credits />
		</div>
	)
}
