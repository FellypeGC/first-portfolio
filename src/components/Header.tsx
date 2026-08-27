import Navbar from "./Navbar";
import logo from "../assets/code-icon-white.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#121318]/90 backdrop-blur-xl border-b border-white/10 supports-[backdrop-filter]:bg-[#121318]/75">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
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
