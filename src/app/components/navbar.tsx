"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent backdrop-blur-md text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold tracking-wide">
            <Link href="/">Chit Chat</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-orange-400 transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-orange-400 transition-colors">
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none cursor-pointer transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/50 backdrop-blur-md px-4 pb-4 space-y-2">
          <Link href="/" className="block hover:text-orange-400 transition-colors">
            Home
          </Link>
          <Link href="/about" className="block hover:text-orange-400 transition-colors">
            About
          </Link>
        </div>
      )}
    </nav>
  );
}
