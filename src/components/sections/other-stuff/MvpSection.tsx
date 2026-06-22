import { forwardRef } from "react";
import Link from "next/link";
import ArrowRight from "@/components/icons/ArrowRight";

const MvpSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="min-h-screen w-full snap-start flex flex-col md:flex-row px-6 md:px-32 pt-20 md:pt-24 pb-12 md:pb-0">
      <div className="flex items-center justify-start">
        <div className="flex flex-col gap-10 md:gap-16">
          <div className="flex flex-col gap-4">
            <p className="font-inter font-semibold text-[11px] tracking-[1.7px] uppercase text-mnd-charcoal">
              MVP Development
            </p>
            <p className="font-playfair font-bold text-[28px] md:text-[40px] leading-[1.33] tracking-normal text-mnd-charcoal">
              From Idea to<br />execution
            </p>
          </div>
          <div className="w-[62px] h-[5px] bg-mnd-charcoal" />
          <p className="font-playfair font-normal text-[28px] md:text-[40px] leading-[1.33] tracking-normal text-mnd-charcoal">
            The right people to create<br />
            your MVP in days,<br />
            not weeks
          </p>
          <Link href="mailto:hello@mynextdeveloper.com?subject=Schedule a Call" className="flex items-center gap-2 px-4 h-10 bg-mnd-navy text-white rounded-full w-fit transition-all duration-200 hover:scale-[1.05] hover:shadow-[0_6px_20px_rgba(2,48,71,0.4)] active:scale-[0.96] active:shadow-none">
            <span className="font-inter text-xs font-semibold">Schedule a Call</span>
            <ArrowRight color="white" size={32} strokeWidth={1} />
          </Link>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center px-4 md:px-8 mt-10 md:mt-0">
        <div className="w-full max-w-xl px-8 py-10 md:px-24 md:py-[72px] border-[1px] border-mnd-charcoal rounded-[56px] flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <p className="font-inter font-semibold text-[10px] tracking-[1.5px] uppercase text-mnd-charcoal">
              Case Study
            </p>
            <p className="font-playfair font-bold text-[24px] md:text-[32px] leading-[1.2] text-mnd-charcoal md:whitespace-nowrap">
              Stealth GTM AI Platform
            </p>
            <p className="font-inter font-semibold text-[13px] text-mnd-charcoal mt-2">
              AI-powered sales intelligence platform
            </p>
          </div>
          <div className="w-[48px] h-[2px] bg-mnd-charcoal" />
          <div className="flex flex-col gap-4 max-w-full md:max-w-[330px]">
            <p className="font-inter font-normal text-[13px] leading-[1.5] text-mnd-charcoal">
              An early-stage GTM founder needed to turn a strong product vision into a scalable AI platform that could help sales teams prioritise the deals and actions that actually matter.
            </p>
            <p className="font-inter font-normal text-[13px] leading-[1.5] text-mnd-charcoal">
              We partnered closely from discovery through MVP architecture and are now building a multi-agent AI system that combines CRM data, transcripts, emails, and AI-driven prioritisation into one unified workflow.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col border-l border-mnd-charcoal pl-6">
              <p className="font-playfair font-bold text-[28px] leading-[1] text-mnd-charcoal">5/5</p>
              <p className="font-inter font-semibold text-[13px] leading-[1.4] text-mnd-charcoal mt-2">Client<br />Satisfaction</p>
            </div>
            <div className="w-full h-[1px] bg-mnd-charcoal" />
            <div className="flex items-end gap-3">
              <span className="font-playfair text-[80px] md:text-[133px] leading-[0] text-mnd-charcoal shrink-0">&ldquo;</span>
              <p className="font-inter italic text-[11px] leading-[1.5] text-mnd-charcoal">
                MyNextDeveloper was well-organized, thorough, collaborative, and easy to work with.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

MvpSection.displayName = "MvpSection";
export default MvpSection;
