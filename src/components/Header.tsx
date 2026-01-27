"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-lg border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex items-center justify-between relative">
          {/* Logo! */}
          <Link href="/" className="group inline-flex items-center gap-2 z-10">
            <img
              src="/chainveil.png"
              alt="ChainVeil"
              className="h-7 w-7 sm:h-8 sm:w-8"
            />
            <span
              className="text-base sm:text-lg uppercase font-semibold"
              style={{ color: "#81D658" }}
            >
              ChainVeil
            </span>
          </Link>

          {/* Centered Navigation */}
          <nav className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2">
            <div className="ring-1 ring-white/10 bg-neutral-900/60 rounded-full py-2 px-1 backdrop-blur">
              <ul className="flex items-center">
                <li>
                  <Link
                    href="/"
                    className="px-3 py-1.5 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-full transition"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="px-3 py-1.5 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-full transition"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="px-3 py-1.5 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-full transition"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="px-3 py-1.5 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-full transition"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="px-3 py-1.5 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-full transition"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hiring"
                    className="px-3 py-1.5 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-full transition"
                  >
                    Hiring
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-neutral-300 ring-1 ring-white/10 hover:bg-white/10 hover:text-white transition z-10"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

          {/* Invisible spacer for desktop to balance the layout */}
          <div className="hidden md:block w-[140px]" />
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 rounded-2xl bg-neutral-900/95 border border-white/10 ring-1 ring-white/5 backdrop-blur-lg p-4">
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-xl transition"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-xl transition"
              >
                About Us
              </Link>
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-xl transition"
              >
                Services
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-xl transition"
              >
                Contact Us
              </Link>
              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-xl transition"
              >
                Blog
              </Link>
              <Link
                href="/hiring"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-xl transition"
              >
                Hiring
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
