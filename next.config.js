/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/4711",
        permanent: true,
      },
    ];
  },
  trailingSlash: true,
};

module.exports = nextConfig;
