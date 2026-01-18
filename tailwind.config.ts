import type { Config } from "tailwindcss";

const config: Config = {
  // ✅ IMPORTANT: This links Tailwind to your actual files
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",        // Scans all files in your app folder
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Scans all files in your components folder
    
    // ❌ Do NOT include "./src/**/*.{...}" since you don't have a src folder
  ],
  theme: {
    extend: {
      // Keep your custom colors/fonts here if you had any
    },
  },
  plugins: [],
};

export default config;