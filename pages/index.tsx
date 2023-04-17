import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-300 font-serif">
      <nav className="h-14 flex justify-around items-center bg-gray-800">
        <Link href="#hero-section" scroll={false}>
          Home
        </Link>
        <Link href="#project-section">Projects</Link>
        <Link href="#about-section">About</Link>
      </nav>
      <section id="hero-section" className="px-5 pt-5 text-left bg-gray-700">
        <div className="h-3/4 flex flex-col items-center justify-center">
          <p className="text-3xl mt-2">Hello,</p>
          <p className="text-3xl">
            I'm <span className="italic underline ">Jabo Fecht</span>
          </p>
          <p className="text-xl mt-2 text-gray-800">
            Fullstack Developer & <br /> Master of Information Systems
          </p>
        </div>
        <img
          className="w-50 mt-5 drop-shadow-2xl"
          src="/portraitlogo.png"
          alt="profile-picture"
        />
      </section>

      <section
        className="pt-5 px-5 pb-10 bg-gray-600 w-full flex flex-col items-center"
        id="project-section"
      >
        <p className="text-3xl text-center">Recent Work</p>
        <p className="text-l text-center">
          Here are a few past projects I've worked on.
        </p>

        <div className="mb-5 mt-5 w-2/3 aspect-square bg-red-600">
          Project 1
        </div>
        <div className="mb-5 w-2/3 aspect-square bg-red-700">Project 2</div>
        <div className="mb-5 w-2/3 aspect-square bg-red-800">Project 3</div>
        <div className="mb-5 w-2/3 aspect-square bg-red-900">Project 4</div>
      </section>
    </div>
  )
}

export const BurgerIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  )
}
