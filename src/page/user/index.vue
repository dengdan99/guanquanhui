<template>
  <div>
    <div class="index-header">
      <div class="userInfo">
        <img :src="userInfo.avator === '' ? '/static/def-av.jpg' : userInfo.avator" class="av_img">
        <div class="nickName">{{userInfo.nickname}}</div>
      </div>

      <flexbox :gutter="0">
        <flexbox-item>
          <a href="javascript:;" @click="goUrl('/user/info')" class="item item1">
            <div class="img iconfont">&#xe68b;</div>
            <div class="text">个人档案 </div>
          </a>
        </flexbox-item>
        <flexbox-item>
          <a class="item item2" href="javascript:;" @click="goUrl('/group/list')" >
            <div class="img iconfont">&#xe63e;</div>
            <div class="text">兴趣小组</div>
          </a>
        </flexbox-item>
        <flexbox-item>
          <a class="item item3" href="javascript:;" @click="goUrl('/user/myorder')">
            <div class="img iconfont">&#xe637;</div>
            <div class="text">我的订单</div>
          </a>
        </flexbox-item>
        <flexbox-item>
          <a class="item item4" href="javascript:;" @click="goUrl('/apply/tep')">
            <div class="img iconfont">&#xe649;</div>
            <div class="text">申请志愿者</div>
          </a>
        </flexbox-item>
      </flexbox>

      <flexbox :gutter="0">
        <flexbox-item>
          <a class="item item4" href="javascript:;" @click="goUrl('/user/rank')">
            <div class="img iconfont">&#xe6f3;</div>
            <div class="text">积分榜</div>
          </a>
        </flexbox-item>
        <flexbox-item>
          <a class="item item2" href="javascript:;" @click="goUrl('/paty/detail/2')">
            <div class="img iconfont">&#xe678;</div>
            <div class="text">最新活动</div>
          </a>
        </flexbox-item>
        <flexbox-item>
          <a class="item item3" href="javascript:;" @click="goUrl('/toupiao/detail/' + latest.id)">
            <div class="img iconfont">&#xe639;</div>
            <div class="text">最新投票</div>
          </a>
        </flexbox-item>
        <flexbox-item>
          <a class="item item4" href="javascript:;" @click="goUrl('/group/list')">
            <div class="img iconfont">&#xe708;</div>
            <div class="text">我要当群主</div>
          </a>
        </flexbox-item>
      </flexbox>

    </div>

    <article-part></article-part>

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
import ArticlePart from '../index/ArticlePart'
import { mapActions, mapGetters } from 'vuex'
import { go } from '../../libs/router'

export default {
  components: {
    Flexbox,
    FlexboxItem,
    GMedia,
    ArticlePart
  },
  ready () {
    this.getUserInfo()
    this.setPageTitle('用户中心')
  },
  data () {
    return {
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
    ...mapGetters([
      'userInfo',
      'dic'
    ])
  },
  methods: {
    ...mapActions([
      'setPageTitle',
      'hideTabbar',
      'getUserInfo'
    ]),
    goUrl (link) {
      go(link, this.$router)
    },
    gotop (item) {
      go('/dasha/club/' + item.id, this.$router)
    },
    gotoToupiao (item) {
      go('/dasha/club/' + item.id, this.$router)
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
  font-size: 28px;
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
