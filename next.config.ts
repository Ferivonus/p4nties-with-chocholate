import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* React Strict Mode: Olası hataları geliştirme aşamasında yakalar */
  reactStrictMode: true,

  /* Görsel Optimizasyonu ve İzinler */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**', // Unsplash üzerindeki tüm yollara izin ver
      },
      {
        protocol: 'https',
        hostname: 'grainy-gradients.vercel.app', // Noise efekti veya texture'lar için
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;