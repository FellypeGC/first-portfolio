import { MdOutlineFileDownload } from "react-icons/md"
import { Link } from "react-router"
import Button from './Button'

// Navigation links data structure for easy modification and scalability
const navigationLinks = [
  { name: "Home", path: "/" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
]

const Navbar = () => {
  return (
    <nav className="*:text-2xl hidden md:flex md:justify-between md:items-center">
      <div className="flex gap-5">
        <ul className="flex justify-center px-1 py-1 gap-4">
          {navigationLinks.map((link) => (
            <li key={link.path} className="transition-all duration-300 flex items-center hover:[text-shadow:0_0_15px_rgba(37,106,244,0.8)] hover:border-[rgba(37,106,244,)0.8]">
              <Link
                to={link.path} className="text-white flex align-center hover:opacity-80 hover:text-blue-700 text-sm font-medium"
              >{link.name}</Link>
            </li>
          ))}
        </ul>
        <Button className="flex items-center gap-1 px-4 py-2 bg-blue-700 cursor-pointer text-sm font-bold rounded-[7px] transition-all duration-150 hover:opacity-90 hover:shadow-[0_0_15px_rgba(37,106,244,0.6)] hover:border-[rgba(37,106,244,)0.8] hover:scale-[0.98]" text="resume.pdf">
          <MdOutlineFileDownload className="text-xl" />
        </Button>
      </div>
    </nav>
  )
}

export default Navbar