"use client";

import { forwardRef, useState } from "react";

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
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-[260px] md:w-[280px] h-[320px] md:h-[340px] flex-shrink-0 [perspective:1200px] cursor-pointer"
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 bg-mnd-parchment rounded-[28px] py-8 px-6 shadow-testimonial flex flex-col justify-between [backface-visibility:hidden]">
          <div className="flex items-start gap-4">
            <span className="text-[54px] font-bold text-mnd-charcoal leading-none italic">"</span>
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
            <span className="text-[54px] font-bold text-mnd-charcoal leading-none italic">"</span>
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
          <p className="font-sans text-[8px] uppercase text-mnd-charcoal text-center tracking-widest">
            Flip back
          </p>
        </div>
      </div>
    </div>
  );
}

const TestimonialsSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="min-h-screen md:h-screen overflow-hidden w-full snap-start flex flex-col items-center justify-center gap-12 bg-mnd-espresso">
      <div className="flex flex-col items-center gap-12 mt-12">
        <p className="font-canela text-[24px] md:text-[36px] font-normal leading-[1.1] tracking-[-0.03em] text-mnd-parchment text-center px-6 md:px-0">
          Trust us. We have shipped 436 products &amp; counting.
        </p>
        <div className="w-[76px] h-[6px] bg-mnd-parchment" />
        <p className="font-canela text-[22px] md:text-[34px] font-semibold leading-[1.05] tracking-[-0.03em] text-mnd-parchment px-6 md:px-0 text-center">
          <span className="italic">fyi</span> - zero unsatisfied clients.
        </p>
      </div>

      <div className="flex gap-6 md:gap-10 mt-8 md:mt-12 overflow-x-auto pb-6 px-6 md:px-0 md:overflow-visible w-full md:justify-center">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} testimonial={t} />
        ))}
      </div>
    </section>
  );
});

TestimonialsSection.displayName = "TestimonialsSection";
export default TestimonialsSection;
