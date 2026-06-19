import { forwardRef } from "react";

const ProductSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start" />
  );
});

ProductSection.displayName = "ProductSection";
export default ProductSection;
