<template>
  <div class="bg">
    <div class="head">
      <img src="/static/pic/index_pic_demo.jpg" class="img">
      <div class="banner_text">
        <p>因为您不是志愿者，所以您还没有上榜哦。但是在个人档案里，可查询自己的积分！</p>
      </div>
      <div class="rk-item" @click="goto('/user/myzan')">
        <span class="num"></span>
        <span class="av"><img :src="mine.avator ? mine.avator : '/static/def-av.jpg'"></span>
        <span class="tit">{{mine.nickname}}</span>
        <span class="rank green">{{mine.integral}}</span>
        <span class="btn"><p class="rk">{{mine.zan}}</p><p class="hr">♥</p></span>
      </div>
    </div>

    <div class="rk-list">
      <div class="rk-item" v-for="item in rlList">
        <span class="num">{{item.rank}}</span>
        <span class="av"><img :src="item.avator ? item.avator : '/static/def-av.jpg'"></span>
        <span class="tit">{{item.nickname}}</span>
        <span class="rank">{{item.integral}}</span>
        <span class="btn" @click="zan(item)">
          <p class="rk">{{item.zan}}</p>
          <p class="hr">♥</p>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getUserRank, getUserSupport } from '../../api'
import { go } from '../../libs/router'

export default {
  components: {
  },
  ready () {
    getUserRank().then(response => {
      this.mine = response.data.mine
      this.rlList = response.data.results
    })
  },
  data () {
    return {
      mine: {},
      rlList: []
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  methods: {
    zan (rank) {
      getUserSupport(rank.id).then(res => {
        const Json = res.data
        if (Json.result !== true) {
          this.$vux.toast.show({
            type: 'text',
            text: Json.message
          })
          return false
        } else {
          this.$vux.toast.show({
            type: 'success',
            text: '点赞成功'
          })
          rank.zan++
        }
      })
    },
    goto (url) {
      return go(url, this.$router)
    }
  }
}
</script>

<style scoped lang="less">
.bg{
  background-color: #fabf01;
}
.banner_text{
  // background-color: #fff;
  color: #fff;;
  padding:5px;
  font-size: 14px;
}
.head{
  // padding-bottom: 20px;
  .img{
    width: 100%;
    height: auto;
    display: block;
  }
  .rk-item{
    background: linear-gradient(to bottom, #ddd 0%,#ccc 100%);
    border-top: solid 1px #999;
    border-bottom: solid 1px #999;
  }
}
.rk-item{
  background: linear-gradient(to bottom, #fefefe 0%,#dbdbdb 100%);
  height: 60px;
  padding: 10px;
  display: flex;
  span{
    display: inline-block;
    line-height: 60px;
    width: 10%;
    text-align: center;
  }
  .av{
    width: 25%;
  }
  .tit{
    width: 35%;
    text-align: left;
    height: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .av img{
    height: 60px;
    width: 60px;
    border-radius: 100%;
  }
  .btn{
    line-height: 30px;
    color: #c1c1c1
  }
  .rank{
    width: 15%;
    padding-right: 20px;
    font-size: 26px;
    text-align: right;
    color: #fabf01;
  }
  .hr{
    font-size: 30px
  }
  .current{
    color: yellow;
  }
  .green{
    color: green;
  }
  .cur{
    color: green;
  }
}
</style>
