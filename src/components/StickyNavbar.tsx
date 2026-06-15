import Image from "next/image";
import Link from "next/link";

export default function StickyNavbar() {
  return (
    <div className="sticky top-6 left-0 right-0 flex justify-center z-50">
      <nav className="flex items-center gap-12 px-6 py-3 rounded-full bg-mnd-ivory">
        <img src="/landing/mnd-black-logo.png" alt="MND Logo" className="h-14 w-auto" />
        <Link href="#" className="px-8 py-2 bg-mnd-navy text-white rounded-full">Let&apos;s talk</Link>
      </nav>
    </div>
  );
}
