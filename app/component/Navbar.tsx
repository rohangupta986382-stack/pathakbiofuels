"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-green-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Pathak Biofuels"
              width={90}
              height={90}
              priority
              className="object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-slate-900">
                PATHAK BIOFUELS
              </h1>
              <p className="text-sm text-green-700 font-medium">
                Sustainable Energy Solutions
              </p>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#home" className="font-medium text-slate-700 hover:text-green-700 transition">
              Home
            </a>
            <a href="#about" className="font-medium text-slate-700 hover:text-green-700 transition">
              About
            </a>
            <a href="#products" className="font-medium text-slate-700 hover:text-green-700 transition">
              Products
            </a>
            <a href="#why-choose-us" className="font-medium text-slate-700 hover:text-green-700 transition">
              Why Choose Us
            </a>
            <a href="#industries" className="font-medium text-slate-700 hover:text-green-700 transition">
              Industries
            </a>
            <a href="#contact" className="font-medium text-slate-700 hover:text-green-700 transition">
              Contact
            </a>
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+916269831886"
              className="flex items-center gap-2 text-slate-700 font-semibold hover:text-green-700 transition"
            >
              📞 +91 62698 31886
            </a>
            <a
              href="https://wa.me/916269831886"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-green-700 text-white font-semibold hover:bg-green-800 transition shadow-md shadow-green-100"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-3xl text-slate-800 focus:outline-none"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-green-100 py-5">
            <div className="flex flex-col gap-4 font-medium text-slate-700">
              <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-green-700">Home</a>
              <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-green-700">About</a>
              <a href="#products" onClick={() => setMenuOpen(false)} className="hover:text-green-700">Products</a>
              <a href="#why-choose-us" onClick={() => setMenuOpen(false)} className="hover:text-green-700">Why Choose Us</a>
              <a href="#industries" onClick={() => setMenuOpen(false)} className="hover:text-green-700">Industries</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-green-700">Contact</a>

              <a
                href="tel:+916269831886"
                className="text-slate-700 font-semibold py-2"
              >
                📞 +91 62698 31886
              </a>
              <a
                href="https://wa.me/916269831886"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-700 text-white text-center py-3 rounded-xl font-semibold hover:bg-green-800 transition"
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}