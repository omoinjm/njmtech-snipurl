import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    // Some environments have issues with the default minifier worker
    if (config.optimization && config.optimization.minimizer) {
      config.optimization.minimizer.forEach((minimizer: any) => {
        if (minimizer.options && minimizer.options.worker !== undefined) {
          minimizer.options.worker = false;
        }
      });
    }
    return config;
  },
};

export default nextConfig;
