import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio/',
  images: {
    unoptimized: true,
    domains: [
      'drive.google.com', 
      'lh3.googleusercontent.com',
      'user-images.githubusercontent.com',
      'timelines.ai'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'timelines.ai',
        pathname: '**',
      }
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig