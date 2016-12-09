<template>
<div>
  <div class="od-head">
    <div class="item">
      <div class="title">订单处理流程</div>
      <div class="status">状态</div>
      <div class="zan">点赞</div>
    </div>
  </div>
  <scroller lock-x scrollbar-y use-pullup :pullup-config="pullupConfig" :height="height" @pullup:loading="load" keep-alive>
  <div class="box2">
    <div class="item" v-for="li in list" @click="goto(li)" :class="($index + 1) % 2 === 0 ? 'odd' : ''">
      <div class="title">{{li.ask.substring(0,8)+'...'}}</div>
      <div class="status">{{li.state_name}}</div>
      <div class="zan"><div class="star iconfont">&#xe62e;<span class="badge">{{li.star}}</span></div><</div>
    </div>
  </div>
  </scroller>
</div>
</template>

<script>
import { Scroller, Badge } from '../../components'
import { go } from '../../libs/router'
import { getOrderList } from '../../api'
// import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    Scroller,
    Badge
  },
  ready () {
    getOrderList({
      offset: this.param.offset,
      size: this.param.size
    }).then(response => {
      const Json = response.data
      this.list = Json.results
      this.param.offset += this.param.size
      console.log(this)
      this.$children[0].reset()
    })
    this.height = '-100px'
  },
  data () {
    return {
      list: [],
      pullupConfig: {
        content: '上拉加载更多',
        downContent: '松开进行加载',
        upContent: '上拉加载更多',
        loadingContent: '加载中...'
      },
      param: {
        offset: 0,
        size: 15
      },
      height: '0px'
    }
  },
  methods: {
    goto (item) {
      go('/order/view/' + item.id, this.$router)
    },
    load (uuid) {
      getOrderList({
        offset: this.param.offset,
        size: this.param.size
      }).then(res => {
        const Json = res.data.results
        this.param.offset += this.param.size
        this.$broadcast('pullup:reset', uuid)
        this.list = [...this.list, ...Json]
        if (Json.length === this.param.size) {
          this.$broadcast('pullup:reset', uuid)
        } else {
          this.$broadcast('pullup:done', uuid)
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.od-head{
  .item{
    color: #fff;
    .title{
      background: linear-gradient(to right, #22605a 0%,#39939f 15%);
    }
    .status{
      background: linear-gradient(to right, #aa700b 0%,#b58b06 15%);
    }
    .zan{
      background: linear-gradient(to right, #22605a 0%,#39939f 15%);
    }
  }
}
.item{
  height: 50px;
  line-height: 50px;
  overflow: hidden;
  .title{
    float: left;
    width: 49%;
    padding: 0 3%;
    background: linear-gradient(to right, #3c938b 0%,#61c3d0 15%);
  }
  .status{
    float: left;
    width: 30%;
    text-align: center;
    background: linear-gradient(to right, #f5a10d 0%,#fabf01 15%);
  }
  .zan{
    float: left;
    width: 15%;
    text-align: center;
    background: linear-gradient(to right, #3c938b 0%,#61c3d0 15%);
  }
}
.odd{
  .title{
    background: linear-gradient(to right, #7ebfb7 0%,#b3dde9 15%);
  }
  .status{
    background: linear-gradient(to right, #e0c05d 0%,#f5db86 15%);
  }
  .zan{
    background: linear-gradient(to right, #7ebfb7 0%,#b3dde9 15%);
  }
}
.star{
  position: relative;
  color: #fabf01;
  font-size: 32px;
}
.badge{
  display: block;
  width: 16px;
  position: absolute;
  top: 8px;
  right:  18px;
  text-align: center;
  background: #f74c31;
  color: #fff;
  font-size: 12px;
  height: 16px;
  line-height: 16px;
  border-radius: 8px;
  background-clip: padding-box;
}
</style>
