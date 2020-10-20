/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: 'empty',
      }
    }

    return config
  },
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 60 * 1000 * 3,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 5,
  },
}

module.exports = withPlugins([[withImages]], nextConfig)
