/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/img/sm/:path/',
        destination: 'http://image.tmdb.org/t/p/w154/:path/',
      },
      {
        source: '/img/md/:path/',
        destination: 'http://image.tmdb.org/t/p/w342/:path/',
      },
    ];
  }
};

export default nextConfig;