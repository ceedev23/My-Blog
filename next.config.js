/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/My-Blog' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/My-Blog/' : '',
}

module.exports = nextConfig 