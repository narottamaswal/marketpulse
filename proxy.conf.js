const conf = [
    {
        context: [
            '/api',
            '/js',
            '/heapAnalytics',
            '/services',
            '/icsesgmanagement',
            '/health',
        ],
        target: `https://marketpulse-latest.onrender.com`,
        secure: false,
        changeOrigin: false,
        rewrite: {
            "^/api": ""
        },
    }
];
module.exports = conf;
