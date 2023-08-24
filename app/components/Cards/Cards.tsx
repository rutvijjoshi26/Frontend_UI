const Cards = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    <h2 className="mb-8 text-2xl font-bold text-black md:mb-12 lg:text-3xl">Does this sound familiar ... </h2>

    <div className="flex flex-row flex-1 gap-2 md:grid-cols-2 md:gap-8">
      <div className="flex flex-col gap-4 rounded-lg bg-blue-200 px-8 py-6 md:gap-6">
      <div>
      <span role="img" aria-label="angry" className="w-30 h-30">😠</span>
        </div>
        <div className="max-w-md text-black lg:text-lg items-center">You argue with your collegue</div>

        <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
          <div>
            <div className="text-center text-sm font-bold text-black sm:text-left md:text-base">You get angry and defensive, instead of staying open and working towards common ground.</div>
          </div>
        </div>
    </div>
      


    <div className="flex flex-col gap-4 rounded-lg bg-blue-200 px-8 py-6 md:gap-6">
      <div>
      <span role="img" aria-label="angry" className="w-30 h-30">😠</span>
        </div>
        <div className="max-w-md text-black lg:text-lg items-center">You argue with your collegue</div>

        <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
          <div>
            <div className="text-center text-sm font-bold text-black sm:text-left md:text-base">You get angry and defensive, instead of staying open and working towards common ground.</div>
          </div>
        </div>
    </div>


    <div className="flex flex-col gap-4 rounded-lg bg-blue-700 px-8 py-6 -rotate-3 md:gap-6">
      <div>
      <span role="img" aria-label="angry" className="w-30 h-30">😠</span>
        </div>
        <div className="max-w-md text-white lg:text-lg items-center">You get a promotion at work</div>

        <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
          <div>
            <div className="text-center text-sm font-bold text-white sm:text-left md:text-base">You question yourself and wonder when they'll realize you're an unqualified imposter, instead of trusting yourself & your abilities</div>
          </div>
        </div>
    </div>

    </div>
  </div>
</div>
  )
}

export default Cards