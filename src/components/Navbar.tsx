import Link from "next/link";

interface NavbarProps {
  minimal?: boolean;
  showBorder?: boolean;
}

export default function Navbar({ minimal = false, showBorder = false }: NavbarProps) {
  return (
    <nav className={`flex items-center gap-4 md:gap-12 px-3 md:px-6 max-w-[95vw] rounded-full bg-mnd-cream/80 backdrop-blur-sm transition-all duration-300 ${showBorder ? "border border-black" : "border border-transparent"}`}>
      <img src="/landing/mnd-black-logo.png" alt="MND Logo" className="h-14 w-auto" />
      {!minimal && (
        <>
          <Link href="/mnd-way" className="hidden md:block">The MND way</Link>
          <Link href="#" className="hidden md:block">We do more stuff</Link>
          <Link href="#" className="hidden md:block">The MND Corner</Link>
          <Link href="#" className="hidden md:block">Be our people</Link>
        </>
      )}
      <Link href="#" className="px-4 py-2 md:px-8 bg-mnd-navy text-white rounded-full">Let&apos;s talk</Link>
    </nav>
  );
}
