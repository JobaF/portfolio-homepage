import HomeSection from "./components/sections/HomeSection"
import AboutMeSection from "./components/sections/AboutMeSection"
import ProjectSection from "./components/sections/ProjectSection"
import EducationSection from "./components/sections/EducationSection"
import WorkExperienceSection from "./components/sections/WorkExperienceSection"
import Head from "next/head"

export default function Home() {
	return (
		<div className="flex flex-col overflow-hidden bg-gray-900 text-white">
			<Head>
				<title>Jabo Fecht</title>
			</Head>
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
