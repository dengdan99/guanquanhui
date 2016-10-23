/*!
 * Vux v0.1.3 (https://vux.li)
 * Licensed under the MIT license
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vuxXTextarea=t():e.vuxXTextarea=t()}(this,function(){return function(e){function t(a){if(o[a])return o[a].exports;var i=o[a]={exports:{},id:a,loaded:!1};return e[a].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(6)},function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(2),n=a(i);t["default"]={minxins:[n["default"]],props:{showCounter:{type:Boolean,"default":!0},max:Number,value:{type:String,"default":"",twoWay:!0},name:String,placeholder:String,rows:{type:Number,"default":3},cols:{type:Number,"default":30},height:Number,autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false"},watch:{value:function(e){this.max&&this.value.length>this.max&&(this.value=e.slice(0,this.max)),this.$emit("on-change",this.value)}},computed:{count:function(){var e=this.value.replace(/\n/g,"aa").length;return e>this.max?this.max:e},textareaStyle:function(){return this.height?{height:this.height+"px"}:void 0}}}},function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(3),n=a(i);t["default"]={mixins:[n["default"]],props:{required:{type:Boolean,"default":!0}},created:function(){this.handleChangeEvent=!1},computed:{dirty:function(){return!this.prisine},invalid:function(){return!this.valid}},methods:{setTouched:function(){this.touched=!0}},watch:{value:function(e){this.prisine===!0&&(this.prisine=!1),this.handleChangeEvent||this.$emit("on-change",e)}},data:function(){return{errors:{},prisine:!0,touched:!1,valid:!0}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={created:function(){this.uuid=Math.random().toString(36).substring(3,8)}}},function(e,t){},function(e,t){e.exports='<div class=weui_cell> <div class="weui_cell_bd weui_cell_primary"> <textarea class=weui_textarea :autocomplete=autocomplete :autocapitalize=autocapitalize :autocorrect=autocorrect :spellcheck=spellcheck :placeholder=placeholder :name=name :rows=rows :cols=cols v-model=value :style=textareaStyle :maxlength=max></textarea> <div class=weui_textarea_counter v-show="showCounter && max"><span>{{count}}</span>/{{max}}</div> </div> </div>'},function(e,t,o){var a,i;o(4),a=o(1),i=o(5),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)}])});