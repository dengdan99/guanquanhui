/*!
 * Vux v0.1.3 (https://vux.li)
 * Licensed under the MIT license
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxStep=e():t.vuxStep=e()}(this,function(){return function(t){function e(r){if(o[r])return o[r].exports;var n=o[r]={exports:{},id:r,loaded:!1};return t[r].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){t.exports=o(4)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{current:Number,backgroundColor:{type:String,"default":"#fff"},gutter:{type:String,"default":"10px"}},ready:function(){this._mapPropsToChildComponent()},watch:{current:function(){this._mapPropsToChildComponent()}},methods:{_mapPropsToChildComponent:function(){var t=this,e=this.$children.length-1;this.$children.forEach(function(o,r){o.stepNumber=(r+1).toString(),o.stepLast=r===e,r===t.current?o.status="process":r<t.current?o.status="finish":o.status="wait"})}}}},function(t,e){},function(t,e){t.exports="<div class=vux-step> <slot></slot> </div>"},function(t,e,o){var r,n;o(2),r=o(1),n=o(3),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)}])});