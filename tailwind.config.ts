import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkgreen: "#023A15",
        lightGreen: "#567C49",
        mediumgreen: "#319E48",
        backgroundwhite: "#FDF5F3",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 10s linear infinite", // Adjust the duration for faster/slower scroll
      },
    },
  },
  plugins: [],
};
export default config;

// // background:
//  #023A15; dark green

// #319E48 - light green

// Montserrat -- font family
