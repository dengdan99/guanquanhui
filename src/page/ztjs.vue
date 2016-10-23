<template>
  <div class="bg-gary">
    <div v-for="art in articleList">{{art.title}}</div>
    <div v-show="showMore">没有了{{showMore}}</div>
    <g-panel v-for="item in items" :info="item"></g-panel>
  </div>
</template>

<script>
import { Cell, Group, Badge, GPanel } from '../components'
import { mapGetters, mapActions } from 'vuex'
const version = require('../../package.json').version
export default {
  components: {
    Cell,
    Group,
    Badge,
    GPanel
  },
  ready () {
    let viewBox = this.$root.$refs.viewBox.$els.viewBoxBody
    this.setPageTitle('专题介绍')
    this.showTabbar()
    setTimeout(() => {
      viewBox.scrollTop = viewBox.scrollHeight
    }, 1000)
    viewBox.addEventListener('scroll', () => {
      if (viewBox.scrollTop === 0 && this.articleIsMore) {
        this.getArticleList(this.itemOpation)
        this.itemOpation.page++
      }
    })
  },
  data () {
    return {
      version: version,
      itemOpation: {
        page: 1,
        itemsPerPage: 10,
        isAdd: true
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
      ],
      showMore: false
    }
  },
  computed: {
    ...mapGetters([
      'articleList',
      'articleIsMore'
    ])
  },
  methods: {
    ...mapActions([
      'setPageTitle',
      'getArticleList',
      'showTabbar'
    ])
    // getArticle () {
    //   this.$store.dispatch('getArticleList', this.itemOpation, true)
    //   this.itemOpation.page++
    // }
  }
}
</script>

<style>
.bg-w{
  background-color: #fff;
  padding-top: 46px;
  margin-bottom: -55px;
}
.yellow-f{
  color: #fbc108;
}
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
