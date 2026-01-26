import logo from '../assets/code-icon.svg'
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="shadow-md *:text-2xl bg-gray-900">
      <div className="container mx-auto px-4 py-2 flex items-center justify-around bg-gray-700 rounded-b-2xl w-1/2">
        <div className="rounded-xl p-1">
          <img src={logo} alt="Code Icon Logo" className="h-10 w-10" />
        </div>
        <ul>
          <Link to="/" className="inline-block mx-4 text-black hover:opacity-80 duration-100 ease-in-out">Home</Link>
          <Link to="/projects" className="inline-block mx-4 text-black hover:opacity-80 duration-100 ease-in-out">Projects</Link>
          <Link to="/about" className="inline-block mx-4 text-black hover:opacity-80 duration-100 ease-in-out">About</Link>
          <Link to="/contact" className="inline-block mx-4 text-black hover:opacity-80 duration-100 ease-in-out">Contact</Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar