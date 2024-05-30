/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer, dev, webpack }) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false
    }

    config.externals.push(
      'pino-pretty',
      'lokijs',
      'encoding'
    )

    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.dgbet.fun',
        port: '',
        pathname: '/dgbet-logo.png',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/events/top',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig