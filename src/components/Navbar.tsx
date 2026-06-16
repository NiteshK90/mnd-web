import Link from "next/link";

interface NavbarProps {
  minimal?: boolean;
}

export default function Navbar({ minimal = false }: NavbarProps) {
  return (
    <nav className="flex items-center gap-12 px-6 py-3 rounded-full bg-mnd-cream">
      <img src="/landing/mnd-black-logo.png" alt="MND Logo" className="h-14 w-auto" />
      {!minimal && (
        <>
          <Link href="#">The MND way</Link>
          <Link href="#">We do more stuff</Link>
          <Link href="#">The MND Corner</Link>
          <Link href="#">Be our people</Link>
        </>
      )}
      <Link href="#" className="px-8 py-2 bg-mnd-navy text-white rounded-full">Let&apos;s talk</Link>
    </nav>
  );
}
