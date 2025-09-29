import { Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-transparent z-50 text-white flex justify-between items-center p-5">
      <h1 className="text-2xl font-bold">Office Solutions</h1>
      <ul className="flex gap-6">
        <li>
          <a href="#services" className="hover:underline">
            Services
          </a>
        </li>
        <li>
          <Link to="/contact-us" className="hover:underline">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
