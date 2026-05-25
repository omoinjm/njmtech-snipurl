import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable minification to bypass the WebpackError: _webpack.WebpackError is not a constructor
  // which is currently affecting Next.js 15 builds in some CI environments.
  minimize: false,
  webpack: (config) => {
    config.optimization.minimize = false;
    return config;
  },
};

export default nextConfig;
