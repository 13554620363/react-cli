import _ from 'lodash';
import 'babel-polyfill'
require('es6-promise').polyfill();
require('fetch-ie8');
// import fetch from 'fetch-ie8';

let Data ={}
const ajax = ({ url, method = 'get', headers = {}, ...options }) => {
  if (!url) {
    throw new Error("Property 'url' should not be empty!");
  }

  if (url.indexOf('/') != 0 && url.indexOf('http') != 0) {
    // url = `${URL_PREFIX}/${url}`;
  }
  const isFormData = options.isFormData;
  const originHeaders = {
      'Content-Type': 'application/json;charset=utf-8',
  };
  const headersNew = !isFormData ? originHeaders : isFormData;
  return fetch(url, {
    method,
    headers: {
        ...headersNew,
        ...headers
    },
    ...options
  })
    .then(response => {
      return response.json();
    })
    .then(res => {
      return res;
    })
    .catch(err => {
      console.error(err);
      return Promise.resolve();
    });
};

// get 请求
Data.get = ({ method, body, ...options }) => {
  // 把body的参数拼接到url中，并把body参数去掉
  if (_.isPlainObject(body)) {
    let url = options.url;

    if (url.indexOf('?') == -1) {
      url += '?';
    }

    for (let key in body) {
      url += `${key}=${body[key]}&`;
    }

    options.url = url.substring(0, url.length - 1);
  }

  return ajax({
    method: 'get',
    ...options
  });
};

// post 请求
Data.post = ({ method, params, body, ...options }) => {
  if (_.isPlainObject(params)) {
    params = JSON.stringify(params);
  }

  if (body || params) {
    options.body = body || params;
  }

  return ajax({
    method: 'post',
    ...options
  });
};

console.log(Data)
export default  Data;
