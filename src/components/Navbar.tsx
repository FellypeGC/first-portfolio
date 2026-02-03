import logo from '../assets/code-icon-white.svg'
import { Link } from "react-router"
import Button from './Button'

// Navigation links data structure for easy modification and scalability
const navigationLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
]

const Navbar = () => {
  return (
    <nav className="*:text-2xl ">
      <div className="flex gap-5">
        <ul className="flex justify-center px-1 py-1 gap-4">
          {navigationLinks.map((link) => (
            <li key={link.path} className="rounded-full transition-all duration-300 flex items-center">
              <Link
                to={link.path} className="text-white flex align-center hover:opacity-80 hover:text-blue-700 text-sm"
              >{link.name}</Link>
            </li>
          ))}
        </ul>
        <Button className="px-4 bg-blue-700 cursor-pointer text-sm font-bold rounded-[7px] hover:opacity-80" text="resume.pdf" />
      </div>
    </nav>
  )
}

export default Navbar