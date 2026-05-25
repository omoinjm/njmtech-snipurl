import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: false,
        http: false,
        https: false,
        net: false,
        os: false,
        stream: false,
        tls: false,
        zlib: false,
        child_process: false,
        module: false,
        worker_threads: false,
        querystring: false,
        readline: false,
        perf_hooks: false,
      };

      // Specifically ignore miniflare and undici which are pulled in by @prisma/adapter-d1
      config.resolve.alias = {
        ...config.resolve.alias,
        miniflare: false,
        undici: false,
      };
    }
    
    return config;
  },
};

export default nextConfig;
