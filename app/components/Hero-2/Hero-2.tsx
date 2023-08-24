import Hero_image from "@/public/images/hero_2.jpg"

const Hero_2 = () => {
  return (
    <div className="px-5">
    <div className="pb-6 bg-[#fef7f1] rounded-xl sm:pb-8 lg:pb-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    

    <section className="gap-6 sm:gap-10 md:gap-16">

    <p className="mb-4 pt-40 font-semibold text-black md:mb-6 md:text-lg xl:text-lg">Built out of frustration</p>

    <h1 className="mb-8 text-3xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">Meet the ahead app</h1>

    <div className="flex flex-row justify-between">
    <div className="overflow-hidden h-24 rounded-lg lg:h-auto xl:w-5/12">
    <img src={Hero_image.src} loading="lazy" alt="Hero Image" className="h-full w-full object-cover object-center" />
      </div>
      <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">

        <p className="mb-8 text-xl leading-relaxed text-gray-500 md:mb-12 lg:w-4/5">A personalized pocket coach that provides bite-sized, science-driven tools to boost emotional intelligence.</p>
        <p className="mb-8 text-xl leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">Think of it as a pocket cheerleader towards a better, more fulfilling.</p>
      </div>
      </div>



    </section>
  </div>
</div>
</div>
  )
}

export default Hero_2