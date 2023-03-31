/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_SPOTIFY_CLIENT_SECRET: process.env.NEXT_SPOTIFY_CLIENT_SECRET,
        NEXT_SPOTIFY_CLIENT_ID: process.env.NEXT_SPOTIFY_CLIENT_ID,
        NEXT_SPOTIFY_REDIRECT_URI: process.env.NEXT_SPOTIFY_REDIRECT_URI,
    },
    images: {
        domains: ["www.datocms-assets.com", "cdn.sanity.io", "t.scdn.co"],
    },
    experimental: {
        appDir: true,
    },
};

module.exports = nextConfig;
