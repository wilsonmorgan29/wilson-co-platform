/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/services', destination: '/for-companies', permanent: true },
      { source: '/workshops', destination: '/additional-services#workshops', permanent: true },
    ]
  },
}

export default nextConfig
