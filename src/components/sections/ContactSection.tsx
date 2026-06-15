import { forwardRef } from "react";

const ContactSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start flex items-center justify-center">
      <h2 className="text-4xl font-bold">Contact</h2>
    </section>
  );
});

ContactSection.displayName = "ContactSection";
export default ContactSection;
