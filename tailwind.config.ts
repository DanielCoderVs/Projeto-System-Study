import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: { 50: "#eef5ff", 100: "#d9e9ff", 500: "#1677ff", 600: "#0b63dc", 700: "#084fae" },
      },
    },
  },
  plugins: [],
};

export default config;
