"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.svg";
import { useState } from "react";

const navLinks = [
  { href: "#Home", label: "Home" },
  { href: "#Features", label: "Features" },
  { href: "#Integrations", label: "Integrations" },
  { href: "#FAQs", label: "FAQs" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-center md:p-10 p-4 sticky top-0 z-50">
      <div
        className={`xl:w-2/3 lg:w-10/12 ${
          menuOpen
            ? "rounded-2xl border-b-0 border-l-0 border-r-0"
            : "rounded-full"
        }  md:w-10/12 w-full flex backdrop-blur-md bg-black/30 items-center justify-between border border-stone-800 p-2`}
      >
        <Link href="/">
          <Image
            src={Logo}
            alt="Company Logo"
            width={100}
            height={100}
            className="h-auto md:w-34 w-24 cursor-pointer"
          />
        </Link>
        {/* Mobile menu button */}
        <button
          className="relative w-10 cursor-pointer h-10 flex flex-col justify-center items-center md:hidden focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span
            className={`block absolute h-0.5 w-7 bg-white transform transition-all duration-300 ease-in-out ${
              menuOpen ? "rotate-45 top-5" : "top-3"
            }`}
          />
          <span
            className={`block absolute h-0.5 w-7 bg-white transition-all duration-300 ease-in-out ${
              menuOpen ? "opacity-0 left-1/2 -translate-x-1/2" : "top-5"
            }`}
          />
          <span
            className={`block absolute h-0.5 w-7 bg-white transform transition-all duration-300 ease-in-out ${
              menuOpen ? "-rotate-45 top-5" : "top-7"
            }`}
          />
        </button>
        {/* Desktop menu */}
        <div className="md:flex hidden items-center space-x-8">
          <ul className="space-x-4 xl:flex hidden">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-white hover:text-gray-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="md:flex hidden items-center space-x-2">
            <button className="text-white px-6 py-3 border border-white rounded-full cursor-pointer transition-colors">
              Log In
            </button>
            <button className="bg-[#A3E636] text-black px-6 py-3 rounded-full cursor-pointer hover:bg-[#8CC32B] transition-colors">
              Sign Up
            </button>
          </div>
        </div>
        {menuOpen && (
          <div
            className="absolute top-full left-0 w-full rounded-b-2xl shadow-lg flex flex-col items-center md:hidden z-50
       bg-black/30 backdrop-blur-md border-x border-b border-stone-800
       animate-slideDown"
            style={{
              animation: "slideDown 0.3s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            <ul className="flex flex-col w-full items-center py-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="block text-white px-6 py-2 hover:text-gray-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <button className="w-full text-white px-6 py-3 border border-white rounded-full cursor-pointer transition-colors mb-2">
                  Log In
                </button>
              </li>
              <li>
                <button className="w-full bg-[#A3E636] text-black px-6 py-3 rounded-full cursor-pointer hover:bg-[#8CC32B] transition-colors">
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
