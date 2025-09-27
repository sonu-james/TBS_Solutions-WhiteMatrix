import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-6">
      <p>&copy; {new Date().getFullYear()} Office Solutions. All rights reserved.</p>
    </footer>
  );
}