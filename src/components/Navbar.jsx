import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // for icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 w-full 
                 bg-[rgba(255,255,255,0.85)] text-[rgb(40,180,190)] 
                 dark:bg-[rgba(0,0,0,0.3)] dark:text-white
                 backdrop-blur-sm z-50 flex justify-between items-center px-6 md:px-8 py-4
                 border-b border-gray-200 dark:border-gray-700
                 transition-colors duration-500"
      aria-label="Main navigation"
    >
      {/* Logo / Brand */}
      <h1 className="text-xl md:text-2xl font-extrabold tracking-wide">
        <Link
          to="/"
          className="no-underline hover:opacity-70 transition-opacity duration-200"
        >
          MyBrand
        </Link>
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-lg font-medium">
        <li>
          <a
            href="#services"
            className="no-underline hover:opacity-70 transition-opacity duration-200"
          >
            Services
          </a>
        </li>
        <li>
          <Link
            to="/contact-us"
            className="no-underline hover:opacity-70 transition-opacity duration-200"
          >
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div
          className="absolute top-full left-0 w-full bg-[rgba(255,255,255,0.95)] dark:bg-[rgba(0,0,0,0.9)] 
                     backdrop-blur-sm shadow-md md:hidden"
        >
          <ul className="flex flex-col gap-4 p-6 text-lg font-medium">
            <li>
              <a
                href="#services"
                className="block no-underline hover:opacity-70 transition-opacity duration-200"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="block no-underline hover:opacity-70 transition-opacity duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
