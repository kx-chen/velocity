!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){function n(e){alert("settings")}function o(){document.getElementById("body-wrapper").style.display="block"}function r(){var e;e=d(),l(),parseInt(document.getElementById("minute").innerHTML)!==parseInt(e[1])&&(document.getElementById("hour").innerHTML=e[0],document.getElementById("minute").innerHTML=e[1]),setTimeout(r,500)}function l(){let e="Hello.";const t=d()[0];t>24?e="Have a good day":t>=18?e="Good evening":t<6?e="Have a good night":t>=12?e="Good afternoon":t>=6&&(e="Good morning"),e+=", "+localStorage.getItem("name")+".",document.getElementById("message-under-clock").innerHTML!==e&&(document.getElementById("message-under-clock").innerHTML=e)}function d(){const e=new Date,t=e.getHours();let n=e.getMinutes();return n=function(e){e<10&&(e="0"+e);return e}(n),[t,n]}function u(e){"Enter"===e.key&&(localStorage.setItem("name",e.srcElement.value),document.getElementById("name-form").style.display="none",document.getElementById("clock").style.display="block",document.getElementById("message-under-clock").style.display="block")}var c;c=function(){r(),l(),setTimeout(o,100),document.getElementById("settings-cog").addEventListener("click",n),document.getElementById("name").addEventListener("keydown",u),null==localStorage.getItem("name")&&(document.getElementById("name-form").style.display="block",document.getElementById("clock").style.display="none",document.getElementById("message-under-clock").style.display="none")},"loading"!==document.readyState?c():document.addEventListener("DOMContentLoaded",c)}]);