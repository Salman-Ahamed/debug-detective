"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a14]/80 backdrop-blur-xl border-b border-[#2f334d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo.png"
              alt="Debug Detective"
              width={48}
              height={48}
              className="group-hover:scale-110 transition-transform"
            />
            <span className="text-xl font-black text-transparent bg-clip-text bg-linear-to-r from-[#00f3ff] to-[#bc13fe]">
              Debug Detective
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/detective"
              className="text-slate-300 hover:text-[#00f3ff] transition-colors"
            >
              Detective
            </Link>
            <Link
              href="/pricing"
              className="text-slate-300 hover:text-[#00f3ff] transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/docs"
              className="text-slate-300 hover:text-[#00f3ff] transition-colors"
            >
              Docs
            </Link>
            <Link
              href="/about"
              className="text-slate-300 hover:text-[#00f3ff] transition-colors"
            >
              About
            </Link>
            <Link
              href="/detective"
              className="px-6 py-2 rounded-lg bg-linear-to-r from-[#00f3ff] to-[#0066ff] text-black font-bold hover:shadow-[0_0_20px_rgba(0,243,255,0.5)] transition-all"
            >
              Try Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:bg-[#2f334d] transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block px-4 py-2 text-slate-300 hover:bg-[#2f334d] rounded-lg transition-colors"
            >
              Home
            </Link>
            <Link
              href="/detective"
              className="block px-4 py-2 text-slate-300 hover:bg-[#2f334d] rounded-lg transition-colors"
            >
              Detective
            </Link>
            <Link
              href="/pricing"
              className="block px-4 py-2 text-slate-300 hover:bg-[#2f334d] rounded-lg transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/docs"
              className="block px-4 py-2 text-slate-300 hover:bg-[#2f334d] rounded-lg transition-colors"
            >
              Docs
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-slate-300 hover:bg-[#2f334d] rounded-lg transition-colors"
            >
              About
            </Link>
            <Link
              href="/detective"
              className="block mx-4 mt-4 px-6 py-2 text-center rounded-lg bg-linear-to-r from-[#00f3ff] to-[#0066ff] text-black font-bold"
            >
              Try Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
