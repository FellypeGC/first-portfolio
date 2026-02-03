import Navbar from "./Navbar"
import logo from '../assets/code-icon-white.svg'

// type Props = {}

const Header = () => {
  return (
    <header className="bg-color-[#0A0B10]">
      <div className="flex shadow-md mx-auto p-4 items-center justify-around rounded-2xl">
        <div className="flex gap-2.5 items-center">
          <div className="bg-blue-700 rounded-[7px] flex justify-center items-center p-1">
            <img src={logo} alt="Code Icon Logo" className="h-7 w-8" />
          </div>
          <h1 className="text-2xl font-semibold">fllpdev.ts</h1>
        </div>
        <Navbar />
      </div>
    </header>
  )
}

export default Header