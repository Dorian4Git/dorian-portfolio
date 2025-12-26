/** @type {import('next').NextConfig} */
const repo = "dorian-portfolio";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === "production" ? `/${repo}` : "",
  assetPrefix: process.env.NODE_ENV === "production" ? `/${repo}/` : "",
};

module.exports = nextConfig;
