"use client"
import BurgerIcon from "./components/icons/BurgerIcon"

export default function Home() {
	return (
		<div className="flex h-screen w-full flex-col bg-gray-900 font-crimson text-white">
			<nav className=" flex h-14 items-center justify-between bg-gray-800 px-8">
				<p className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-gray-700 text-lg text-white">
					JF
				</p>{" "}
				<BurgerIcon />
			</nav>
			<div className="mt-14 flex flex-col items-center justify-center">
				<div className="absolute aspect-square h-64 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 blur-sm"></div>
				<img
					src="/portraitlogo.png"
					alt="Portrait of Developer"
					className="z-10 aspect-square h-60"
				/>
			</div>
			<div className="text-center">
				<h3 className="mt-10 text-4xl">
					Hey, <br />
					I'm Jabo Fecht
				</h3>
				<p className="mt-3 text-gray-400">Frontend Developer</p>
				<p className="text-gray-400">M. Sc. Information Systems</p>
			</div>
		</div>
	)
}
