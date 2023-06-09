import { FC } from "react"

interface CreditsProps {}

const Credits: FC<CreditsProps> = ({}) => {
	return (
		<div className="bg-gray-900 pb-5 pt-8 text-center text-xs text-gray-500">
			Made with{" "}
			<span role="img" aria-label="sheep">
				❤️
			</span>{" "}
			by Jabo Fecht.
		</div>
	)
}

export default Credits
