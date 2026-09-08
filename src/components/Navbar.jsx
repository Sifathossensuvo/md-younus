import { useState } from "react";
import {
  FaXTwitter,
  FaDribbble,
  FaInstagram,
} from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";
import logo from '../assets/logo.svg'
import linkedin from '../assets/navicon/linkedin.svg'
import behance from '../assets/navicon/b2.svg'
import dribbble from '../assets/navicon/dribbble.svg'
import linkedinhover from '../assets/navicon/linkedinhover.svg'
import behancehover from '../assets/navicon/b3.svg'
import dribbblehover from '../assets/navicon/dribbblehover.svg'
import { Link } from "react-router-dom";

const menuItems = ["Home", "About", "Projects", "Contact"];

const MenuItem = ({ item, href, mobile = false, onClick }) => {
  return (
<a
  href={href}
  onClick={onClick}
  className={`group relative block overflow-hidden text-[#1D1D1D] ${
    mobile
      ? "text-[18px] font-[525]"
      : "leading-[22.5px] tracking-[-0.36px] text-[18px] flex items-center font-[525]"
  }`}
>
  <span className="block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
    {item}
  </span>

  <span className="absolute left-0 top-[calc(100%+1px)] block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
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
      <nav className="w-full px-[15px] md:px-[30px] pt-5 h-[76px]">
        <div className="relative z-50 mx-auto flex max-w-[1200px] items-center justify-between rounded-[20px] border-1 border-[#1D1D1D] bg-white px-[15px] md:px-[30px] py-[15px] ">

          {/* Logo */}
<Link to="/"><img src={logo} href="#home"
            onClick={closeMenu}
            className="w-[103px] h-[23px] hover:cursor-pointer font-medium tracking-tight "/></Link>
 
          {/* Desktop Menu */}
          <div className="hidden items-center gap-20 md:flex text-[#1D1D1D]">
            <Link to="/"><MenuItem item="Home"/></Link>

            <MenuItem
              item="About"
              href="/#about"
            />

            <Link to="/portfolio"><MenuItem item="Portfolio" /></Link>
            <Link to="/contact"><MenuItem item="Contact"/></Link>
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden items-center gap-2 md:flex">
<div className="border rounded-[10px] border-[#1d1d1d]">
  <a
  href="https://www.linkedin.com/in/rubelhossen26/"
  aria-label="X"
  target="_blank"
  className="group flex Z-0 h-[38px] w-[38px] items-center shadow-inner  justify-center rounded-[10px] border-b-4 border-[#ddd] text-[#1d1d1d] transition-all duration-300 relative "
>
 
   {/* icon first */}
  <img
    className=" absolute block transition-opacity duration-200 opacity-100 group-hover:opacity-0"
    src={linkedin}
    alt=""
  />
  {/* icon second */}
  <img
    className="absolute block transition-opacity duration-200 opacity-0 group-hover:opacity-100"
    src={linkedinhover}
    alt=""
  />
 
</a>
</div>

<div className="border rounded-[10px] border-[#1d1d1d]">
  <a
  href="https://dribbble.com/rubelhossen"
  aria-label="X"
  target="_blank"
  className="group flex Z-0 h-[38px] w-[38px] items-center shadow-inner  justify-center rounded-[10px] border-b-4 border-[#ddd] text-[#1d1d1d] transition-all duration-300 relative "
>
 
   {/* icon first */}
  <img
    className=" absolute block transition-opacity duration-200 opacity-100 group-hover:opacity-0"
    src={dribbble}
    alt=""
  />
  {/* icon second */}
  <img
    className="absolute block transition-opacity duration-200 opacity-0 group-hover:opacity-100"
    src={dribbblehover}
    alt=""
  />
 
</a>
</div>

<div className="border rounded-[10px] border-[#1d1d1d]">
  <a
  href="https://www.behance.net/rubelhossen"
  target="_blank"
  aria-label="X"
  className="group flex Z-0 h-[38px] w-[38px] items-center shadow-inner  justify-center rounded-[10px] border-b-4 border-[#ddd] text-[#1d1d1d] transition-all duration-300 relative "
>
 
   {/* icon first */}
  <img
    className=" absolute block transition-opacity duration-200 opacity-100 group-hover:opacity-0"
    src={behance}
    alt=""
  />
  {/* icon second */}
  <img
    className="absolute block transition-opacity duration-200 opacity-0 group-hover:opacity-100"
    src={behancehover}
    alt=""
  />
 
</a>
</div>
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
  <Link to="/" onClick={closeMenu}>
    <MenuItem
      item="Home"
      href="/"
      mobile
    />
  </Link>

  <MenuItem
    item="About"
    href="/#about"
    mobile
    onClick={closeMenu}
  />

  <Link to="/portfolio" onClick={closeMenu}>
    <MenuItem
      item="Portfolio"
      href="/portfolio"
      mobile
    />
  </Link>

  <Link to="/contact" onClick={closeMenu}>
    <MenuItem
      item="Contact"
      href="/contact"
      mobile
    />
  </Link>
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