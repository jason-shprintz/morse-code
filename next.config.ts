import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Set base path for GitHub Pages (replace 'morse-code' with your repo name if different)
  basePath: process.env.NODE_ENV === "production" ? "/morse-code" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/morse-code/" : "",
};

export default nextConfig;
