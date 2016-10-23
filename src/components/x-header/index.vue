<template>
  <div class="vux-header">
    <div class="vux-header-left">
      <a class="vux-header-back" @click.preventDefault v-show="leftOptions.showBack" :transition="transition" @click="onClickBack">{{leftOptions.backText}}</a>
      <div class="left-arrow-icon iconfont" @click="onClickBack" v-show="leftOptions.showBack" :transition="transition">&#xe681;</div>
      <slot name="left"></slot>
    </div>
    <h1 class="vux-header-title" @click="$emit('on-click-title')"><span v-show="title" :transition="transition">{{title}}</span><slot></slot></h1>
    <div class="vux-header-right">
      <a class="vux-header-right-user iconfont" @click.preventDefault @click="$emit('on-click-user')" v-if="rightOptions.showUser">&#xe6cb;</a>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    leftOptions: {
      type: Object,
      default () {
        return {
          showBack: true,
          backText: 'Back',
          preventGoBack: false
        }
      }
    },
    title: String,
    transition: String,
    rightOptions: {
      type: Object,
      default () {
        return {
          showUser: true
        }
      }
    }
  },
  methods: {
    onClickBack () {
      if (this.leftOptions.preventGoBack) {
        this.$emit('on-click-back')
      } else {
        history.back()
      }
    }
  }
}
</script>

<style lang="less">
@import '../../styles/variable.less';

.vux-header {
  position: relative;
  padding: 3px 0;
  box-sizing: border-box;
  background-color: @x-header-background-color;
}
.vux-header .vux-header-title,.vux-header h1 {
  line-height: 25px;
  margin-left: 50px;
  text-align: left;
  height: 40px;
  font-size: 18px;
  font-weight: 400;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: @x-header-title-color;
}
.vux-header .vux-header-title > span {
  display: inline-block;
  margin-top: 8px;
  padding-left: 20px;
}
.vux-header .vux-header-left,.vux-header .vux-header-right {
  position: absolute;
  top: 14px;
  display: block;
  font-size: 14px;
  line-height: 21px;
  color: @x-header-text-color;
}
.vux-header .vux-header-left a,.vux-header .vux-header-left button,.vux-header .vux-header-right a,.vux-header .vux-header-right button {
  float: left;
  margin-right: 8px;
  color: @x-header-text-color;
}
.vux-header .vux-header-left a:active,.vux-header .vux-header-left button:active,.vux-header .vux-header-right a:active,.vux-header .vux-header-right button:active {
  opacity: .5
}
.vux-header .vux-header-left {
  left: 18px
}
.vux-header .vux-header-left .vux-header-back {
  padding-left: 16px
}
.vux-header .vux-header-left .left-arrow {
  position: absolute;
  width: 30px;
  height: 30px;
  top: -5px;
  left: -5px;

  &:before {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    border: 1px solid @x-header-arrow-color;
    border-width: 1px 0 0 1px;
    transform: rotate(315deg);
    top: 8px;
    left: 7px;
  }
}
.vux-header .vux-header-left .left-arrow-icon {
  color: @x-header-arrow-color;
  font-size: 28px;
  padding-right: 10px;
  border-right: solid 1px @x-header-title-color;
}
.vux-header .vux-header-right {
  right: 15px
}
.vux-header .vux-header-right a,.vux-header .vux-header-right button {
  margin-left: 8px;
  margin-right: 0
}
.vux-header .vux-header-right .vux-header-more:after {
}
.vux-header-fade-in-right-enter {
  animation: fadeinR .5s;
}
.vux-header-fade-in-left-enter {
  animation: fadeinL .5s;
}
@keyframes fadeinR{
  0%{opacity:0;transform:translateX(80px);}
  100%{opacity:1;transform:translateX(0);}
}
@keyframes fadeinL{
  0%{opacity:0;transform:translateX(-80px);}
  100%{opacity:1;transform:translateX(0);}
}
.vux-header-right-user{
  font-size: 28px;
}
</style>
