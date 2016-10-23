/*!
 * Vux v0.1.3 (https://vux.li)
 * Licensed under the MIT license
 */
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.vuxSpinner=n():t.vuxSpinner=n()}(this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){t.exports=e(6)},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(3),i=r(o),a=["android","ios","ios-small","bubbles","circles","crescent","dots","lines","ripple","spiral"];n["default"]={ready:function(){(0,i["default"])(this.$el,this.type)},props:{type:{type:String,"default":"ios"}},computed:{className:function(){for(var t={},n=0;n<a.length;n++)t["vux-spinner-"+a[n]]=this.type===a[n];return t}}}},function(t,n){"use strict";for(var e=0,r=["webkit","moz"],o=0;o<r.length&&!window.requestAnimationFrame;++o)window.requestAnimationFrame=window[r[o]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[r[o]+"CancelAnimationFrame"]||window[r[o]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var r=(new Date).getTime(),o=Math.max(0,16-(r-e)),i=window.setTimeout(function(){t(r+o)},o);return e=r+o,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})},function(t,n,e){"use strict";function r(t,n,e,i){var a,s,c,u=document.createElement(p[t]||t);for(a in n)if("[object Array]"===Object.prototype.toString.call(n[a]))for(s=0;s<n[a].length;s++)if(n[a][s].fn)for(c=0;c<n[a][s].t;c++)r(a,n[a][s].fn(c,i),u,i);else r(a,n[a][s],u,i);else o(u,a,n[a]);e.appendChild(u)}function o(t,n,e){t.setAttribute(p[n]||n,e)}function i(t,n){var e=t.split(";"),r=e.slice(n),o=e.slice(0,e.length-r.length);return e=r.concat(o).reverse(),e.join(";")+";"+e[0]}function a(t,n){return t/=n/2,1>t?.5*t*t*t:(t-=2,.5*(t*t*t+2))}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(t,n){function e(){x[o]&&(i=x[o](t)())}var o,i;o=n;var a=document.createElement("div");return r("svg",{viewBox:"0 0 64 64",g:[w[o]]},a,o),t.innerHTML=a.innerHTML,e(),t},e(2);var s="translate(32,32)",c="stroke-opacity",u="round",f="indefinite",l="750ms",d="none",p={a:"animate",an:"attributeName",at:"animateTransform",c:"circle",da:"stroke-dasharray",os:"stroke-dashoffset",f:"fill",lc:"stroke-linecap",rc:"repeatCount",sw:"stroke-width",t:"transform",v:"values"},m={v:"0,32,32;360,32,32",an:"transform",type:"rotate",rc:f,dur:l},v={sw:4,lc:u,line:[{fn:function(t,n){return{y1:"ios"===n?17:12,y2:"ios"===n?29:20,t:s+" rotate("+(30*t+(6>t?180:-180))+")",a:[{fn:function(){return{an:c,dur:l,v:i("0;.1;.15;.25;.35;.45;.55;.65;.7;.85;1",t),rc:f}},t:1}]}},t:12}]},w={android:{c:[{sw:6,da:128,os:82,r:26,cx:32,cy:32,f:d}]},ios:v,"ios-small":v,bubbles:{sw:0,c:[{fn:function(t){return{cx:24*Math.cos(2*Math.PI*t/8),cy:24*Math.sin(2*Math.PI*t/8),t:s,a:[{fn:function(){return{an:"r",dur:l,v:i("1;2;3;4;5;6;7;8",t),rc:f}},t:1}]}},t:8}]},circles:{c:[{fn:function(t){return{r:5,cx:24*Math.cos(2*Math.PI*t/8),cy:24*Math.sin(2*Math.PI*t/8),t:s,sw:0,a:[{fn:function(){return{an:"fill-opacity",dur:l,v:i(".3;.3;.3;.4;.7;.85;.9;1",t),rc:f}},t:1}]}},t:8}]},crescent:{c:[{sw:4,da:128,os:82,r:26,cx:32,cy:32,f:d,at:[m]}]},dots:{c:[{fn:function(t){return{cx:16+16*t,cy:32,sw:0,a:[{fn:function(){return{an:"fill-opacity",dur:l,v:i(".5;.6;.8;1;.8;.6;.5",t),rc:f}},t:1},{fn:function(){return{an:"r",dur:l,v:i("4;5;6;5;4;3;3",t),rc:f}},t:1}]}},t:3}]},lines:{sw:7,lc:u,line:[{fn:function(t){return{x1:10+14*t,x2:10+14*t,a:[{fn:function(){return{an:"y1",dur:l,v:i("16;18;28;18;16",t),rc:f}},t:1},{fn:function(){return{an:"y2",dur:l,v:i("48;44;36;46;48",t),rc:f}},t:1},{fn:function(){return{an:c,dur:l,v:i("1;.8;.5;.4;1",t),rc:f}},t:1}]}},t:4}]},ripple:{f:d,"fill-rule":"evenodd",sw:3,circle:[{fn:function(t){return{cx:32,cy:32,a:[{fn:function(){return{an:"r",begin:-1*t+"s",dur:"2s",v:"0;24",keyTimes:"0;1",keySplines:"0.1,0.2,0.3,1",calcMode:"spline",rc:f}},t:1},{fn:function(){return{an:c,begin:-1*t+"s",dur:"2s",v:".2;1;.2;0",rc:f}},t:1}]}},t:2}]},spiral:{defs:[{linearGradient:[{id:"sGD",gradientUnits:"userSpaceOnUse",x1:55,y1:46,x2:2,y2:46,stop:[{offset:.1,"class":"stop1"},{offset:1,"class":"stop2"}]}]}],g:[{sw:4,lc:u,f:d,path:[{stroke:"url(#sGD)",d:"M4,32 c0,15,12,28,28,28c8,0,16-4,21-9"},{d:"M60,32 C60,16,47.464,4,32,4S4,16,4,32"}],at:[m]}]}},x={android:function(t){function n(){if(!e.stop){var t=a(Date.now()-r,650),f=1,l=0,d=188-58*t,p=182-182*t;i%2&&(f=-1,l=-64,d=128- -58*t,p=182*t);var m=[0,-101,-90,-11,-180,79,-270,-191][i];o(u,"da",Math.max(Math.min(d,188),128)),o(u,"os",Math.max(Math.min(p,182),0)),o(u,"t","scale("+f+",1) translate("+l+",0) rotate("+m+",32,32)"),s+=4.1,s>359&&(s=0),o(c,"t","rotate("+s+",32,32)"),t>=1&&(i++,i>7&&(i=0),r=Date.now()),requestAnimationFrame(n)}}var e=this;this.stop=!1;var r,i=0,s=0,c=t.querySelector("g"),u=t.querySelector("circle");return function(){return r=Date.now(),n(),e}}}},function(t,n){},function(t,n){t.exports="<span class=vux-spinner :class=className></span>"},function(t,n,e){var r,o;e(4),r=e(1),o=e(5),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)}])});