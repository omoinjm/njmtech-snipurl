import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      async_hooks: "node:async_hooks",
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
  webpack: (config, { isServer, webpack }) => {
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

      if (webpack) {
        config.plugins.push(
          new webpack.NormalModuleReplacementPlugin(/^async_hooks$/, 'node:async_hooks')
        );
      }

      // Map Node.js built-ins to node: prefixed versions for Cloudflare
      config.externals = config.externals || [];
      if (Array.isArray(config.externals)) {
        config.externals.push({
          "async_hooks": "node:async_hooks",
        });
      } else if (typeof config.externals === "object") {
        config.externals["async_hooks"] = "node:async_hooks";
      }

      // Specifically ignore miniflare and undici which are pulled in by @prisma/adapter-d1
      config.resolve.alias = {
        ...config.resolve.alias,
        async_hooks: "node:async_hooks",
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



