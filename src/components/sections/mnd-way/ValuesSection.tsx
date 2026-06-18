"use client";

import { forwardRef, useState, useRef, useLayoutEffect } from "react";

const CARD_WIDTH = 450;
const GAP = 56;
const DRAG_THRESHOLD = 50;

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
  const trackRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef<number | null>(null);
  const isDraggingRef = useRef(false);

  useLayoutEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(calc((100vw - ${CARD_WIDTH}px) / 2 - ${activeIndex * (CARD_WIDTH + GAP)}px))`;
    }
  }, [activeIndex]);

  const onDragStart = (clientX: number) => {
    startXRef.current = clientX;
    isDraggingRef.current = true;
  };

  const onDragEnd = (clientX: number) => {
    if (!isDraggingRef.current || startXRef.current === null) return;
    const delta = startXRef.current - clientX;
    if (delta > DRAG_THRESHOLD) setActiveIndex(i => Math.min(i + 1, values.length - 1));
    else if (delta < -DRAG_THRESHOLD) setActiveIndex(i => Math.max(i - 1, 0));
    startXRef.current = null;
    isDraggingRef.current = false;
  };

  return (
    <section ref={ref} className="h-screen w-full snap-start overflow-hidden flex flex-col justify-center gap-10 pt-18">

      {/* Carousel track */}
      <div
        className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
        onMouseDown={(e) => onDragStart(e.clientX)}
        onMouseUp={(e) => onDragEnd(e.clientX)}
        onMouseLeave={(e) => onDragEnd(e.clientX)}
        onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
        onTouchEnd={(e) => onDragEnd(e.changedTouches[0].clientX)}
      >
        <div
          ref={trackRef}
          className="flex gap-[56px] transition-transform duration-500 ease-in-out py-2"
        >
          {values.map((v, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[450px] bg-white rounded-[32px] py-8 px-8 flex flex-col gap-8 shadow-[0_2px_4px_rgba(0,0,0,.04),0_8px_24px_rgba(0,0,0,.06)]"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-black shrink-0" />
                  <span className="font-sans text-[8px] tracking-[0.18em] uppercase">{v.label}</span>
                </div>

                <p className="font-sans text-[22px] font-extrabold tracking-[-0.02em] uppercase text-mnd-charcoal">
                  {v.name}
                </p>
              </div>

              <div className="w-[64px] h-[6px] bg-mnd-charcoal" />

              <p className="font-canela text-[34px] font-semibold leading-[1.08] tracking-[-0.03em] text-mnd-charcoal">
                {v.statement}
              </p>

              <div className="w-[64px] h-[6px] bg-mnd-charcoal" />

              <p className="font-sans text-[18px] font-medium leading-[1.35] text-mnd-charcoal max-w-[460px]">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-3">
        {values.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
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
