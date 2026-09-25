import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/services/shamanic-ceremonies',
        destination: '/services/retreats',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
