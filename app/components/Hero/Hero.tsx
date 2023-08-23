import Hero_image from "@/public/images/hero.svg"
import {AiFillApple, AiFillStar} from "react-icons/ai"

const Hero = () => {
  return (
    <div className="px-5">
    <div className="bg-blue-200 pb-6 rounded-xl sm:pb-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">

    <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
      <div className="flex flex-col justify-between xl:w-5/12">
        <div></div>

        <div className="sm:text-center lg:py-12 lg:text-left xl:py-24">
          <p className="mb-4 font-semibold text-gray-800 md:mb-6 md:text-lg xl:text-xl">Ahead app</p>

          <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">Master your life by mastering emotions</h1>

          <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
            <div className="flex flex-row max-h-14 py-1 px-2 pr-2 justify-center items-center rounded-md bg-black">
                <AiFillApple size={35} color="white"/>
                <div className="flex flex-col pl-1 text-left text-white">
                    <div className="font-light text-xs">
                    Download on the
                    </div>
                    <span className="text-lg font-medium">
                    AppStore
                    </span>

                </div>
            </div>

            <div className="flex flex-col gap-1 p-1 ml-5">
                <div className="flex flex-row gap-2 justify-start">
                    <AiFillStar size={25} color="#FFD700"/>
                    <AiFillStar size={25} color="#FFD700"/>
                    <AiFillStar size={25} color="#FFD700"/>
                    <AiFillStar size={25} color="#FFD700"/>
                    <AiFillStar size={25} color="#FFD700"/>
                </div>
                <div className="text-gray-600">
                    100+ AppStore reviews
                </div>
            </div>

          </div>
        </div>

      </div>

      <div className="h-48 overflow-hidden rounded-lg lg:h-auto xl:w-5/12">
        <img src={Hero_image.src} loading="lazy" alt="Hero Image" className="h-full w-full object-cover object-center" />

      </div>
    </section>
  </div>
</div>

    </div>
  )
}

export default Hero