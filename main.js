(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>v});var r=n(81),o=n.n(r),a=n(645),i=n.n(a),d=n(667),u=n.n(d),c=new URL(n(265),n.b),l=new URL(n(260),n.b),s=new URL(n(508),n.b),f=i()(o()),h=u()(c),m=u()(l),g=u()(s);f.push([t.id,"@font-face {\n    font-family: 'header';\n    src: url("+h+");\n}\n\n@font-face {\n    font-family: 'button';\n    src: url("+m+");\n}\n\n@font-face {\n    font-family: 'button-bold';\n    src: url("+g+");\n}\n\nbody {\n    display: flex;\n    flex-direction: row;\n    margin: 0px;\n}\n\n/* #page-cont {\n    display: flex;\n    flex-direction: row;\n}; */\n\n#sidebar {\n    display: flex;\n    flex-direction: column;\n    width: 20vw;\n    height: 100vh;\n    background-color: #6b6b6b;\n    justify-content:flex-start;\n    align-items: center;\n}\n\n.selected-project {\n    background-color: gray;\n    border-radius: 10px;\n    width: 10vw;\n    height: auto;\n}\n\n#proj-form-title-cont {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#sidebar-current-proj,\n#sidebar-timeframes {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    cursor: pointer;\n}\n\n#page-name-cont {\n    width: 20vw;\n    height: auto;\n    background-color: #365aff;\n}\n\n#proj-form-title-cont,\n#timeframe-title-cont {\n    background-color: #6983b3;\n    width: 20vw;\n    height: auto;\n}\n\n.proj-form-title,\n#timeframe-title {\n    font-family: 'button-bold';\n    font-size: 170%;\n    color: white;\n    text-align: center;\n}\n\n#page-name {\n    padding: 10px;\n    font-size: 200%;\n    text-align: center;\n    font-family: 'header';\n    color: white;\n}\n\n#project-new-btn {\n    background-color: grey;\n    color: white;\n    font-family: 'button';\n    border: none;\n    border-radius: 10px;\n    font-size: 130%;\n}\n\n#project-new-btn:hover {\n    transition: 0.4s;\n    filter: drop-shadow(1px 1px 1px black);\n    background-color: black;\n    color: white;\n    font-family: 'button-bold';\n}\n\n.current-projects,\n.projects,\n.today,\n.this-week,\n.this-month {\n    margin: 10px;\n    text-align: center;\n}\n\n.projects,\n#sidebar-timeframes {\n    font-family: 'button-bold';\n    padding: 5px;\n    font-size: 160%;\n    color: white;\n}\n/* .project-menu-item {\n\n} */\n\n.project-menu-item:hover,\n.today:hover,\n.this-week:hover,\n.this-month:hover {\n    /* filter: drop-shadow(1px 1px 1px black); */\n    transition: 0.4s;\n    background-color: #2b2b2b;\n    color: white;\n    box-shadow: 1px 1px 5px black;\n    /* width: 20vw; */\n    height: auto;\n    border-radius: 10px;\n}\n\n#project-name {\n    width: 10vw;\n    height: auto;\n    border-radius: 5px;\n}\n\n.sidebar-divider {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 15vw;\n    height: 5px;\n    background-color: gray;\n    margin: 15px;\n}\n\n#timeframe-title {\n    text-align: center;\n}\n\n#todo-cont {\n    display: flex;\n    flex-direction: column;\n    width: 80vw;\n    background-color: lawngreen;\n    align-items: center;\n}\n\n.todo-header {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: #365aff;\n    width: 65vw;\n    border-radius: 10px 10px 0 0;\n}\n.todo-cont-title {\n    font-family: 'header';\n    font-size: 200%;\n    justify-self: center;\n    color: white;\n}\n#todo-layout {\n    display: flex;\n    flex-direction: row;\n    width: 65vw;\n    height: auto;\n    background-color: #6983b3;\n    border-top-width: 2px;\n    border-top-color: black;\n    border-top-style: solid;\n    border-bottom-width: 2px;\n    border-bottom-color: black;\n    border-bottom-style: solid;\n}\n\n#complete-cont {\n    width: 10vw;\n    height: auto;\n}\n\n#todo-name-layout-cont {\n    width: 40vw;\n    height: auto;\n    /* background: pink; */\n}\n\n#duedate-layout-cont {\n    width: 15vw;\n    height: auto;\n    /* background-color: purple; */\n}\n\n#complete-cont,\n#todo-name-layout-cont,\n#duedate-layout-cont,\n#project-layout-cont {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#complete,\n#todo-name-layout,\n#duedate-layout,\n#project-layout {\n    font-family: 'button-bold';\n    font-size: 120%;\n    color: white;\n}\n\n#current-todos {\n    width: 65vw;\n    background-color: white;\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n}\n\n.todo {\n    display: flex;\n    flex-direction: row;\n}\n\n.todo:hover {\n    transition: 0.4s;\n    box-shadow: 1px 1px 5px black;\n}\n\n.todo-check-cont {\n    width: 10vw;\n    height: auto;\n    display: flex;\n    justify-content: center;\n}\n\n.todo-layout {\n    width: 100vw;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n}\n\n.todo-name-layout-cont {\n    width: 40vw;\n    height: auto;\n    display: flex;\n    align-items: center;\n}\n\n.todo-duedate-cont {\n    width: 15vw;\n    height: auto;\n    display: flex;\n    justify-content: center;\n}\n\n.todo-check-layout,\n.todo-name-layout,\n.todo-duedate-layout {\n    padding-top: 1vh;\n    padding-bottom: 1vh;\n}\n\n.todo-name-layout,\n.todo-duedate-layout {\n    font-family: 'button';\n    font-size: 110%;\n}\n\n.todo-name-layout {\n    padding-left: 1vw;\n    text-align: center;\n}",""]);const v=f},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var u=this[d][0];null!=u&&(i[u]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],d=0;d<t.length;d++){var u=t[d],c=r.base?u[0]+r.base:u[0],l=a[c]||0,s="".concat(c," ").concat(l);a[c]=l+1;var f=n(s),h={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==f)e[f].references++,e[f].updater(h);else{var m=o(h,r);r.byIndex=d,e.splice(d,0,{identifier:s,updater:m,references:1})}i.push(s)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var d=n(a[i]);e[d].references--}for(var u=r(t,o),c=0;c<a.length;c++){var l=n(a[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=u}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},508:(t,e,n)=>{t.exports=n.p+"f4e11612324a155f7e87.ttf"},260:(t,e,n)=>{t.exports=n.p+"4c6a54c92a1649d378fa.ttf"},265:(t,e,n)=>{t.exports=n.p+"14ad3327c9e3a16f1107.ttf"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var t=n(379),e=n.n(t),r=n(795),o=n.n(r),a=n(569),i=n.n(a),d=n(565),u=n.n(d),c=n(216),l=n.n(c),s=n(589),f=n.n(s),h=n(426),m={};m.styleTagTransform=f(),m.setAttributes=u(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;class g{constructor(t){this.name=t,this.id=Date().toString(),this.toDos=[]}}class v{constructor(t,e,n,r){this.name=t,this.dueDate=e,this.priority=n,this.parent=r,this.id=Date().toString(),this.complete=!1}}function p(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function y(t){return p(1,arguments),t instanceof Date||"object"===w(t)&&"[object Date]"===Object.prototype.toString.call(t)}function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function x(t){p(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===b(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function T(t){if(p(1,arguments),!y(t)&&"number"!=typeof t)return!1;var e=x(t);return!isNaN(Number(e))}function k(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function S(t,e){p(2,arguments);var n=x(t).getTime(),r=k(e);return new Date(n+r)}function M(t,e){p(2,arguments);var n=k(e);return S(t,-n)}var C=864e5;function D(t){p(1,arguments);var e=1,n=x(t),r=n.getUTCDay(),o=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-o),n.setUTCHours(0,0,0,0),n}function E(t){p(1,arguments);var e=x(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var o=D(r),a=new Date(0);a.setUTCFullYear(n,0,4),a.setUTCHours(0,0,0,0);var i=D(a);return e.getTime()>=o.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function j(t){p(1,arguments);var e=E(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=D(n);return r}var U=6048e5,P={};function q(){return P}function W(t,e){var n,r,o,a,i,d,u,c;p(1,arguments);var l=q(),s=k(null!==(n=null!==(r=null!==(o=null!==(a=null==e?void 0:e.weekStartsOn)&&void 0!==a?a:null==e||null===(i=e.locale)||void 0===i||null===(d=i.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==o?o:l.weekStartsOn)&&void 0!==r?r:null===(u=l.locale)||void 0===u||null===(c=u.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==n?n:0);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=x(t),h=f.getUTCDay(),m=(h<s?7:0)+h-s;return f.setUTCDate(f.getUTCDate()-m),f.setUTCHours(0,0,0,0),f}function L(t,e){var n,r,o,a,i,d,u,c;p(1,arguments);var l=x(t),s=l.getUTCFullYear(),f=q(),h=k(null!==(n=null!==(r=null!==(o=null!==(a=null==e?void 0:e.firstWeekContainsDate)&&void 0!==a?a:null==e||null===(i=e.locale)||void 0===i||null===(d=i.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==o?o:f.firstWeekContainsDate)&&void 0!==r?r:null===(u=f.locale)||void 0===u||null===(c=u.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=new Date(0);m.setUTCFullYear(s+1,0,h),m.setUTCHours(0,0,0,0);var g=W(m,e),v=new Date(0);v.setUTCFullYear(s,0,h),v.setUTCHours(0,0,0,0);var w=W(v,e);return l.getTime()>=g.getTime()?s+1:l.getTime()>=w.getTime()?s:s-1}function N(t,e){var n,r,o,a,i,d,u,c;p(1,arguments);var l=q(),s=k(null!==(n=null!==(r=null!==(o=null!==(a=null==e?void 0:e.firstWeekContainsDate)&&void 0!==a?a:null==e||null===(i=e.locale)||void 0===i||null===(d=i.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==o?o:l.firstWeekContainsDate)&&void 0!==r?r:null===(u=l.locale)||void 0===u||null===(c=u.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1),f=L(t,e),h=new Date(0);h.setUTCFullYear(f,0,s),h.setUTCHours(0,0,0,0);var m=W(h,e);return m}var O=6048e5;function Y(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const H=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return Y("yy"===e?r%100:r,e.length)},F=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):Y(n+1,2)},z=function(t,e){return Y(t.getUTCDate(),e.length)},I=function(t,e){return Y(t.getUTCHours()%12||12,e.length)},A=function(t,e){return Y(t.getUTCHours(),e.length)},B=function(t,e){return Y(t.getUTCMinutes(),e.length)},R=function(t,e){return Y(t.getUTCSeconds(),e.length)},Q=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return Y(Math.floor(r*Math.pow(10,n-3)),e.length)};var G={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return H(t,e)},Y:function(t,e,n,r){var o=L(t,r),a=o>0?o:1-o;return"YY"===e?Y(a%100,2):"Yo"===e?n.ordinalNumber(a,{unit:"year"}):Y(a,e.length)},R:function(t,e){return Y(E(t),e.length)},u:function(t,e){return Y(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return Y(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return Y(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return F(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return Y(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var o=function(t,e){p(1,arguments);var n=x(t),r=W(n,e).getTime()-N(n,e).getTime();return Math.round(r/O)+1}(t,r);return"wo"===e?n.ordinalNumber(o,{unit:"week"}):Y(o,e.length)},I:function(t,e,n){var r=function(t){p(1,arguments);var e=x(t),n=D(e).getTime()-j(e).getTime();return Math.round(n/U)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):Y(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):z(t,e)},D:function(t,e,n){var r=function(t){p(1,arguments);var e=x(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),o=n-r;return Math.floor(o/C)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):Y(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var o=t.getUTCDay(),a=(o-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(a);case"ee":return Y(a,2);case"eo":return n.ordinalNumber(a,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var o=t.getUTCDay(),a=(o-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(a);case"cc":return Y(a,e.length);case"co":return n.ordinalNumber(a,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),o=0===r?7:r;switch(e){case"i":return String(o);case"ii":return Y(o,e.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,o=t.getUTCHours();switch(r=12===o?"noon":0===o?"midnight":o/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,o=t.getUTCHours();switch(r=o>=17?"evening":o>=12?"afternoon":o>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return I(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):A(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):Y(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):Y(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):B(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):R(t,e)},S:function(t,e){return Q(t,e)},X:function(t,e,n,r){var o=(r._originalDate||t).getTimezoneOffset();if(0===o)return"Z";switch(e){case"X":return J(o);case"XXXX":case"XX":return _(o);default:return _(o,":")}},x:function(t,e,n,r){var o=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return J(o);case"xxxx":case"xx":return _(o);default:return _(o,":")}},O:function(t,e,n,r){var o=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+X(o,":");default:return"GMT"+_(o,":")}},z:function(t,e,n,r){var o=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+X(o,":");default:return"GMT"+_(o,":")}},t:function(t,e,n,r){var o=r._originalDate||t;return Y(Math.floor(o.getTime()/1e3),e.length)},T:function(t,e,n,r){return Y((r._originalDate||t).getTime(),e.length)}};function X(t,e){var n=t>0?"-":"+",r=Math.abs(t),o=Math.floor(r/60),a=r%60;if(0===a)return n+String(o);var i=e||"";return n+String(o)+i+Y(a,2)}function J(t,e){return t%60==0?(t>0?"-":"+")+Y(Math.abs(t)/60,2):_(t,e)}function _(t,e){var n=e||"",r=t>0?"-":"+",o=Math.abs(t);return r+Y(Math.floor(o/60),2)+n+Y(o%60,2)}const Z=G;var $=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},V=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}};const K={p:V,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],o=r[1],a=r[2];if(!a)return $(t,e);switch(o){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",$(o,e)).replace("{{time}}",V(a,e))}};function tt(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var et=["D","DD"],nt=["YY","YYYY"];function rt(t){return-1!==et.indexOf(t)}function ot(t){return-1!==nt.indexOf(t)}function at(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var it={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function dt(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}const ut={date:dt({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:dt({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:dt({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var ct={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function lt(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,a=null!=n&&n.width?String(n.width):o;r=t.formattingValues[a]||t.formattingValues[o]}else{var i=t.defaultWidth,d=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[d]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const st={ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:lt({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:lt({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:lt({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:lt({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:lt({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function ft(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,o=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],a=e.match(o);if(!a)return null;var i,d=a[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(u)?mt(u,(function(t){return t.test(d)})):ht(u,(function(t){return t.test(d)}));i=t.valueCallback?t.valueCallback(c):c,i=n.valueCallback?n.valueCallback(i):i;var l=e.slice(d.length);return{value:i,rest:l}}}function ht(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function mt(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var gt,vt={ordinalNumber:(gt={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(gt.matchPattern);if(!n)return null;var r=n[0],o=t.match(gt.parsePattern);if(!o)return null;var a=gt.valueCallback?gt.valueCallback(o[0]):o[0];a=e.valueCallback?e.valueCallback(a):a;var i=t.slice(r.length);return{value:a,rest:i}}),era:ft({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:ft({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:ft({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:ft({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:ft({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const pt={code:"en-US",formatDistance:function(t,e,n){var r,o=it[t];return r="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:ut,formatRelative:function(t,e,n,r){return ct[t]},localize:st,match:vt,options:{weekStartsOn:0,firstWeekContainsDate:1}};var wt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,yt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,bt=/^'([^]*?)'?$/,xt=/''/g,Tt=/[a-zA-Z]/;function kt(t,e,n){var r,o,a,i,d,u,c,l,s,f,h,m,g,v,w,y,b,S;p(2,arguments);var C=String(e),D=q(),E=null!==(r=null!==(o=null==n?void 0:n.locale)&&void 0!==o?o:D.locale)&&void 0!==r?r:pt,j=k(null!==(a=null!==(i=null!==(d=null!==(u=null==n?void 0:n.firstWeekContainsDate)&&void 0!==u?u:null==n||null===(c=n.locale)||void 0===c||null===(l=c.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==d?d:D.firstWeekContainsDate)&&void 0!==i?i:null===(s=D.locale)||void 0===s||null===(f=s.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==a?a:1);if(!(j>=1&&j<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var U=k(null!==(h=null!==(m=null!==(g=null!==(v=null==n?void 0:n.weekStartsOn)&&void 0!==v?v:null==n||null===(w=n.locale)||void 0===w||null===(y=w.options)||void 0===y?void 0:y.weekStartsOn)&&void 0!==g?g:D.weekStartsOn)&&void 0!==m?m:null===(b=D.locale)||void 0===b||null===(S=b.options)||void 0===S?void 0:S.weekStartsOn)&&void 0!==h?h:0);if(!(U>=0&&U<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!E.localize)throw new RangeError("locale must contain localize property");if(!E.formatLong)throw new RangeError("locale must contain formatLong property");var P=x(t);if(!T(P))throw new RangeError("Invalid time value");var W=tt(P),L=M(P,W),N={firstWeekContainsDate:j,weekStartsOn:U,locale:E,_originalDate:P},O=C.match(yt).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,K[e])(t,E.formatLong):t})).join("").match(wt).map((function(r){if("''"===r)return"'";var o=r[0];if("'"===o)return St(r);var a=Z[o];if(a)return null!=n&&n.useAdditionalWeekYearTokens||!ot(r)||at(r,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||!rt(r)||at(r,e,String(t)),a(L,r,E.localize,N);if(o.match(Tt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+o+"`");return r})).join("");return O}function St(t){var e=t.match(bt);return e?e[1].replace(xt,"'"):t}function Mt(t,e){var n,r,o,a,i,d,u,c;p(1,arguments);var l=q(),s=k(null!==(n=null!==(r=null!==(o=null!==(a=null==e?void 0:e.weekStartsOn)&&void 0!==a?a:null==e||null===(i=e.locale)||void 0===i||null===(d=i.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==o?o:l.weekStartsOn)&&void 0!==r?r:null===(u=l.locale)||void 0===u||null===(c=u.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==n?n:0);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=x(t),h=f.getDay(),m=(h<s?7:0)+h-s;return f.setDate(f.getDate()-m),f.setHours(0,0,0,0),f}function Ct(t,e,n){p(2,arguments);var r=Mt(t,n),o=Mt(e,n);return r.getTime()===o.getTime()}function Dt(t,e){p(2,arguments);var n=x(t),r=x(e);return n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()}const Et=document.querySelector("[data-project-new]"),jt=document.querySelector("[data-project-form-input]"),Ut=document.querySelector("[data-project-form]"),Pt=document.querySelector("[data-current-projects]"),qt=document.getElementById("todo-cont"),Wt=document.querySelector("[data-todo-header-title]"),Lt=document.querySelector("[data-current-todos]"),Nt=document.querySelector("[data-todo-form-input]"),Ot=document.querySelector("[data-todo-form-duedate]"),Yt=document.querySelector("[data-todo-form-priority]"),Ht=document.querySelector("[data-new-todo-form]"),Ft=document.querySelector("[data-add-todo-btn]"),zt=document.querySelector("[data-todo-form-create]"),It=document.getElementById("project-layout"),At=document.querySelector("[data-current-date-todos]"),Bt=document.querySelector("[data-todos-today]"),Rt=document.querySelector("[data-todos-this-week]"),Qt=document.querySelector("[data-todos-this-month]"),Gt=document.querySelector("[data-remove-finished-todos]"),Xt=document.querySelector("[data-remove-project]"),Jt=document.getElementById("todo-template"),_t=document.getElementById("todo-date-template"),Zt="todo.projects",$t="todo.selectedProjectId";let Vt=JSON.parse(localStorage.getItem(Zt))||[],Kt=localStorage.getItem($t);Pt.addEventListener("click",(t=>{At.hidden=!0,Lt.hidden=!1,Gt.hidden=!1,Xt.hidden=!1,It.hidden=!0,"li"===t.target.tagName.toLowerCase()&&(Kt=t.target.dataset.projectId,te())})),Lt.addEventListener("click",(t=>{if("input"===t.target.tagName.toLowerCase()){const e=Vt.find((t=>t.id===Kt)).toDos.find((e=>e.id===t.target.id));console.log(e),e.complete=t.target.checked,ee()}})),Et.addEventListener("click",(t=>{Ut.hidden=!1})),Ut.addEventListener("submit",(t=>{t.preventDefault();const e=jt.value;if(null==e||""===e)return;const n=new g(e);jt.value=null,Vt.push(n),Ut.hidden=!0,te()})),Ft.addEventListener("click",(t=>{zt.hidden=!1,Ft.hidden=!0})),Ht.addEventListener("submit",(t=>{t.preventDefault();const e=Vt.find((t=>t.id===Kt)),n=e.name;let r=Nt.value,o=kt(new Date(Ot.value),"MM/dd/yyyy"),a=Yt.checked;if(null==r||""===r)return;const i=new v(r,o,a,n);Nt.value=null,e.toDos.push(i),Ht.hidden=!0,Ft.hidden=!1,te()})),Bt.addEventListener("click",(t=>{console.log(At),At.hidden=!1,Lt.hidden=!0,At.innerHTML="",Lt.innerHTML="",de(),It.hidden=!1,Wt.innerText=Bt.innerText,(Wt.innerText=Bt.innerText)&&Bt.classList.add("selected-project"),console.log(Bt.classList.contains("selected-project"));const e=document.getElementsByClassName("project-menu-item");console.log(e);const n=[],r=[],o=kt(new Date,"MM/dd/yyyy");Vt.forEach((t=>{n.push(t.toDos)})),n.flat().forEach((t=>{o===t.dueDate&&r.push(t)})),ae(r),e.style.backgroundColor=""})),Rt.addEventListener("click",(t=>{At.hidden=!1,Lt.hidden=!0,Lt.innerHTML="",At.innerHTML="",It.hidden=!1,Wt.innerText=Rt.innerText;const e=[],n=[];Vt.forEach((t=>{e.push(t.toDos)})),e.flat().forEach((t=>{!0===function(t,e){return p(1,arguments),Ct(t,Date.now(),e)}(new Date(t.dueDate))&&n.push(t)})),ae(n)})),Qt.addEventListener("click",(t=>{At.hidden=!1,Lt.hidden=!0,Lt.innerHTML="",At.innerHTML="",It.hidden=!1,Wt.innerText=Qt.innerText;const e=[],n=[];Vt.forEach((t=>{e.push(t.toDos)})),e.flat().forEach((t=>{!0===function(t){return p(1,arguments),Dt(Date.now(),t)}(new Date(t.dueDate))&&n.push(t)})),ae(n)})),Gt.addEventListener("click",(t=>{const e=Vt.find((t=>t.id===Kt));e.toDos=e.toDos.filter((t=>!t.complete)),te()})),Xt.addEventListener("click",(t=>{Vt=Vt.filter((t=>t.id!==Kt)),Kt=null,te()}));const te=()=>{ee(),ne()},ee=()=>{localStorage.setItem(Zt,JSON.stringify(Vt)),localStorage.setItem($t,Kt)},ne=()=>{ie(Pt),re();let t=Vt.find((t=>t.id===Kt));null==Kt?qt.style.display="none":(qt.style.display="",Wt.innerText=t.name,ie(Lt),oe(t))},re=()=>{Vt.forEach((t=>{let e=document.createElement("li");e.dataset.projectId=t.id,e.classList.add("project-menu-item"),e.innerText=t.name,t.id===Kt&&e.classList.add("selected-project"),Pt.append(e)}))},oe=t=>{t.toDos.forEach((t=>{const e=document.importNode(Jt.content,!0),n=e.querySelector("[data-todo-checkbox]"),r=e.querySelector("[data-todo-date]");r.id=t.id,r.innerText=t.dueDate,n.id=t.id,n.checked=t.complete;const o=e.querySelector("label");o.htmlFor=t.id,!0===t.priority&&(o.style.color="red",r.style.color="red"),o.append(t.name),Lt.appendChild(e)}))},ae=t=>{t.forEach((t=>{const e=document.importNode(_t.content,!0),n=e.querySelector("[data-date-todo-checkbox]"),r=e.querySelector("[data-date-todo-date]"),o=e.querySelector("[data-date-todo-project]");r.id=t.id,r.innerText=t.dueDate,n.id=t.id,n.checked=t.complete;const a=e.querySelector("label");a.htmlFor=t.id,o.innerText=t.parent,!0===t.priority&&(a.style.color="red",r.style.color="red",o.style.color="red"),a.append(t.name),At.appendChild(e),n.addEventListener("click",(t=>{Gt.hidden=!1,Gt.addEventListener("click",(t=>{const e=Vt.find((t=>t.id===Kt));e.toDos=e.toDos.filter((t=>!t.complete)),te()}))}))}))},ie=t=>{for(;t.firstChild;)t.removeChild(t.firstChild)},de=()=>{Gt.hidden=!0,Xt.hidden=!0,Ht.hidden=!0};ne()})()})();