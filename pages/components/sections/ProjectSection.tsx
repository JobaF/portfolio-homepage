import { motion } from "framer-motion"
import Link from "next/link"
import { FC } from "react"
import ArrowTopRightIcon from "../icons/ArrowTopRightIcon"
import GithubIcon from "../icons/GithubIcon"
import { cardVariants, projects } from "@/pages/utils/constants"

interface ProjectSectionProps {}

const ProjectSection: FC<ProjectSectionProps> = ({}) => {
	return (
		<section className="mb-12 mt-20 flex flex-col items-center" id="projects">
			<h1 className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-center text-4xl font-bold text-transparent">
				My Projects
			</h1>
			<motion.div
				variants={cardVariants}
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true }}
			>
				{projects.map((project, i) => (
					<div
						key={project.name + i}
						className="mt-8 h-72 w-72 items-start justify-center overflow-hidden rounded-lg shadow-lg shadow-black"
					>
						<div
							className={`${project.tailwindImageTag} relative inset-0 flex h-full w-full items-start justify-between rounded-md bg-contain px-3 pt-2 text-left`}
						>
							<Link className="text-xl hover:text-black" href={project.pageURL}>
								{project.name}
							</Link>
							<ArrowTopRightIcon url={project.projectURL} />
							<GithubIcon url={project.githubURL} />
						</div>
					</div>
				))}
			</motion.div>
		</section>
	)
}

export default ProjectSection
