/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // ⚠️ CHANGE: Use '@tailwindcss/postcss' instead of 'tailwindcss'
    '@tailwindcss/postcss': {}, 
    autoprefixer: {},
  },
};

export default config;