const rawApiInternalUrl = process.env.API_INTERNAL_URL?.trim();
const apiInternalUrl =
  process.env.NODE_ENV === "development" && rawApiInternalUrl?.includes("://api")
    ? "http://127.0.0.1:4001"
    : rawApiInternalUrl || "http://127.0.0.1:4001";

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
