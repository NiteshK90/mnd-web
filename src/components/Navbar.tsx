"use client";

import Link from "next/link";
import { useState } from "react";

interface NavbarProps {
  minimal?: boolean;
  showBorder?: boolean;
}

const navLinks = [
  { label: "The MND way", href: "/mnd-way" },
  { label: "We do more stuff", href: "#" },
  { label: "The MND Corner", href: "#" },
  { label: "Be our people", href: "#" },
];

export default function Navbar({ minimal = false, showBorder = false }: NavbarProps) {
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const expanded = !minimal || hovered;

  return (
    <div className="relative flex flex-col items-center">
      <nav
        className={`flex items-center h-14 gap-4 md:gap-6 px-4 md:px-6 rounded-full bg-mnd-cream/80 backdrop-blur-sm transition-all duration-300 ${showBorder ? "border border-black" : "border border-transparent"}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Hamburger — mobile only, left of logo */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-[2px] bg-mnd-charcoal rounded-full transition-all duration-300 origin-center"
            style={menuOpen ? { transform: "translateY(7px) rotate(45deg)" } : {}}
          />
          <span
            className="block w-5 h-[2px] bg-mnd-charcoal rounded-full transition-all duration-300"
            style={menuOpen ? { opacity: 0 } : {}}
          />
          <span
            className="block w-5 h-[2px] bg-mnd-charcoal rounded-full transition-all duration-300 origin-center"
            style={menuOpen ? { transform: "translateY(-7px) rotate(-45deg)" } : {}}
          />
        </button>

        <Link href="/landing">
          <img
            src="/landing/mnd-black-logo.png"
            alt="MND Logo"
            className="h-20 w-auto cursor-pointer"
          />
        </Link>

        {/* Desktop links — hover-expand on non-hero */}
        <div
          className="hidden md:flex items-center gap-8 overflow-hidden"
          style={{
            maxWidth: expanded ? "600px" : "0px",
            opacity: expanded ? 1 : 0,
            transition: "max-width 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease",
            paddingLeft: expanded ? "12px" : "0px",
            paddingRight: expanded ? "12px" : "0px",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="whitespace-nowrap font-inter text-[12px] font-semibold text-mnd-charcoal hover:opacity-70 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link href="mailto:hello@mynextdeveloper.com" className="px-5 md:px-8 py-2 bg-mnd-navy text-white rounded-full text-sm whitespace-nowrap">
          Let&apos;s talk
        </Link>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden absolute top-full mt-2 w-full bg-mnd-cream/95 backdrop-blur-sm rounded-2xl border border-black/10 shadow-lg overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col px-6 py-4 gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-inter text-[12px] font-semibold text-mnd-charcoal hover:opacity-70 transition-opacity"
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
