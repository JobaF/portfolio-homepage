import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Inter, Open_Sans, PT_Sans } from "next/font/google"
import Navbar from "./components/Navbar"
import Credits from "./components/Credits"
const open_sans = Open_Sans({ subsets: ["latin"], weight: "300" })

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={open_sans.className + " bg-gray-900 text-white"}>
			<Navbar />
			<Component {...pageProps} />
			<Credits />
		</main>
	)
}
