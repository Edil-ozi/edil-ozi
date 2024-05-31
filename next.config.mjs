/** @type {import('next').NextConfig} */
import { withContentlayer } from "next-contentlayer";
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  async redirects() {
    return [
      {
        source: "/components",
        destination: "/docs/components/animated-beam",
        permanent: true,
      },
      {
        source: "/components/:path*",
        destination: "/docs/components/:path*",
        permanent: true,
      },
      {
        source: "/docs/components",
        destination: "/docs/components/magic-card",
        permanent: true,
      },
    ];
  },
};

export default withContentlayer(nextConfig);
