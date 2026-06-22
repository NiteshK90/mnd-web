"use client";

import { forwardRef, useState, useRef, useEffect } from "react";

const FooterSection = forwardRef<HTMLElement, { containerId?: string }>(({ containerId = "landing-container" }, ref) => {
  const [inView, setInView] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);

  const setRef = (el: HTMLElement | null) => {
    footerRef.current = el;
    if (typeof ref === "function") ref(el);
    else if (ref) (ref as { current: HTMLElement | null }).current = el;
  };

  useEffect(() => {
    const el = footerRef.current;
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
    <footer
      ref={setRef}
      className="bg-mnd-linen bg-[url('/landing/footer.png')] bg-cover bg-center h-screen w-full snap-start flex flex-col justify-between"
    >
      <div className="flex flex-col items-center justify-center gap-4 px-6 md:px-0">
        <div className={`flex justify-center pt-5 ${animate("[transition-delay:0ms]")}`}>
          <button
            onClick={() => document.getElementById(containerId)?.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 rounded-full border-[1.5px] border-white/70 bg-transparent flex items-center justify-center cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 13l6-6 6 6" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <h2 className={`font-playfair text-[42px] md:text-[68px] font-light leading-[0.92] mt-6 md:mt-12 tracking-[-0.04em] text-mnd-dark text-center w-full md:w-[400px] ${animate("[transition-delay:300ms]")}`}>
          Ready when you are.
        </h2>

        <div className={`w-[48px] h-[2px] bg-mnd-dark opacity-40 ${animate("[transition-delay:600ms]")}`} />

        <p className={`font-sans text-base md:text-lg font-normal leading-[1.4] text-mnd-dark text-center opacity-60 ${animate("[transition-delay:900ms]")}`}>
          Let&apos;s build something great together.
        </p>

        <a
          href="mailto:hello@mynextdeveloper.com?subject=Schedule a Call"
          className={`flex items-center gap-2 md:gap-3 py-1.5 px-4 md:px-5 rounded-full bg-[#0D0D0F] text-white font-sans text-sm font-normal hover:scale-[1.05] hover:shadow-[0_6px_20px_rgba(0,0,0,0.4)] active:scale-[0.96] active:shadow-none ${animate("[transition-delay:1200ms]")}`}
        >
          <span className="flex items-center justify-center w-5 h-5">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="4" width="16" height="14" rx="2" stroke="white" strokeWidth="1.5" />
              <path d="M2 8h16" stroke="white" strokeWidth="1.5" />
              <path d="M6 2v3M14 2v3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
          Schedule a call
          <span className="text-[16px]">→</span>
        </a>
      </div>

      <div className="pt-2 md:pt-3 pb-4 md:pb-5 bg-[#090909] flex items-center justify-between px-6 md:px-[72px]">
        <button className="flex items-center h-8 md:h-10 px-4 md:px-8 rounded-full border-[1.5px] border-white/20 text-white/50 font-sans text-sm md:text-[18px] font-normal">
          Compliances
        </button>

        <span className="font-playfair text-[26px] md:text-[38px] font-normal text-white/70">MND</span>

        <button className="flex items-center h-8 md:h-10 px-4 md:px-8 rounded-full border-[1.5px] border-white/20 text-white/50 font-sans text-sm md:text-[18px] font-normal">
          Privacy
        </button>
      </div>
    </footer>
  );
});

FooterSection.displayName = "FooterSection";
export default FooterSection;
