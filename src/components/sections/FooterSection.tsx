"use client";

import { forwardRef } from "react";

const FooterSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer
      ref={ref}
      className="bg-mnd-linen bg-[url('/landing/footer.png')] bg-cover bg-center h-screen w-full snap-start flex flex-col justify-between"
    >
      <div className="flex flex-col items-center justify-center gap-4 px-6 md:px-0">
        <div className="flex justify-center pt-8">
          <button
            onClick={() => document.getElementById("landing-container")?.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-16 h-16 rounded-full border-[1.5px] border-white/70 bg-transparent flex items-center justify-center cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 13l6-6 6 6" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <h2 className="font-canela text-[42px] md:text-[68px] font-medium leading-[0.92] mt-6 md:mt-12 tracking-[-0.04em] text-mnd-dark text-center w-full md:w-[400px]">
          Ready when you are.
        </h2>

        <div className="w-[48px] h-[2px] bg-mnd-dark" />

        <p className="font-sans text-base md:text-lg font-medium leading-[1.4] text-mnd-dark text-center">
          Let&apos;s build something great together.
        </p>

        <button className="flex items-center gap-3 md:gap-4 py-2 px-5 md:px-6 rounded-full bg-[#0D0D0F] text-white font-sans text-base md:text-lg font-normal">
          <span className="flex items-center justify-center w-7 h-7">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="4" width="16" height="14" rx="2" stroke="white" strokeWidth="1.5" />
              <path d="M2 8h16" stroke="white" strokeWidth="1.5" />
              <path d="M6 2v3M14 2v3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
          Schedule a call
          <span className="text-[22px]">→</span>
        </button>
      </div>

      <div className="pt-4 md:pt-6 pb-8 md:pb-10 bg-[#090909] flex items-center justify-between px-6 md:px-[72px]">
        <button className="flex items-center h-10 md:h-14 px-4 md:px-8 rounded-full border-[1.5px] border-white/35 text-white font-sans text-sm md:text-[18px] font-medium">
          Compliances
        </button>

        <span className="font-canela text-[26px] md:text-[38px] font-semibold text-white">MND</span>

        <button className="flex items-center h-10 md:h-14 px-4 md:px-8 rounded-full border-[1.5px] border-white/35 text-white font-sans text-sm md:text-[18px] font-medium">
          Privacy
        </button>
      </div>
    </footer>
  );
});

FooterSection.displayName = "FooterSection";
export default FooterSection;
