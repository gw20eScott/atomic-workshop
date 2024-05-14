/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    compiler: {
        styledComponents: true,
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      })
  
      return config
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'example.domain.com',
          },
        ],
      },
};

export default nextConfig;
