/*!
 * Vux v0.1.3 (https://vux.li)
 * Licensed under the MIT license
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxFlexboxItem=e():t.vuxFlexboxItem=e()}(this,function(){return function(t){function e(r){if(o[r])return o[r].exports;var n=o[r]={exports:{},id:r,loaded:!1};return t[r].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){t.exports=o(3)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=["-moz-box-","-webkit-box-",""];e["default"]={props:{span:[Number,String],order:[Number,String]},methods:{buildWidth:function(t){return"number"==typeof t?1>t?t:t/12:"string"==typeof t?t.replace("px","")/this.bodyWidth:void 0}},computed:{style:function(){var t={},e="horizontal"===this.$parent.orient?"marginLeft":"marginTop";if(t[e]=this.$parent.gutter+"px",this.span)for(var r=0;r<o.length;r++)t[o[r]+"flex"]="0 0 "+100*this.buildWidth(this.span)+"%";return"undefined"!=typeof this.order&&(t.order=this.order),t}},data:function(){return{bodyWidth:document.documentElement.offsetWidth}}}},function(t,e){t.exports="<div class=vux-flexbox-item :style=style> <slot></slot> </div>"},function(t,e,o){var r,n;r=o(1),n=o(2),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)}])});