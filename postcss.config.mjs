/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
    'autoprefixer': {}, // We keep this because we just installed it to be safe
  },
};

export default config;