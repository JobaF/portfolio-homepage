import { FC } from "react"
import { GoMarkGithub } from "react-icons/go"

interface GithubIconProps {
	url: string
	color?: string
	hoverColor?: string
}

export const GithubIcon: FC<GithubIconProps> = ({
	url,
	color = "white",
	hoverColor = "hover:stroke-black",
}) => {
	return (
		<a href={url} target="_blank" className="">
			<GoMarkGithub className="absolute bottom-2 right-10 h-6 w-6 rounded-full hover:fill-black" />
		</a>
	)
}
