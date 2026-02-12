import type { NextConfig } from "next";

const isStatic = process.env.DEPLOY_TARGET === "static";

const nextConfig: NextConfig = {
  output: isStatic ? "export" : "standalone",
  images: {
    unoptimized: isStatic,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lxtfszbnddaedwrroeck.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
};

export default nextConfig;
