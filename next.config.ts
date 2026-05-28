import type { NextConfig } from "next";

const isGitHubPages = process.env.DEPLOY_TARGET === "github-pages";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/popmart-ip-wiki" : "",
  assetPrefix: isGitHubPages ? "/popmart-ip-wiki/" : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
