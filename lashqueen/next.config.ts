import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.prismic.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.cdn.prismic.io",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;