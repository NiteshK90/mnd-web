export default {
  theme: {
    extend: {
      colors: {
        "mnd-cream": "#EAE7E3",
        "mnd-navy": "#023047",
        "mnd-dark": "#17141A",
        "mnd-linen": "#FAF6F1",
        "mnd-ivory": "#FDFBF9",
        "mnd-charcoal": "#231F20",
        "mnd-stone": "#4A4643",
        "mnd-silver": "#A7A3A0",
        "mnd-espresso": "#1F1A1D",
        "mnd-parchment": "#F7F2ED",
        "mnd-button": "#063A5A",
      },
      fontFamily: {
        canela: ["Canela", "serif"],
        playfair: ["var(--font-playfair)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        progress: "0 1px 2px rgba(0,0,0,.06), 0 4px 10px rgba(0,0,0,.04)",
        card: "0 2px 4px rgba(0,0,0,.05), 0 8px 24px rgba(0,0,0,.06)",
        testimonial: "0 2px 4px rgba(0,0,0,.08), 0 10px 30px rgba(0,0,0,.12)",
      },
      animation: {
        marquee: "marquee 60s linear infinite",
        "fade-in-card": "fadeInCard 800ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "hero-fly-in": "heroFlyIn 1800ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        fadeInCard: {
          from: { opacity: "0", transform: "translateY(14px) scale(0.96)" },
          to:   { opacity: "1", transform: "translateY(0)   scale(1)" },
        },
        heroFlyIn: {
          from: { opacity: "0", transform: "translateX(-48px)" },
          to:   { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
};
