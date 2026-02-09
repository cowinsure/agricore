import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'website-v1.insurecow.com',
        pathname: '/**',
      },
    ],
    unoptimized: true, // Bypass image optimization for remote images
  },
  /* config options here */
};

export default nextConfig;
