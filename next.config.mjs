const apiInternalUrl = process.env.API_INTERNAL_URL ?? "http://localhost:4001";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/contact",
        destination: `${apiInternalUrl}/api/contact`,
      },
      {
        source: "/api/health",
        destination: `${apiInternalUrl}/api/health`,
      },
      {
        source: "/api/admin/leads",
        destination: `${apiInternalUrl}/api/admin/leads`,
      },
    ];
  },
};

export default nextConfig;
