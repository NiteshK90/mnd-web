"use client";

import { forwardRef, useState, useRef, useEffect } from "react";

const testimonials = [
  {
    text: "MND gave us an engineer who felt like a co-founder. Shipped fast, asked the right questions, and never needed hand-holding.",
    name: "Arjun Mehta",
    company: "Haystack",
    designation: "CEO & Co-Founder",
    engineerText: "I joined mid-sprint and pushed to production by day three. The team trusted me immediately — that made all the difference.",
    engineerName: "Rahul Verma",
    engineerType: "Full-Stack Engineer",
  },
  {
    text: "We needed someone senior, fast. MND delivered in four days. The engineer knew our stack before the first call was over.",
    name: "Priya Nair",
    company: "Holocene",
    designation: "Head of Product",
    engineerText: "Most contracts feel transactional. This one felt like I was actually part of something being built. Rarely get that.",
    engineerName: "Sneha Iyer",
    engineerType: "Backend Engineer",
  },
  {
    text: "The replacement guarantee isn't just a policy — they actually used it when we needed it. No drama, no delay.",
    name: "Rohan Sharma",
    company: "Quantiphi",
    designation: "CTO",
    engineerText: "The honesty cuts both ways. They told me straight when something wasn't working. I respect that more than false positivity.",
    engineerName: "Aditya Kulkarni",
    engineerType: "Platform Engineer",
  },
  {
    text: "Working with MND felt different. Direct access to founders when things got tricky. That's rare, and it matters.",
    name: "Sana Kapoor",
    company: "Scrybe",
    designation: "VP Engineering",
    engineerText: "No red tape, no approval chains. Just work that mattered and a team that actually wanted my opinion on things.",
    engineerName: "Meera Pillai",
    engineerType: "Frontend Engineer",
  },
];

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  return (
    <div
      className="w-[260px] md:w-[280px] h-[320px] md:h-[340px] flex-shrink-0 [perspective:1200px] cursor-pointer group"
    >
      <div
        className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
      >
        {/* Front */}
        <div className="absolute inset-0 bg-mnd-parchment rounded-[28px] py-8 px-6 shadow-testimonial flex flex-col justify-between [backface-visibility:hidden]">
          <div className="flex items-start gap-4">
            <span className="text-[46px] font-bold text-mnd-charcoal leading-none italic">"</span>
            <div className="flex flex-col gap-6">
              <p className="font-sans text-[16px] font-bold leading-[1.35] text-mnd-charcoal mt-2">
                {testimonial.text}
              </p>
              <div className="font-sans text-xs italic font-medium leading-[1.3] text-mnd-charcoal">
                <div>{testimonial.name}</div>
                <div>{testimonial.company}</div>
                <div>{testimonial.designation}</div>
              </div>
            </div>
          </div>
          <p className="font-sans text-[8px] uppercase text-mnd-charcoal text-center tracking-widest">
            Flip to hear from the engineer
          </p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 bg-mnd-parchment rounded-[28px] py-8 px-6 shadow-testimonial flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="flex items-start gap-4">
            <span className="text-[46px] font-bold text-mnd-charcoal leading-none italic">"</span>
            <div className="flex flex-col gap-6">
              <p className="font-sans text-[16px] font-bold leading-[1.35] text-mnd-charcoal mt-2">
                {testimonial.engineerText}
              </p>
              <div className="font-sans text-xs italic font-medium leading-[1.3] text-mnd-charcoal">
                <div>{testimonial.engineerName}</div>
                <div>{testimonial.engineerType}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const TestimonialsSection = forwardRef<HTMLElement>((_, ref) => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

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
    <section ref={setRef} className="min-h-screen md:h-screen w-full snap-start flex flex-col items-center justify-center gap-8 md:gap-12 bg-mnd-espresso pt-20 pb-16 md:pt-24 md:pb-0">
      <div className="flex flex-col items-center gap-6 md:gap-12 px-6 md:px-0 text-center">
        <p className={`font-playfair text-[22px] md:text-[36px] font-normal leading-[1.333] tracking-[-0.03em] text-mnd-parchment ${animate("[transition-delay:0ms]")}`}>
          Trust us. We have shipped 436 products &amp; counting.
        </p>
        <div className={`w-[76px] h-[6px] bg-mnd-parchment ${animate("[transition-delay:400ms]")}`} />
        <p className={`font-playfair text-[22px] md:text-[36px] font-bold leading-[1.333] tracking-[-0.03em] text-mnd-parchment ${animate("[transition-delay:800ms]")}`}>
          <span className="italic">fyi</span> - zero unsatisfied clients.
        </p>
      </div>

      <div className="flex gap-6 md:gap-10 overflow-x-auto md:overflow-visible w-full md:w-auto px-6 md:px-0 pb-4 md:pb-0">
        {testimonials.map((t, i) => {
          const cardDelays = ["[transition-delay:1200ms]", "[transition-delay:1700ms]", "[transition-delay:2200ms]", "[transition-delay:2700ms]"];
          return (
            <div key={t.name} className={animate(cardDelays[i])}>
              <TestimonialCard testimonial={t} />
            </div>
          );
        })}
      </div>
    </section>
  );
});

TestimonialsSection.displayName = "TestimonialsSection";
export default TestimonialsSection;
