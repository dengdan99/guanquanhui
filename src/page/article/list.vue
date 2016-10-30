<template>
  <div class="bg-gary">
    <scroller lock-x use-pulldown :pulldown-config="pulldownConfig" @pulldown:loading="load">
      <div class="box1 warp-bottom">
        <g-panel v-for="item in articleList" :info="item" @click="goto(item)"></g-panel>
      </div>
    </scroller>
  </div>
</template>

<script>
import { Scroller, Masker, GPanel } from '../../components'
import { mapGetters, mapActions } from 'vuex'
import { go } from '../../libs/router'

export default {
  components: {
    Scroller,
    Masker,
    GPanel
  },
  ready () {
    this.getArticleList({
      id: this.$route.params.id,
      isAdd: false,
      itemsPerPage: this.param.size,
      param: this.param
    }).then(() => {
      this.param.offset += this.param.size
    })
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
      param: {
        offset: 0,
        size: 1
      }
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
      'getArticleList'
    ]),
    load (uuid) {
      this.getArticleList({
        id: this.$route.params.id,
        isAdd: true,
        itemsPerPage: this.param.size,
        param: this.param
      }).then(() => {
        this.param.offset += this.param.size
        this.$broadcast('pulldown:reset', uuid)
      })
    },
    goto (item) {
      go('/article/detail/' + item.id, this.$router)
    }
  }
}
</script>

<style scoped lange="less">


</style>
