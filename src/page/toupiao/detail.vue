<template>
  <div class="bg-withe">
  <div class="s-bg" v-show="shareBg" @click="toggleShareBg"><img src="/static/share.png" /></div>
    <div class="pary-area">
      <div class="datail" v-if="isOk">
        <h2>{{toupiao.theme}}</h2>
        <div class="desc" v-if="toupiao.abstract">{{toupiao.abstract}}</div>
        <!-- <div class="pic"><img :src="toupiao.image" /></div> -->
        <p>投票开始时间： {{toupiao.begin}}</p>
        <p>投票结束时间： {{toupiao.end}}</p>
        <div class="toupiao" v-for="theme in piaoList">
          <h3>{{theme.issue}} <span class="small">({{chooseText(theme)}})</span></h3>
          <ul class="pbox">
            <li v-for="piao in theme.child">
              <div class="doc"><!-- <span class="fk"></span> --> {{$index + 1}}</div>
              <div class="info">
                <img v-if="piao.picture" :src="piao.picture" class="av">
                <span class="t">{{piao.solution}}</span>
              </div>
              <div class="btn-a">
                <p class=""><a href="javascript:;" class="btn" @click="dotoupiao(piao)">点我投票</a></p>
                <p>{{piao.vote}}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="content" id="article_content">{{{toupiao.description}}}</div>
        <div class="zmPic">
          <x-button type="primary" @click="gotoToupiao">投票</x-button>
          <x-button type="primary" @click="share">分享到...</x-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { XButton } from '../../components'
// import { mapActions, mapGetters } from 'vuex'
import { getToupiaoDetail, getIssue, getPack } from '../../api'
export default {
  components: {
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
    this.id = this.$route.params.id
    getToupiaoDetail(this.id).then(res => {
      this.isOk = true
      this.toupiao = res.data
      this.piaoList = res.data.issue
    })
  },
  data () {
    return {
      shareBg: false,
      id: 0,
      isOk: false,
      piaoList: [],
      toupiao: {}
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
          title: self.toupiao.theme,
          link: baseUrl + self.$route.path,
          imgUrl: self.toupiao.image,
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
          title: self.toupiao.theme,
          desc: self.toupiao.abstract,
          link: baseUrl + self.$route.path,
          imgUrl: self.toupiao.image,
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
          title: self.toupiao.theme,
          desc: self.toupiao.abstract,
          link: baseUrl + self.$route.path,
          imgUrl: self.toupiao.image,
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
          title: self.toupiao.theme,
          desc: self.toupiao.abstract,
          link: baseUrl + self.$route.path,
          imgUrl: self.toupiao.image,
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
          title: self.toupiao.theme,
          desc: self.toupiao.abstract,
          link: baseUrl + self.$route.path,
          imgUrl: self.toupiao.image,
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
    gotoToupiao () {
      document.querySelector('.weui_tab_bd').scrollTop = 0
    },
    dotoupiao (piao) {
      getIssue(this.id, piao.id).then(res => {
        const Json = res.data
        if (Json.result === true) {
          this.$vux.toast.show({
            type: 'success',
            text: '投票成功'
          })
          piao.vote++
        } else {
          this.$vux.toast.show({
            type: 'text',
            text: Json.message
          })
          return false
        }
      })
    },
    chooseText (theme) {
      if (theme.choose === 'checkbox') {
        return '多选'
      } else {
        return '单选'
      }
    }
  }
}
</script>

<style type="text/css">
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

    h2{
      text-align: center;
      font-weight: normal;
      margin-bottom: 20px;
      border-bottom: solid 1px #ccc;
      padding-bottom: 10px;
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
.toupiao{
  padding: 15px 0;
  h3{
    border-bottom: #333 solid 1px;
    .small{
      font-size: 14px;
      font-weight: normal;
      color: #666;
    }
  }
  .pbox{
    li{
      display: flex;
      border-bottom: #333 solid 1px;
      height: 50px;
      .doc{
        line-height: 50px;
        width: 10%;
        font-size: 20px;
        text-align: center;
        font-style: normal;
        .fk{
          margin-top: 16px;
          height: 15px;
          width: 15px;
          display: block;
          background-color: yellow;
        }
      }
      .info{
        width: 60%;
        margin-top: 10px;
        border-left: #333 solid 1px;
        height: 30px;
        padding-left: 10px;
        line-height: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-style: normal;
        .av{
          height: 30px;
          width: 30px;
          border-radius: 100%;
          margin-right: 10px;
          float: left;
        }
        .t{
          
        }
      }
      .btn-a{
        margin-top: 5px;
        text-align: right;
        width: 30%;
        color: #ccc;
        .btn{
          background: linear-gradient(to bottom, #fee7a1 0%, #fabf01 100%);
          display: block;
          padding: 2px 5px;
          border-radius: 10px;
          font-size: 12px;
          text-align: center;
          border: solid 1px #fbbe01;
        }
      }
    }
  }
}
</style>
