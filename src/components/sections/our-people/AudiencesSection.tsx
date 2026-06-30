"use client";

import { forwardRef, useRef, useEffect, useState } from "react";
import Link from "next/link";
import ArrowRight from "@/components/icons/ArrowRight";
import { ArrowRight as PhArrowRight, MinusIcon, PlusIcon } from "@phosphor-icons/react";

const ArrowIcon = () => (
  <PhArrowRight size={20} weight="regular" className="shrink-0 transition-transform group-hover/cta:translate-x-1" />
);

interface Cta {
  label: string;
  href: string;
}

interface CardData {
  header: string;
  question: string;
  ctas: Cta[];
  body: string[];
}

interface AccordionCardProps extends CardData {
  isOpen: boolean;
  onToggle: () => void;
}

const cards: CardData[] = [
  {
    header: "Engineer",
    question: "Do you like building things that\nactually work?",
    ctas: [
      // TODO(our-people-cta): link to active job listings page or filtered gigs board
      { label: "Check out our gigs", href: "#" },
      // TODO(our-people-cta): link to engineering talent pool application form
      { label: "Apply to our\nEngineering pool", href: "#" },
    ],
    body: [
      "Are you someone who genuinely cares about how products are made? Not just shipping, but the craft.",
      "And looking for gigs where you can flex that stellar on your terms, at your time?",
    ],
  },
  {
    header: "Founders",
    question: "Building something awesome and need the right team?",
    ctas: [
      // TODO(our-people-cta): link to founder/partner inquiry form or intake page
      { label: "Partner with Us", href: "#" },
    ],
    body: [
      "Are you building something ambitious and need a team that can actually keep up? Not just execute tickets, but think alongside you.",
      "And looking for people who care about the product as much as you do, even after launch day?",
    ],
  },
  {
    header: "Investors",
    question: "Backing ideas that need to get built fast?",
    ctas: [
      // TODO(our-people-cta): link to investor/portfolio-support inquiry form
      { label: "Support your portfolio", href: "#" },
    ],
    body: [
      "Backing founders with momentum but need trusted builders around them? The kind that move fast without creating future messes.",
      "And want technical partners who understand that speed only matters if the foundation survives scale?",
    ],
  },
  {
    header: "Client Partners",
    question: "Know great builders or founders?",
    ctas: [
      // TODO(our-people-cta): link to MND Patron referral/sign-up form
      { label: "Become an MND Patron", href: "#" },
    ],
    body: [
      "Know someone brilliant who deserves the right people around them? Someone building thoughtfully and aiming high.",
      "And want to connect them with a team that genuinely cares about doing the work properly?",
    ],
  },
];

const AccordionCard = ({ header, question, ctas, body, isOpen, onToggle }: AccordionCardProps) => {
  return (
    <div
      className="w-full bg-transparent border border-[#e2ddd6] rounded-[12px] px-4 md:px-8 py-4 cursor-pointer flex items-start justify-between gap-4 md:gap-8 shadow-[0_1px_8px_rgba(0,0,0,0.04)] transition-all duration-[400ms] ease-in-out hover:scale-[1.01]"
      onClick={onToggle}
    >
      {/* Details section */}
      <div className="flex flex-1 items-end justify-between mt-3 gap-4 md:gap-8">
        <div className="flex flex-col gap-2">
          {/* Badge */}
          <div>
            <span className="font-inter text-[10px] tracking-widest font-medium uppercase bg-[#ebe7e0] text-mnd-charcoal px-3 py-1 rounded-full w-fit inline-flex">
              {header}
            </span>
          </div>
          <h2 className="font-playfair text-[18px] md:text-[22px] text-mnd-charcoal font-semibold leading-tight">
            {question.split('\n').map((line, i) => (
              <span key={i}>{i > 0 && <br />}{line}</span>
            ))}
          </h2>

          {/* Expandable content */}
          <div className={`grid transition-[grid-template-rows,opacity] duration-[400ms] ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
            <div className="overflow-hidden">
              <hr className="border-[#ccc8c2] mt-6 mb-5 w-3/5" />
              <div className="font-inter text-mnd-charcoal text-[12px] leading-relaxed max-w-sm space-y-4">
                {body.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-4 justify-between">
          {ctas.map((cta, i) => (
            <a key={i} href={cta.href} className="flex flex-1 items-center justify-between gap-3 group/cta" onClick={e => e.stopPropagation()}>
              <span className="font-inter text-[10px] tracking-widest font-medium uppercase text-mnd-charcoal">
                {cta.label.split('\n').map((line, j) => (
                  <span key={j}>{j > 0 && <br />}{line}</span>
                ))}
              </span>
              <ArrowIcon />
            </a>
          ))}
        </div>
      </div>

      {/* Plus / minus icon — mt aligns with question below the badge */}
      {isOpen
        ? <MinusIcon size={24} weight="thin" className="text-mnd-charcoal shrink-0 mt-[20px]" />
        : <PlusIcon size={24} weight="thin" className="text-mnd-charcoal shrink-0 mt-[20px]" />
      }
    </div>
  );
};

const AudiencesSection = forwardRef<HTMLElement>((_, ref) => {
  const [inView, setInView] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  const cardBase = "transition-all duration-[600ms] ease-out";
  const animateCard = (i: number) => `${cardBase} ${inView ? visible : hidden} [transition-delay:${i * 500}ms]`;

  return (
    <section ref={setRef} className="min-h-screen w-full snap-start flex flex-col md:flex-row px-6 md:px-20 pt-20 md:pt-24 pb-12">
      {/* Left panel */}
      <div className="flex items-start md:items-center justify-start w-full md:w-auto">
        <div className="flex flex-col gap-8 md:gap-16">
          {/* Section headline */}
          <div className="flex flex-col gap-4">
            <p className={`font-playfair font-normal text-[22px] md:text-[36px] leading-[1.333] tracking-[-0.03em] text-mnd-charcoal ${animate("[transition-delay:200ms]")}`}>
              Do any of these<br />resonate with you?<br />Reach out anyway.
            </p>
          </div>
          <div className={`w-[62px] h-[5px] bg-mnd-charcoal ${animate("[transition-delay:400ms]")}`} />
          <p className={`font-playfair font-bold italic text-[18px] md:text-[36px] leading-[1.333] tracking-[-0.03em] text-mnd-charcoal ${animate("[transition-delay:600ms]")}`}>
            We love a new idea.
          </p>
          <Link
            href="https://www.linkedin.com/company/mynextdeveloper/posts"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 h-10 bg-mnd-navy text-white rounded-full w-fit transition-all duration-200 hover:scale-[1.05] hover:shadow-[0_6px_20px_rgba(2,48,71,0.4)] active:scale-[0.96] active:shadow-none ${animate("[transition-delay:800ms]")}`}
          >
            <span className="font-inter text-xs font-semibold">Let&apos;s connect</span>
            <ArrowRight color="white" size={32} strokeWidth={1} />
          </Link>
        </div>
      </div>

      {/* Right panel — accordion cards */}
      <div className="flex flex-1 items-center justify-center mt-12 md:mt-0 md:pl-16">
        <div className="w-full flex flex-col gap-3">
          {cards.map((card, i) => (
            <div key={i} className={animateCard(i)}>
              <AccordionCard
                {...card}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
});

AudiencesSection.displayName = "AudiencesSection";
export default AudiencesSection;
