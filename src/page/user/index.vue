<template>
  <div>
    <div class="index-header">
      <div class="userInfo">
        <img src="/static/demo/comment/1.jpg" class="av_img">
        <div class="nickName">用户昵称</div>
      </div>
      <flexbox class="vux-1px-tb" :gutter="0">
        <flexbox-item class="vux-1px-r">
          <a href="javascript:;" @click="goUrl('/user/info')" class="item item1">
            <div class="img iconfont">&#xe7af;</div>
            <div class="text">个人档案 </div>
          </a>
        </flexbox-item>
        <flexbox-item class="vux-1px-r">
          <a class="item item2" href="javascript:;">
            <div class="img iconfont">&#xe652;</div>
            <div class="text">兴趣小组</div>
          </a>
        </flexbox-item>
        <flexbox-item class="vux-1px-r">
          <a class="item item3" href="javascript:;">
            <div class="img iconfont">&#xe8db;</div>
            <div class="text">我的订单</div>
          </a>
        </flexbox-item>
        <flexbox-item>
          <a class="item item4" href="javascript:;">
            <div class="img iconfont">&#xe7cd;</div>
            <div class="text">申请志愿者</div>
          </a>
        </flexbox-item>
      </flexbox>
      <flexbox class="vux-1px-tb" :gutter="0">
        <flexbox-item>
          <a class="item item4" href="javascript:;">
            <div class="img iconfont">&#xea51;</div>
            <div class="text">申请志积分榜</div>
          </a>
        </flexbox-item>
        <flexbox-item></flexbox-item>
        <flexbox-item></flexbox-item>
        <flexbox-item></flexbox-item>
      </flexbox>
    </div>
    <g-media :lists="artilceList"></g-media>

    <div class="rule-box">
      <h3>志愿者积分兑换流程及规则</h3>
      <div class="text">
        <p>1. 服务优秀奖：一年内服务满50小时者，予以奖励（奖励：价值200元的物品）
        <p>2. 服务铜质奖：一年内服务满100小时者，予以奖励（奖励：价值400元的物品）</p>
        <p>2. 服务铜质奖：一年内服务满150小时者，予以奖励（奖励：价值1000元的物品）</p>
        <p>2. 服务铜质奖：一年内服务满2000小时者，予以奖励</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, GMedia } from '../../components'
import { mapActions } from 'vuex'
import { go } from '../../libs/router'

export default {
  components: {
    Flexbox,
    FlexboxItem,
    GMedia
  },
  ready () {
    this.setPageTitle('用户中心')
  },
  data () {
    return {
      user: {
        nickName: '张三'
      },
      artilceList: [
        {
          src: '/static/demo/comment/2.jpg',
          title: '标题标题',
          desc: '描述描述描述描述描述描述描述描述描描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述述描述',
          view: 20,
          fav: 101
        },
        {
          src: '/static/demo/comment/3.jpg',
          title: '标题标题2222',
          desc: '描述描述描述描述描述描述描述描述描述描述',
          view: 20,
          fav: 101
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    ...mapActions([
      'setPageTitle',
      'hideTabbar'
    ]),
    goUrl (link) {
      go(link, this.$router)
    }
  }
}
</script>

<style scoped lang="less">
@import '../../styles/1px.less';
.index-header{
  background-color: #fabf01;
  padding-top:20px;
  padding-bottom: 10px;
}
.userInfo{
  margin-bottom: 20px;
}
.vux-demo .test{
  height:50px;
  text-align:center;
  line-height: 50px;
}

.vux-demo .vux-flexbox {
  background-color: #fff;
}

.item {
  display: block;
  box-sizing: border-box;
  font-size: 12px;
  color: #303030;
  position: relative;
  margin-bottom: 10px;
}
.img {
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin: 8px auto 5px;
  background-repeat: no-repeat;
  background-size: 40px auto!important;
  background-position: center;
}
.img.iconfont {
  font-size: 36px;
}
.text {
  font-size: 10px;
  text-align: center;
  line-height: 1em;
}
.av_img{
  display: block;
  border-radius: 100%;
  margin: 0px auto;
  height: 80px;
  width: 80px;
}
.nickName{
  color: #fff;
  font-size: 24px;
  text-align: center;
}
.rule-box{
  padding: 20px 10px;
  h3{
    text-align: center;
    margin-bottom: 10px
  }
  .text{
    padding: 5px;
    border: solid 2px #fabf01;
    border-radius: 5px;
    background: linear-gradient(to bottom, #fce186 0%,#fabf01 100%);
    text-align: left;
    p{
      margin-bottom: 10px
    }
  }
}
</style>
