import { forwardRef } from "react";

const ProductSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="min-h-screen w-full snap-start flex flex-col md:flex-row py-16 px-6 md:py-24 md:px-24">
      <div className="flex items-center justify-start">
        <div className="flex flex-col gap-8 md:gap-16">
          <p className="font-playfair font-normal text-[28px] md:text-[40px] leading-[1.33] tracking-normal text-mnd-charcoal">
            All the peripheral<br />
            services your product<br />
            needs to keep it<br />
            moving.
          </p>
          <div className="w-[62px] h-[5px] bg-mnd-charcoal" />
          <p className="font-playfair font-bold italic text-[28px] md:text-[40px] leading-[1.33] tracking-normal text-mnd-charcoal">
            With the same MND<br />
            guarantee.
          </p>
        </div>
      </div>
      <div className="flex-1 hidden md:block" />
    </section>
  );
});

ProductSection.displayName = "ProductSection";
export default ProductSection;
