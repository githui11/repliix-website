/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
  async redirects() {
    const agencyPages = [
      '/blog',
      '/blog/:path*',
      '/services',
      '/pricing',
      '/process',
      '/resources',
      '/lead-magnets',
      '/ai-tools',
      '/ai-tools-comparison',
      '/ai-automation',
      '/ai-automation-agency',
      '/ai-cold-email-agency',
      '/hire-ai-automation-experts',
      '/about',
      '/kenya',
      '/nairobi',
    ];
    return agencyPages.map((source) => ({
      source,
      destination: '/',
      permanent: true,
    }));
  },
};

export default nextConfig;
