import Link from "next/link";

interface StickyNavbarProps {
  dark?: boolean;
}

export default function StickyNavbar({ dark = false }: StickyNavbarProps) {
  // Sticky nav pill
  return (
    <div className="sticky top-6 left-0 right-0 flex justify-center z-50">
      <nav className={`flex items-center gap-12 px-6 py-3 rounded-full ${dark ? "bg-transparent border border-white" : "bg-mnd-ivory"}`}>
        {/* Logo */}
        {dark ? (
          <img src="/landing/mnd-white-logo.png" alt="MND Logo" className="h-4 w-auto" />
        ) : (
          <img src="/landing/mnd-black-logo.png" alt="MND Logo" className="h-14 w-auto" />
        )}
        {/* CTA button */}
        <Link href="#" className="px-8 py-2 bg-mnd-navy text-white rounded-full transition-all duration-200 hover:scale-[1.05] hover:shadow-[0_6px_20px_rgba(2,48,71,0.4)] active:scale-[0.96] active:shadow-none">Let&apos;s talk</Link>
      </nav>
    </div>
  );
}
