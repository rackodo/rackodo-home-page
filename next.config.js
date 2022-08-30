/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: {
      layoutRaw: true
    }
  },
  images: {
    domains: [
      'via.placeholder.com'
    ]
  }
}

module.exports = nextConfig