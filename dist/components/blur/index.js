/*!
 * Vux v0.1.3 (https://vux.li)
 * Licensed under the MIT license
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxBlur=e():t.vuxBlur=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(47)},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e,n){t.exports=!n(2)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(4),o=n(1),i=n(24),u=n(28),s="prototype",a=function(t,e,n){var f,c,l,p=t&a.F,h=t&a.G,d=t&a.S,v=t&a.P,y=t&a.B,m=t&a.W,b=h?o:o[e]||(o[e]={}),g=b[s],x=h?r:d?r[e]:(r[e]||{})[s];h&&(n=e);for(f in n)c=!p&&x&&void 0!==x[f],c&&f in b||(l=c?x[f]:n[f],b[f]=h&&"function"!=typeof x[f]?n[f]:y&&c?i(l,r):m&&x[f]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[s]=t[s],e}(l):v&&"function"==typeof l?i(Function.call,l):l,v&&((b.virtual||(b.virtual={}))[f]=l,t&a.R&&g&&!g[f]&&u(g,f,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e,n){var r=n(23);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(33),o=n(26);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(8),o=n(6);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(6);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(14),i=r(o);e["default"]={ready:function(){this._blur=new i["default"](this.$el,{url:this.url,blurAmount:this.blurAmount,imageClass:"vux-bg-blur",duration:100,opacity:1})},props:{blurAmount:{type:Number,"default":10},url:{type:String,required:!0},height:{type:Number,"default":200}},watch:{blurAmount:function(t){this._blur.setBlurAmount(t),this._blur.generateBlurredImage(this.url)},url:function(t){this._blur.generateBlurredImage(t)}}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){return window.getComputedStyle(t,null).getPropertyValue(e)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(16),u=r(i),s=n(15),a=r(s),f=function(){return"_"+Math.random().toString(36).substr(2,9)},c={svgns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",createElement:function(t,e){var n=document.createElementNS(c.svgns,t);return e&&c.setAttr(n,e),n},setAttr:function(t,e){for(var n in e)"href"===n?t.setAttributeNS(c.xlink,n,e[n]):t.setAttribute(n,e[n]);return t}},l=function p(t,e){this.internalID=f(),this.element=t,this.width=t.offsetWidth,this.height=t.offsetHeight,this.element=t,this.parent=this.element.parentNode,this.options=(0,u["default"])({},p.DEFAULTS,e),this.overlayEl=this.createOverlay(),this.blurredImage=null,this.attachListeners(),this.generateBlurredImage(this.options.url)};l.VERSION="0.0.1",a["default"].mixTo(l),l.DEFAULTS={url:"",blurAmount:10,imageClass:"",overlayClass:"",duration:!1,opacity:1},l.prototype.setBlurAmount=function(t){this.options.blurAmount=t},l.prototype.attachListeners=function(){this.on("ui.blur.loaded",this.fadeIn.bind(this)),this.on("ui.blur.unload",this.fadeOut.bind(this))},l.prototype.fadeIn=function(){},l.prototype.fadeOut=function(){},l.prototype.generateBlurredImage=function(t){var e=this.blurredImage;this.internalID=f(),e&&e.parentNode.removeChild(e),this.blurredImage=this.createSVG(t,this.width,this.height)},l.prototype.createOverlay=function(){if(this.options.overlayClass&&""!==this.options.overlayClass){var t=document.createElement("div");return t.classList.add(this.options.overlayClass),this.parent.insertBefore(t,this.element),t}return!1},l.prototype.createSVG=function(t,e,n){var r=this,i=c.createElement("svg",{xmlns:c.svgns,version:"1.1",width:e,height:n,id:"blurred"+this.internalID,"class":this.options.imageClass,viewBox:"0 0 "+e+" "+n,preserveAspectRatio:"none"}),u="blur"+this.internalID,s=c.createElement("filter",{id:u}),a=c.createElement("feGaussianBlur",{"in":"SourceGraphic",stdDeviation:this.options.blurAmount}),f=c.createElement("image",{x:0,y:0,width:e,height:n,externalResourcesRequired:"true",href:t,style:"filter:url(#"+u+")",preserveAspectRatio:"none"});return f.addEventListener("load",function(){r.emit("ui.blur.loaded")},!0),f.addEventListener("SVGLoad",function(){r.emit("ui.blur.loaded")},!0),s.appendChild(a),i.appendChild(s),i.appendChild(f),r.options.duration&&r.options.duration>0&&(i.style.opacity=0,window.setTimeout(function(){"0"===o(i,"opacity")&&(i.style.opacity=1)},this.options.duration+100)),this.element.insertBefore(i,this.element.firstChild),i},l.prototype.createIMG=function(t,e,n){var r=this,i=this.prependImage(t),u=2*this.options.blurAmount>100?100:2*this.options.blurAmount,s={filter:"progid:DXImageTransform.Microsoft.Blur(pixelradius="+u+") ",top:2.5*-this.options.blurAmount,left:2.5*-this.options.blurAmount,width:e+2.5*this.options.blurAmount,height:n+2.5*this.options.blurAmount};for(var a in s)i.style[a]=s[a];return i.setAttribute("id",this.internalID),i.onload=function(){r.trigger("ui.blur.loaded")},this.options.duration&&this.options.duration>0&&window.setTimeout(function(){"0"===o(i,"opacity")&&(i.style.opacity=1)},this.options.duration+100),i},l.prototype.prependImage=function(t){var e=document.createElement("img");return e.url=t,e.setAttribute("id",this.internalID),e.classList.add(this.options.imageClass),this.overlayEl?this.parent.insertBefore(e,this.overlayEl):this.parent.insertBefore(e,this.parent.firstChild),e},e["default"]=l},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(){}function i(t,e,n){var r=!0;if(t){var o=0,i=t.length,u=e[0],s=e[1],a=e[2];switch(e.length){case 0:for(;i>o;o+=2)r=t[o].call(t[o+1]||n)!==!1&&r;break;case 1:for(;i>o;o+=2)r=t[o].call(t[o+1]||n,u)!==!1&&r;break;case 2:for(;i>o;o+=2)r=t[o].call(t[o+1]||n,u,s)!==!1&&r;break;case 3:for(;i>o;o+=2)r=t[o].call(t[o+1]||n,u,s,a)!==!1&&r;break;default:for(;i>o;o+=2)r=t[o].apply(t[o+1]||n,e)!==!1&&r}}return r}function u(t){return"[object Function]"===Object.prototype.toString.call(t)}var s=n(17),a=r(s),f=/\s+/;o.prototype.on=function(t,e,n){var r,o,i;if(!e)return this;for(r=this.__events||(this.__events={}),t=t.split(f);o=t.shift();)i=r[o]||(r[o]=[]),i.push(e,n);return this},o.prototype.once=function(t,e,n){var r=this,o=function i(){r.off(t,i),e.apply(n||r,arguments)};return this.on(t,o,n)},o.prototype.off=function(t,e,n){var r,o,i,u;if(!(r=this.__events))return this;if(!(t||e||n))return delete this.__events,this;for(t=t?t.split(f):c(r);o=t.shift();)if(i=r[o])if(e||n)for(u=i.length-2;u>=0;u-=2)e&&i[u]!==e||n&&i[u+1]!==n||i.splice(u,2);else delete r[o];return this},o.prototype.trigger=function(t){var e,n,r,o,u,s,a=[],c=!0;if(!(e=this.__events))return this;for(t=t.split(f),u=1,s=arguments.length;s>u;u++)a[u-1]=arguments[u];for(;n=t.shift();)(r=e.all)&&(r=r.slice()),(o=e[n])&&(o=o.slice()),"all"!==n&&(c=i(o,a,this)&&c),c=i(r,[n].concat(a),this)&&c;return c},o.prototype.emit=o.prototype.trigger;var c=a["default"];c||(c=function(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);return e}),o.mixTo=function(t){function e(e){t[e]=function(){return n[e].apply(i,Array.prototype.slice.call(arguments)),this}}var n=o.prototype;if(u(t))for(var r in n)n.hasOwnProperty(r)&&(t.prototype[r]=n[r]);else{var i=new o;for(var s in n)n.hasOwnProperty(s)&&e(s)}},t.exports=o},function(t,e,n){t.exports={"default":n(18),__esModule:!0}},function(t,e,n){t.exports={"default":n(19),__esModule:!0}},function(t,e,n){n(43),t.exports=n(1).Object.assign},function(t,e,n){n(44),t.exports=n(1).Object.keys},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(5);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(11),o=n(40),i=n(39);t.exports=function(t){return function(e,n,u){var s,a=r(e),f=o(a.length),c=i(u,f);if(t&&n!=n){for(;f>c;)if(s=a[c++],s!=s)return!0}else for(;f>c;c++)if((t||c in a)&&a[c]===n)return t||c||0;return!t&&-1}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(20);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(5),o=n(4).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(31),o=n(36);t.exports=n(3)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(3)&&!n(2)(function(){return 7!=Object.defineProperty(n(25)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";var r=n(9),o=n(32),i=n(34),u=n(12),s=n(8),a=Object.assign;t.exports=!a||n(2)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=a({},t)[n]||Object.keys(a({},e)).join("")!=r})?function(t,e){for(var n=u(t),a=arguments.length,f=1,c=o.f,l=i.f;a>f;)for(var p,h=s(arguments[f++]),d=c?r(h).concat(c(h)):r(h),v=d.length,y=0;v>y;)l.call(h,p=d[y++])&&(n[p]=h[p]);return n}:a},function(t,e,n){var r=n(21),o=n(29),i=n(41),u=Object.defineProperty;e.f=n(3)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(s){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(27),o=n(11),i=n(22)(!1),u=n(37)("IE_PROTO");t.exports=function(t,e){var n,s=o(t),a=0,f=[];for(n in s)n!=u&&r(s,n)&&f.push(n);for(;e.length>a;)r(s,n=e[a++])&&(~i(f,n)||f.push(n));return f}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(7),o=n(1),i=n(2);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",u)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(38)("keys"),o=n(42);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(4),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e,n){var r=n(10),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),0>t?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(10),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(5);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(7);r(r.S+r.F,"Object",{assign:n(30)})},function(t,e,n){var r=n(12),o=n(9);n(35)("keys",function(){return function(t){return o(r(t))}})},function(t,e){},function(t,e){t.exports="<div :style=\"{height: height + 'px',position: 'relative', overflow: 'hidden'}\"> <slot></slot> </div>"},function(t,e,n){var r,o;n(45),r=n(13),o=n(46),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)}])});