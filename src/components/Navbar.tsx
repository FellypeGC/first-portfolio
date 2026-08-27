import { useState, useEffect, useRef } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";


const Navbar = () => {
  const { t, i18n } = useTranslation();
  const isPortuguese = i18n.language?.startsWith("pt");
  const resumeUrl = isPortuguese ? "/curriculo-fgc.pdf" : "/resume-fgc.pdf";
  const resumeFileName = isPortuguese ? "curriculo-fgc.pdf" : "resume-fgc.pdf";

  const navigationLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.skills"), path: "/skills" },
    { name: t("nav.projects"), path: "/projects" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // close on ESC / click outside
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeMenu(); };
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) closeMenu();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={menuRef}>
      <div className="flex items-center justify-between md:justify-end">
        <nav className="hidden md:flex md:justify-between md:items-center" aria-label="Primary">
          <div className="flex gap-5 items-center">
            <ul className="flex justify-center px-1 py-1 gap-1">
              {navigationLinks.map((link) => (
                <li key={link.path} className="flex items-center">
                  <Link
                    to={link.path}
                    className="nav-link-animated text-sm font-semibold flex items-center gap-1 px-2 py-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <LanguageToggle />
            <a
              href={resumeUrl}
              download={resumeFileName}
              className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 cursor-pointer text-sm font-bold rounded-lg transition-all duration-150 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 hover:scale-[0.98] active:scale-[0.97]"
            >
              <MdOutlineFileDownload className="text-xl" />
              {t("nav.resume")}
            </a>
          </div>
        </nav>

        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
          className="md:hidden text-2xl p-2 text-white focus:outline-none cursor-pointer rounded-lg hover:bg-white/10 transition-colors"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden -z-10" aria-hidden onClick={closeMenu} />
          <div className="md:hidden absolute top-[calc(100%+12px)] right-0 w-64 sm:w-72 bg-[#161b22] border border-white/10 p-6 flex flex-col gap-5 shadow-2xl rounded-2xl z-50 animate-[fadeIn_150ms_ease]">
            <ul className="flex flex-col gap-1">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={closeMenu}
                    className="text-[15px] font-semibold text-slate-200 hover:text-white hover:bg-white/5 block py-2.5 px-3 rounded-lg transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <LanguageToggle />
            <a
              href={resumeUrl}
              download={resumeFileName}
              className="w-full justify-center flex items-center gap-1.5 px-4 py-3 bg-blue-600 hover:bg-blue-500 cursor-pointer text-sm font-bold rounded-lg transition-colors shadow-lg shadow-blue-600/20"
            >
              <MdOutlineFileDownload className="text-xl" />
              {t("nav.resume")}
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;