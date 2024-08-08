import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "4xl": "2560px",
        "3xl": "1920px",
        "1650": "1650px",
        "2sm": "480px",
        "2.5sm": "587px",
        "3sm": "390px",
        "2lg": "940px",
      },
      fontFamily: {
        superline: ["Superline", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
