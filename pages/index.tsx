import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-300 font-sans">
      <nav className="h-14 flex justify-around items-center bg-gray-800">
        <Link href="#hero-section" scroll={false}>
          Home
        </Link>
        <Link href="#project-section">Projects</Link>
        <Link href="#about-section">About</Link>
      </nav>
      <section id="hero-section" className="px-5 pt-5 bg-gray-700">
        <div className="h-3/4 text-center">
          <p className="text-3xl mt-2">Hello,</p>
          <p className="text-4xl">
            I'm <span className="italic text-gray-300">Jabo Fecht</span>
          </p>
          <p className="text-xl mt-2 text-gray-900">
            Fullstack Developer & <br /> Master of Science
          </p>
        </div>
        <img
          className="w-50 mt-5 drop-shadow-2xl"
          src="/portraitlogo.png"
          alt="profile-picture"
        />
      </section>

      <section
        className="pt-10 px-5 pb-10 bg-gray-600 w-full flex flex-col items-center"
        id="project-section"
      >
        <p className="text-3xl text-center">Recent Work</p>
        <p className="text-l text-center">
          Here are a few past projects I've worked on.
        </p>

        <div className="rounded-lg mb-5 mt-5 w-2/3 shadow-xl border border-solid border-neutral-800 overflow-hidden">
          <img
            src="coffee.png"
            alt="Coffee Shop Project"
            className="object-cover"
          />
          <p className="text-2xl text-gray-900 text-center">Coffee Shop</p>
        </div>
        <div className="rounded-lg mb-5 mt-5 w-2/3 shadow-xl border border-solid border-neutral-800 overflow-hidden">
          <img
            src="coffee.png"
            alt="Coffee Shop Project"
            className="object-cover"
          />
          <p className="text-2xl text-gray-900 text-center">
            Data Science Master Thesis
          </p>
        </div>
        <div className="rounded-lg mb-5 mt-5 w-2/3 shadow-xl border border-solid border-neutral-800 overflow-hidden">
          <img src="aiart.png" alt="AI Art Project" className="object-cover" />
          <p className="text-2xl text-gray-900 text-center">AI Art</p>
        </div>
        <div className="rounded-lg mb-5 mt-5 w-2/3 shadow-xl border border-solid border-neutral-800 overflow-hidden">
          <img
            src="coffee.png"
            alt="Coffee Shop Project"
            className="object-cover"
          />
          <p className="text-2xl text-gray-900 text-center">Coffee Shop</p>
        </div>
      </section>
      <section id="about-section" className="pt-10 px-5 pb-10 bg-gray-500">
        <p className="text-3xl text-center">About Me</p>
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
