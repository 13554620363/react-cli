const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(proxy('/api', {
    target: 'https://test-api-auction.jaadee.com',
    changeOrigin: true,
    pathRewrite: {
      "^/api": "/api"
    },
  }));
  app.use(proxy('/v1', {
    target: 'http://localhost:8081',
    changeOrigin: true, 
    pathRewrite: {
      "^/v1": "/v1"
    },
  }));
};