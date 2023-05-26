import { cardVariants, workExperience } from "@/utils/values"
import { motion } from "framer-motion"
import { FC } from "react"

interface WorkExperienceSectionProps {}

const WorkExperienceSection: FC<WorkExperienceSectionProps> = ({}) => {
	return (
		<section className="mb-10 mt-10 flex flex-col items-center" id="experience">
			<h1 className="mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-center text-4xl font-bold text-transparent">
				Work Experience
			</h1>
			{workExperience.map((item, i) => (
				<motion.div
					variants={cardVariants}
					key={item.position + i}
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true }}
				>
					<div className="mt-4 flex w-80 flex-col rounded-lg bg-gray-900 p-6 text-justify shadow-md shadow-black">
						<div className="text-xl">{item.position}</div>
						<div className="text-sm text-gray-400">{item.institution}</div>
						<div className="text-sm text-gray-400">{item.period}</div>
						<ul className="flex list-disc flex-col gap-1 pl-3 pt-2 text-sm">
							{item.infos.map((info, i) => (
								<li key={item.institution + i}>{info}</li>
							))}
						</ul>
					</div>
				</motion.div>
			))}
		</section>
	)
}

export default WorkExperienceSection
