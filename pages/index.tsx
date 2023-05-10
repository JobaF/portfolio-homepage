"use client"
import ArrowTopRight from "./components/icons/ArrowTopRight"
import BurgerIcon from "./components/icons/BurgerIcon"

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
						I'm Jabo Fecht
					</h3>
					<p className="mt-3 text-gray-400">Frontend Developer</p>
					<p className="text-gray-400">M. Sc. Information Systems</p>
					<button className="mt-4 h-12 w-32 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 drop-shadow-xl hover:bg-gradient-to-r hover:from-sky-800 hover:to-indigo-800">
						Download CV
					</button>
				</div>
			</section>
			<section className="mt-14 flex h-screen flex-col items-center">
				<div className="text-3xl underline">My Projects</div>
				<div className="relative mt-8">
					<div className=" h-72 w-72 items-start justify-center overflow-hidden rounded-lg">
						<div className="absolute inset-0  rounded-lg bg-orange-600 opacity-50 blur-md"></div>
						<div className="relative inset-0 flex h-full w-full items-start justify-between rounded-md bg-pomodoro_timer bg-cover px-3 pt-2 text-left">
							<span className="relative text-xl ">Pomodoro App </span>
							<ArrowTopRight />
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
