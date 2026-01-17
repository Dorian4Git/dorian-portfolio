/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // ONLY this plugin is needed for v4
    '@tailwindcss/postcss': {},
  },
};

export default config;