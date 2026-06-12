import Image from "next/image";

export default function StickyNavbar() {
  return (
    <div className="sticky top-6 left-0 right-0 flex justify-center z-50">
      <nav className="flex items-center px-9 py-5 rounded-full bg-mnd-cream">
        <Image src="/landing/mnd-black-logo.png" alt="MND Logo" width={80} height={36} className="h-9 w-auto" />
      </nav>
    </div>
  );
}
