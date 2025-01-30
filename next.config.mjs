/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true, // Ignore ESLint errors during build
      },
      experimental: {
        appDir: true, // Enable App Router if using Next.js 14+
      }
};

export default nextConfig;
