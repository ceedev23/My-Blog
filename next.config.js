/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/My-Blog',
  assetPrefix: '/My-Blog/',
  trailingSlash: true,
}

module.exports = nextConfig 