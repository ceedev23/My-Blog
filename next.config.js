/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/My-Blog',
  assetPrefix: '/My-Blog/',
}

module.exports = nextConfig 