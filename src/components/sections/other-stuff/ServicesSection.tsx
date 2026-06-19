import { forwardRef } from "react";
import { RepeatIcon } from "@phosphor-icons/react";
import Link from "next/link";
import ArrowRight from "@/components/icons/ArrowRight";

const ServicesSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start flex px-32 pt-24">
      <div className="flex items-center justify-start">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <p className="font-inter font-semibold text-[11px] tracking-[1.7px] uppercase text-mnd-charcoal">
              Other Services
            </p>
            <p className="font-playfair font-bold text-[40px] leading-[1.33] tracking-normal text-mnd-charcoal">
              The right people for<br />everything to keep<br />your product<br />moving.
            </p>
          </div>
          <div className="w-[62px] h-[5px] bg-mnd-charcoal" />
          <p className="font-playfair font-normal text-[40px] leading-[1.33] tracking-normal text-mnd-charcoal">
            From operations to<br />compliance, scale with<br />ease.
          </p>
          <Link href="mailto:hello@mynextdeveloper.com?subject=Schedule a Call" className="flex items-center gap-2 px-4 h-10 bg-mnd-navy text-white rounded-full w-fit">
            <span className="font-sans text-xs font-semibold">Schedule a Call</span>
            <ArrowRight color="white" size={32} strokeWidth={1} />
          </Link>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-10">
          {[
            {
              label: "BPO",
              title: "Business Process Outsourcing",
              body: "People that keep your business moving.",
            },
            {
              label: "Marketing",
              title: "Digital Marketing",
              body: "Creative strategies that get you seen and chosen.",
            },
            {
              label: "HR",
              title: "Employee on Record",
              body: "The people you need wherever you need them.",
            },
            {
              label: "Finance",
              title: "Offshore Accounting",
              body: "Keeping the numbers clean, compliant and affordable.",
            },
          ].map((service, i) => (
            <div key={i} className="rounded-[28px] py-14 px-16 border border-mnd-charcoal flex flex-col gap-6 w-[300px]">
              <p className="font-playfair font-bold text-[20px] leading-[1.2] text-mnd-charcoal">
                {service.title}
              </p>
              <p className="font-inter font-normal text-[12px] leading-[1.5] text-mnd-charcoal">
                {service.body}
              </p>
              <div className="w-[36px] h-[3px] bg-mnd-charcoal" />
              <div className="flex items-center gap-2">
                <RepeatIcon size={16} weight="bold" />
                <p className="font-inter font-semibold text-[8px] tracking-[1.5px] uppercase text-mnd-charcoal">
                  Flip for Case Study
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

ServicesSection.displayName = "ServicesSection";
export default ServicesSection;
