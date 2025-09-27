import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-transparent z-50 text-white flex justify-between items-center p-5">
      <h1 className="text-2xl font-bold">Office Solutions</h1>
      <ul className="flex gap-6">
        <li><a href="#services" className="hover:underline">Services</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
}