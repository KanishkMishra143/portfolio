import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portfolio',
  env: {
    basePath: '/portfolio',
  },
  images: {
    unoptimized: true,
  },
  devIndicators: false,
};

export default nextConfig;
