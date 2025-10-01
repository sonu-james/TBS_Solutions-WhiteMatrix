import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icons
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/#hero" },
    { name: "Services", href: "/#services" },
    { name: "Products", href: "/#products" },
    { name: "Why Choose Us", href: "/#why-choose-us" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="w-full sticky top-0 z-50 bg-white text-black border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-0 py-4 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <img src="/images/logo2.png" alt="Logo" className="h-12 w-auto" />
          <h1 className="font-extrabold tracking-wide leading-tight">
            <HashLink smooth to="/#hero" className="transition-colors hover:text-teal-700">
              <span className="text-teal-600 text-xl md:text-2xl block">TRUE STAR</span>
              <span className="text-gray-600 text-sm md:text-base font-normal">
                Business Solutions
              </span>
            </HashLink>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-base font-medium">
          {navLinks.map((link, idx) => (
            <li key={idx} className="relative group">
              <HashLink
                smooth
                to={link.href}
                className="font-Grotesk transition-colors hover:text-teal-600 relative group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
              </HashLink>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl text-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col gap-6 px-6 py-8 text-lg font-medium text-black">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <HashLink
                  smooth
                  to={link.href}
                  className="block hover:text-teal-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
