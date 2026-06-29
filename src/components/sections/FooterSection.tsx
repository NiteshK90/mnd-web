"use client";

import React, { forwardRef, useState, useRef, useEffect } from "react";
import Link from "next/link";
import { PhoneIcon, PencilLineIcon, MapPinIcon, CaretUpIcon, ArrowRightIcon } from "@phosphor-icons/react";

const navColumns = [
  {
    title: "Explore",
    links: [
      { label: "Values", href: "/mnd-way#values" },
      { label: "Other Services", href: "/other-stuff" },
      { label: "Resources", href: "/mnd-corner" },
      { label: "Relationships", href: "/our-people" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "POSH Compliance", href: "#" },
      { label: "IAF Certification", href: "https://www.iafcertsearch.org/", external: true },
      { label: "Amrita | Startup India", href: "https://www.amrita.edu/", external: true },
      { label: "MND for LLMs", href: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Schedule a Call", href: "https://cal.com/jigarmehta/immediate-meeting", icon: PhoneIcon, external: true },
      { label: "Write to Us", href: "mailto:business@mynextdeveloper.com", icon: PencilLineIcon },
      { label: "India Office", href: "https://www.google.com/maps/place/MyNextDeveloper/@18.9521133,72.791126,878m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be7d1cf0d90cc6d:0xdceb0bf6408576d1!8m2!3d18.9521133!4d72.7937009!16s%2Fg%2F11shhd5qn1?entry=ttu&g_ep=EgoyMDI2MDYyMy4wIKXMDSoASAFQAw%3D%3D", icon: MapPinIcon, external: true },
    ],
  },
];

const FooterSection = forwardRef<HTMLElement, { containerId?: string }>(({ containerId = "landing-container" }, ref) => {
  const [inView, setInView] = useState(false);
  const [barInView, setBarInView] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setBarInView(true); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const base = "transition-all duration-[1100ms] ease-out";
  const hidden = "opacity-0 translate-y-5";
  const visible = "opacity-100 translate-y-0";
  const animate = (delay: string) => `${base} ${inView ? visible : hidden} ${delay}`;

  const barBase = "transition-all duration-[700ms] ease-out";
  const barAnimate = (delayMs: number) => ({
    cls: `${barBase} ${barInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`,
    sty: { transitionDelay: `${delayMs}ms` } as React.CSSProperties,
  });

  return (
    <footer
      ref={setRef}
      className="bg-mnd-beige min-h-screen w-full snap-start flex flex-col"
    >
      {/* Hero area */}
      <div className="flex-1 flex flex-col items-center justify-start gap-6 md:gap-8 px-6 md:px-20 bg-[url('/landing/footer.png')] bg-cover bg-center">
        {/* Scroll to top */}
        <div className={`flex justify-center pt-5 ${animate("[transition-delay:0ms]")}`}>
          <button
            onClick={() => document.getElementById(containerId)?.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 rounded-full border-[1.5px] border-[#0D0D0F] bg-transparent flex items-center justify-center cursor-pointer"
          >
            <CaretUpIcon size={28} weight="bold" color="#0D0D0F" />
          </button>
        </div>

        <h2 className={`font-playfair text-[24px] md:text-[42px] font-bold leading-[0.92] tracking-[-0.04em] text-mnd-dark text-center whitespace-nowrap mt-4 md:mt-10 ${animate("[transition-delay:300ms]")}`}>
          Ready when you are.
        </h2>


      <div className={animate("[transition-delay:1200ms]")}>
        <Link
          href="https://cal.com/jigarmehta/immediate-meeting"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 md:gap-3 py-1.5 px-6 md:px-8 rounded-full bg-[#0D0D0F] text-white font-inter text-xs font-bold transition-all duration-200 hover:scale-[1.05] hover:shadow-[0_6px_20px_rgba(0,0,0,0.4)] active:scale-[0.96] active:shadow-none"
        >
          Schedule a call
          <ArrowRightIcon size={26} />
        </Link>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div ref={barRef} className="bg-mnd-charcoal px-10 md:px-[150px] py-12 md:py-16">
        <div className="flex items-start gap-10 max-md:flex-col max-md:gap-6">

          {/* Brand: logo + copyright */}
          <div className="flex flex-col gap-3 flex-[0_0_260px] max-md:flex-none">
            {(() => { const a = barAnimate(0); return <Link href="/"><img src="/mnd-white-logo.png" alt="MyNextDeveloper" className={`w-36 h-auto block mt-1 ${a.cls}`} style={a.sty} /></Link>; })()}
            {(() => { const a = barAnimate(120); return <p className={`text-[10px] font-light italic text-white tracking-wide leading-relaxed ${a.cls}`} style={a.sty}>2026 | All Rights Reserved</p>; })()}
          </div>

          {/* Nav columns */}
          <nav className="flex flex-1 justify-end gap-20 max-md:justify-start max-md:flex-wrap max-md:gap-x-8 max-md:gap-y-6" aria-label="Footer navigation">
            {(() => {
              // Sequential delays: Explore → Values → Other Services → Resources → Relationships →
              // Company → Privacy Policy → POSH Compliance → IAF Certification → Amrita → MND for LLMs →
              // Connect → Schedule a Call → Write to Us → India Office
              let seq = 2;
              return navColumns.map((col) => (
                // Column: title + links
                <div key={col.title} className="flex flex-col min-w-[130px]">
                  {(() => { const a = barAnimate(seq++ * 120); return <span className={`text-[13px] font-semibold text-white tracking-wide mb-1 ${a.cls}`} style={a.sty}>{col.title}</span>; })()}
                  {col.links.map((link) => {
                    const a = barAnimate(seq++ * 120);
                    return (
                      <div key={link.label} className={a.cls} style={a.sty}>
                        <Link
                          href={link.href}
                          {...("external" in link && link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="inline-flex items-center gap-1.5 text-[13px] font-normal text-white/70 hover:text-white hover:font-bold transition-colors duration-150"
                        >
                          {"icon" in link && link.icon ? <link.icon size={14} /> : null}
                          {link.label}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              ));
            })()}
          </nav>
        </div>
      </div>
    </footer>
  );
});

FooterSection.displayName = "FooterSection";
export default FooterSection;
