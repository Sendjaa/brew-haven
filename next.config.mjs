/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domain : ['images.unsplash.com', 'plus.unsplash.com'],
  },
}

export default nextConfig
