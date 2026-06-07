import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      miniflare: "./.next-shims/noop.js",
      undici: "./.next-shims/noop.js",
      workerd: "./.next-shims/noop.js",
      "stream/consumers": "./.next-shims/noop.js",
      "util/types": "./.next-shims/noop.js",
      "@cloudflare/workerd-linux-64": "./.next-shims/noop.js",
    },
    rules: {
      "*.md": [],
      "**/workerd": [],
    },
  },
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
        workerd: false,
        "@cloudflare/workerd-linux-64": false,
        "stream/consumers": false,
        "util/types": false,
      };
    }
    
    return config;
  },
};

export default nextConfig;



