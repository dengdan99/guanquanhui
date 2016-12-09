<template>
  <div class="bg-gary">
    <scroller lock-x use-pulldown :pulldown-config="pulldownConfig" height="-50px" @pulldown:loading="load" v-ref:scroller>
      <div class="box1">

        <template v-for="item in list">
        <div class="weui_panel g-panel" v-if="$index === 1">
          <div class="weui_panel_hd g-panel-hd"><span>{{item.date}}</span></div>
          <div class="weui_panel_bd g-panel-bd">
            <div class="weui_media_box weui_media_text">
              <template v-for="li in item.list">
              <div class="weui_media_desc" v-if="$index === 0" @click="gotofouce(li)">
                <div class="fouce-pic">
                  <img class="weui_media_pic" :src="li.image_big" height="200" />
                  <div class="pic-title">{{li.title}}</div>
                </div>
              </div>
              <div class="ali" v-if="$index !== 0" @click="goto(li)">
                 <div class="s-pic">
                   <img :src="li.image" height="50" width="50" />
                 </div>
                  <span class="s-tet">{{li.title}}</span>
              </div>
              </template>
            </div>
          </div>
        </div>

        <div class="weui_panel g-panel" v-if="$index !== 1">
          <div class="weui_panel_hd g-panel-hd"><span>{{item.date}}</span></div>
          <div class="weui_panel_bd g-panel-bd">
            <div class="weui_media_box weui_media_text">

              <template v-for="li in item.list">
              <div class="weui_media_desc" v-if="$index === 0" @click="goto(li)">
                <div class="fouce-pic">
                  <img class="weui_media_pic" :src="li.image_big" height="200" />
                  <div class="pic-title">{{li.title}}</div>
                </div>
              </div>

              <div class="ali" v-if="$index !== 0" @click="goto(li)">
                 <div class="s-pic">
                   <img :src="li.image" height="50" width="50" />
                 </div>
                  <span class="s-tet">{{li.title}}</span>
              </div>
              </template>

            </div>
          </div>

        </div>
        </template>

        <div class="zt_list" @click="gotoP(paty)" v-show="showPaty === 1">
          <div class="pic"><div class="img-area"><img :src="paty.image" /></div></div>
          <div class="text">
            <h3 class="title">{{paty.title}}</h3>
            <p class="desc">{{paty.abstract}}</p>
          </div>
        </div>
        <div class="zt_list" @click="gotoT(toupiao)" v-show="showToupiao === 1">
          <div class="pic"><div class="img-area"><img :src="toupiao.image" /></div></div>
          <div class="text">
            <h3 class="title">{{toupiao.theme}}</h3>
            <p class="desc">{{toupiao.abstract}}</p>
          </div>
        </div>

      </div>
    </scroller>
  </div>
</template>

<script>
import { GPanel, Cell, Scroller } from '../../components'
import { getArticleDates, getPatyLast, getLatestLast } from '../../api'
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
      this.occupy = typeof response.data.occupy === 'object' ? response.data.occupy : null
      this.list = Json
      this.param.offset += this.param.size
      if (this.occupy !== null) {
        this.list[1].list.unshift(this.occupy)
      }
      let _this = this
      this.$nextTick(() => {
        let iniScroll = _this.$refs.scroller.$el.scrollHeight - _this.$refs.scroller.$el.clientHeight
        _this.$refs.scroller.reset({top: iniScroll})
      })
    })
    getPatyLast().then(res => {
      this.paty = res.data
    })
    getLatestLast().then(res => {
      this.toupiao = res.data
    })
  },
  data () {
    return {
      occupy: {},
      showPaty: 0,
      showToupiao: 0,
      paty: {},
      toupiao: {},
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
      go('/article/detail/' + item.id, this.$router)
    },
    gotoP (item) {
      go('/paty/detail/' + item.id, this.$router)
    },
    gotoT (item) {
      go('/toupiao/detail/' + item.id, this.$router)
    },
    gotofouce (item) {
      if (item.mode) {
        if (item.mode === 'activity') {
          go('/paty/detail/' + item.id, this.$router)
        } else {
          go('/toupiao/detail/' + item.id, this.$router)
        }
      } else {
        go('/article/detail/' + item.id, this.$router)
      }
    }
  }
}
</script>

<style scoped lang="less">
.bg-gary{
}
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
.zt_list{
  padding: 5px 10px;
  background: linear-gradient(to bottom, #fff 50%,#ccc 100%);

  .pic{
    overflow: hidden;
    float: left;
    height: 60px;
    width: 60px;
     
    .img-area{
      display: table-cell;
      vertical-align:middle;
      height: 60px;
    }
    img{
      width: 60px;
      height: auto;
      vertical-align:middle;
    }
  }

  .text{
    height: 60px;
    position: relative;
    margin-left: 70px;
  }

  .title{
    line-height: 30px;
    height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-style: normal;
    text-align: left;
    font-size: 16px;
    .join_num{
      float: right;
      font-size: 12px;
      color: #ccc
    }
  }

  .desc{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 30px;
    height: 30px;
    color: #aaa;
    font-size: 14px;
  }
}
</style>
