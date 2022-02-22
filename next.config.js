const { withContentlayer } = require("next-contentlayer");

/**
 * @type {import('next').NextConfig}
 */

module.exports = withContentlayer()({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["avatars.githubusercontent.com", "anik.live"],
  },
});
