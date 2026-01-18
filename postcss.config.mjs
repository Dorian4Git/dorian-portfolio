/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, 
    // Note: We removed 'autoprefixer' because v4 handles it internally.
  },
};

export default config;