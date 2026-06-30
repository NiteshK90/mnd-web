"use client";

import { forwardRef, useRef, useEffect, useState } from "react";
import Link from "next/link";
import ArrowRight from "@/components/icons/ArrowRight";
import { X } from "@phosphor-icons/react";

const BlogSection = forwardRef<HTMLElement>((_, ref) => {
  const [inView, setInView] = useState(false);
  const [search, setSearch] = useState("");
  const sectionRef = useRef<HTMLElement>(null);

  const allPills = ["AI", "App Development", "Cost Calculator", "Data Security", "Ethics", "Hiring", "Personal Brand", "Software Dev", "Startup", "Technology", "Latest blogs"];
  const filteredPills = search.trim()
    ? allPills.filter((label) => label.toLowerCase().includes(search.toLowerCase()))
    : allPills;

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
    <section ref={setRef} className="min-h-screen w-full snap-start flex flex-col md:flex-row gap-8 md:gap-16 px-6 md:px-20 pt-20 md:pt-24 pb-12">
      {/* Left panel */}
      <div className="flex items-start md:items-center justify-start w-full md:w-auto">
        <div className="flex flex-col gap-6 md:gap-10">
          {/* Section label + headline */}
          <div className="flex flex-col gap-4">
            <p className={`font-inter font-semibold text-[11px] tracking-[1.7px] uppercase text-mnd-charcoal ${animate("[transition-delay:0ms]")}`}>
              Blog
            </p>
            <p className={`font-playfair font-bold text-[22px] md:text-[36px] leading-[1.333] tracking-[-0.03em] text-mnd-charcoal ${animate("[transition-delay:200ms]")}`}>
              Insights that drive<br />smarter decisions.
            </p>
          </div>
          <div className={`w-[62px] h-[5px] bg-mnd-charcoal ${animate("[transition-delay:400ms]")}`} />
          <p className={`font-playfair font-normal text-[18px] md:text-[36px] leading-[1.333] tracking-[-0.03em] text-mnd-charcoal ${animate("[transition-delay:600ms]")}`}>
            Practical perspectives<br />on everything software<br />and AI.
          </p>
          <a href="https://mynextdeveloper.com/blogs/" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-4 h-10 bg-mnd-navy text-white rounded-full w-fit cursor-pointer transition-all duration-200 hover:scale-[1.05] hover:shadow-[0_6px_20px_rgba(2,48,71,0.4)] active:scale-[0.96] active:shadow-none ${animate("[transition-delay:800ms]")}`}>
            <span className="font-inter text-xs font-semibold">View all blogs</span>
            <ArrowRight color="white" size={32} strokeWidth={1} />
          </a>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex flex-col justify-center gap-10 px-0 md:px-12 mt-10 md:mt-0">
        {/* Search input */}
        <div className={`relative w-full max-w-[1180px] mt-4 ${animate("[transition-delay:200ms]")}`}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search articles, topics, keywords"
            className="w-full h-[48px] bg-transparent border border-[#6f6f6f] rounded-full px-6 pr-12 font-inter text-[15px] font-normal leading-[1.4] text-mnd-charcoal placeholder-[#8a8a8a] outline-none"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8a8a8a] hover:text-[#2f2f2f] transition-colors duration-150"
            >
              <X size={18} weight="bold" />
            </button>
          )}
        </div>
        {/* Topic pills */}
        <div className={`grid grid-cols-3 md:grid-cols-6 gap-x-2 md:gap-x-3 gap-y-3 md:gap-y-10 w-full ${animate("[transition-delay:400ms]")}`}>
          {filteredPills.map((label) => (
            <button
              key={label}
              className="flex items-center justify-center min-w-0 md:min-w-[120px] h-[28px] px-3 md:px-4 bg-[#f3ede4] rounded-full font-inter text-[7px] font-medium leading-none tracking-[0.18em] text-[#2f2f2f] uppercase whitespace-nowrap cursor-pointer overflow-hidden transition-all duration-200 hover:scale-[1.05] hover:shadow-[0_6px_20px_rgba(2,48,71,0.4)] active:scale-[0.96] active:shadow-none"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Blog list */}
        <div className={`w-full ${animate("[transition-delay:600ms]")}`}>
          {/* Header */}
          <div className="flex items-center gap-10">
            <h2 className="font-inter text-[11px] font-bold tracking-[0.04em] uppercase text-[#222] whitespace-nowrap">
              Latest Blogs
            </h2>
            <div className="flex-1 h-px bg-[#9b9b9b]" />
          </div>

          {/* Rows */}
          <div className="flex flex-col gap-2">
            {[
              { date: "JUN 16", year: "2026", title: "What Is Hermes Agent and How Does It Compare to Other AI Tools" },
              { date: "JUN 19", year: "2026", title: "Why Your AI Agent Keeps Failing (It's Not the Model)" },
              { date: "MAY 22", year: "2026", title: "Tearing Up the Bond Myth: What Employers Won't Tell You" },
              { date: "APR 21", year: "2026", title: "Meta's Muse Spark: The End of Open Source for Llama?" },
            ].map((post, i) => (
              <Link key={i} href="#" className={`group grid grid-cols-[50px_1fr_28px] md:grid-cols-[60px_1fr_30px] items-center gap-x-8 min-h-[40px] py-4 border-b border-[#9b9b9b] cursor-pointer ${animate(`[transition-delay:${700 + i * 100}ms]`)}`}>
                <div className="font-inter text-[10px] font-medium leading-[1.6] tracking-[0.08em] text-[#252525] uppercase">
                  {post.date}<br />{post.year}
                </div>
                <h3 className="font-playfair text-[16px] font-semibold leading-none text-[#1f1b1c]">
                  {post.title}
                </h3>
                <div className="flex justify-center items-center transition-transform duration-[250ms] ease-in-out group-hover:translate-x-2">
                  <ArrowRight color="#1f1b1c" size={24} strokeWidth={1} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
});

BlogSection.displayName = "BlogSection";
export default BlogSection;
