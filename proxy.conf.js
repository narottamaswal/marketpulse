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
        target: `http://localhost:8080`,
        secure: false,
        changeOrigin: false,
        rewrite: {
            "^/api": ""
        },
    }
];
module.exports = conf;
