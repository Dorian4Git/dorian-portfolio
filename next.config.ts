/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true }, // important pour GitHub Pages + export statique
  basePath: process.env.NODE_ENV === "production" ? "/dorian-portfolio" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/dorian-portfolio/" : "",
};

module.exports = nextConfig;
