import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: '/company',
        destination: '/about-us-in-kannur',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact-us-in-kannur',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/services-in-kannur',
        permanent: true,
      },
      {
        source: '/expertise',
        destination: '/expertise-in-kannur',
        permanent: true,
      },
      {
        source: '/locations',
        destination: '/locations-in-kannur',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Content-Security-Policy',
            value: "upgrade-insecure-requests"
          }
        ],
      },
    ];
  }
};

export default nextConfig;
