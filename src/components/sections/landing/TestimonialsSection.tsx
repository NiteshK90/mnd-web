"use client";

import { forwardRef, useRef, useEffect, useState } from "react";

const testimonials = [
  {
    text: "They understood our vision, adapted to our needs, and delivered every milestone on time",
    name: "Anya Keatley",
    company: "Secret Compass",
    designation: "TV Risk Manager & Head of AI",
    engineerTitle: "Meet the engineer who worked with them",
    engineerText: "Through MND, I designed and built a full-scale AI SaaS platform from scratch. The best part was working with founders who valued my ideas as much as my code.",
    engineerName: "Kabir Rao",
    engineerType: "Senior AI Product Engineer",
    engineerExperience: "9+ years",
  },
  {
    text: "MyNextDeveloper's leadership is responsive, follows through on time-sensitive requests, and is very easy to work with.",
    name: "Rachel Cohen",
    company: "Silicon Society",
    designation: "COO",
    engineerTitle: "Meet the engineer who worked with them",
    engineerText: "MND found me a long-term remote contract with a US-based technology agency that's now been running for over a year. What I appreciate most is that Jigar and the team don't just match you to a job — they make sure the project actually fits your stack and how you like to work.",
    engineerName: "Rita Mahajan",
    engineerType: "Full Stack Engineer",
    engineerExperience: "7+ years",
  },
  {
    text: "Fast, accurate, and easy to work with. MND consistently delivers high-quality engineering with excellent communication.",
    name: "Christian Phyfier",
    company: "Scrybe Streaming",
    designation: "CEO",
    engineerTitle: "Meet the engineer who worked with them",
    engineerText: "MND connected me with a fast-moving US product team where my ideas mattered. It wasn't just about writing code, it was about owning features, improving performance, and building something better every day.",
    engineerName: "Arjun Mehta",
    engineerType: "Senior Mobile Engineer",
    engineerExperience: "7+ years",
  },
  {
    text: "We were impressed with their steady communication, positive culture, and talented developers.",
    name: "Marcel Isakowitz",
    company: "IOTIS",
    designation: "Co-Founder & COO",
    engineerTitle: "Meet the engineer who worked with them",
    engineerText: "MND matched me with a team where my skills and working style truly fit. The process was smooth, expectations were clear, and I felt like part of the team from day one.",
    engineerName: "Sanjh Mathur",
    engineerType: "Senior Full Stack Engineer",
    engineerExperience: "8+ years",
  },
];

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  return (
    <div
      className="w-[260px] md:w-[280px] h-[300px] md:h-[380px] flex-shrink-0 [perspective:1200px] cursor-pointer group"
    >
      <div
        className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
      >
        {/* Front */}
        <div className="absolute inset-0 bg-mnd-parchment rounded-[28px] py-7 px-6 md:py-9 md:px-7 shadow-testimonial flex flex-col justify-between [backface-visibility:hidden]">
          <div className="flex flex-col gap-4 md:gap-6">
            {/* Top: circle + person info */}
            <div className="flex gap-5 items-center">
              <div className="w-[52px] h-[52px] md:w-[60px] md:h-[60px] rounded-full bg-mnd-charcoal/10 shrink-0" />
              <div className="font-inter text-[11px] md:text-xs italic font-medium leading-[1.3] text-mnd-charcoal">
                <div>{testimonial.name}</div>
                <div>{testimonial.designation}</div>
                <div>{testimonial.company}</div>
              </div>
            </div>
            {/* Testimonial */}
            <div className="flex items-start gap-3">
              <span className="text-[32px] md:text-[46px] font-bold text-mnd-charcoal leading-none italic">"</span>
              <p className="font-inter text-[13px] md:text-[16px] font-bold leading-[1.35] text-mnd-charcoal">
                {testimonial.text}
              </p>
            </div>
          </div>
          <p className="font-inter text-[8px] uppercase text-mnd-charcoal text-center tracking-widest">
            Flip to hear from the engineer
          </p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 bg-mnd-parchment rounded-[28px] py-7 px-6 md:py-9 md:px-7 shadow-testimonial flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="flex flex-col gap-4 md:gap-6">
            <p className="font-inter text-[7px] md:text-[8px] uppercase text-mnd-charcoal text-center tracking-widest">
              {testimonial.engineerTitle}
            </p>
            {/* Top: circle + engineer info */}
            <div className="flex gap-5 items-center">
              <div className="w-[52px] h-[52px] md:w-[60px] md:h-[60px] rounded-full bg-mnd-charcoal/10 shrink-0" />
              <div className="font-inter text-[11px] md:text-xs italic font-medium leading-[1.3] text-mnd-charcoal">
                <div>{testimonial.engineerName}</div>
                <div>{testimonial.engineerType}</div>
                <div>{testimonial.engineerExperience}</div>
              </div>
            </div>
            {/* Testimonial */}
            <div className="flex items-start gap-3">
              <span className="text-[28px] font-bold text-mnd-charcoal leading-none italic">"</span>
              <p className="font-inter text-[11px] font-bold leading-[1.35] text-mnd-charcoal">
                {testimonial.engineerText}
              </p>
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
    <section ref={setRef} className="min-h-screen md:h-screen w-full snap-start flex flex-col items-center justify-center gap-12 md:gap-16 bg-mnd-espresso px-6 md:px-20 pt-20 pb-16 md:pt-24 md:pb-0">
      <div className="flex flex-col items-center gap-6 md:gap-12 text-center">
        <p className={`font-playfair text-[22px] md:text-[36px] font-normal leading-[1.333] tracking-[-0.03em] text-mnd-parchment ${animate("[transition-delay:0ms]")}`}>
          Trust us. We have shipped 436 products &amp; counting.
        </p>
        <div className={`w-[76px] h-[6px] bg-mnd-parchment ${animate("[transition-delay:400ms]")}`} />
        <p className={`font-playfair text-[22px] md:text-[36px] font-bold leading-[1.333] tracking-[-0.03em] text-mnd-parchment ${animate("[transition-delay:800ms]")}`}>
          fyi - <span className="italic">zero</span> unsatisfied clients.
        </p>
      </div>

      <div className="flex gap-6 md:gap-10 overflow-x-auto md:overflow-visible w-full md:w-auto pb-4 md:pb-0">
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
