import Sign from "@/public/images/sign.jpg"

const Privacy_heading = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <p className="mb-2 text-center font-semibold text-black md:mb-3 lg:text-lg">We take privacy seriously</p>

    <p className="mb-4 text-center text-2xl font-bold text-black md:mb-6 lg:text-3xl">Before you get started</p>

    <p className="mx-auto max-w-screen-md text-center text-black md:text-lg">"We won't share your answers with anyone (and won't ever tell you which friends said what about you)"</p>
    
    <div className="flex flex-row justify-center pt-5">
    <p className="mb-2 text-center font-semibold text-black md:mb-3 lg:text-lg">with love,</p>
    <img src={Sign.src} className="w-20 h-7 pl-3"></img>
    </div>
    <div className="hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-center pt-3">

        <a href="#" className="inline-block rounded-full bg-black px-8 py-3 text-center text-sm font-semibold text-white outline-none transition duration-100 focus-visible:ring md:text-base">Start a test</a>
      </div>
      <p className="mb-2 text-center font-semibold pt-5 text-black md:mb-3 lg:text-sm">Take only 5 minutes</p>
  </div>
</div>
  )
}

export default Privacy_heading