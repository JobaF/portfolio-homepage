import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Great_Vibes, Inter, PT_Sans } from "next/font/google"
import Navbar from "./components/Navbar"
import Credits from "./components/Credits"
const inter = PT_Sans({ subsets: ["latin"], weight: "400" })

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={inter.className + " bg-gray-900 text-white"}>
			<Navbar />
			<Component {...pageProps} />
			<Credits />
		</main>
	)
}
