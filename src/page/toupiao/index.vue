<template>
  <div class="bg-gary">
    <scroller lock-x use-pulldown :pulldown-config="pulldownConfig" @pulldown:loading="load">
      <div class="box1 warp-bottom">
        <g-panel v-for="item in list" :info="item" @click="goto(item)"></g-panel>
      </div>
    </scroller>
  </div>
</template>

<script>
import { Scroller, Masker, GPanel } from '../../components'
import { go } from '../../libs/router'
import { getToupiaoList } from '../../api/'

export default {
  components: {
    Scroller,
    Masker,
    GPanel
  },
  ready () {
    getToupiaoList({
      offset: this.param.offset,
      size: this.param.size
    }).then(res => {
      this.list = res.data.results.map(item => {
        item['active_time'] = item.updated_at
        return item
      })
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
        size: 10
      },
      list: []
    }
  },
  methods: {
    load (uuid) {
      getToupiaoList({
        offset: this.param.offset,
        size: this.param.size
      }).then(res => {
        this.param.offset += this.param.size
        this.$broadcast('pulldown:reset', uuid)
      })
    },
    goto (item) {
      go('/toupiao/detail/' + item.id, this.$router)
    }
  }
}
</script>

<style scoped lange="less">


</style>
