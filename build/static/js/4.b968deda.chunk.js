(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{200:function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"getQuesList",function(){return r});var o=n(11),r=function(e){return function(e){return t.default.get({url:"/movie/top250"}).then(function(t){return console.log(t),e(function(t){return{type:o.c,payload:t}}(t)),t})}}}.call(this,n(201))},201:function(t,e,n){"use strict";n.r(e);var o=n(8),r=n(202),c=n(203),i=n.n(c);n(205);n(407).polyfill(),n(408);var u={},a=function(t){var e=t.url,n=t.method,c=void 0===n?"get":n,i=t.headers,u=void 0===i?{}:i,a=Object(r.a)(t,["url","method","headers"]);if(!e)throw new Error("Property 'url' should not be empty!");0!=e.indexOf("/")&&e.indexOf("http");var s=a.isFormData,l=s||{"Content-Type":"application/json;charset=utf-8"};return fetch(e,Object(o.a)({method:c,headers:Object(o.a)({},l,u)},a)).then(function(t){return t.json()}).then(function(t){return t}).catch(function(t){return console.error(t),Promise.resolve()})};u.get=function(t){t.method;var e=t.body,n=Object(r.a)(t,["method","body"]);if(i.a.isPlainObject(e)){var c=n.url;for(var u in-1==c.indexOf("?")&&(c+="?"),e)c+="".concat(u,"=").concat(e[u],"&");n.url=c.substring(0,c.length-1)}return a(Object(o.a)({method:"get"},n))},u.post=function(t){t.method;var e=t.params,n=t.body,c=Object(r.a)(t,["method","params","body"]);return i.a.isPlainObject(e)&&(e=JSON.stringify(e)),(n||e)&&(c.body=n||e),a(Object(o.a)({method:"post"},c))},console.log(u),e.default=u},410:function(t,e,n){"use strict";n.r(e);var o=n(21),r=n(22),c=n(24),i=n(23),u=n(25),a=n(0),s=n.n(a),l=n(200),f=n(30),d=n(5),h=function(t){function e(t){var n;return Object(o.a)(this,e),(n=Object(c.a)(this,Object(i.a)(e).call(this,t))).state={currIndex:"",visible:!1,headerName:"\u7ec3\u4e60"},n}return Object(u.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){this.props.actions.getQuesList().then(function(t){console.log(t)}),console.log(this.props.questionInfoList)}},{key:"render",value:function(){return s.a.createElement("span",null,"zuoye")}}]),e}(a.Component);e.default=Object(f.b)(function(t){return console.log(t),{questionInfoList:t}},function(t){return{actions:Object(d.b)(l,t)}})(h)}}]);
//# sourceMappingURL=4.b968deda.chunk.js.map