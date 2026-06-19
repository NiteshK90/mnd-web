import { forwardRef } from "react";

const ServicesSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start" />
  );
});

ServicesSection.displayName = "ServicesSection";
export default ServicesSection;
