/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/internship/assignment-2',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
