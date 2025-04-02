import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.devtool = "source-map"; // Enable source maps in development
    }
    return config;
  },
};

export default nextConfig;
