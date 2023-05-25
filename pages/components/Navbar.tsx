import { FC, RefObject, useState } from "react"
import BurgerIcon from "./icons/BurgerIcon"
import Link from "next/link"

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
			<nav className="z-30 flex h-14 items-center justify-between bg-gray-800 px-8 text-white">
				<Link
					href="/"
					onClick={() => {
						if (isMenuOpen) setIsMenuOpen(false)
					}}
					className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border p-1 text-lg hover:bg-gray-700"
				>
					JF
				</Link>
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
