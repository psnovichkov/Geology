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
      colors: {
        primary: "#bc6c25",
        secondary: {
          100: "#dda15e",
          200: "#bd7828",
        },
        tertiary: {
          100: "#d4c6b6",
          200: "#d1bfa9"
        }
      },
      fontFamily: {
        body: ["Nunito"],
      },
    },
  },
  plugins: [],
};
export default config;
