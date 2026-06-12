"use client";

import { useRef, useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import StickyNavbar from "@/components/StickyNavbar";
import Link from "next/link";
import ArrowRight from "@/components/icons/ArrowRight";

const sections = [
  { label: "About" },
  { label: "Services" },
  { label: "Work" },
  { label: "Process" },
  { label: "Team" },
  { label: "Testimonials" },
  { label: "Contact" },
];

const TOTAL_SECTIONS = sections.length + 2; // Hero + sections + Footer

export default function Landing() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target as HTMLElement);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { root: container, threshold: 0.5 }
    );

    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={containerRef} className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <section
        ref={(el) => { sectionRefs.current[0] = el; }}
        className="relative bg-[url('/landing/hero.png')] bg-cover bg-center h-screen w-full snap-start py-6 px-20 flex flex-col"
      >
        <div className="flex justify-center px-6">
          <Navbar />
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <div className="font-canela text-[98px] font-semibold leading-[96px] tracking-[-2.5px] w-[600px] text-mnd-dark">
            Stellar engineers on bench for you.
          </div>
          <div className="mt-6 flex items-center gap-6">
            <Link href="#" className="flex items-center gap-2 px-8 py-2 bg-mnd-navy text-white rounded-full">
              <div>Ready when you are</div>
              <ArrowRight color="white" />
            </Link>
          </div>
        </div>
      </section>

      <div className="relative py-6 bg-mnd-linen">
        <StickyNavbar />
        {sections.map(({ label }, i) => (
          <section
            key={label}
            ref={(el) => { sectionRefs.current[i + 1] = el; }}
            className="h-screen w-full snap-start flex items-center justify-center"
          >
            <h2 className="text-white text-4xl font-bold">{label}</h2>
          </section>
        ))}
      </div>

      <footer
        ref={(el) => { sectionRefs.current[TOTAL_SECTIONS - 1] = el; }}
        className="bg-mnd-linen bg-[url('/landing/footer.png')] bg-cover bg-center h-screen w-full snap-start flex items-center justify-center"
      >
        <p className="text-white text-sm tracking-widest">© MND</p>
      </footer>

      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
        {Array.from({ length: TOTAL_SECTIONS }).map((_, i) => {
          const isWhiteSection = activeIndex === 0 || activeIndex === TOTAL_SECTIONS - 1;
          const isActive = i === activeIndex;
          return (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h-4 w-4 rounded-full transition-all duration-300 cursor-pointer border ${
                isWhiteSection
                  ? `border-white ${isActive ? "bg-white" : "bg-transparent"}`
                  : `border-black ${isActive ? "bg-black" : "bg-transparent"}`
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
