import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F7F8F2",
        sage: "#A5B99C",
        "sage-light": "#E3EBDD",
        forest: "#526D55",
        ink: "#202B23",
      },
      fontFamily: {
        sans: ["Manrope Variable", "Manrope", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 50px rgba(32, 43, 35, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
