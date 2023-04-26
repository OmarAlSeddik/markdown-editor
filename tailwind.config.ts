import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto"],
      serif: ["Roboto Slab"],
      mono: ["Roboto Mono"],
    },
    fontSize: {
      base: ["0.875rem", "1.5rem"],
    },
    extend: {
      fontSize: {
        h6: "0.875rem",
        h5: "1rem",
        h4: "1.25rem",
        h3: "1.5rem",
        h2: "1.75rem",
        h1: "2rem",
        small: "0.8125rem",
        medium: "0.9375rem",
      },
      colors: {
        primaryDark: "#E46643",
        primaryLight: "#F39765",
        c1: "#151619",
        c2: "#1D1F22",
        c3: "#2B2D31",
        c4: "#35393F",
        c5: "#5A6069",
        c6: "#7C8187",
        c7: "#C1C4CB",
        c8: "#E4E4E4",
        c9: "#F5F5F5",
      },
      screens: {
        mouseHover: { raw: "(hover: hover)" },
      },
    },
  },
  plugins: [],
} satisfies Config;
