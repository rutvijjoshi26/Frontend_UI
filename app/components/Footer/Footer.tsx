import Logo from "@/public/images/logo.jpeg"
import {FaLocationDot} from "react-icons/fa6";
import {MdEmail} from "react-icons/md"
import {AiFillApple} from "react-icons/ai"

const Footer = () => {
  return (
    <div className="bg-white pt-4 pt sm:pt-10 lg:pt-24">
  <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div className="flex flex-col items-center border-t gap-3 pt-6">
        <img src={Logo.src} className="w-16 h-16"></img>
        <p className="text-blue-500 text-3xl font-medium">ahead</p>
      <div className="flex gap-4 py-6">

        <a href="#" target="_blank" className="text-black transition duration-100 hover:text-gray-500 active:text-gray-600">
          <div className="flex flex-row gap-1 pr-2">
          <FaLocationDot size={18}/> 
          <p>Auguststrase 26, 10117 Berlin</p>
          </div>
        </a>

        <a href="#" target="_blank" className="text-black transition duration-100 hover:text-gray-500 active:text-gray-600">
          <div className="flex flex-row gap-2">
          <MdEmail size={18}/> 
          <p>hi@ahead-app.com</p>
          </div>
        </a>
      </div>
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

    </div>

    <div className="py-8 text-center text-sm text-gray-400">© 2022 Ahead app. All rights reserved</div>
  </footer>
</div>
  )
}

export default Footer