<template>
  <div>
    <div class="center">
      <svg style="width:60px;height:60px;" version="1.1" id="图形" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1024px" height="1024px" viewBox="0 0 1024 1024" enable-background="new 0 0 1024 1024" xml:space="preserve"><path class="svgpath" data-index="path_0" fill="#35495e" d="M512 816.64 51.2 985.6l460.8-947.2 460.8 947.2L512 816.64 512 816.64zM509.44 207.36 189.44 862.72l317.44-117.76L506.88 207.36 509.44 207.36zM509.44 207.36" /></svg>

      <h1 class="vux-title" style="display:none;">
        <span class="demo-icon" slot="icon" style="font-size:60px;color:#35495e;display: block;">&#xe637;</span>
      </h1>
      <p class="vux-notice">v{{version}}</p>
    </div>
    <group>
      <cell title="Demo" link="/demo" value="演示">
        <span class="demo-icon" slot="icon" style="color:#F70968">&#xe633;</span>
      </cell>
    </group>
    <group>
      <cell title="Buy me a coffee" link="project/donate">
        <span class="demo-icon" slot="icon" style="color:red;">&#xe630;</span>
        <div class="badge-value" slot="value" class="vux-center-v">
          <badge text="捐赠"></badge>
        </div>
      </cell>
      <cell title="Github" link="http://github.com/airyland/vux" value="Star me">
        <span class="demo-icon" slot="icon" style="color:#35495e;">&#xe62f;</span>
      </cell>
    </group>

    <g-panel v-for="item in items" :info="item"></g-panel>
  </div>
</template>

<script>
import { Cell, Group, Badge, GPanel } from './components'
import store from './vuex'
const version = require('../package.json').version
export default {
  components: {
    Cell,
    Group,
    Badge,
    GPanel
  },
  ready () {
    store.dispatch('setPageTitle', '主页来了')
    this.gotoFooter()
  },
  store,
  data () {
    return {
      version: version,
      items: [
        {
          title: '标题标题标题标题标题标题标题',
          date: '2014.10.112',
          src: '/static/pic/index_pic_demo.jpg',
          alt: '图片描述',
          desc: '描述描述'
        },
        {
          title: '标题',
          date: '2014.10.12',
          src: '/static/pic/index_pic_demo.jpg',
          alt: '图片描述',
          desc: '描述描述'
        },
        {
          title: '标题',
          date: '2014.10.12',
          src: '/static/pic/index_pic_demo.jpg',
          alt: '图片描述',
          desc: '描述描述'
        },
        {
          title: '标题',
          date: '2014.10.12',
          src: '/static/pic/index_pic_demo.jpg',
          alt: '图片描述',
          desc: '描述描述'
        },
        {
          title: '标题',
          date: '2014.10.12',
          src: '/static/pic/index_pic_demo.jpg',
          alt: '图片描述',
          desc: '描述描述'
        }
      ]
    }
  },
  methods: {
    gotoFooter () {
      setTimeout(() => {
        this.$root.$refs.viewBox.$els.viewBoxBody.scrollTop = 500
      }, 500)
    }
  }
}
</script>

<style>
@import './demos/style.css';
.center {
  margin-top: 15px;
  text-align: center;
}
.vux-notice {
  color: #666;
  line-height: 40px;
}
.vux-title {
  vertical-align: middle;
  text-align: center;
  color: #04BE02;
  display: inline-block;
  width: 75px;
  height: 75px;
  line-height: 75px;
  border-radius: 50%;
}
</style>
