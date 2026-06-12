import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="flex items-center gap-12 px-9 py-5 rounded-full bg-mnd-cream"
    >
      <Image src="/landing/mnd-black-logo.png" alt="MND Logo" width={80} height={36} className="h-9 w-auto" />
      <Link href="#">The MND way</Link>
      <Link href="#">We do more stuff</Link>
      <Link href="#">The MND Corner</Link>
      <Link href="#">Be our people</Link>
      <Link href="#" className="px-8 py-2 bg-mnd-navy text-white rounded-full">Let&apos;s talk</Link>
    </nav>
  );
}
