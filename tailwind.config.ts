import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        main: "#050505",
        "selected-text": "#304ADE",
        theme: "#E73BE2",
        input: "#2A2A33",
        inputBorder: "#565666",
      },
      backgroundImage: {
        backImage: "url('/images/hot-spring1.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
