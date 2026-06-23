"use client";

import { forwardRef, useState, useRef, useEffect } from "react";

const startupCards = [
  {
    quote: "Need specialised expensive skills without burning runway on permanent hires?",
    mainText: "Why put short term hires on long term payrolls?",
  },
  {
    quote: "Never meeting deadlines, the team's always exhausted?",
    mainText: "Quickly get hands on deck when your team feels too overwhelmed!",
  },
  {
    quote: "Non-tech founder confused about how to go about the tech?",
    mainText: "Think of us as your technology partner!",
  },
];

const enterpriseCards = [
  {
    quote: "Need extra support for seasonal spikes and sudden launches?",
    mainText: "Scale your team in days, not months.",
  },
  {
    quote: "Need specialised expensive skills to build a few moving parts?",
    mainText: "Stop creating new permanent rigid roles for each new build.",
  },
  {
    quote: "Need to compensate for absentees or long leaves?",
    mainText: "Fill those critical gaps in delivery quickly and temporarily.",
  },
];

// Front card at bottom, back cards peek upward.
// Container = 340px: left edge at 0, right edge at 40+300=340.
const slotStyles = [
  { left: 20, top: 12, rotate: 0,  zIndex: 3 },
  { left: 0,  top: 6,  rotate: -3, zIndex: 2 },
  { left: 40, top: 0,  rotate: 3,  zIndex: 1 },
];

function CardDeck({ cards, category }: { cards: typeof startupCards; category: string }) {
  const [topIndex, setTopIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const n = cards.length;

  const cycle = () => {
    setTopIndex((p) => (p + 1) % n);
    setDragX(0);
    setDragging(false);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    startX.current = e.clientX;
    setDragging(true);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    setDragX(e.clientX - startX.current);
  };

  const onRelease = () => {
    if (Math.abs(dragX) > 80) cycle();
    else { setDragX(0); setDragging(false); }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    setDragging(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!dragging) return;
    setDragX(e.touches[0].clientX - startX.current);
  };

  return (
    <div className="relative flex-shrink-0 w-[260px] md:w-[310px]">
      <div className="relative h-[320px] md:h-[390px]">
        {cards.map((card, i) => {
          const slot = (i - topIndex + n) % n;
          const pos = slotStyles[slot];
          const isFront = slot === 0;

          return (
            <div
              key={i}
              className={`absolute w-[220px] md:w-[270px] h-[270px] md:h-[340px] rounded-[28px] bg-white shadow-card ${isFront ? "cursor-grab active:cursor-grabbing" : ""}`}
              style={{
                left: pos.left,
                top: pos.top,
                zIndex: pos.zIndex,
                transform: isFront && dragging
                  ? `translateX(${dragX}px) rotate(${dragX * 0.03}deg)`
                  : `rotate(${pos.rotate}deg)`,
                transition: dragging && isFront ? "none" : "all 0.35s cubic-bezier(0.22,1,0.36,1)",
                userSelect: "none",
              }}
              onMouseDown={isFront ? onMouseDown : undefined}
              onMouseMove={isFront ? onMouseMove : undefined}
              onMouseUp={isFront ? onRelease : undefined}
              onMouseLeave={isFront && dragging ? onRelease : undefined}
              onTouchStart={isFront ? onTouchStart : undefined}
              onTouchMove={isFront ? onTouchMove : undefined}
              onTouchEnd={isFront ? onRelease : undefined}
            >
              <div className="p-5 md:p-9 flex flex-col h-full">
                <p className="font-inter text-[12px] md:text-[10px] font-semibold text-mnd-charcoal">● {category}</p>
                <div className="mt-4 md:mt-8 flex flex-col gap-2 md:gap-3">
                  <div className="flex items-start gap-2">
                    <span className="font-inter text-[36px] md:text-[60px] font-bold text-mnd-charcoal leading-none">&ldquo;</span>
                    <p className="font-inter text-[13px] md:text-[12px] italic font-medium leading-[1.2] text-mnd-charcoal w-[150px] md:w-[190px] mt-2">
                      {card.quote}
                    </p>
                  </div>
                  <div className="w-[42px] h-[5px] bg-mnd-charcoal" />
                </div>
                <p className="mt-5 md:mt-9 font-inter text-[16px] font-bold leading-[1.2] text-mnd-charcoal">
                  {card.mainText}
                </p>
                {isFront && (
                  <p className="mt-auto pt-3 font-inter text-[10px] text-mnd-silver tracking-wide text-center">Drag to shuffle</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const StartupEnterprisesCardsSection = forwardRef<HTMLElement>((_, ref) => {
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
    <section ref={setRef} className="h-screen w-full snap-start flex flex-col items-center justify-center gap-12 md:gap-16 px-6 md:px-20 pt-20 md:pt-24">
      <h2 className={`w-full max-w-[720px] font-playfair text-[26px] md:text-[36px] font-normal leading-[1.333] tracking-[-0.03em] text-mnd-charcoal text-center ${animate("[transition-delay:0ms]")}`}>
        So, we built MND to plug into how you <br className="hidden md:block" />
        <span className="font-bold italic">actually</span> work.
      </h2>

      <div className="flex flex-row items-center justify-start md:justify-center gap-10 md:gap-[180px] overflow-x-auto md:overflow-visible w-full md:w-auto pb-4 md:pb-0">
        <div className={animate("[transition-delay:500ms]")}>
          <CardDeck cards={startupCards} category="For Startups" />
        </div>
        <div className={animate("[transition-delay:900ms]")}>
          <CardDeck cards={enterpriseCards} category="For Enterprises" />
        </div>
      </div>
    </section>
  );
});

StartupEnterprisesCardsSection.displayName = "StartupEnterprisesCardsSection";
export default StartupEnterprisesCardsSection;
