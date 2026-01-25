"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          <a href="#" className="group inline-flex items-center gap-2">
            <img src="/chainveil.png" alt="ChainVeil" className="h-7 w-7 sm:h-8 sm:w-8" />
            <span
              className="text-base sm:text-lg uppercase font-semibold"
              style={{ color: "#81D658" }}
            >
              ChainVeil
            </span>
          </a>

          <nav className="hidden md:flex items-center">
            <div className="ring-1 ring-white/10 bg-neutral-900/60 rounded-full py-2 px-1 backdrop-blur">
              <ul className="flex items-center">
                <li>
                  <a
                    href="#"
                    className="px-3 py-1.5 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-full transition"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="px-3 py-1.5 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-full transition"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="px-3 py-1.5 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-full transition"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="px-3 py-1.5 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-full transition"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="px-3 py-1.5 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-full transition"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="flex items-center gap-3">
            <button
              className="hidden sm:inline-flex group relative min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.1] hover:text-white font-semibold text-white/70 tracking-tight rounded-full px-[17px] py-[8px] items-center justify-center"
              style={{
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)",
                background:
                  "radial-gradient(ellipse at bottom,rgba(71,81,92,1) 0%,rgba(0,0,0,1) 100%)",
              }}
            >
              <span className="relative z-10 font-normal">Sign Up</span>
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 opacity-20 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80"
                style={{
                  background:
                    "linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)",
                }}
              />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-neutral-300 ring-1 ring-white/10 hover:bg-white/10 hover:text-white transition"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 rounded-2xl bg-neutral-900/95 border border-white/10 ring-1 ring-white/5 backdrop-blur-lg p-4">
            <nav className="flex flex-col gap-2">
              <a href="#" className="px-4 py-3 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-xl transition">Home</a>
              <a href="#about" className="px-4 py-3 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-xl transition">About Us</a>
              <a href="#services" className="px-4 py-3 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-xl transition">Services</a>
              <a href="#contact" className="px-4 py-3 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-xl transition">Contact Us</a>
              <a href="#blog" className="px-4 py-3 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-xl transition">Blog</a>
              <div className="mt-2 pt-2 border-t border-white/10">
                <button
                  className="w-full group relative inline-flex cursor-pointer hover:text-white font-semibold text-white/70 tracking-tight rounded-full px-4 py-3 items-center justify-center"
                  style={{
                    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)",
                    background: "radial-gradient(ellipse at bottom,rgba(71,81,92,1) 0%,rgba(0,0,0,1) 100%)",
                  }}
                >
                  <span className="relative z-10 font-normal">Sign Up</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
