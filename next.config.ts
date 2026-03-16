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

};

export default nextConfig;
