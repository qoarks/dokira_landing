/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // Optimisation pour Docker
  // Configuration pour les images externes si nécessaire
  images: {
    domains: [],
    // Désactiver l'optimisation des images pour la simplicité
    unoptimized: process.env.NODE_ENV !== 'production',
  },
};

module.exports = nextConfig;
