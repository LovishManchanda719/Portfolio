import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
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
  // Remove basePath if you want the site to be served from the root
  // Only keep it if you want the site to be served from a subdirectory
  // basePath: '/your-repo-name',
}

export default nextConfig