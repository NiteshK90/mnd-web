"use client";

import { forwardRef, useEffect, useRef, useState } from "react";

const values = [
  {
    label: "VALUE 1",
    name: "QUALITY",
    statement: "We care about whether the product actually works, not just whether it gets delivered.",
    description: "Anyone can finish a task and send an invoice. We care about whether the engineer was the right fit, whether the product is actually moving forward, whether the decision made sense and whether you still feel good about working with us months later.",
  },
  {
    label: "VALUE 2",
    name: "TRUST",
    statement: "We put what's right for you ahead of what's easy for us.",
    description: "If we think you are hiring too early, building the wrong thing or asking for the wrong role, we will tell you. If something is unrealistic, we will say it. If something goes wrong, we will stay and fix it. We care too much about doing good business to say yes to everything.",
  },
  {
    label: "VALUE 3",
    name: "ACCOUNTABILITY",
    statement: "We do not just send resumes. We send people we would bet our name on.",
    description: "You do not need twenty profiles and another hiring headache. You need one or two people who are genuinely right for the job. People who are smart, kind, proactive, easy to work with and brilliant at what they do.",
  },
  {
    label: "VALUE 4",
    name: "COMMITMENT",
    statement: "We stay till its sorted.",
    description: "We are not the kind of company that disappears after the kickoff, hides behind scope or says \"that is not our job\". If something is broken, messy, delayed or going sideways, we stay involved till it is fixed.",
  },
  {
    label: "VALUE 5",
    name: "EMPATHY",
    statement: "We design with your reality in mind",
    description: "You should never feel like you're working with strangers on the internet. We listen deeply, understand what you actually need, and build with you, not just for you.",
  },
];

const ValuesSection = forwardRef<HTMLElement>((_, ref) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const onScroll = () => {
      const containerCenter = container.scrollLeft + container.clientWidth / 2;
      let closest = 0;
      let closestDist = Infinity;
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const dist = Math.abs(containerCenter - cardCenter);
        if (dist < closestDist) { closestDist = dist; closest = i; }
      });
      setActiveIndex(closest);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToCard = (index: number) => {
    const container = scrollContainerRef.current;
    const card = cardRefs.current[index];
    if (!container || !card) return;
    const target = card.offsetLeft - (container.clientWidth - card.offsetWidth) / 2;
    container.scrollTo({ left: target, behavior: "smooth" });
  };

  return (
    <section ref={ref} className="h-screen w-full snap-start overflow-hidden flex flex-col justify-center gap-10 pt-20 md:pt-24">

      {/* Carousel track */}
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden snap-x snap-mandatory touch-pan-x overscroll-x-contain scroll-px-[12.5vw] md:scroll-px-[calc((100vw-450px)/2)]"
      >
        <div
          className="flex gap-4 md:gap-[56px] py-2 pl-[12.5vw] md:pl-[calc((100vw-450px)/2)]"
        >
          {values.map((v, i) => (
            <div
              key={i}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="flex-shrink-0 w-[75vw] md:w-[450px] bg-white rounded-[32px] py-6 px-6 md:py-8 md:px-8 flex flex-col gap-5 md:gap-8 shadow-[0_2px_4px_rgba(0,0,0,.04),0_8px_24px_rgba(0,0,0,.06)] snap-center"
            >
              <div className="flex flex-col gap-2 md:gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-black shrink-0" />
                  <span className="font-sans text-[8px] tracking-[0.18em] uppercase">{v.label}</span>
                </div>

                <p className="font-sans text-[16px] md:text-[22px] font-bold uppercase text-mnd-charcoal">
                  {v.name}
                </p>
              </div>

              <div className="w-[36px] h-[4px] md:w-[64px] md:h-[6px] bg-mnd-charcoal" />

              <p className="font-playfair text-[20px] md:text-[34px] font-bold leading-[1.2] text-mnd-charcoal">
                {v.statement}
              </p>

              <div className="w-[36px] h-[4px] md:w-[64px] md:h-[6px] bg-mnd-charcoal" />

              <p className="font-sans text-[13px] md:text-[16px] font-medium leading-[1.2] text-mnd-charcoal">
                {v.description}
              </p>
            </div>
          ))}
          <div className="flex-shrink-0 w-[12.5vw] md:w-[calc((100vw-450px)/2)]" />
        </div>
      </div>

      <div className="flex justify-center gap-3">
        {values.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToCard(i)}
            className={`h-4 w-4 rounded-full transition-all duration-300 cursor-pointer border border-black ${
              i === activeIndex ? "bg-black" : "bg-transparent"
            }`}
          />
        ))}
      </div>

    </section>
  );
});

ValuesSection.displayName = "ValuesSection";
export default ValuesSection;
