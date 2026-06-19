import { forwardRef } from "react";

const ProductSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start flex">
      <div className="flex-1 flex items-center justify-start px-16">
        <div className="flex flex-col gap-16">
          <p className="font-playfair font-normal text-[40px] leading-[1.33] tracking-normal text-mnd-charcoal">
            All the peripheral<br />
            services your product<br />
            needs to keep it<br />
            moving.
          </p>
          <div className="w-[62px] h-[5px] bg-mnd-charcoal" />
          <p className="font-playfair font-bold italic text-[40px] leading-[1.33] tracking-normal text-mnd-charcoal">
            With the same MND<br />
            guarantee.
          </p>
        </div>
      </div>
      <div className="flex-1" />
    </section>
  );
});

ProductSection.displayName = "ProductSection";
export default ProductSection;
