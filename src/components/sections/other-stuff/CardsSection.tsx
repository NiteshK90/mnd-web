import { forwardRef } from "react";

const CardsSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start" />
  );
});

CardsSection.displayName = "CardsSection";
export default CardsSection;
