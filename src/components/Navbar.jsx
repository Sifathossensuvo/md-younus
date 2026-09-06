
import { useState } from "react";
import {
  FaXTwitter,
  FaDribbble,
  FaInstagram,
} from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";
import logo from '../assets/logo.svg'

const menuItems = ["Home", "About", "Projects", "Contact"];

const MenuItem = ({ item, href, mobile = false, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group relative block overflow-hidden text-[#1D1D1D] ${
        mobile
          ? "h-[28px] text-[18px] font-[525]"
          : "h-[28px] text-[18px] font-[525]"
      }`}
    >
      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
        {item}
      </span>

      <span className="absolute left-0 top-full block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
        {item}
      </span>
    </a>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Navbar */}
      <nav className="w-full px-4 pt-5 sm:px-5 sm:pt-5">
        <div className="relative z-50 mx-auto flex max-w-[1200px] items-center justify-between rounded-[20px] border-1 border-[#1D1D1D] bg-white px-[30px] py-[15px] sm:px-5">

          {/* Logo */}
        <img src={logo} href="#home"
            onClick={closeMenu}
            className="text-[24px] font-medium tracking-tight  sm:text-[27px]"/>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-20 md:flex text-[#1D1D1D]">
            <MenuItem item="Home" href="#home"/>
            <MenuItem item="About" href="#about" />
            <MenuItem item="Portfolio" href="#projects" />
            <MenuItem item="Contact" href="#contact" />
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden items-center gap-2 md:flex">
            <a
              href="#"
              aria-label="X"
              className="flex h-8 w-8 items-center justify-center rounded-[9px] border border-gray-500 text-black transition-all duration-300 hover:bg-black hover:text-white"
            >
              <FaXTwitter className="text-[14px]" />
            </a>

            <a
              href="#"
              aria-label="Dribbble"
              className="flex h-8 w-8 items-center justify-center rounded-[9px] border border-gray-500 text-black transition-all duration-300 hover:bg-black hover:text-white"
            >
              <FaDribbble className="text-[14px]" />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="flex h-8 w-8 items-center justify-center rounded-[9px] border border-gray-500 text-black transition-all duration-300 hover:bg-black hover:text-white"
            >
              <FaInstagram className="text-[14px]" />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative flex h-9 w-9 items-center justify-center rounded-[9px] border border-gray-500 text-[#1D1D1D] transition-all duration-300 hover:bg-black hover:text-white md:hidden"
          >
            <FiMenu
              className={`absolute text-[20px] transition-all duration-300 ${
                menuOpen
                  ? "rotate-90 scale-0 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }`}
            />

            <FiX
              className={`absolute text-[20px] transition-all duration-300 ${
                menuOpen
                  ? "rotate-0 scale-100 opacity-100"
                  : "-rotate-90 scale-0 opacity-0"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-500 md:hidden ${
          menuOpen
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div className="flex h-full flex-col px-6 pb-10 pt-32">

          {/* Mobile Navigation */}
          <div className="flex flex-col gap-6">
            <MenuItem
              item="Home"
              href="#home"
              mobile
              onClick={closeMenu}
            />

            <MenuItem
              item="About"
              href="#about"
              mobile
              onClick={closeMenu}
            />

            <MenuItem
              item="Projects"
              href="#projects"
              mobile
              onClick={closeMenu}
            />

            <MenuItem
              item="Contact"
              href="#contact"
              mobile
              onClick={closeMenu}
            />
          </div>

          {/* Mobile Social Icons */}
          <div className="mt-auto flex items-center gap-2">
            <a
              href="#"
              aria-label="X"
              className="flex h-9 w-9 items-center justify-center rounded-[9px] border border-gray-500 text-black transition-all duration-300 hover:bg-black hover:text-white"
            >
              <FaXTwitter className="text-[15px]" />
            </a>

            <a
              href="#"
              aria-label="Dribbble"
              className="flex h-9 w-9 items-center justify-center rounded-[9px] border border-gray-500 text-black transition-all duration-300 hover:bg-black hover:text-white"
            >
              <FaDribbble className="text-[15px]" />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-[9px] border border-gray-500 text-black transition-all duration-300 hover:bg-black hover:text-white"
            >
              <FaInstagram className="text-[15px]" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
