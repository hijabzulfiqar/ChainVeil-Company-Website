"use client";

import { Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top divider */}
        <div className="mb-12">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand + blurb */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <a href="#" className="inline-flex items-center gap-2">
              <img src="/chainveil.png" alt="ChainVeil" className="h-8 w-8" />
              <span
                className="text-lg font-semibold uppercase"
                style={{ color: "#81D658" }}
              >
                ChainVeil
              </span>
            </a>
            <span className="hidden md:block h-6 w-px bg-white/10"></span>
            <p className="text-sm text-neutral-400 text-center md:text-left">
              Take control of your crypto investments.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-6 flex-wrap justify-center">
            <a
              href="#"
              className="text-sm text-neutral-400 hover:text-white transition"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-sm text-neutral-400 hover:text-white transition"
            >
              About Us
            </a>
            <a
              href="#services"
              className="text-sm text-neutral-400 hover:text-white transition"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-sm text-neutral-400 hover:text-white transition"
            >
              Contact Us
            </a>
            <a
              href="#blog"
              className="text-sm text-neutral-400 hover:text-white transition"
            >
              Blog
            </a>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-neutral-400 ring-1 ring-white/10 hover:bg-white/10 hover:text-white transition"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-neutral-400 ring-1 ring-white/10 hover:bg-white/10 hover:text-white transition"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-neutral-400 ring-1 ring-white/10 hover:bg-white/10 hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-neutral-400 ring-1 ring-white/10 hover:bg-white/10 hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-10 text-center">
          <p className="text-xs text-neutral-500">
            © 2025 ChainVeil. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
