import { forwardRef } from "react";

const FooterSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer
      ref={ref}
      className="bg-mnd-linen bg-[url('/landing/footer.png')] bg-cover bg-center h-screen w-full snap-start flex items-center justify-center"
    >
      <p className="text-white text-sm tracking-widest">© MND</p>
    </footer>
  );
});

FooterSection.displayName = "FooterSection";
export default FooterSection;
