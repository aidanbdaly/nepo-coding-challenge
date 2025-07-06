import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/**",
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/movie",
        permanent: true,
      },
    ];
  }
}

export default nextConfig;
