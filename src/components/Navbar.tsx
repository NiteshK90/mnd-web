"use client";

import Link from "next/link";
import { useState } from "react";

interface NavbarProps {
  minimal?: boolean;
  showBorder?: boolean;
}

const navLinks = [
  { label: "The MND way", href: "/mnd-way" },
  { label: "We do more stuff", href: "/other-stuff" },
  { label: "The MND Corner", href: "/mnd-corner" },
  { label: "Be our people", href: "/be-our-people" },
];

export default function Navbar({ minimal = false, showBorder = false }: NavbarProps) {
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const expanded = !minimal || hovered;

  // Nav pill wrapper
  return (
    <div className="relative flex flex-col items-center">
      <nav
        className={`animate-slide-up flex items-center h-14 gap-4 md:gap-6 px-4 md:px-6 rounded-full bg-white/30 backdrop-blur-sm border border-white/40 shadow-sm [transition:all_0.6s_cubic-bezier(0.16,1,0.3,1)] ${showBorder ? "ring-1 ring-black/10" : ""}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Hamburger — mobile only, left of logo */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[2px] bg-mnd-charcoal rounded-full transition-all duration-300 origin-center ${menuOpen ? "[transform:translateY(7px)_rotate(45deg)]" : ""}`} />
          <span className={`block w-5 h-[2px] bg-mnd-charcoal rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[2px] bg-mnd-charcoal rounded-full transition-all duration-300 origin-center ${menuOpen ? "[transform:translateY(-7px)_rotate(-45deg)]" : ""}`} />
        </button>

        {/* Logo */}
        <Link href="/">
          <img
            src="/landing/mnd-black-logo.png"
            alt="MND Logo"
            className="h-20 w-auto cursor-pointer"
          />
        </Link>

        {/* Desktop nav links */}
        <div
          className={`hidden md:flex items-center gap-8 overflow-hidden ${
            expanded
              ? "max-w-[600px] opacity-100 px-3 [transition:max-width_0.6s_cubic-bezier(0.16,1,0.3,1),opacity_0.4s_ease-out_0.15s,padding_0.6s_cubic-bezier(0.16,1,0.3,1)]"
              : "max-w-0 opacity-0 px-0 [transition:opacity_0.15s_ease-in,max-width_0.5s_cubic-bezier(0.4,0,0.2,1)_0.1s,padding_0.5s_cubic-bezier(0.4,0,0.2,1)_0.1s]"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="whitespace-nowrap font-inter text-[12px] font-semibold text-mnd-charcoal hover:font-bold transition-all"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA button */}
        <Link href="mailto:hello@mynextdeveloper.com" className="px-5 md:px-8 py-2 bg-mnd-navy text-white rounded-full text-[12px] whitespace-nowrap font-semibold transition-all duration-200 hover:scale-[1.05] hover:shadow-[0_6px_20px_rgba(2,48,71,0.4)] active:scale-[0.96] active:shadow-none">
          Let&apos;s talk
        </Link>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden absolute top-full mt-2 w-full bg-mnd-cream/95 backdrop-blur-sm rounded-2xl border border-black/10 shadow-lg overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
      >
        {/* Mobile link list */}
        <div className="flex flex-col px-6 py-4 gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-inter text-[12px] font-semibold text-mnd-charcoal hover:font-bold transition-all"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
