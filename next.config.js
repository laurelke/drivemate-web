/** @type {import('next').NextConfig} */
const nextConfig = {
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

module.exports = nextConfig