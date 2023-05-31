import { cardVariants, workExperience } from "@/utils/values"
import { motion } from "framer-motion"
import { FC } from "react"

interface WorkExperienceSectionProps {}

const WorkExperienceSection: FC<WorkExperienceSectionProps> = ({}) => {
	return (
		<section className="mb-10 mt-10" id="experience">
			<div className="mx-auto flex max-w-4xl flex-col items-center px-3">
				<h1 className="mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-center text-4xl font-bold text-transparent">
					Work Experience
				</h1>
				<motion.div
					variants={cardVariants}
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true }}
				>
					{workExperience.map((item, i) => (
						<div
							key={item.position + i}
							className="mt-4 flex w-96 flex-col rounded-lg bg-gray-900 p-6 text-justify shadow-md shadow-black"
						>
							<div className="text-lg md:text-2xl">{item.position}</div>
							<div className="text-sm text-gray-400 md:text-lg">
								{item.institution}
							</div>
							<div className="text-sm text-gray-400 md:text-lg">
								{item.period}
							</div>
							<ul className="flex list-disc flex-col gap-1 pl-3 pt-2 text-sm md:text-lg">
								{item.infos.map((info, i) => (
									<li key={item.institution + i}>{info}</li>
								))}
							</ul>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	)
}

export default WorkExperienceSection
