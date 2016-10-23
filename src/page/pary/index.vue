<template>
  <div class="bg-gary">
    <scroller lock-x use-pulldown :pulldown-config="pulldownConfig" @pulldown:loading="load">
      <div class="box1 warp-bottom">
        <g-panel v-for="item in items" :info="item"></g-panel>
      </div>
    </scroller>
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
      pulldownConfig: {
        content: '下拉加载更多',
        pullUpHeight: 60,
        height: 40,
        autoRefresh: false,
        downContent: '下拉加载更多',
        upContent: '释放后加载',
        loadingContent: '加载中...',
        clsPrefix: 'xs-plugin-pullup-'
      },
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
    load (uuid) {
      setTimeout(() => {
        this.$broadcast('pulldown:reset', uuid)
      }, 2000)
    }
  }
}
</script>

<style scoped lange="less">


</style>
