"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <nav className="flex flex-col w-full md:w-4/5 lg:w-3/5 xl:w-1/2 mx-auto bg-white text-white rounded-b-3xl">
        <div className="flex items-center justify-between px-4 py-2">
          
          {/* Logo – fixed sizing, no distortion */}
          <Link href="/" className="flex items-center">
            <div className="relative h-20 w-48">
              <Image
                src="/images/logo.png"
                alt="SkillKwiz Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black focus:outline-none z-20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:justify-end gap-4 flex-1">
            <Link href="/" className={`relative group py-2 px-2 md:px-4 lg:text-base transition-all ${pathname === "/" ? "text-yellow-400 font-semibold" : "text-black"}`}>
              <span>Home</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>

            <Link href="/about" className={`relative group py-2 px-2 md:px-4 lg:text-base transition-all ${pathname === "/about" ? "text-yellow-400 font-semibold" : "text-black"}`}>
              <span>About Us</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>

            <Link href="/services" className={`relative group py-2 px-2 md:px-4 lg:text-base transition-all ${pathname === "/services" ? "text-yellow-400 font-semibold" : "text-black"}`}>
              <span>Services</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>

            <Link href="/blog" className={`relative group py-2 px-2 md:px-4 lg:text-base transition-all ${pathname === "/blog" ? "text-yellow-400 font-semibold" : "text-black"}`}>
              <span>Blog</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center py-4 bg-[#335f92] rounded-b-3xl shadow-lg transition-all duration-300 ease-in-out">
            {["Home", "About Us", "Services", "Blog"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                className="text-white relative group py-3 text-lg w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{item}</span>
                <span className="absolute left-1/4 right-1/4 bottom-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}
