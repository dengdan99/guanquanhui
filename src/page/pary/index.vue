<template>
  <div>
    <div class="menu">
       <scroller lock-x>
          <div class="box1">
            <g-panel v-for="item in items" :info="item"></g-panel>
          </div>
        </scroller>
    </div>
  </div>
</template>

<script>
import { Scroller, Masker, GPanel } from '../../components'

export default {
  components: {
    Scroller,
    Masker,
    GPanel
  },
  data () {
    return {
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
  }
}
</script>

<style scoped lange="less">
@import '../../styles/1px.less';
.menu {
  background-color: #fff;
}
</style>
