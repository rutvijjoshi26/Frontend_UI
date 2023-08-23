import Logo from "@/public/images/logo.jpeg"

const Header = () => {
  return (
    <div className="bg-white lg:pb-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <header className="flex items-center justify-between py-4 md:py-8">

      <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
       <img className="w-16 h-16 object-cover" src={Logo.src} alt="Logo" />
      </a>

      <nav className="hidden gap-12 lg:flex">
        <a href="#" className="text-lg font-semibold text-gray-800 transition duration-100">Emotions</a>
        <a href="#" className="text-lg font-semibold text-gray-800 transition duration-100">Manifesto</a>
        <a href="#" className="text-lg font-semibold text-gray-800 transition duration-100">Self-awareness test</a>
        <a href="#" className="text-lg font-semibold text-gray-800 transition duration-100">Work With Us</a>
      </nav>

      <div className="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">

        <a href="#" className="inline-block rounded-full bg-black px-8 py-4 text-center text-sm font-semibold text-white outline-none transition duration-100 focus-visible:ring md:text-base">Download app</a>
      </div>

      <button type="button" className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>

        Menu
      </button>
    </header>
  </div>
</div>
  )
}

export default Header