/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'ak-d.tripcdn.com'
        },
      ]
    }
}

module.exports = nextConfig
