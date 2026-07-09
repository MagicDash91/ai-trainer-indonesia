/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: ".*\\.vercel\\.app" }],
        destination: "https://aitrainerindonesia.com/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
