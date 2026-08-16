import { Link } from "react-router-dom";
import logo from "../assets/code-icon-white.svg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/10 bg-[#121318] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <Link to="/">
          <div className="flex gap-2.5 items-center">
            <div className="rounded-[7px] flex justify-center items-center p-1">
              {/** bg-blue-700 */}
              <img src={logo} alt="Code Icon Logo" className="h-7 w-8" />
            </div>
            <h1 className="text-2xl font-semibold">fllpdev.ts</h1>
          </div>
        </Link>
        <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
          <a
            href="https://github.com/FellypeGC"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors p-1.5 rounded-md hover:bg-white/5"
            aria-label="GitHub"
          >
            <FaGithub className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/fllpdev"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors p-1.5 rounded-md hover:bg-white/5"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-4 h-4" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </div>

        <div className="text-xs text-slate-500 text-right">
          <span>© {currentYear} fllpdev</span>
        </div>

      </div>
    </footer>
  );
};