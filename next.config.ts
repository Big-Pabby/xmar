import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["res.cloudinary.com", "www.shutterstock.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // ...existing image configuration if any
  },
};

export default nextConfig;
