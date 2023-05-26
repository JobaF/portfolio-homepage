import { FC } from "react"
import { GoMarkGithub } from "react-icons/go"

interface GithubIconProps {}

const GithubIcon: FC<GithubIconProps> = () => {
	return <GoMarkGithub className="h-6 w-6 rounded-full hover:fill-black" />
}

export default GithubIcon
