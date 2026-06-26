"use client";

import { forwardRef, useState, useRef, useEffect } from "react";
import Link from "next/link";
import { PhoneIcon, PencilLineIcon, MapPinIcon, CaretUpIcon, ArrowRightIcon } from "@phosphor-icons/react";

const navColumns = [
  {
    title: "Explore",
    links: [
      { label: "Values", href: "#" },
      { label: "Other Services", href: "#" },
      { label: "Resources", href: "#" },
      { label: "Relationships", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "POSH Compliance", href: "#" },
      { label: "IAF Certification", href: "#" },
      { label: "Amrita | Startup India", href: "#" },
      { label: "MND for LLMs", href: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Schedule a Call", href: "#", icon: PhoneIcon },
      { label: "Write to Us", href: "#", icon: PencilLineIcon },
      { label: "India Office", href: "#", icon: MapPinIcon },
      { label: "USA Office", href: "#", icon: MapPinIcon },
    ],
  },
];

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
      className="bg-mnd-beige min-h-screen w-full snap-start flex flex-col"
    >
      {/* Footer Hero */}
      <div className="flex-1 flex flex-col items-center justify-start gap-6 md:gap-8 px-6 md:px-20 bg-[url('/landing/footer.png')] bg-cover bg-center">
        {/* Move to top */}
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
      <div className="bg-mnd-charcoal px-6 md:px-[72px] py-8 md:py-10">
        <div className="flex items-start gap-10 max-md:flex-col max-md:gap-6">

          {/* Brand: logo + copyright */}
          <div className="flex flex-col gap-3 flex-[0_0_260px] max-md:flex-none">
            <img src="/mnd-white-logo.png" alt="MyNextDeveloper" className="w-44 h-auto block" />
            <p className="text-[10px] font-light text-white tracking-wide leading-relaxed">
              2026 | All Rights Reserved
            </p>
          </div>

          {/* Nav columns */}
          <nav className="flex flex-1 justify-end gap-20 max-md:justify-start max-md:flex-wrap max-md:gap-x-8 max-md:gap-y-6" aria-label="Footer navigation">

            {navColumns.map((col) => (
              <div key={col.title} className="flex flex-col gap-2 min-w-[130px]">
                <span className="text-[13px] font-semibold text-white tracking-wide mb-1">{col.title}</span>
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-[13px] font-normal text-white/70 hover:text-white hover:font-bold transition-colors duration-150"
                  >
                    {"icon" in link && link.icon ? <link.icon size={14} /> : null}
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}

          </nav>
        </div>
      </div>
    </footer>
  );
});

FooterSection.displayName = "FooterSection";
export default FooterSection;
