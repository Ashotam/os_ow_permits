/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // enables faster + smaller JS bundles
  images: {
    formats: ['image/webp'], // WebP is smaller and supported on all modern browsers
     domains: [
      "dlnufmaanoefzzyf.public.blob.vercel-storage.com" 
    ],
  },
  experimental: {
    scrollRestoration: true, // improves UX on back navigation
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
}

export default nextConfig