"use client"

import Image from "next/image"
import ArrowTopRightIcon from "./components/icons/ArrowTopRightIcon"
import BurgerIcon from "./components/icons/BurgerIcon"
import GithubIcon from "./components/icons/GithubIcon"

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
				'Bachelor thesis: "Barrieren zur Teilnahmean der Sharing Economy" (1,7)',
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
					<div className="relative mt-8" key={project.name + i}>
						<div className=" h-72 w-72 items-start justify-center overflow-hidden rounded-lg">
							<div className="absolute inset-0  rounded-lg bg-black opacity-70 blur-md"></div>
							<div
								className={`${project.tailwindImageTag} relative inset-0 flex h-full w-full items-start justify-between rounded-md bg-cover px-3 pt-2 text-left`}
							>
								<span className="text-xl ">{project.name}</span>
								<ArrowTopRightIcon url={project.projectURL} />
								<GithubIcon url={project.githubURL} />
							</div>
						</div>
					</div>
				))}
			</section>
			<section className="mb-12 mt-20 flex flex-col items-center">
				<div className="text-3xl underline">Education</div>
				<div className="mt-8 grid w-full grid-cols-5 justify-items-center">
					{education.map((item) => (
						<>
							<div className="col-span-1 col-start-2 w-full bg-red-500">
								{item.period}
							</div>
							<div className="col-span-2 w-full bg-green-500">
								{item.period}
							</div>
						</>
					))}
				</div>
			</section>
		</div>
	)
}
