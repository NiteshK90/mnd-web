"use client";

import { forwardRef, useState, useEffect, useRef, useCallback } from "react";

const blocks = [
  { label: "FOR EVERY", number: "10", description: "Engineers Invited To Apply" },
  { label: "ONLY", number: "3", description: "MAKE IT TO THE TALENT POOL" },
];

const cards = [
  {
    top: "Sourcing",
    quote: "We find them. They don’t find us.\nEngineers apply on invitation.",
    body: "Hand-picked and filtered, we actually chat with each engineer before they begin the process with MND.",
  },
  {
    top: "Filtering the Real Coders",
    quote: "The bar is high and the rubric is non-negotiable.",
    body: "We’re looking for strong fundamentals, clean code, and the ability to reason through an unfamiliar problem. Most candidates drop out here.",
  },
  {
    top: "Filtering for Empathy",
    quote: "Technology depth meets vibe check",
    body: "This is where we separate “can code” from “can be trusted on a client’s product.” We’re really assessing for communication and conflict management.",
  },
  {
    top: "Welcome to the 3% Club",
    quote: "Rejection is the default. Selections mean we’d happily put them on our own product.",
    body: "The select ones are paired with senior mentors, plugged into peer review, and matched only with projects where they’ll do their best work.",
  },
];

const CareerSection = forwardRef<HTMLElement>((_, ref) => {
  const [visibleCount, setVisibleCount] = useState(1);
  const visibleCountRef = useRef(1);
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

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Schedule unlock: 200ms after last wheel event, but never before 600ms from lock start.
    // This prevents momentum scroll (which fires events for ~800ms after lift) from
    // triggering a second card reveal before the first one has even finished.
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
          // Cards still to reveal
          e.preventDefault();
          scheduleUnlock();
          if (lockedRef.current) return;
          lockedRef.current = true;
          lockTimeRef.current = Date.now();
          updateVisible(current + 1);
        } else if (lockedRef.current) {
          // All cards shown, but same gesture is still going — keep blocking
          // so momentum scroll doesn't immediately snap to next section
          e.preventDefault();
          scheduleUnlock();
        }
        // lockedRef false + all cards shown → no preventDefault → snap fires
      } else if (e.deltaY < 0) {
        if (current > 1) {
          e.preventDefault();
          scheduleUnlock();
          if (lockedRef.current) return;
          lockedRef.current = true;
          lockTimeRef.current = Date.now();
          updateVisible(current - 1);
        } else if (lockedRef.current) {
          // First card, same gesture still going
          e.preventDefault();
          scheduleUnlock();
        }
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
      } else if (delta < -50 && current > 1) {
        updateVisible(current - 1);
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
      className="h-screen w-full snap-start flex items-center justify-center px-12 overflow-hidden"
    >
      <div className="w-full">
        <p className="font-canela text-[42px] font-normal leading-[1.1] tracking-[-0.03em] text-mnd-charcoal">
          Oh, & we&apos;re very picky about our talent pool –
        </p>
        <div className="flex items-center gap-6 mt-12">
          {/* Block 1 */}
          <div className="flex flex-col items-center gap-2 justify-center shrink-0">
            <span className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-mnd-charcoal">
              {blocks[0].label}
            </span>
            <span className="font-canela text-[64px] font-bold leading-none text-mnd-charcoal">
              {blocks[0].number}
            </span>
            <span className="w-[150px] text-center font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-mnd-charcoal">
              {blocks[0].description}
            </span>
          </div>

          {/* Progress bar */}
          <div className="flex-1 w-[650px] h-[68px] bg-white rounded-full shadow-progress flex items-center px-8 gap-0">
            <div className="w-4 h-4 rounded-full border-1 border-mnd-charcoal bg-black shrink-0" />
            <div className="flex-1 h-1 bg-black" />
            <div className="w-4 h-4 rounded-full border-1 border-mnd-charcoal bg-white shrink-0" />
            <div className="flex-1 h-0.5 bg-mnd-silver" />
            <div className="w-4 h-4 rounded-full border-1 border-mnd-charcoal bg-white shrink-0" />
            <div className="flex-1 h-0.5 bg-mnd-silver" />
            <div className="w-4 h-4 rounded-full border-1 border-mnd-charcoal bg-white shrink-0" />
          </div>

          {/* Block 2 */}
          <div className="flex flex-col items-center gap-2 justify-center shrink-0">
            <span className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-mnd-charcoal">
              {blocks[1].label}
            </span>
            <span className="font-canela text-[64px] font-bold leading-none text-mnd-charcoal">
              {blocks[1].number}
            </span>
            <span className="w-[150px] text-center font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-mnd-charcoal">
              {blocks[1].description}
            </span>
          </div>
        </div>

        <div className="mt-8 flex gap-4 px-12">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-[28px] shadow-card py-12 px-6 flex flex-col gap-6"
              style={{
                transform: i < visibleCount ? "translateY(0)" : "translateY(60px)",
                opacity: i < visibleCount ? 1 : 0,
                transition: "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.45s ease",
                pointerEvents: i < visibleCount ? "auto" : "none",
              }}
            >
              <h3 className="font-canela text-[24px] font-semibold leading-[1.1] text-mnd-charcoal">
                {card.top}
              </h3>
              <div className="w-16 h-[3px] bg-mnd-charcoal" />
              <div className="flex items-center gap-4 justify-end">
                <div className="text-[58px] italic">&ldquo;</div>
                <p className="font-sans text-xs italic font-medium leading-[1.3]">
                  {card.quote.split("\n").map((line, j, arr) => (
                    <span key={j}>
                      {line}
                      {j < arr.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
              <p className="font-sans w-[250px] text-sm font-bold leading-[1.35] text-mnd-charcoal">
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
