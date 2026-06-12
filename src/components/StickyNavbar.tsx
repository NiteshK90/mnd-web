import Image from "next/image";

export default function StickyNavbar() {
  return (
    <div className="sticky top-6 left-0 right-0 flex justify-center z-50">
      <nav className="flex items-center px-6 py-3 rounded-full bg-mnd-ivory">
        <img src="/landing/mnd-black-logo.png" alt="MND Logo" className="h-14 w-auto" />
      </nav>
    </div>
  );
}
