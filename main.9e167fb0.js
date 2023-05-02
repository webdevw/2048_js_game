parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(t){return n(t)||r(t)||i(t)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function n(t){if(Array.isArray(t))return a(t)}function o(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=i(t))){var e=0,r=function(){};return{s:r,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,a=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,o=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw o}}}}function i(t,e){if(t){if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var u=document.querySelector(".game-field"),l=u.rows,f=u.rows.length,s=document.querySelector("button"),d=document.querySelector(".game-score"),v=document.querySelector(".message-start"),y=document.querySelector(".message-win"),m=document.querySelector(".message-lose"),h=document.querySelectorAll(".field-cell"),g=2048,b=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],p=!1;function w(t,e){for(var r=function(r){if(t[r].some(function(t,n){return t!==e[r][n]}))return{v:!0}},n=0;n<t.length;n++){var o=r(n);if("object"===c(o))return o.v}return!1}function S(t){for(var e=[],r=0;r<t.length;++r)for(var n=0;n<t[r].length;++n)void 0!==t[r][n]&&(void 0===e[n]&&(e[n]=[]),e[n][r]=t[r][n]);return e}function A(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=e?q(t):q(t).map(function(t){return t.reverse()});function o(t){return t.filter(function(t){return 0!==t})}function i(t){for(var e=o(t),n=0;n<e.length-1;n++)e[n]===e[n+1]&&(e[n]*=2,e[n+1]=0,r&&L(e[n])),e=o(e);for(;e.length<f;)e.push(0);return e}for(var a=[],c=0;c<f;c++){var u=n[c];u=i(u),a[c]=u}return e?a:a.map(function(t){return t.reverse()})}function L(t){var e=+d.textContent+t;d.textContent=e}function j(t){for(var e=0;e<f;e++)for(var r=0;r<f;r++)l[e].cells[r].textContent=0!==t[e][r]?t[e][r]:" "}function k(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r=[],n=Math.round(100*Math.random())>e?2:4,o=0;o<f;o++)for(var i=0;i<f;i++)0===t[o][i]&&r.push([o,i]);var a=r.length,c=Math.round(Math.random()*(a-1));if(a>0){var u=+r[c].slice(1);t[+r[c].slice(0,1)][u]=n}}function q(t){var e=[];for(var r in t)t[r]instanceof Object?e[r]=q(t[r]):e[r]=t[r];return e}function x(t){var e,r=o(t);try{for(r.s();!(e=r.n()).done;){var n,i=o(e.value);try{for(i.s();!(n=i.n()).done;){n.value===g&&y.classList.remove("hidden")}}catch(a){i.e(a)}finally{i.f()}}}catch(a){r.e(a)}finally{r.f()}}function C(e){t(e).forEach(function(t){t.className="field-cell";var e=t.textContent;e>=2&&t.classList.toggle("field-cell--".concat(e),!0)})}s.addEventListener("click",function(t){function e(){p=!0,d.textContent=0,k(b=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]),k(b),j(b),C(h)}v.classList.add("hidden"),y.classList.toggle("hidden",!0),m.classList.toggle("hidden",!0),s.classList.contains("start")?(!function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";s.textContent=t,s.classList.toggle("start"),s.classList.toggle("restart")}("Restart"),e()):e()}),document.addEventListener("keydown",function(t){if(!["ArrowRight","ArrowLeft","ArrowDown","ArrowUp"].includes(t.key)||!p)return null;var e=q(b),r=S(e);function n(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(b=n?S(A(t,r,!0)):A(t,r,!0),!w(e,b))return null;k(b),j(b),C(h)}switch(t.key){case"ArrowRight":n(e);break;case"ArrowLeft":n(e,!0);break;case"ArrowDown":n(r,!1,!0);break;case"ArrowUp":n(r,!0,!0)}x(b);var i,a=o(b);try{for(a.s();!(i=a.n()).done;){if(!i.value.includes(0)){var c=q(b),u=S(A(r,!0)),l=S(A(r,!1)),f=A(b,!1),s=A(b,!0);[w(c,u),w(c,l),w(c,f),w(c,s)].every(function(t){return!1===t})&&(m.classList.remove("hidden"),p=!1)}}}catch(d){a.e(d)}finally{a.f()}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.9e167fb0.js.map