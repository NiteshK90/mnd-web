"use client";

import { Fragment, forwardRef, useState, useEffect, useRef, useCallback } from "react";

const blocks = [
  { label: "FOR EVERY", number: "10", description: "Engineers Invited To Apply" },
  { label: "ONLY", number: "3", description: "MAKE IT TO THE TALENT POOL" },
];

const cards = [
  {
    top: "Sourcing",
    quote: "We find them. They don't find us.\nEngineers apply on invitation.",
    body: "Hand-picked and filtered, we actually chat with each engineer before they begin the process with MND.",
  },
  {
    top: "Filtering the Real Coders",
    quote: "The bar is high and the rubric is non-negotiable.",
    body: "We're looking for strong fundamentals, clean code, and the ability to reason through an unfamiliar problem. Most candidates drop out here.",
  },
  {
    top: "Filtering for Empathy",
    quote: "Technology depth meets vibe check",
    body: "This is where we separate “can code” from “can be trusted on a client’s product.” We’re really assessing for communication and conflict management.",
  },
  {
    top: "Welcome to the 3% Club",
    quote: "Rejection is the default. Selections mean we'd happily put them on our own product.",
    body: "The select ones are paired with senior mentors, plugged into peer review, and matched only with projects where they'll do their best work.",
  },
];

const CareerSection = forwardRef<HTMLElement>((_, ref) => {
  const [inView, setInView] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);
  const visibleCountRef = useRef(0);
  const lockedRef = useRef(false);
  const lockTimeRef = useRef(0);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  const updateVisible = useCallback((n: number) => {
    visibleCountRef.current = n;
    setVisibleCount(n);
  }, []);

  const setRef = useCallback(
    (el: HTMLElement | null) => {
      sectionRef.current = el;
      if (typeof ref === "function") ref(el);
      else if (ref) (ref as React.RefObject<HTMLElement | null>).current = el;
    },
    [ref]
  );

  // Detect section entering viewport
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

  // Auto-reveal first card after entry animations complete (desktop only)
  useEffect(() => {
    if (!inView || window.innerWidth < 768) return;
    const timer = setTimeout(() => {
      if (visibleCountRef.current === 0) updateVisible(1);
    }, 1500);
    return () => clearTimeout(timer);
  }, [inView, updateVisible]);

  // On mobile, reveal all cards immediately
  useEffect(() => {
    if (window.innerWidth < 768) updateVisible(cards.length);
  }, [updateVisible]);

  const base = "transition-all duration-[1100ms] ease-out";
  const hidden = "opacity-0 translate-y-5";
  const shown = "opacity-100 translate-y-0";
  const animate = (delay: string) => `${base} ${inView ? shown : hidden} ${delay}`;

  const allCardsShown = visibleCount === cards.length;
  const animateLast = (delay: string) => `${base} ${allCardsShown ? shown : hidden} ${delay}`;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.innerWidth < 768) return;

    const scheduleUnlock = () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(() => {
        const elapsed = Date.now() - lockTimeRef.current;
        if (elapsed >= 600) {
          lockedRef.current = false;
        } else {
          idleTimerRef.current = setTimeout(() => { lockedRef.current = false; }, 600 - elapsed);
        }
      }, 200);
    };

    const handleWheel = (e: WheelEvent) => {
      const rect = section.getBoundingClientRect();
      if (Math.abs(rect.top) > 5) return;

      const current = visibleCountRef.current;

      if (e.deltaY > 0) {
        if (current < cards.length) {
          e.preventDefault();
          scheduleUnlock();
          if (lockedRef.current) return;
          lockedRef.current = true;
          lockTimeRef.current = Date.now();
          updateVisible(current + 1);
        } else if (lockedRef.current) {
          e.preventDefault();
          scheduleUnlock();
        }
      } else if (e.deltaY < 0) {
        e.preventDefault();
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      const rect = section.getBoundingClientRect();
      if (Math.abs(rect.top) > 5) return;
      const delta = touchStartY - e.changedTouches[0].clientY;
      const current = visibleCountRef.current;
      if (delta > 50 && current < cards.length) {
        updateVisible(current + 1);
      }
    };

    section.addEventListener("wheel", handleWheel, { passive: false });
    section.addEventListener("touchstart", handleTouchStart, { passive: true });
    section.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      section.removeEventListener("wheel", handleWheel);
      section.removeEventListener("touchstart", handleTouchStart);
      section.removeEventListener("touchend", handleTouchEnd);
    };
  }, [updateVisible]);

  return (
    <section
      ref={setRef}
      className="h-screen w-full snap-start flex items-center justify-center px-6 md:px-20 overflow-hidden pt-20 md:pt-24"
    >
      <div className="w-full">
        {/* Section headline */}
        <p className={`font-playfair text-[22px] md:text-[36px] font-normal leading-[1.333] tracking-[-0.03em] text-mnd-charcoal ${animate("[transition-delay:0ms]")}`}>
          Oh, & we&apos;re very picky about our talent pool –
        </p>


        <div className="flex items-center justify-between md:justify-normal gap-3 md:gap-6 mt-6 md:mt-12">
          {/* Stat block: FOR EVERY 10 */}
          <div className="flex flex-col items-center gap-2 justify-center shrink-0 w-[70px] md:w-[100px]">
            <span className={`font-inter text-[8px] font-semibold tracking-[0.2em] uppercase text-mnd-charcoal ${animate("[transition-delay:400ms]")}`}>
              {blocks[0].label}
            </span>
            <span className={`font-playfair text-[40px] md:text-[72px] font-bold leading-none text-mnd-charcoal ${animate("[transition-delay:600ms]")}`}>
              {blocks[0].number}
            </span>
            <span className={`mt-2 w-full text-center font-inter text-[8px] font-semibold tracking-[0.2em] uppercase text-mnd-charcoal ${animate("[transition-delay:800ms]")}`}>
              {blocks[0].description}
            </span>
          </div>

          {/* Journey progress bar */}
          <div className={`hidden md:flex flex-1 h-[68px] bg-white rounded-full shadow-progress items-center px-8 gap-0 ${animate("[transition-delay:1100ms]")}`}>
            {cards.map((_, i) => (
              <Fragment key={i}>
                <div
                  className="w-4 h-4 rounded-full border border-mnd-charcoal shrink-0"
                  style={{
                    backgroundColor: i < visibleCount ? "#1a1a1a" : "#ffffff",
                    transition: "background-color 0.4s ease",
                  }}
                />
                {i < cards.length - 1 && (
                  <div
                    className="flex-1 shrink-0"
                    style={{
                      height: i + 1 < visibleCount ? "4px" : "2px",
                      backgroundColor: i + 1 < visibleCount ? "#1a1a1a" : "#d1d5db",
                      transition: "background-color 0.4s ease, height 0.4s ease",
                    }}
                  />
                )}
              </Fragment>
            ))}
          </div>

          {/* Stat block: ONLY 3 */}
          <div className="flex flex-col items-center gap-2 justify-center shrink-0 w-[70px] md:w-[100px]">
            <span className={`font-inter text-[8px] font-semibold tracking-[0.2em] uppercase text-mnd-charcoal ${animateLast("[transition-delay:0ms]")}`}>
              {blocks[1].label}
            </span>
            <span className={`font-playfair text-[40px] md:text-[72px] font-bold leading-none text-mnd-charcoal ${animateLast("[transition-delay:300ms]")}`}>
              {blocks[1].number}
            </span>
            <span className={`mt-2 w-full text-center font-inter text-[8px] font-semibold tracking-[0.2em] uppercase text-mnd-charcoal ${animateLast("[transition-delay:600ms]")}`}>
              {blocks[1].description}
            </span>
          </div>
        </div>

        {/* Step cards */}
        <div className="mt-5 md:mt-8 flex md:justify-center gap-6 md:gap-8 overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden md:overflow-visible pb-3 md:pb-0 md:px-0">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-[16px] md:rounded-[20px] shadow-card py-5 md:py-7 px-3 md:px-4 flex flex-col gap-3 md:gap-4 flex-shrink-0 w-[78vw] md:w-[250px] min-h-[280px] md:min-h-[320px]"
              style={{
                transform: i < visibleCount ? "translateY(0)" : "translateY(60px)",
                opacity: i < visibleCount ? 1 : 0,
                transition: "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.45s ease",
                pointerEvents: i < visibleCount ? "auto" : "none",
              }}
            >
              {/* Step title */}
              <h3 className="font-playfair text-[18px] font-bold leading-[1.333] text-mnd-charcoal">
                {card.top}
              </h3>
              <div className="w-10 md:w-16 h-[2px] md:h-[3px] bg-mnd-charcoal" />
              <div className="flex items-start gap-2">
                <span className="font-inter text-[46px] font-bold italic text-mnd-charcoal leading-none">&ldquo;</span>
                <p className="font-inter text-[10px] md:text-xs italic font-normal leading-[1.3] mt-2">
                  {card.quote.replace(/\n/g, " ")}
                </p>
              </div>
              <p className="font-inter w-full text-[16px] font-bold leading-[1.333] text-mnd-charcoal">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

CareerSection.displayName = "CareerSection";
export default CareerSection;
