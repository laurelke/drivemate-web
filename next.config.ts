import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.drivemate-tw.com',
          },
        ],
        destination: 'https://drivemate-tw.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig