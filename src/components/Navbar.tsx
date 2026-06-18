import Link from "next/link";

interface NavbarProps {
  minimal?: boolean;
  showBorder?: boolean;
}

export default function Navbar({ minimal = false, showBorder = false }: NavbarProps) {
  return (
    <nav className={`flex items-center gap-4 md:gap-12 px-4 md:px-6 rounded-full bg-mnd-cream/80 backdrop-blur-sm transition-all duration-300 ${showBorder ? "border border-black" : "border border-transparent"}`}>
      <img src="/landing/mnd-black-logo.png" alt="MND Logo" className="h-14 w-auto" />
      {!minimal && (
        <div className="hidden md:flex items-center gap-12">
          <Link href="/mnd-way">The MND way</Link>
          <Link href="#">We do more stuff</Link>
          <Link href="#">The MND Corner</Link>
          <Link href="#">Be our people</Link>
        </div>
      )}
      <Link href="#" className="px-5 md:px-8 py-2 bg-mnd-navy text-white rounded-full text-sm">Let&apos;s talk</Link>
    </nav>
  );
}
