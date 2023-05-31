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
		<section className="mx-auto mt-32" id="projects">
			<div className="flex max-w-5xl flex-col items-center">
				<h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-center text-[36px] font-bold text-transparent">
					My Projects
				</h1>
				<motion.div
					variants={cardVariants}
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true }}
					className="mt-5 block md:hidden"
				>
					{projects.map((project, i) => {
						return (
							<div key={project.name + i} className="mb-16 px-3">
								<div
									className="relative overflow-hidden rounded-md border border-black p-4"
									style={{
										backgroundImage: `linear-gradient(
											rgba(0, 0, 0, 0.85), 
											rgba(0, 0, 0, 0.85)
										  ),url(${HOSTNAME_CDN + project.imageURL})`,
										backgroundSize: "cover",
										backgroundBlendMode: "0.5",
									}}
								>
									<p className={` text-indigo-500 `}>Featured project</p>
									<h1 className={`text-2xl font-bold text-gray-300`}>
										<Link
											href={project.projectURL}
											target="_blank"
											className="hover:text-gray-500"
										>
											{project.name}
										</Link>
									</h1>
									<p
										className={`text-md mb-6 mt-6 rounded-lg text-justify text-gray-400`}
									>
										{project.description}
									</p>
									<ul className={`flex flex-wrap gap-2 text-xs text-gray-300`}>
										{project.developmentItems.map((item) => (
											<li
												key={project.name + item}
												className="rounded bg-indigo-500 bg-opacity-50 px-2 py-0.5"
											>
												{item}
											</li>
										))}
									</ul>
									<div className={`mt-6 flex gap-5`}>
										<Link href={project.projectURL} target="_blank">
											<ArrowTopRightIcon />
										</Link>
										<Link href={project.githubURL} target="_blank">
											<GithubIcon />
										</Link>
									</div>
								</div>
							</div>
						)
					})}
				</motion.div>
				<motion.div
					variants={cardVariants}
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true }}
					className="mt-12 hidden md:block"
				>
					{projects.map((project, i) => {
						const even = i % 2 === 0
						return (
							<div
								key={project.name + i}
								className="mb-24 overflow-hidden p-2 "
								style={{
									display: "grid",
									gridTemplateColumns: "repeat(2, 1fr)",
									gridTemplateAreas: `"left right"`,
								}}
							>
								<Link
									href={project.projectURL}
									target="_blank"
									className="flex aspect-video justify-center overflow-hidden rounded-lg bg-indigo-900"
									style={{ gridArea: even ? "left" : "right" }}
								>
									<Image
										className="object-cover opacity-20 transition-opacity ease-in-out hover:opacity-100"
										src={HOSTNAME_CDN + project.imageURL}
										width={600}
										height={600}
										alt={"mockup " + project.name}
									/>
								</Link>
								<div
									className="relative flex flex-col justify-between pr-4 "
									style={{ gridArea: even ? "right" : "left" }}
								>
									<p
										className={`${
											even ? "text-right" : "text-left"
										} text-indigo-500 `}
									>
										Featured project
									</p>
									<h1
										className={`${
											even ? "text-right" : "text-left"
										} text-2xl font-bold text-gray-300 `}
									>
										<Link
											href={project.projectURL}
											target="_blank"
											className="hover:text-gray-500"
										>
											{project.name}
										</Link>
									</h1>
									<p
										className={`${
											even ? "-ml-12" : "-mr-12"
										} text-md mb-3 mt-6 rounded-lg bg-gray-800 px-7 py-4 text-justify text-gray-400`}
									>
										{project.description}
									</p>
									<ul
										className={` ${
											even ? "justify-end" : ""
										} flex flex-wrap gap-2 text-xs text-gray-300`}
									>
										{project.developmentItems.map((item) => (
											<li
												key={project.name + item}
												className="rounded bg-indigo-500 bg-opacity-50 px-2 py-0.5"
											>
												{item}
											</li>
										))}
									</ul>
									<div
										className={`${
											even ? "justify-end" : "justify-start"
										} mt-3 flex gap-5`}
									>
										<Link
											href={project.projectURL}
											target="_blank"
											className="mb-3"
										>
											<ArrowTopRightIcon />
										</Link>
										<Link
											href={project.githubURL}
											target="_blank"
											className="mb-3"
										>
											<GithubIcon />
										</Link>
									</div>
								</div>
							</div>
						)
					})}
				</motion.div>
			</div>
		</section>
	)
}

export default ProjectSection
