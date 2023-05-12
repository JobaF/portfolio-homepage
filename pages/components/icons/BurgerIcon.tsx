"use client"
import { FC } from "react"

interface BurgerIconProps {
	onClickFunction: () => void
	isMenuOpen: boolean
}

const BurgerIcon: FC<BurgerIconProps> = ({ onClickFunction, isMenuOpen }) => {
	return (
		<div className="" onClick={onClickFunction}>
			{isMenuOpen ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="h-9 w-9 cursor-pointer rounded-md p-0.5 ease-in-out hover:bg-gray-700 sm:hidden"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			) : (
				<svg
					id="hamburger-button"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="white"
					className="p-0.50 h-9 w-9 cursor-pointer rounded-md ease-in-out hover:bg-gray-700 sm:hidden"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			)}
		</div>
	)
}

export default BurgerIcon
