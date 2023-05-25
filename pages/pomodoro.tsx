import { FC } from "react"
import Navbar from "./components/Navbar"
import Credits from "./components/Credits"

interface pomodoroProps {}

const pomodoro: FC<pomodoroProps> = ({}) => {
	return (
		<>
			<Navbar />
			<Credits />
		</>
	)
}

export default pomodoro
