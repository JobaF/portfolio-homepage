import { cardVariants, education } from "@/utils/values"
import { motion } from "framer-motion"
import { FC } from "react"

interface EducationSectionProps {}

const EducationSection: FC<EducationSectionProps> = ({}) => {
	return (
		<section className="mt-32" id="education">
			<div className="mx-auto flex max-w-4xl flex-col items-center px-3">
				<h1 className="mb-4 w-fit bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-4xl font-bold text-transparent">
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
							className="mt-4 flex w-96 flex-col rounded-lg bg-gray-900 p-6 shadow-md shadow-black"
						>
							<div className="text-lg md:text-2xl">{item.degree}</div>
							<div className="text-sm text-gray-400 md:text-lg">
								{item.institution}
							</div>
							<div className="text-sm text-gray-400 md:text-lg">
								{item.period}
								np{" "}
							</div>
							<ul className="flex max-w-lg list-disc flex-col gap-1 pl-3 pt-2 text-sm md:text-lg">
								{item.infos.map((info, i) => (
									<li key={item.degree + i}>{info}</li>
								))}
							</ul>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	)
}

export default EducationSection
