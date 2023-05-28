import { FC, useState } from "react"
import BurgerIcon from "./icons/BurgerIcon"
import Link from "next/link"
import { Great_Vibes } from "next/font/google"
const specialFont = Great_Vibes({ subsets: ["latin"], weight: "400" })

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
	const menuPoints = [
		{ text: "Home", link: "/" },
		{ text: "About me", link: "/#aboutme" },
		{ text: "Projects", link: "/#projects" },
		{ text: "Education", link: "/#education" },
		{ text: "Work experience", link: "/#experience" },
	]
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

	return (
		<>
			<nav className="z-30 flex h-14 items-center justify-between bg-gray-800 px-8 text-white md:justify-center">
				<Link
					href="/"
					onClick={() => {
						if (isMenuOpen) setIsMenuOpen(false)
					}}
					className={
						"absolute left-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text p-1 text-xl font-bold text-transparent hover:text-gray-400"
					}
				>
					JaboFecht
				</Link>
				<div className="hidden gap-5 text-gray-400 sm:flex">
					{menuPoints.map((menuPoint, i) => (
						<Link
							key={menuPoint.text}
							className="hover:text-gray-700"
							href={menuPoint.link}
						>
							{menuPoint.text}
						</Link>
					))}
				</div>
				<BurgerIcon
					onClickFunction={() => setIsMenuOpen((prev) => !prev)}
					isMenuOpen={isMenuOpen}
				/>

				{isMenuOpen && (
					<>
						<div className="absolute left-0 top-14 z-30 flex w-full  flex-col items-center justify-center gap-7 bg-gray-900 py-10 shadow-md shadow-black">
							{menuPoints.map((menuPoint, i) => (
								<Link
									key={menuPoint.text + i}
									href={menuPoint.link}
									onClick={() => {
										setIsMenuOpen(false)
									}}
									className="w-full cursor-pointer text-center text-xl hover:underline hover:underline-offset-2"
								>
									{menuPoint.text}
								</Link>
							))}
						</div>
					</>
				)}
			</nav>
		</>
	)
}

export default Navbar
