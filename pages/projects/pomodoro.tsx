import { FC } from "react"
import Navbar from "../components/Navbar"
import Credits from "../components/Credits"

interface PomodoroProps {}

const Pomodoro: FC<PomodoroProps> = ({}) => {
	return (
		<>
			<div className="relative mx-auto h-[600px] w-[300px] rounded-[2.5rem] border-[14px] border-gray-800 bg-gray-800 dark:border-gray-800">
				<div className="absolute -left-[17px] top-[72px] h-[32px] w-[3px] rounded-l-lg bg-gray-800 dark:bg-gray-800"></div>
				<div className="absolute -left-[17px] top-[124px] h-[46px] w-[3px] rounded-l-lg bg-gray-800 dark:bg-gray-800"></div>
				<div className="absolute -left-[17px] top-[178px] h-[46px] w-[3px] rounded-l-lg bg-gray-800 dark:bg-gray-800"></div>
				<div className="absolute -right-[17px] top-[142px] h-[64px] w-[3px] rounded-r-lg bg-gray-800 dark:bg-gray-800"></div>
				<div className="h-[572px] w-[272px] overflow-hidden rounded-[2rem] bg-white dark:bg-gray-800">
					<img
						src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png"
						className="h-[572px] w-[272px] dark:hidden"
						alt=""
					/>
					<img
						src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
						className="hidden h-[572px] w-[272px] dark:block"
						alt=""
					/>
				</div>
			</div>
		</>
	)
}

export default Pomodoro
