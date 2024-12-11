import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portfolio',  // Add this line
  assetPrefix: '/portfolio/', // Add this line
  images: {
    unoptimized: true,
    domains: ['drive.google.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        pathname: '**',
      },
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