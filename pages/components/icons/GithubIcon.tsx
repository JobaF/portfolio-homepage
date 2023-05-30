import { FC } from "react"
import { GoMarkGithub } from "react-icons/go"

interface GithubIconProps {}

const GithubIcon: FC<GithubIconProps> = () => {
	return <GoMarkGithub className="h-6 w-6 hover:text-indigo-500" />
}

export default GithubIcon
