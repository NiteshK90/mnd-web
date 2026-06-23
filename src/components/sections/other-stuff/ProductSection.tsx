"use client";

import { forwardRef, useRef, useEffect, useState } from "react";
import { CubeIcon } from "@phosphor-icons/react";

const ProductSection = forwardRef<HTMLElement>((_, ref) => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const setRef = (el: HTMLElement | null) => {
    sectionRef.current = el;
    if (typeof ref === "function") ref(el);
    else if (ref) (ref as { current: HTMLElement | null }).current = el;
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const base = "transition-all duration-[1100ms] ease-out";
  const hidden = "opacity-0 translate-y-5";
  const visible = "opacity-100 translate-y-0";
  const animate = (delay: string) => `${base} ${inView ? visible : hidden} ${delay}`;

  return (
    <section ref={setRef} className="min-h-screen w-full snap-start flex flex-col md:flex-row pt-20 pb-16 px-6 md:pt-24 md:pb-24 md:px-32">
      <div className="flex items-center justify-start">
        <div className="flex flex-col gap-8 md:gap-16">
          <p className={`font-playfair font-normal text-[28px] md:text-[40px] leading-[1.33] tracking-normal text-mnd-charcoal ${animate("[transition-delay:0ms]")}`}>
            All the peripheral<br />
            services your product<br />
            needs to keep it<br />
            moving.
          </p>
          <div className={`w-[62px] h-[5px] bg-mnd-charcoal ${animate("[transition-delay:200ms]")}`} />
          <p className={`font-playfair font-bold italic text-[28px] md:text-[40px] leading-[1.33] tracking-normal text-mnd-charcoal ${animate("[transition-delay:400ms]")}`}>
            With the same MND<br />
            guarantee.
          </p>
        </div>
      </div>

      {/* Mobile: card grid */}
      <div className={`mt-10 grid grid-cols-2 gap-3 md:hidden ${animate("[transition-delay:300ms]")}`}>
        {[
          { title: "AI Services & Integration", desc: "The intelligent layer that works for you" },
          { title: "Business Process Outsourcing", desc: "People that keep your business moving" },
          { title: "Employee on Record", desc: "Keeping people you need for when you need them" },
          { title: "Offshore Accounting", desc: "Keeping the number clean, compliant and affordable" },
          { title: "Digital Marketing", desc: "Creative strategies that get you seen and chosen" },
          { title: "Quick MVP Development", desc: "The fastest way from idea to product" },
        ].map(({ title, desc }) => (
          <div key={title} className="rounded-[20px] border border-[#707070] bg-mnd-linen px-4 py-4">
            <p className="font-playfair font-bold text-[11px] leading-[1.35] text-mnd-charcoal">{title}</p>
            <p className="mt-1 font-inter font-normal text-[9px] leading-[1.45] text-mnd-charcoal">{desc}</p>
          </div>
        ))}
      </div>

      {/* Desktop: ring diagram — entire diagram fades in as one unit */}
      <div className={`flex-1 hidden md:flex items-center justify-center ${animate("[transition-delay:300ms]")}`}>
        <div className="relative mx-auto h-[650px] w-[650px] scale-[0.9] origin-center">

          {/* Outer Ring */}
          <div className="absolute left-1/2 top-1/2 h-[580px] w-[580px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#707070]" />

          {/* Outer Ring Dots (between cards, clockwise from top-right) */}
          <div className="absolute left-[465px] top-[69px] h-[10px] w-[10px] rounded-full border border-[#707070] bg-mnd-linen" />
          <div className="absolute left-[610px] top-[320px] h-[10px] w-[10px] rounded-full border border-[#707070] bg-mnd-linen" />
          <div className="absolute left-[465px] top-[571px] h-[10px] w-[10px] rounded-full border border-[#707070] bg-mnd-linen" />
          <div className="absolute left-[175px] top-[571px] h-[10px] w-[10px] rounded-full border border-[#707070] bg-mnd-linen" />
          <div className="absolute left-[30px] top-[320px] h-[10px] w-[10px] rounded-full border border-[#707070] bg-mnd-linen" />
          <div className="absolute left-[175px] top-[69px] h-[10px] w-[10px] rounded-full border border-[#707070] bg-mnd-linen" />

          {/* Middle Ring */}
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#707070]" />

          {/* Center Circle */}
          <div className="absolute left-1/2 top-1/2 flex h-[273px] w-[273px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#707070]">
            <div className="mb-2">
              <CubeIcon size={32} weight="light" />
            </div>
            <p className="font-inter font-normal text-[8px] leading-none tracking-[0.25em] uppercase">
              Your Product
            </p>
          </div>

          {/* Top */}
          <div className="absolute left-1/2 top-[13px] w-[195px] -translate-x-1/2 rounded-[26px] border border-[#707070] bg-mnd-linen px-5 py-3">
            <p className="font-playfair font-bold text-[11px] leading-[1.35]">AI Services & Integration</p>
            <p className="mt-1 font-inter font-normal text-[9px] leading-[1.45]">The intelligent layer that works for you</p>
          </div>

          {/* Right Top */}
          <div className="absolute right-0 top-[179px] w-[195px] rounded-[26px] border border-[#707070] bg-mnd-linen px-5 py-3">
            <p className="font-playfair font-bold text-[11px] leading-[1.35]">Business Process Outsourcing</p>
            <p className="mt-1 font-inter font-normal text-[9px] leading-[1.45]">People that keep your business moving</p>
          </div>

          {/* Right Bottom */}
          <div className="absolute bottom-[166px] right-0 w-[195px] rounded-[26px] border border-[#707070] bg-mnd-linen px-5 py-3">
            <p className="font-playfair font-bold text-[11px] leading-[1.35]">Employee on Record</p>
            <p className="mt-1 font-inter font-normal text-[9px] leading-[1.45]">Keeping people you need for when you need them</p>
          </div>

          {/* Bottom */}
          <div className="absolute bottom-[13px] left-1/2 w-[195px] -translate-x-1/2 rounded-[26px] border border-[#707070] bg-mnd-linen px-5 py-3">
            <p className="font-playfair font-bold text-[11px] leading-[1.35]">Offshore Accounting</p>
            <p className="mt-1 font-inter font-normal text-[9px] leading-[1.45]">Keeping the number clean, compliant and affordable</p>
          </div>

          {/* Left Bottom */}
          <div className="absolute bottom-[166px] left-0 w-[195px] rounded-[26px] border border-[#707070] bg-mnd-linen px-5 py-3">
            <p className="font-playfair font-bold text-[11px] leading-[1.35]">Digital Marketing</p>
            <p className="mt-1 font-inter font-normal text-[9px] leading-[1.45]">Creative strategies that get you seen and chosen</p>
          </div>

          {/* Left Top */}
          <div className="absolute left-0 top-[179px] w-[195px] rounded-[26px] border border-[#707070] bg-mnd-linen px-5 py-3">
            <p className="font-playfair font-bold text-[11px] leading-[1.35]">Quick MVP Development</p>
            <p className="mt-1 font-inter font-normal text-[9px] leading-[1.45]">The fastest way from idea to product</p>
          </div>
        </div>
      </div>
    </section>
  );
});

ProductSection.displayName = "ProductSection";
export default ProductSection;
