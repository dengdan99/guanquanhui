<template>
  <div class="bg-gary">
    <scroller lock-x use-pulldown :pulldown-config="pulldownConfig" @pulldown:loading="load" v-ref:scroller>
      <div class="box1 warp-bottom">
        
        <div class="weui_panel g-panel" v-for="item in list">
          <div class="weui_panel_hd g-panel-hd"><span>{{item.date}}</span></div>
          <div class="weui_panel_bd g-panel-bd">
            <div class="weui_media_box weui_media_text">

              <template v-for="li in item.list">
              <div class="weui_media_desc" v-if="$index === 0">
                <div class="fouce-pic">
                  <img class="weui_media_pic" :src="li.image" />
                  <div class="pic-title">{{li.title}}</div>
                </div>
              </div>

              <div class="ali" v-if="$index !== 0">
                 <div class="s-pic">
                   <img :src="li.image" height="50" width="50" />
                 </div>
                  <span class="s-tet">{{li.title}}</span>
              </div>
              </template>

            </div>
          </div>
        </div>


      </div>
    </scroller>
  </div>
</template>

<script>
import { GPanel, Cell, Scroller } from '../../components'
import { getArticleDates } from '../../api'
// import { mapActions, mapGetters } from 'vuex'
import { go } from '../../libs/router'

export default {
  components: {
    GPanel,
    Cell,
    Scroller
  },
  ready () {
    getArticleDates(this.param).then(response => {
      const Json = response.data.results
      this.list = Json
      this.param.offset += this.param.size
      this.$refs.scroller.reset()
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
        size: 2
      }
    }
  },
  methods: {
    load (uuid) {
      getArticleDates(this.param).then(response => {
        const Json = response.data.results
        let _list = Json
        this.list = [..._list, ...this.list]
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
.weui_media_box{
  padding: 0;
}
.weui_media_desc{
  padding: 10px;
}
.fouce-pic{
  position: relative;
}
.weui_media_desc .pic-title{
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 96%;
  line-height: 25px;
  max-height: 50px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 0 2%;
  font-size: 14px;
}
.weui_panel .ali{
  position: relative;
  overflow: hidden;
  padding: 10px;
  border-top: solid #ccc 1px;
  min-height: 50px;
  .s-pic{
    float: right;
    height: 50px;
    width: 50px;
  }
  .s-tet{
  }
}
</style>
