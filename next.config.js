/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MONGODB_URI: 'mongodb+srv://samir-roy:samir123@cluster0.on2oo96.mongodb.net/movieappDB?retryWrites=true&w=majority'
  },
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.experiments = config.experiments || {};
    config.experiments.topLevelAwait = true;
    return config;
  },
  images: {
    domains: ['occ-0-3933-116.1.nflxso.net']
  }
}

module.exports = nextConfig;