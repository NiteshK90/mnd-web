import { forwardRef } from "react";

const testimonials = [
  {
    text: "MND gave us an engineer who felt like a co-founder. Shipped fast, asked the right questions, and never needed hand-holding.",
    name: "Arjun Mehta",
    company: "Haystack",
    designation: "CEO & Co-Founder",
  },
  {
    text: "We needed someone senior, fast. MND delivered in four days. The engineer knew our stack before the first call was over.",
    name: "Priya Nair",
    company: "Holocene",
    designation: "Head of Product",
  },
  {
    text: "The replacement guarantee isn't just a policy — they actually used it when we needed it. No drama, no delay.",
    name: "Rohan Sharma",
    company: "Quantiphi",
    designation: "CTO",
  },
  {
    text: "Working with MND felt different. Direct access to founders when things got tricky. That's rare, and it matters.",
    name: "Sana Kapoor",
    company: "Scrybe",
    designation: "VP Engineering",
  },
];

const TestimonialsSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start flex flex-col items-center justify-center gap-8 bg-mnd-espresso">
      <div>
        <p className="font-canela text-[52px] font-normal leading-[1.1] tracking-[-0.03em] text-mnd-parchment text-center">
          Trust us. We have shipped 436 products &amp; counting.
        </p>
        <div className="w-[76px] h-[6px] bg-mnd-parchment" />
        <p className="font-canela text-[46px] font-semibold leading-[1.05] tracking-[-0.03em] text-mnd-parchment">
          <span className="italic">fyi</span> - zero unsatisfied clients.
        </p>
      </div>

      <div className="flex gap-10">
        {testimonials.map(({ text, name, company, designation }) => (
          <div
            key={name}
            className="w-[300px] bg-mnd-parchment rounded-[28px] p-10 shadow-testimonial flex flex-col justify-between gap-8"
          >
            <div className="flex items-start gap-4">
              <span className="text-[54px] font-bold text-mnd-charcoal leading-none">&ldquo;</span>
              <div className="flex flex-col gap-8">
                <p className="font-sans text-[16px] font-bold leading-[1.35] text-mnd-charcoal mt-2 flex-1">
                  {text}
                </p>
                <p className="font-sans text-[14px] italic font-medium leading-[1.3] text-mnd-charcoal">
                  {name}<br />{company}<br />{designation}
                </p>
              </div>
            </div>
            <p className="font-sans text-[10px] font-bold tracking-[0.18em] uppercase text-mnd-charcoal mt-4">
              Flip to hear from the engineer
            </p>
          </div>
        ))}
      </div>
    </section>
  );
});

TestimonialsSection.displayName = "TestimonialsSection";
export default TestimonialsSection;
