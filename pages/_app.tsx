import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Inter } from "next/font/google"
import Navbar from "./components/Navbar"
import Credits from "./components/Credits"
const inter = Inter({ subsets: ["latin"] })
export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={inter.className}>
			<Navbar />
			<Component {...pageProps} />
			<Credits />
		</main>
	)
}
