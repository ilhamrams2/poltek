import type { NextConfig } from "next";

const isStatic = process.env.DEPLOY_TARGET === "static";

const nextConfig: NextConfig = {
  output: isStatic ? "export" : undefined,
  images: {
    unoptimized: isStatic,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
