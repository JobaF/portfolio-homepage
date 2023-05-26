import { cardVariants, education } from "@/pages/utils/constants"
import { motion } from "framer-motion"
import { FC } from "react"

interface EducationSectionProps {}

const EducationSection: FC<EducationSectionProps> = ({}) => {
	return (
		<section className="mb-10 mt-10 flex flex-col items-center" id="education">
			<h1 className="mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-center text-4xl font-bold text-transparent">
				Education
			</h1>
			<motion.div
				variants={cardVariants}
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true }}
			>
				{education.map((item, i) => (
					<div
						key={item.degree + i}
						className="mt-4 flex w-72 flex-col rounded-lg bg-gray-800 p-6 shadow-md shadow-black"
					>
						<div className="text-lg">{item.degree}</div>
						<div className="text-sm text-gray-400">{item.institution}</div>
						<div className="text-sm text-gray-400">{item.period}</div>
						<ul className="flex list-disc flex-col gap-1 pl-3 pt-2 text-sm">
							{item.infos.map((info, i) => (
								<li key={item.degree + i}>{info}</li>
							))}
						</ul>
					</div>
				))}
			</motion.div>
		</section>
	)
}

export default EducationSection
