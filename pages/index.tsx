import ArrowTopRightIcon from "./components/icons/ArrowTopRightIcon"
import GithubIcon from "./components/icons/GithubIcon"
import { Variants, motion } from "framer-motion"
import Link from "next/link"
import HomeSection from "./components/sections/HomeSection"
import AboutMeSection from "./components/sections/AboutMeSection"
import ProjectSection from "./components/sections/ProjectSection"
import EducationSection from "./components/sections/EducationSection"
import WorkExperienceSection from "./components/sections/WorkExperienceSection"

export default function Home() {
	return (
		<div className="flex flex-col overflow-hidden bg-gray-900 text-white">
			<>
				<HomeSection />
				<AboutMeSection />
				<ProjectSection />
				<EducationSection />
				<WorkExperienceSection />
			</>
		</div>
	)
}
