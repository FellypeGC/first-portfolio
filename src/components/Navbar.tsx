import { useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";


const Navbar = () => {
  const { t } = useTranslation();

  const navigationLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.skills"), path: "/skills" },
    { name: t("nav.projects"), path: "/projects" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="relative z-50">
      <div className="flex items-center justify-between md:justify-end">
        <nav className="hidden md:flex md:justify-between md:items-center">
          <div className="flex gap-5">
            <ul className="flex justify-center px-1 py-1 gap-4">
              {navigationLinks.map((link) => (
                <li key={link.path} className="flex items-center">
                  <Link
                    to={link.path}
                    className="nav-link-animated text-sm font-semibold flex items-center gap-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <LanguageToggle />
            <a
              href="/public/resume-fgc.pdf"
              download="resume.pdf"
              className="flex items-center gap-1 px-4 py-2 bg-blue-700 cursor-pointer text-sm font-bold rounded-[7px] transition-all duration-150 hover:opacity-90 hover:shadow-[0_0_15px_rgba(37,106,244,0.6)] hover:border-[rgba(37,106,244,0.8)] hover:scale-[0.98]"
            >
              <MdOutlineFileDownload className="text-xl" />
              resume.pdf
            </a>
          </div>
        </nav>

        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="md:hidden text-2xl p-2 text-white focus:outline-none cursor-pointer"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-15 right-0 w-64 sm:w-72 bg-[#161b22] border border-white/10 p-6 flex flex-col gap-5 shadow-2xl rounded-2xl animate-in fade-in slide-in-from-top-2 duration-150 z-50">
          <ul className="flex flex-col gap-3">
            {navigationLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={closeMenu}
                  className="text-base font-semibold text-slate-200 hover:text-white block py-2 border-b border-white/5"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageToggle />
          <div>
            <a
              href="/public/resume-fgc.pdf"
              download="resume.pdf"
              className="w-full justify-center flex items-center gap-1 px-4 py-3 bg-blue-700 cursor-pointer text-sm font-bold rounded-[7px] transition-all duration-150 hover:opacity-90"
            >
              <MdOutlineFileDownload className="text-xl" />
              resume.pdf
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;