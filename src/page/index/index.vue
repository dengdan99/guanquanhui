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
import { GPanel, Cell, Scroller } from '../../components'
import { getHomeAritcle } from '../../api'
// import { mapActions, mapGetters } from 'vuex'
import { go } from '../../libs/router'

export default {
  components: {
    GPanel,
    Cell,
    Scroller
  },
  ready () {
    getHomeAritcle(this.param).then(response => {
      const Json = response.data.results
      console.log(Json)
      this.list = Json.map(item => ({
        id: item.id,
        active_time: item.updated_at,
        title: item.title,
        abstract: item.abstract,
        image: item.image,
        from: item.tag
      }))
      this.param.offset += this.param.size
    })
  },
  data () {
    return {
      list: [],
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
  methods: {
    load (uuid) {
      getHomeAritcle(this.param).then(response => {
        const Json = response.data.results
        let _list = Json.map(item => ({
          id: item.id,
          active_time: item.updated_at,
          title: item.title,
          abstract: item.abstract,
          image: item.image,
          from: item.tag
        }))
        this.list = [..._list, ...this.list]
        console.log(this.list)
        this.param.offset += this.param.size
        this.$broadcast('pulldown:reset', uuid)
      })
    },
    goto (item) {
      console.log(item)
      go('/article/detail/' + item.id, this.$router)
    }
  }
}
</script>

<style scoped lang="less">
</style>
