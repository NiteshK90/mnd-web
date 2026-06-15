import { forwardRef } from "react";

const TestimonialsSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start flex items-center justify-center">
      <h2 className="text-4xl font-bold">Testimonials</h2>
    </section>
  );
});

TestimonialsSection.displayName = "TestimonialsSection";
export default TestimonialsSection;
