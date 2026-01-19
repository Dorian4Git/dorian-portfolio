import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // REMOVED: output: "export" (Vercel doesn't need this, and it blocks image optimization)
  // REMOVED: basePath / assetPrefix logic
  
  images: {
    // REMOVED: unoptimized: true (Let Vercel optimize your images automatically!)
    remotePatterns: [],
  },

  // Keep your existing ignores if you want to avoid build failures on minor errors
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;