
const context = require.context('./', true, /\.js$/);
const keys = context.keys().filter(item => item !== './index.js');

const routes = [];
for (let i = 0; i < keys.length; i++) {
  routes.push(context(keys[i]).default);
}
console.log(routes)
export default routes;
