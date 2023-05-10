import { FC } from "react"

interface ArrowTopRightIconProps {
	url: string
	color?: string
	hoverColor?: string
}

const ArrowTopRightIcon: FC<ArrowTopRightIconProps> = ({
	url,
	color = "white",
	hoverColor = "hover:stroke-black",
}) => {
	return (
		<a href={url} target="_blank">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={2}
				stroke={color}
				className={`absolute bottom-2 right-2 h-6 w-6 ${hoverColor}`}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
				/>
			</svg>
		</a>
	)
}

export default ArrowTopRightIcon
