import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
          }
        }
      ]
    });
    return config;
  },
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: [
            {
              loader: '@svgr/webpack',
              options: {
                svgoConfig: {
                  plugins: [
                    {
                      name: 'preset-default',
                      params: {
                        overrides: {
                          // customize default plugin options
                          removeViewBox: false,
                        },
                      },
                    },
                    'removeDimensions',
                  ],
                },
              },
            },
          ],
          as: '*.js',
        },
      },
    }
  }
};


export default nextConfig;
