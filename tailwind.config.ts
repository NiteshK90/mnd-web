export default {
  theme: {
    extend: {
      colors: {
        "mnd-cream": "#EAE7E3",
        "mnd-navy": "#083B5C",
        "mnd-dark": "#17141A",
        "mnd-linen": "#FAF6F1",
        "mnd-ivory": "#FDFBF9",
        "mnd-charcoal": "#231F20",
        "mnd-stone": "#4A4643",
        "mnd-silver": "#A7A3A0",
        "mnd-espresso": "#1F1A1D",
      },
      fontFamily: {
        canela: ["Canela", "serif"],
      },
      boxShadow: {
        progress: "0 1px 2px rgba(0,0,0,.06), 0 4px 10px rgba(0,0,0,.04)",
        card: "0 2px 4px rgba(0,0,0,.05), 0 8px 24px rgba(0,0,0,.06)",
      },
      animation: {
        marquee: "marquee 35s linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
};
