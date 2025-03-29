/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/My-Blog',
  assetPrefix: '/My-Blog/',
  trailingSlash: true,
  distDir: 'out',
}

module.exports = nextConfig 