var __awaiter=this&&this.__awaiter||function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function u(t){try{f(r.next(t))}catch(t){o(t)}}function a(t){try{f(r["throw"](t))}catch(t){o(t)}}function f(t){t.done?n(t.value):i(t.value).then(u,a)}f((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,u;return u={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function a(t){return function(e){return f([t,e])}}function f(u){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=u[0]&2?i["return"]:u[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;if(i=0,o)u=[u[0]&2,o.value];switch(u[0]){case 0:case 1:o=u;break;case 4:n.label++;return{value:u[1],done:false};case 5:n.label++;i=u[1];u=[0];continue;case 7:u=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1];o=u;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(u);break}if(o[2])n.ops.pop();n.trys.pop();continue}u=e.call(t,n)}catch(t){u=[6,t];i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};System.register(["./p-f122fb29.system.js"],(function(t){"use strict";var e,n;return{setters:[function(t){e=t.e;n=t.f}],execute:function(){t("g",i);function r(t,e){return __awaiter(this,void 0,void 0,(function(){var n,r;return __generator(this,(function(i){switch(i.label){case 0:n=new Request(t,e);return[4,fetch(n)];case 1:r=i.sent();if(!r.ok)throw new Error(JSON.stringify({name:r.status,message:r.statusText}));return[2,r.json().catch((function(){return{}}))]}}))}))}function i(t,e){return __awaiter(this,void 0,void 0,(function(){var n;return __generator(this,(function(i){switch(i.label){case 0:n=Object.assign({method:"get"},e);return[4,r(t,n)];case 1:return[2,i.sent()]}}))}))}var o=function(t,e,n){var r=t.get(e);if(!r){t.set(e,[n])}else if(!r.includes(n)){r.push(n)}};var u=function(t,e){var n;return function(){var r=[];for(var i=0;i<arguments.length;i++){r[i]=arguments[i]}if(n){clearTimeout(n)}n=setTimeout((function(){n=0;t.apply(void 0,r)}),e)}};var a=function(t){return!("isConnected"in t)||t.isConnected};var f=u((function(t){for(var e=0,n=t.keys();e<n.length;e++){var r=n[e];t.set(r,t.get(r).filter(a))}}),2e3);var c=function(t){var r=t.on;var i=new Map;if(typeof e==="function"){r("dispose",(function(){i.clear()}));r("get",(function(t){var n=e();if(n){o(i,t,n)}}));r("set",(function(t){var e=i.get(t);if(e){i.set(t,e.filter(n))}f(i)}));r("reset",(function(){i.forEach((function(t){return t.forEach(n)}));f(i)}))}};var s=function(t,e){if(e===void 0){e=function(t,e){return t!==e}}var n=new Map(Object.entries(t!==null&&t!==void 0?t:{}));var r={dispose:[],get:[],set:[],reset:[]};var i=function(){n=new Map(Object.entries(t!==null&&t!==void 0?t:{}));r.reset.forEach((function(t){return t()}))};var o=function(){r.dispose.forEach((function(t){return t()}));i()};var u=function(t){r.get.forEach((function(e){return e(t)}));return n.get(t)};var a=function(t,i){var o=n.get(t);if(e(i,o,t)){n.set(t,i);r.set.forEach((function(e){return e(t,i,o)}))}};var f=typeof Proxy==="undefined"?{}:new Proxy(t,{get:function(t,e){return u(e)},ownKeys:function(t){return Array.from(n.keys())},getOwnPropertyDescriptor:function(){return{enumerable:true,configurable:true}},has:function(t,e){return n.has(e)},set:function(t,e,n){a(e,n);return true}});var c=function(t,e){r[t].push(e);return function(){l(r[t],e)}};var s=function(e,n){var r=c("set",(function(t,r){if(t===e){n(r)}}));var i=c("reset",(function(){return n(t[e])}));return function(){r();i()}};var v=function(){var t=[];for(var e=0;e<arguments.length;e++){t[e]=arguments[e]}return t.forEach((function(t){if(t.set){c("set",t.set)}if(t.get){c("get",t.get)}if(t.reset){c("reset",t.reset)}}))};return{state:f,get:u,set:a,on:c,onChange:s,use:v,dispose:o,reset:i}};var l=function(t,e){var n=t.indexOf(e);if(n>=0){t[n]=t[t.length-1];t.length--}};var v=t("c",(function(t,e){var n=s(t,e);c(n);return n}));var h=t("p",(function(t,e,n){if(e===void 0){e=10}if(n===void 0){n=1}return t.slice((n-1)*e,n*e)}));var g=t("s",(function(t,e,n){if(n===void 0){n=false}return t.sort((function(t,r){var i=typeof t[e]==="string"?t[e].toLowerCase():t[e];var o=typeof r[e]==="string"?r[e].toLowerCase():r[e];return n?i>o?-1:i<o?1:0:i<o?-1:i>o?1:0}))}))}}}));