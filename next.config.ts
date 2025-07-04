// next.config.ts
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  webpack(config) {
    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        {
          loader: '@mdx-js/loader',
          options: {
            providerImportSource: "@mdx-js/react"
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
