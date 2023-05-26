import { motion } from "framer-motion"
import Link from "next/link"
import { FC } from "react"
import Image from "next/image"
import ArrowTopRightIcon from "../icons/ArrowTopRightIcon"
import GithubIcon from "../icons/GithubIcon"
import { HOSTNAME_CDN, cardVariants, projects } from "@/utils/values"

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
						className="mx-3 mt-8 flex max-w-md flex-col items-center overflow-hidden rounded-lg shadow-lg shadow-black"
					>
						<Link
							className="mt-3 text-center text-2xl font-bold hover:text-gray-500 hover:opacity-30"
							href={project.projectURL}
							target="_blank"
						>
							{project.name}

							<div className="p-2">
								<Image
									src="/mockup-carrental-macbook.jpg"
									width={400}
									height={400}
									alt="mockup"
								/>
							</div>
						</Link>
						<p className="px-5 py-2 text-justify text-gray-400">
							{project.description}
						</p>
						<div className="flex w-full justify-between gap-5 px-5 ">
							<Link
								href={project.projectURL}
								target="_blank"
								className="group mb-3 flex h-8 w-1/2 items-center justify-center gap-2 rounded-md bg-gray-500 px-4 shadow-md shadow-black hover:bg-gray-900"
							>
								<p>Visit Page</p>
								<ArrowTopRightIcon />
							</Link>
							<Link
								href={project.githubURL}
								target="_blank"
								className="mb-3 flex h-8 w-1/2 items-center justify-center gap-2 rounded-md bg-gray-500 px-4  shadow-md shadow-black hover:bg-gray-900"
							>
								<p>Visit Code</p>
								<GithubIcon />
							</Link>
						</div>
					</div>
				))}
			</motion.div>
		</section>
	)
}

export default ProjectSection
