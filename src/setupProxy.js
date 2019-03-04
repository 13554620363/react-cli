const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/v2', { target: 'https://api.douban.com' }));
};