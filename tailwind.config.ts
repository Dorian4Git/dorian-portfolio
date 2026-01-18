import type { Config } from "tailwindcss";

const config: Config = {
  // ⚠️ THIS IS THE FIX: Explicitly pointing to root folders
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;