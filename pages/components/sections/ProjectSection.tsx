import { motion } from "framer-motion"
import Link from "next/link"
import { FC } from "react"
import Image from "next/image"
import ArrowTopRightIcon from "../icons/ArrowTopRightIcon"
import GithubIcon from "../icons/GithubIcon"
import { HOSTNAME_CDN, cardVariants, projects } from "@/pages/utils/constants"

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
						className="mt-8 overflow-hidden rounded-lg shadow-lg shadow-black"
					>
						<div className="aspect-square ">
							<Image
								src={HOSTNAME_CDN + project.imageURL}
								alt={"image " + project.name}
								width={300}
								height={300}
								className="rounded-lg"
							/>
						</div>
						<Link
							className="text-center text-2xl font-bold hover:text-gray-400"
							href={project.pageURL}
						>
							{project.name}
						</Link>
						{/* <ArrowTopRightIcon url={project.projectURL} />
							<GithubIcon url={project.githubURL} /> */}
					</div>
				))}
			</motion.div>
		</section>
	)
}

export default ProjectSection
