"use client"
import ArrowTopRightIcon from "./components/icons/ArrowTopRightIcon"
import BurgerIcon from "./components/icons/BurgerIcon"
import GithubIcon from "./components/icons/GithubIcon"

export default function Home() {
	return (
		<div className="flex flex-col bg-gray-900 font-crimson text-white">
			<nav className="z-10 flex h-14 items-center justify-between bg-gray-800 px-8">
				<p className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border bg-gray-700 p-1 text-lg ">
					JF
				</p>{" "}
				<BurgerIcon />
			</nav>
			<section>
				<div className="mt-14 flex flex-col items-center justify-center">
					<div className="absolute z-0 aspect-square h-72 rounded-full bg-gradient-to-r from-sky-600 to-indigo-600 opacity-60 blur-xl"></div>
					<img
						src="/portraitlogo.png"
						alt="Portrait of Developer"
						className="z-10 aspect-square h-60"
					/>
				</div>
				<div className="text-center">
					<h3 className="mt-12 text-4xl">
						Hey, <br />
						I&apos;m Jabo Fecht
					</h3>
					<p className="mt-2 text-gray-400">Frontend Developer</p>
					<p className="text-gray-400">M. Sc. Information Systems</p>
					<button className="mt-4 h-12 w-32 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 drop-shadow-xl hover:bg-gradient-to-r hover:from-sky-800 hover:to-indigo-800">
						Download CV
					</button>
				</div>
			</section>
			<section className="mb-12 mt-14 flex flex-col items-center">
				<div className="text-3xl underline">My Projects</div>
				<div className="relative mt-8">
					<div className=" h-72 w-72 items-start justify-center overflow-hidden rounded-lg">
						<div className="absolute inset-0  rounded-lg bg-orange-600 opacity-70 blur-md"></div>
						<div className="relative inset-0 flex h-full w-full items-start justify-between rounded-md bg-pomodoro bg-cover px-3 pt-2 text-left">
							<span className="text-xl ">Pomodoro app</span>
							<ArrowTopRightIcon url={"https://pomodoro.jabofecht.com"} />
							<GithubIcon url={"https://github.com/JobaF/pomodoro-app"} />
						</div>
					</div>
				</div>
				<div className="relative mt-8">
					<div className=" h-72 w-72 items-start justify-center overflow-hidden rounded-lg">
						<div className="absolute inset-0  rounded-lg bg-black opacity-70 blur-md"></div>
						<div className="relative inset-0 flex h-full w-full items-start justify-between rounded-md bg-dictionary bg-cover px-3 pt-2 text-left">
							<span className="text-xl ">Dictionary app</span>
							<ArrowTopRightIcon
								url={"https://dictionary.jabofecht.com/dictionary/keyboard"}
							/>
							<GithubIcon url={"https://github.com/JobaF/dictionary-app"} />
						</div>
					</div>
				</div>
				<div className="relative mt-8">
					<div className=" h-72 w-72 items-start justify-center overflow-hidden rounded-lg">
						<div className="absolute inset-0  rounded-lg bg-gray-600 opacity-70 blur-md"></div>
						<div className="relative inset-0 flex h-full w-full items-start justify-between rounded-md bg-clock bg-cover px-3 pt-2 text-left">
							<span className="text-xl ">Age calculator</span>
							<ArrowTopRightIcon
								url={"https://datecalculator.jabofecht.com/"}
							/>
							<GithubIcon
								url={"https://github.com/JobaF/frontendmentor-age-calculator"}
							/>
						</div>
					</div>
				</div>
				<div className="relative mt-8">
					<div className=" h-72 w-72 items-start justify-center overflow-hidden rounded-lg">
						<div className="absolute inset-0  rounded-lg bg-gray-600 opacity-70 blur-md"></div>
						<div className="relative inset-0 flex h-full w-full items-start justify-between rounded-md bg-calculator bg-cover px-3 pt-2 text-left">
							<span className="text-xl ">Apple-style calculator</span>
							<ArrowTopRightIcon
								url={"https://applecalculator.jabofecht.com/"}
							/>
							<GithubIcon url={"https://github.com/JobaF/odin-calculator"} />
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
