import { FC } from "react"
import { GoMarkGithub } from "react-icons/go"

interface GithubIconProps {
	url: string
	color?: string
	hoverColor?: string
}

const GithubIcon: FC<GithubIconProps> = ({ url }) => {
	return (
		<a href={url} target="_blank">
			<GoMarkGithub className="h-6 w-6 rounded-full hover:fill-black" />
		</a>
	)
}

export default GithubIcon
