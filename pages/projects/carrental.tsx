import Image from "next/image"
import { FC, useState } from "react"
import DesktopIcon from "../components/icons/DesktopIcon"
import MobileIcon from "../components/icons/MobileIcon"

interface CarRentalProps {}

const CarRental: FC<CarRentalProps> = ({}) => {
	const [mobileActive, setMobileActive] = useState(true)

	return (
		<div className="min-h-screen">
			<div className="mx-auto mt-4 flex flex-col items-center">
				<div className="flex h-14 w-full justify-center gap-1 ">
					<button onClick={() => setMobileActive(false)}>
						<DesktopIcon active={!mobileActive} />
					</button>
					<button onClick={() => setMobileActive(true)}>
						<MobileIcon active={mobileActive} />
					</button>
				</div>
				{mobileActive ? (
					<div className="mx-2 max-h-[50vh] overflow-hidden">
						<Image
							src={"/mockup_carrental_mobile.jpg"}
							alt="screenshot of car rental website"
							width={1000}
							height={1000}
							className="h-96 w-48"
						/>
					</div>
				) : (
					<div className="mx-2 max-w-lg">
						<Image
							src={"/mockup_carrental_macbook.jpg"}
							alt="mockup car rental macbook"
							width={500}
							height={500}
							className="object-contain"
						/>
					</div>
				)}
				<h1 className="mt-4 text-4xl font-bold">Car Rental</h1>
				<p></p>
			</div>
		</div>
	)
}

export default CarRental
