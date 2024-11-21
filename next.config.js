/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')('./src/i18n.js');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(
    withNextIntl({
        output: 'standalone',
        experimental: {
            nextScriptWorkers: true,
        },
        images: {
            loader: 'default',
            minimumCacheTTL: 100,
            formats: ['image/avif', 'image/webp'],
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: 'www.evest.blog',
                    port: '',
                }
            ],
        },
        async headers() {
            return [
                {
                    source: '/(.*)', // Matches all routes
                    headers: [
                        {
                            key: 'X-Frame-Options',
                            value: 'SAMEORIGIN',
                        },
                        {
                            key: 'Content-Security-Policy',
                            value: "frame-ancestors 'self'",
                        },
                    ],
                },
            ];
        },
        staticPageGenerationTimeout: 1000,
    })
);
