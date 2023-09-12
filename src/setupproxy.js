const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://eservices.dhai-r.com.pk',
      changeOrigin: true,
    })
  );
};
