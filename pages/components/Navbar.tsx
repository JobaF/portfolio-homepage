import { FC, RefObject, useState } from "react"
import BurgerIcon from "./icons/BurgerIcon"

interface NavbarProps {
	homeRef?: RefObject<HTMLElement>
	projectRef?: RefObject<HTMLElement>
	educationRef?: RefObject<HTMLElement>
	workExperienceRef?: RefObject<HTMLElement>
	aboutMeRef?: RefObject<HTMLElement>
}

const Navbar: FC<NavbarProps> = ({
	homeRef = null,
	projectRef = null,
	aboutMeRef = null,
	educationRef = null,
	workExperienceRef = null,
}) => {
	const menuPoints = [
		{ text: "Home", ref: homeRef },
		{ text: "About me", ref: aboutMeRef },
		{ text: "Projects", ref: projectRef },
		{ text: "Education", ref: educationRef },
		{ text: "Work experience", ref: workExperienceRef },
	]
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

	return (
		<>
			<nav className="z-30 flex h-14 items-center justify-between bg-gray-800 px-8 text-white">
				<p className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border p-1 text-lg hover:bg-gray-700">
					JF
				</p>
				<BurgerIcon
					onClickFunction={() => setIsMenuOpen((prev) => !prev)}
					isMenuOpen={isMenuOpen}
				/>

				{isMenuOpen && (
					<>
						<div className="absolute left-0 top-14 z-30 flex w-full  flex-col items-center justify-center gap-7 bg-gray-900 py-10 shadow-md shadow-black">
							{menuPoints.map((menuPoint, i) => (
								<div
									key={menuPoint.text + i}
									onClick={() => {
										setIsMenuOpen(false)
										if (menuPoint.ref && menuPoint.ref.current) {
											setTimeout(
												() =>
													menuPoint?.ref?.current!.scrollIntoView({
														behavior: "smooth",
													}),
												200
											)
										}
									}}
									className="w-full cursor-pointer text-center text-xl hover:underline hover:underline-offset-2"
								>
									{menuPoint.text}
								</div>
							))}
						</div>
					</>
				)}
			</nav>
		</>
	)
}

export default Navbar
