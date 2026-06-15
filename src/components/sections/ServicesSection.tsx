import { forwardRef } from "react";

const ServicesSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start flex items-center justify-center">
      <h2 className="text-4xl font-bold">Services</h2>
    </section>
  );
});

ServicesSection.displayName = "ServicesSection";
export default ServicesSection;
