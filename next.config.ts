/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cryptospro.com.br',
      },
      {
        protocol: 'https',
        hostname: 'www.shareicon.net',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/swapi/:path*',
        destination: 'https://swapi.dev/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
