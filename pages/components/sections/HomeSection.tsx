import { FC } from "react"
import Image from "next/image"
interface HomeSectionProps {}

const HomeSection: FC<HomeSectionProps> = ({}) => {
	return (
		<section id="home" className="flex flex-col">
			{/* Avatar with effect */}
			<div className="mt-14 flex animate-fade1 flex-col items-center justify-center">
				<div className="absolute aspect-square h-72 rounded-full bg-gradient-to-r from-sky-600 to-indigo-600 opacity-60 blur-xl"></div>
				<div className="relative aspect-square h-60">
					<Image
						src={"https://d13m1rqoos03v0.cloudfront.net/portraitlogo.png"}
						alt="Avatar"
						fill={true}
						loading="eager"
					/>
				</div>
			</div>
			<div className="flex animate-fade1 flex-col items-center text-center">
				<h3 className="mt-12 text-4xl lg:text-5xl">
					Hi, <br />
					I&apos;m{" "}
					<span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text font-bold text-transparent">
						Jabo Fecht
					</span>
				</h3>

				<p className="p-4 text-gray-300 lg:text-xl">
					Awesome{" "}
					<span className="border-b-[3px] border-dotted border-b-purple-500 border-opacity-50">
						react developer
					</span>{" "}
					in the making - <br /> headed out on the road to mastery!
				</p>
				<a
					href="mailto:hi@jabofecht.com"
					className="mt-4 flex h-12 w-32 items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 p-2 drop-shadow-xl hover:bg-gradient-to-r hover:from-sky-800 hover:to-indigo-800 hover:shadow-inner hover:shadow-black lg:text-xl"
				>
					Contact me
				</a>
			</div>
		</section>
	)
}

export default HomeSection
