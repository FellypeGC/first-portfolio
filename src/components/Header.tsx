import Navbar from "./Navbar";
import logo from "../assets/code-icon-white.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#121318] border-b border-white/10 fixed top-0 left-0 right-0 z-50">
      <div className="flex shadow-md mx-auto p-4 items-center justify-around">
        <Link to="/">
          <div className="flex gap-2.5 items-center">
            <div className="rounded-[7px] flex justify-center items-center p-1">
              {/** bg-blue-700 */}
              <img src={logo} alt="Code Icon Logo" className="h-7 w-8" />
            </div>
            <h1 className="text-2xl font-semibold">fllpdev.ts</h1>
          </div>
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
