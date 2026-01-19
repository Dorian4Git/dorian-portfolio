import type { NextConfig } from "next";

// 1. Define your repo name exactly as it appears on GitHub
const repo = 'dorian-portfolio'; 

// 2. Detect if we are running in a GitHub Action (Deployment)
// Vercel does NOT set this variable, so this stays false on Vercel.
const isGithubActions = process.env.GITHUB_ACTIONS || false;

// 3. Set the path prefixes only if we are on GitHub
const assetPrefix = isGithubActions ? `/${repo}/` : '';
const basePath = isGithubActions ? `/${repo}` : '';

const nextConfig: NextConfig = {
  output: "export",
  
  // Apply the dynamic paths
  basePath: basePath,
  assetPrefix: assetPrefix,
  
  images: {
    unoptimized: true,
  },
  
  // Make the path available to your React components (for your asset helper)
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

  // Your existing ignores
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;