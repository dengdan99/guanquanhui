<template>
  <div class="weui_tabbar_item vux-sec-menu-contari" :class="{'weui_bar_item_on': $parent.index === index}" @click="onItemClick">
    <div class="weui_tabbar_icon" :class="[iconClass || $parent.iconClass, {'vux-reddot': showDot}]">
      <slot name="icon"></slot>
      <sup><badge v-if="badge" :text="badge"></badge></sup>
    </div>
    <p class="weui_tabbar_label">
      <slot name="label"></slot>
    </p>
    <div class="vux-sec-menu iconfont" v-show="show">
      <a href="javascript:;" v-link="menu.link" v-for="menu in menuData" class="vux-sec-menu-lk">{{menu.text}}</a>
    </div>
  </div>
</template>

<script>
import { childMixin } from '../../mixins/multi-items'
import { go } from '../../libs/router'
import Badge from '../badge'

export default {
  components: {
    Badge
  },
  mixins: [childMixin],
  ready () {
    let self = this
    this.hasMenu = typeof this.menuData !== 'undefined' && this.menuData.length > 0
    document.querySelector('.weui_tab_bd').addEventListener('click', () => {
      if (self.show) self.show = false
    }, false)
  },
  props: {
    showDot: {
      type: Boolean,
      default: false
    },
    hasMenu: Boolean,
    badge: String,
    link: [String, Object],
    iconClass: String,
    show: {
      type: Boolean,
      default: false
    },
    menuData: Array
  },
  events: {
    'on-item-click': function () {
      go(this.link, this.$router)
    }
  },
  methods: {
    onItemClick () {
      this.$emit('on-item-click')
    }
  }
}
</script>
<style lang="less">
.vux-sec-menu-contari{
  position: relative;
}
.vux-sec-menu{
  position: absolute;
  bottom: 70px;
  margin-left: 10%;
  width: 80%;
  border: 1px #acb1ad solid;
  text-align: center;
  background-color: #fff;
  color: #acb1ad;
  border-radius: 5px;
  animation: popInUp 0.3s;
}
.vux-sec-menu:before{
  position: absolute;
  bottom: -19px;
  left: 0;
  width: 100%;
  content: attr(icon);
}
.vux-sec-menu .vux-sec-menu-lk{
  display: block;
  padding: 8px 0;
  margin: 0 5px;
  font-size: 14px;
  color: #252525;
  border-bottom: solid #acb1ad 1px;
}
.vux-sec-menu .vux-sec-menu-lk:last-child{
  border: none;
}
.weui_bar_item_on{
  background: linear-gradient(to bottom, #fce188 0%,#d1a30f 100%);
}
@keyframes popInUp {
  from {
    transform: translate3d(0, 30%, 0);
    opacity: 0;
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
</style>