import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-300 font-serif ">
      <nav className="h-10 bg-red-100 flex justify-around items-center">
        <Link href="#hero-section" scroll={false}>
          Home
        </Link>
        <Link href="#hero-section">Projects</Link>
        <Link href="#hero-section">About</Link>
      </nav>
      <section id="hero-section" className="p-10 text-left">
        <div className="min-h-1/2">
          <p className="text-3xl">Hello,</p>
          <p className="text-4xl mt-1">
            I'm <span className="italic">Jabo Fecht</span>
          </p>
          <p className="text-xl mt-1 text-gray-800">Fullstack Developer</p>
        </div>
        <img
          className="w-50 mt-5 overflow-hidden"
          src="/portraitlogo.png"
          alt="profile-picture"
        />
      </section>
      <section id="project-section"></section>
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
