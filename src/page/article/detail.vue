<template>
  <div class="bg-withe" v-if="isOk">
  <div class="s-bg" v-show="shareBg" @click="toggleShareBg"><img src="/static/share.png" /></div>
    <div class="pary-area">
      <div class="datail">
        <h2>
        {{data.title}}
          <div class="info">
            <span>{{data.pub_date}}</span>
            <span>{{data.author}}</span>
            <span>{{data.source}}</span>
          </div>
        </h2>
        <div class="desc" v-if="data.abstract">{{data.abstract}}</div>
        <div class="content" id="article_content">{{{data.content}}}</div>
        <div class="a-info">
          <span class="bl">阅读 {{data.click}}</span>
          <span @click="zan(aid)" class="bl"><span class="icon icon-zan iconfont" slot="icon"></span> {{data.praise}}</span>
        </div>
      </div>
    </div>
    <div class="d-line"></div>
    <article-part></article-part>
    <div class="zmPic">
      <x-button type="primary" @click="share">分享到...</x-button>
    </div>
  </div>
</template>

<script>
import { XButton } from '../../components'
// import { mapActions, mapGetters } from 'vuex'
import ArticlePart from '../index/ArticlePart'
import { getArticle, doPraise, getPack } from '../../api'
export default {
  components: {
    ArticlePart,
    XButton
  },
  ready () {
    getPack().then(res => {
      const Json = res.data
      window.wx.config({
        debug: false,
        appId: Json.appId,
        timestamp: Json.timestamp,
        nonceStr: Json.nonceStr,
        signature: Json.signature,
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone']
      })
    })
    this.aid = this.$route.params.id
    this.loading(this.$route.params.id)
  },
  route: {
    canReuse: false
  },
  data () {
    return {
      shareBg: false,
      aid: 0,
      isOk: false,
      data: {}
    }
  },
  methods: {
    toggleShareBg () {
      this.shareBg = !this.shareBg
    },
    share () {
      var self = this
      this.shareBg = true
      const baseUrl = 'http://qd.hh.wangziqing.cc/#!'
      window.wx.ready(function () {
        window.wx.onMenuShareTimeline({
          title: self.data.title,
          link: baseUrl + self.$route.path,
          imgUrl: self.data.image,
          success: function () {
            self.$vux.toast.show({
              type: 'success',
              text: '分享成功'
            })
          },
          cancel: function () {
            console.log('用户取消分享')
          },
          fail: function (res) {
            console.log('分享错误', res)
          }
        })
        window.wx.onMenuShareAppMessage({
          title: self.data.title,
          desc: self.data.abstract,
          link: baseUrl + self.$route.path,
          imgUrl: self.data.image,
          success: function () {
            self.$vux.toast.show({
              type: 'success',
              text: '分享成功'
            })
          },
          cancel: function () {
            console.log('用户取消分享')
          },
          fail: function (res) {
            console.log('分享错误', res)
          }
        })
        window.wx.onMenuShareQQ({
          title: self.data.title,
          desc: self.data.abstract,
          link: baseUrl + self.$route.path,
          imgUrl: self.data.image,
          success: function () {
            self.$vux.toast.show({
              type: 'success',
              text: '分享成功'
            })
          },
          cancel: function () {
            console.log('用户取消分享')
          },
          fail: function (res) {
            console.log('分享错误', res)
          }
        })
        window.wx.onMenuShareWeibo({
          title: self.data.title,
          desc: self.data.abstract,
          link: baseUrl + self.$route.path,
          imgUrl: self.data.image,
          success: function () {
            self.$vux.toast.show({
              type: 'success',
              text: '分享成功'
            })
          },
          cancel: function () {
            console.log('用户取消分享')
          },
          fail: function (res) {
            console.log('分享错误', res)
          }
        })
        window.wx.onMenuShareQZone({
          title: self.data.title,
          desc: self.data.abstract,
          link: baseUrl + self.$route.path,
          imgUrl: self.data.image,
          success: function () {
            self.$vux.toast.show({
              type: 'success',
              text: '分享成功'
            })
          },
          cancel: function () {
            console.log('用户取消分享')
          },
          fail: function (res) {
            console.log('分享错误', res)
          }
        })
        window.wx.error(res => {
          console.log(res)
        })
      })
    },
    loading (id) {
      getArticle(id).then(response => {
        this.isOk = true
        this.data = response.data
      })
    },
    zan (id) {
      doPraise(id).then(response => {
        let Json = response.data
        if (Json.result === true) {
          this.$vux.toast.show({
            type: 'success',
            text: '谢谢您的鼓励'
          })
          this.data.praise += 1
        } else {
          this.$vux.toast.show({
            type: 'text',
            text: Json.message
          })
        }
      })
    }
  }
}
</script>

<style type="text/css">
.d-line{
  height: 1px;
  line-height: 1px;
  font-size: 0px;
  background-color: #ccc;
  margin: 10px 0;
}
#article_content img{
  width: 100%;
  height: auto;
}
</style>
<style scoped lang="less">
.s-bg{
  position: fixed;
  height: 100%;
  width: 100%;
  opacity: 0.8;
  background-color: #000;
  z-index: 999;
  img{
    width: 100%;
    height: auto;
  }
}
.vux-tab .vux-tab-item{
  font-size: 16px
}
.qunzhu-area{
  text-align: center;
}
.qunzhu-area h1{
  margin: 10px 0 30px 0;
}
.zmPic{
  display: block;
  width: 50%;
  margin: 20px auto;
}
.zm-content{
}
.weui_btn_primary{
  border: solid 1px #fbbe01;
  border-radius: 5px;
  background: linear-gradient(to bottom, #fee7a1 0%,#fabf01 100%);
  color: #000;
  font-family: "Microsoft YaHei"
}

.pary-area{
  .datail{
    padding: 15px;
    .a-info{
      padding-top: 15px;
      font-size: 14px;
      color: #c3c3c3;
      .bl{
        margin-right: 20px;
      }
    }
    h2{
      font-weight: normal;
      font-size: 20px;
      border-bottom: solid 1px #ccc;
      padding-bottom: 5px;
      margin-bottom: 20px;
      .info{
        margin-top: 5px;
        font-size: 14px;
        color: #666;
        span{
          margin-right: 20px;
        }
      }
    }
    .pic img{
      width: 100%;
      height: auto;
    }
    .desc{
      border:solid 1px #7d7d7d;
      padding: 10px;
      margin: 10px 0;
    }
    .p-info{
      margin: 10px 0;
      text-align: right;
    }
  }
}
</style>
