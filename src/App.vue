<template>
  <div style="height:100%;">
    <loading :show="isLoading" position="absolute"></loading>
    <view-box v-ref:view-box>
      <!--header slot-->
      <!-- <div class="vux-demo-header-box" slot="header">
        <x-header :left-options="leftOptions" :transition="headerTransition" :title="title" @on-click-title="scrollTop"></x-header>
      </div> -->
      <!--default slot-->
      <router-view></router-view>
      <!--bottom slot-->
      <tabbar class="vux-demo-tabbar" icon-class="vux-center" v-show="showTabbar" slot="bottom">
        <tabbar-item :selected="isMenu1" :show="item1Show" :menu-data="menuData1" @on-item-click="item1ShowClick">
          <span class="icon-yanjing iconfont" style="font-size:18px;" slot="icon"></span>
          <span slot="label">观视野</span>
        </tabbar-item>
        <tabbar-item :selected="isDemo" :show="item2Show" :menu-data="menuData2" @on-item-click="item2ShowClick">
          <span class="icon-taoxin iconfont" style="font-size:18px;" slot="icon"></span>
          <span slot="label">微服务</span>
        </tabbar-item>
        <tabbar-item :selected="route.path === '/user/index'" :link="link3" @on-item-click="item3ShowClick">
          <span class="icon-ren-copy iconfont" style="font-size:24px;" slot="icon"></span>
          <span slot="label">关注我</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>

<script>
import store from './vuex'
import * as auth from './libs/authService'
// import { go } from './libs/router'
import { Tabbar, TabbarItem, Loading, ViewBox, XHeader } from './components'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Tabbar,
    TabbarItem,
    Loading,
    ViewBox,
    XHeader
  },
  store: store,
  data () {
    return {
      item1Show: false,
      item2Show: false,
      routerTransition: {
        forward: 'slideRL',
        back: 'slideLR'
      },
      link1: '/',
      menuData2: [
        {
          text: '办事百科',
          link: '/baike/index'
        },
        {
          text: '订单服务',
          link: '/order/new'
        },
        {
          text: '订单跟踪',
          link: '/order/index'
        },
        {
          text: '在线互动',
          link: '/hudong/index'
        },
        {
          text: '社群大厦',
          link: '/dasha/index'
        }
      ],
      link3: '/user/index'
    }
  },
  ready () {
    this.getMenuList()
  },
  methods: {
    ...mapActions([
      'getMenuList'
    ]),
    scrollTop () {
      this.$refs.viewBox.$els.viewBoxBody.scrollTop = 0
    },
    login (uid, token) {
      auth.saveCookie('token', token)
      auth.saveCookie('uid', uid)
    },
    getPath (mode) {
    },
    item1ShowClick () {
      this.item1Show = !this.item1Show
      this.item2Show = false
    },
    item2ShowClick () {
      this.item2Show = !this.item2Show
      this.item1Show = false
    },
    item3ShowClick () {
      this.item1Show = false
      this.item2Show = false
    }
  },
  computed: {
    ...mapGetters({
      route: 'route',
      isLoading: 'isLoading',
      direction: 'direction',
      pageTitle: 'pageTitle',
      showTabbar: 'showTabbar',
      menuData1: 'menuData1'
    }),
    leftOptions () {
      return {
        showBack: this.route.path !== '/'
      }
    },
    headerTransition () {
      return this.direction === 'forward' ? 'vux-header-fade-in-right' : 'vux-header-fade-in-left'
    },
    isMenu1 () {
      return /article|paty/.test(this.route.path)
    },
    isDemo () {
      return /baike|order|dasha/.test(this.route.path)
    },
    title () {
      return this.pageTitle
    }
  }
}
</script>

<style lang="less">
@import './styles/index.less';
@import './styles/weui/base/reset';

html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
.weui_tabbar_label{
  font-size: 16px;
}
/* v-r-transition, default is {forward: 'forward', back: 'back'}*/
.forward-enter, .forward-leave {
  transform: translate3d(-100%, 0, 0);
}
.back-enter, .back-leave {
  transform: translate3d(100%, 0, 0);
}
.demo-icon-22 {
  font-family: 'iconfont';
  font-size: 26px;
  color: #888;
}
.weui_tabbar.vux-demo-tabbar {
  backdrop-filter: blur(10px);
  background-color: none;
  background: #fff;
}
.weui_bar_item_on .iconfont {
  color: #fff;
}
.vux-demo-tabbar .weui_tabbar_item.weui_bar_item_on .vux-demo-tabbar-icon-home {
  color: rgb(53, 73, 94);
}
.demo-icon-22:before {
  content: attr(icon);
}
.vux-demo-tabbar-component {
  background-color: #F70968;
  color: #fff;
  border-radius: 7px;
  padding: 0 4px;
  line-height: 14px;
}
.weui_tabbar_icon + .weui_tabbar_label {
  margin-top: 0!important;
}
.vux-demo-header-box {
  z-index: 100;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
}
.none_weui_tabbar{
  padding-bottom: 0
}
/**
* vue-router transition
*/
.vux-pop-out-transition,
.vux-pop-in-transition {
  width: 100%;
  animation-duration: 0.5s;
  animation-fill-mode: both;
  backface-visibility: hidden;
}
.vux-pop-out-enter,
.vux-pop-out-leave,
.vux-pop-in-enter,
.vux-pop-in-leave {
  will-change: transform;
  height: 100%;
  position: absolute;
  left: 0;
}
.vux-pop-out-enter {
  animation-name: popInLeft;
}
.vux-pop-out-leave {
  animation-name: popOutRight;
}
.vux-pop-in-enter {
  perspective: 1000;
  animation-name: popInRight;
}
.vux-pop-in-leave {
  animation-name: popOutLeft;
}
@keyframes popInLeft {
  from {
    transform: translate3d(-100%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes popOutLeft {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes popInRight {
  from {
    transform: translate3d(100%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes popOutRight {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(100%, 0, 0);
  }
}
</style>
