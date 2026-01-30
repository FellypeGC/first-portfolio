import logo from '../assets/code-icon-white.svg'
import { Link } from "react-router"

// Navigation links data structure for easy modification and scalability
const navigationLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
]

const Navbar = () => {
  return (
    <nav className="*:text-2xl">
      <div className="shadow-md mx-auto px-4 py-2 flex items-center justify-around bg-gray-700 rounded-b-2xl w-1/2  position-sticky top-0">
        <div className="rounded-xl p-1 bg-gray-500 border-glass">
          <img src={logo} alt="Code Icon Logo" className="h-7 w-8" />
        </div>
        <ul className="flex justify-center align-center bg-gray-600 border-glass rounded-[99px] px-1 py-1">
          {navigationLinks.map((link) => (
            <li key={link.path} className="px-2.5 hover:bg-gray-500 rounded-full transition-all duration-300 ">
              <Link
                to={link.path} className="mx-4 text-white hover:opacity-80"
              >{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar