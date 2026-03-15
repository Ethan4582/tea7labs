import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true, // required for static export
    remotePatterns: [
      { protocol: "https", hostname: "cdn.prod.website-files.com" },
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "framerusercontent.com" },
      { protocol: "https", hostname: "www.datocms-assets.com" },
      { protocol: "https", hostname: "pub-4b0a8f18a97e4b44914872dd0d22870b.r2.dev" },
      { protocol: "https", hostname: "stream.mux.com" },
    ],
  },

  async headers() {
    return [
      {
        // Cache all static Next.js build assets forever (they have content hashes)
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache public folder assets for 30 days
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
      {
        // Default page caching: revalidate every hour
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
