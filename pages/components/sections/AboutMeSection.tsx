import { motion } from "framer-motion"
import { FC } from "react"
import { cardVariants } from "../../../utils/values"
interface AboutMeSectionProps {}

const AboutMeSection: FC<AboutMeSectionProps> = ({}) => {
	return (
		<section
			className="mt-20 flex flex-col items-center justify-center p-7"
			id="aboutme"
		>
			<div className="max-w-4xl text-justify">
				<h1 className="my-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-center text-4xl font-bold text-transparent">
					About me
				</h1>
				<motion.div
					variants={cardVariants}
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true }}
					className="text-lg lg:text-xl"
				>
					<p className="text-md mt-5 text-gray-400 ">
						Hello! My name is Jabo and I&apos;m an ambitious front-end developer
						who finds joy in bringing ideas to life on the internet. Recently, I
						completed my Masters in Information Systems, which has equipped me
						with a strong foundation in the world of technology.
					</p>
					<p className="text-md mt-2 text-gray-400">
						I&apos;m proficient in a diverse range of tools and languages
						including TypeScript, JavaScript, Tailwind CSS, ReactJS, Next.js,
						CSS, and HTML.
					</p>

					<p className="text-md mt-2 text-gray-400">
						I strive to create visually stunning and seamlessly functional web
						experiences. With a deep passion for clean code and user-centric
						design, I am dedicated to crafting engaging and intuitive interfaces
						that leave a lasting impact. Join me on this exciting journey as we
						transform concepts into captivating digital realities.
					</p>
				</motion.div>
			</div>
		</section>
	)
}

export default AboutMeSection
