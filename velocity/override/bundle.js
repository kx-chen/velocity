!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var o=n(1),r=n(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var l={insert:"head",singleton:!1},i=(o(r,l),r.locals?r.locals:{});e.exports=i},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},l=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function u(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},o=[],r=0;r<e.length;r++){var l=e[r],c=t.base?l[0]+t.base:l[0],a=n[c]||0,s="".concat(c," ").concat(a);n[c]=a+1;var f=u(s),_={css:l[1],media:l[2],sourceMap:l[3]};-1!==f?(i[f].references++,i[f].updater(_)):i.push({identifier:s,updater:m(_,t),references:1}),o.push(s)}return o}function a(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var i=l(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var s,f=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function _(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=f(t,r);else{var l=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(l,i[t]):e.appendChild(l)}}function d(e,t,n){var o=n.css,r=n.media,l=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),l&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(l))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,y=0;function m(e,t){var n,o,r;if(t.singleton){var l=y++;n=p||(p=a(t)),o=_.bind(null,n,l,!1),r=_.bind(null,n,l,!0)}else n=a(t),o=d.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=u(n[o]);i[r].references--}for(var l=c(e,t),a=0;a<n.length;a++){var s=u(n[a]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=l}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,".settings {\n    font-size: 4em;\n}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(i=o,u=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(c," */")),l=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(l).concat([r]).join("\n")}var i,u,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var l=0;l<this.length;l++){var i=this[l][0];null!=i&&(r[i]=!0)}for(var u=0;u<e.length;u++){var c=[].concat(e[u]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){"use strict";n.r(t);var o,r,l,i,u,c,a={},s=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function _(e,t){for(var n in t)e[n]=t[n];return e}function d(e){var t=e.parentNode;t&&t.removeChild(e)}function p(e,t,n){var o,r=arguments,l={};for(o in t)"key"!==o&&"ref"!==o&&(l[o]=t[o]);if(arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(r[o]);if(null!=n&&(l.children=n),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===l[o]&&(l[o]=e.defaultProps[o]);return y(e,l,t&&t.key,t&&t.ref)}function y(e,t,n,r){var l={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0};return o.vnode&&o.vnode(l),l}function m(e){return e.children}function h(e,t){this.props=e,this.context=t}function v(e,t){if(null==t)return e.__?v(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?v(e):null}function g(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return g(e)}}function b(e){(!e.__d&&(e.__d=!0)&&r.push(e)&&!l++||u!==o.debounceRendering)&&((u=o.debounceRendering)||i)(k)}function k(){for(var e;l=r.length;)e=r.sort((function(e,t){return e.__v.__b-t.__v.__b})),r=[],e.some((function(e){var t,n,o,r,l,i;e.__d&&(l=(r=(t=e).__v).__e,(i=t.__P)&&(n=[],o=x(i,r,_({},r),t.__n,void 0!==i.ownerSVGElement,null,n,null==l?v(r):l),M(n,r),o!=l&&g(r)))}))}function w(e,t,n,o,r,l,i,u,c){var f,_,p,y,m,h,g,b=n&&n.__k||s,k=b.length;if(u==a&&(u=null!=l?l[0]:k?v(n,0):null),f=0,t.__k=S(t.__k,(function(n){if(null!=n){if(n.__=t,n.__b=t.__b+1,null===(p=b[f])||p&&n.key==p.key&&n.type===p.type)b[f]=void 0;else for(_=0;_<k;_++){if((p=b[_])&&n.key==p.key&&n.type===p.type){b[_]=void 0;break}p=null}if(y=x(e,n,p=p||a,o,r,l,i,u,c),(_=n.ref)&&p.ref!=_&&(g||(g=[]),p.ref&&g.push(p.ref,null,n),g.push(_,n.__c||y,n)),null!=y){var s;if(null==h&&(h=y),void 0!==n.__d)s=n.__d,n.__d=void 0;else if(l==p||y!=u||null==y.parentNode){e:if(null==u||u.parentNode!==e)e.appendChild(y),s=null;else{for(m=u,_=0;(m=m.nextSibling)&&_<k;_+=2)if(m==y)break e;e.insertBefore(y,u),s=u}"option"==t.type&&(e.value="")}u=void 0!==s?s:y.nextSibling,"function"==typeof t.type&&(t.__d=u)}else u&&p.__e==u&&u.parentNode!=e&&(u=v(p))}return f++,n})),t.__e=h,null!=l&&"function"!=typeof t.type)for(f=l.length;f--;)null!=l[f]&&d(l[f]);for(f=k;f--;)null!=b[f]&&B(b[f],b[f]);if(g)for(f=0;f<g.length;f++)P(g[f],g[++f],g[++f])}function S(e,t,n){if(null==n&&(n=[]),null==e||"boolean"==typeof e)t&&n.push(t(null));else if(Array.isArray(e))for(var o=0;o<e.length;o++)S(e[o],t,n);else n.push(t?t("string"==typeof e||"number"==typeof e?y(null,e,null,null):null!=e.__e||null!=e.__c?y(e.type,e.props,e.key,null):e):e);return n}function E(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===f.test(t)?n+"px":null==n?"":n}function C(e,t,n,o,r){var l,i,u,c,a;if(r?"className"===t&&(t="class"):"class"===t&&(t="className"),"key"===t||"children"===t);else if("style"===t)if(l=e.style,"string"==typeof n)l.cssText=n;else{if("string"==typeof o&&(l.cssText="",o=null),o)for(i in o)n&&i in n||E(l,i,"");if(n)for(u in n)o&&n[u]===o[u]||E(l,u,n[u])}else"o"===t[0]&&"n"===t[1]?(c=t!==(t=t.replace(/Capture$/,"")),a=t.toLowerCase(),t=(a in e?a:t).slice(2),n?(o||e.addEventListener(t,I,c),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,I,c)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!r&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function I(e){this.l[e.type](o.event?o.event(e):e)}function x(e,t,n,r,l,i,u,c,a){var s,f,d,p,y,v,g,b,k,S,E=t.type;if(void 0!==t.constructor)return null;(s=o.__b)&&s(t);try{e:if("function"==typeof E){if(b=t.props,k=(s=E.contextType)&&r[s.__c],S=s?k?k.props.value:s.__:r,n.__c?g=(f=t.__c=n.__c).__=f.__E:("prototype"in E&&E.prototype.render?t.__c=f=new E(b,S):(t.__c=f=new h(b,S),f.constructor=E,f.render=N),k&&k.sub(f),f.props=b,f.state||(f.state={}),f.context=S,f.__n=r,d=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=E.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=_({},f.__s)),_(f.__s,E.getDerivedStateFromProps(b,f.__s))),p=f.props,y=f.state,d)null==E.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==E.getDerivedStateFromProps&&b!==p&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(b,S),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(b,f.__s,S)){for(f.props=b,f.state=f.__s,f.__d=!1,f.__v=t,t.__e=n.__e,t.__k=n.__k,f.__h.length&&u.push(f),s=0;s<t.__k.length;s++)t.__k[s]&&(t.__k[s].__=t);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(b,f.__s,S),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(p,y,v)}))}f.context=S,f.props=b,f.state=f.__s,(s=o.__r)&&s(t),f.__d=!1,f.__v=t,f.__P=e,s=f.render(f.props,f.state,f.context),t.__k=null!=s&&s.type==m&&null==s.key?s.props.children:Array.isArray(s)?s:[s],null!=f.getChildContext&&(r=_(_({},r),f.getChildContext())),d||null==f.getSnapshotBeforeUpdate||(v=f.getSnapshotBeforeUpdate(p,y)),w(e,t,n,r,l,i,u,c,a),f.base=t.__e,f.__h.length&&u.push(f),g&&(f.__E=f.__=null),f.__e=!1}else t.__e=T(n.__e,t,n,r,l,i,u,a);(s=o.diffed)&&s(t)}catch(e){o.__e(e,t,n)}return t.__e}function M(e,t){o.__c&&o.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){o.__e(e,t.__v)}}))}function T(e,t,n,o,r,l,i,u){var c,f,_,d,p,y=n.props,m=t.props;if(r="svg"===t.type||r,null!=l)for(c=0;c<l.length;c++)if(null!=(f=l[c])&&((null===t.type?3===f.nodeType:f.localName===t.type)||e==f)){e=f,l[c]=null;break}if(null==e){if(null===t.type)return document.createTextNode(m);e=r?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,m.is&&{is:m.is}),l=null}if(null===t.type)y!==m&&e.data!=m&&(e.data=m);else if(t!==n){if(null!=l&&(l=s.slice.call(e.childNodes)),_=(y=n.props||a).dangerouslySetInnerHTML,d=m.dangerouslySetInnerHTML,!u){if(y===a)for(y={},p=0;p<e.attributes.length;p++)y[e.attributes[p].name]=e.attributes[p].value;(d||_)&&(d&&_&&d.__html==_.__html||(e.innerHTML=d&&d.__html||""))}(function(e,t,n,o,r){var l;for(l in n)l in t||C(e,l,null,n[l],o);for(l in t)r&&"function"!=typeof t[l]||"value"===l||"checked"===l||n[l]===t[l]||C(e,l,t[l],n[l],o)})(e,m,y,r,u),t.__k=t.props.children,d||w(e,t,n,o,"foreignObject"!==t.type&&r,l,i,a,u),u||("value"in m&&void 0!==m.value&&m.value!==e.value&&(e.value=null==m.value?"":m.value),"checked"in m&&void 0!==m.checked&&m.checked!==e.checked&&(e.checked=m.checked))}return e}function P(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){o.__e(e,n)}}function B(e,t,n){var r,l,i;if(o.unmount&&o.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||P(r,null,t)),n||"function"==typeof e.type||(n=null!=(l=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){o.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&B(r[i],t,n);null!=l&&d(l)}function N(e,t,n){return this.constructor(e,n)}function j(e,t,n){var r,l,i;o.__&&o.__(e,t),l=(r=n===c)?null:n&&n.__k||t.__k,e=p(m,null,[e]),i=[],x(t,(r?t:n||t).__k=e,l||a,a,void 0!==t.ownerSVGElement,n&&!r?[n]:l?null:s.slice.call(t.childNodes),i,n||a,r),M(i,e)}o={__e:function(e,t){for(var n,o;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(o=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(o=!0,n.componentDidCatch(e)),o)return b(n.__E=n)}catch(t){e=t}throw e}},h.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=_({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&_(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),b(this))},h.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),b(this))},h.prototype.render=m,r=[],l=0,i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,c=a;n(0);function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var A,R=function(e){function t(){var e,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(e=!(o=U(t).call(this))||"object"!==L(o)&&"function"!=typeof o?D(n):o).state={value:""},e.handleChange=e.handleChange.bind(D(e)),e}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(t,e),n=t,(o=[{key:"handleChange",value:function(e){var t=new FileReader;t.readAsDataURL(e.target.files[0]),console.log("e",e.target.files[0]),t.onload=function(e){document.getElementById("body-wrapper").style.backgroundImage="url(".concat(e.target.result,")"),localStorage.setItem("background",e.target.result)}}},{key:"render",value:function(){return p("div",null,p("span",{className:"close"},"X"),p("h1",{className:"settings"}," Settings "),p("h2",null,"Set a background"),p("input",{id:"file",type:"file",onChange:this.handleChange}))}}])&&O(n.prototype,o),r&&O(n,r),t}(h);function F(e){var t=document.getElementById("myModal"),n=document.getElementsByClassName("close")[0];t.style.display="block",n.onclick=function(){t.style.display="none"},window.onclick=function(e){e.target===t&&(t.style.display="none")}}function W(){document.getElementById("body-wrapper").style.display="block"}function G(){var e;e=J(),z(),parseInt(document.getElementById("minute").innerHTML)!==parseInt(e[1])&&(document.getElementById("hour").innerHTML=e[0],document.getElementById("minute").innerHTML=e[1]),setTimeout(G,500)}function z(){var e="Hello.",t=J()[0];t>24?e="Have a good day":t>=18?e="Good evening":t<6?e="Have a good night":t>=12?e="Good afternoon":t>=6&&(e="Good morning"),e+=", "+localStorage.getItem("name")+".",document.getElementById("message-under-clock").innerHTML!==e&&(document.getElementById("message-under-clock").innerHTML=e)}function J(){var e=new Date,t=e.getHours(),n=e.getMinutes();return[t,n=function(e){e<10&&(e="0"+e);return e}(n)]}function V(e){"Enter"===e.key&&(localStorage.setItem("name",e.srcElement.value),document.getElementById("name-form").style.display="none",document.getElementById("clock").style.display="block",document.getElementById("message-under-clock").style.display="block")}A=function(){j(p(R,null),document.getElementsByClassName("modal-content")[0]),G(),z(),setTimeout(W,100),document.getElementById("settings-cog").addEventListener("click",F),document.getElementById("name").addEventListener("keydown",V),null==localStorage.getItem("name")&&(document.getElementById("name-form").style.display="block",document.getElementById("clock").style.display="none",document.getElementById("message-under-clock").style.display="none"),null!==localStorage.getItem("background")&&(document.getElementById("body-wrapper").style.backgroundImage="url(".concat(localStorage.getItem("background"),")"))},"loading"!==document.readyState?A():document.addEventListener("DOMContentLoaded",A)}]);