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
		<section className="mx-auto mb-12 mt-20" id="projects">
			<div className="flex max-w-6xl flex-col items-center">
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
							className="mt-12 grid grid-cols-2 overflow-hidden rounded-lg border px-5 shadow-md shadow-black"
						>
							<div className="flex justify-center p-5">
								<Image
									src={HOSTNAME_CDN + project.imageURL}
									width={600}
									height={600}
									alt={"mockup " + project.name}
								/>
							</div>
							<div className="pl-9 pt-7">
								<h1 className="text-4xl">{project.name}</h1>
								<p className="mb-3 mt-4 max-w-md py-2 text-justify text-lg text-gray-400">
									{project.description}
								</p>
							</div>
							<div className="m-5 flex justify-center gap-5">
								<Link
									href={project.projectURL}
									target="_blank"
									className="mb-3 flex h-8 w-36 items-center justify-center gap-2 rounded-md bg-gray-500 px-4  shadow-md shadow-black hover:border hover:border-white hover:bg-gray-900"
								>
									<p>Demo</p>
									<ArrowTopRightIcon />
								</Link>
								<Link
									href={project.githubURL}
									target="_blank"
									className="mb-3 flex h-8 w-36 items-center justify-center gap-2 rounded-md bg-gray-500 px-4  shadow-md shadow-black hover:border hover:border-white hover:bg-gray-900"
								>
									<p>Code</p>
									<GithubIcon />
								</Link>
							</div>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	)
}

export default ProjectSection
