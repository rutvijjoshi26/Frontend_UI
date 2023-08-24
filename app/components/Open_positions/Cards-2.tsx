const Cards_2 = () => {
  return (  
    <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    <div className="mb-8 md:mb-12">
      <h2 className="mb-4 font-bold text-black md:mb-6 text lg:text-4xl">Open vacancies</h2>
    </div>

    <div className="flex flex-row flex-1 justify-between gap-4 md:grid-cols-4 lg:gap-8">
      <div className="flex flex-col rounded-lg gap-4 bg-gray-100 p-4 lg:p-8">
        <div className="text-xl items-start font-bold text-black">Senior Full-Stack Engineer</div>
        <div className="text-sm font-normal sm:text-base">
            <ul className="flex flex-col gap-2 list-disc">
                <li>Full-time position</li>
                <li>Berlin or remote</li>
                <li>$65-85k, 0.5-1.50% equity share options</li>
            </ul>
        </div>
      </div>

      <div className="flex flex-col rounded-lg gap-4 bg-gray-100 p-4 lg:p-8">
        <div className="text-xl items-start font-bold text-black">Senior Designer</div>
        <div className="text-sm font-normal sm:text-base">
            <ul className="flex flex-col gap-2 list-disc">
                <li>Full-time position</li>
                <li>Berlin or remote</li>
                <li>$40-55k, 0.25-0.50% equity share options</li>
            </ul>
        </div>
      </div>

      <div className="flex flex-col rounded-lg gap-4 bg-gray-100 p-4 lg:p-8">
        <div className="text-xl items-start font-bold text-black">Superstar Intern</div>
        <div className="text-sm font-normal sm:text-base">
            <ul className="flex flex-col gap-2 list-disc">
                <li>Full-time position</li>
                <li>Berlin or remote</li>
                <li>$20-24k, 0.5-1.50% equity share options</li>
            </ul>
        </div>
      </div>


    </div>
  </div>
</div>
  )
}

export default Cards_2