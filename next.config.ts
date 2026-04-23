import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // www → non-www
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

      // 需要的話可把舊路徑集中到新路徑
      // 例：如果你未來有改 slug，可在這裡補
      // {
      //   source: '/road-driving',
      //   destination: '/courses/road-driving',
      //   permanent: true,
      // },
    ]
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
      },
    ]
  },

  trailingSlash: false,
}

export default nextConfig