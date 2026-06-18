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
  const expanded = !minimal || hovered;

  return (
    <nav
      className={`flex items-center gap-4 md:gap-6 px-4 md:px-6 rounded-full bg-mnd-cream/80 backdrop-blur-sm transition-all duration-300 ${showBorder ? "border border-black" : "border border-transparent"}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src="/landing/mnd-black-logo.png" alt="MND Logo" className="h-14 w-auto" />

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
            className="whitespace-nowrap text-sm font-medium text-mnd-charcoal hover:opacity-70 transition-opacity"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <Link href="#" className="px-5 md:px-8 py-2 bg-mnd-navy text-white rounded-full text-sm whitespace-nowrap">
        Let&apos;s talk
      </Link>
    </nav>
  );
}
