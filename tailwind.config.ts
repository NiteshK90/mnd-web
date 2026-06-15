export default {
  theme: {
    extend: {
      colors: {
        "mnd-cream": "#EAE7E3",
        "mnd-navy": "#083B5C",
        "mnd-dark": "#17141A",
        "mnd-linen": "#FAF6F1",
        "mnd-ivory": "#FDFBF9",
      },
      fontFamily: {
        canela: ["Canela", "serif"],
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
