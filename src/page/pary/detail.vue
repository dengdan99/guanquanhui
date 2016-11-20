<template>
  <div class="bg-withe">
<!--       <tab :line-width=2 active-color='#fabf01' :index.sync="index">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="item in titles" @click="demo2 = item">{{item}}</tab-item>
      </tab>
      <swiper :index.sync="index" :height="height" :show-dots="false" v-ref:swiper>
        
        <swiper-item v-ref:Sitem1> -->
          <div class="pary-area" v-if="paty.title">
            <div class="datail">
              <h2>{{paty.title}}</h2>
              <div class="desc">{{paty.abstract}}</div>
              <div class="content" id="article_content">{{{paty.content}}}</div>
              <!-- <div class="p-info">
                <span>浏览 {{paty.click}}</span>
                <span>收藏 {{paty.favorite}}</span>
              </div> -->
            </div>
            <g-media :lists="artilceList"></g-media>
            <div class="zmPic">
              <x-button type="primary" @click="showdialog=true">立即参与</x-button>
              <x-button type="primary" @click="share">分享到朋友圈</x-button>
            </div>
          </div>
        <!-- </swiper-item>
        <swiper-item v-ref:Sitem2>
          <div class="qunzhu-area">
            <p class="zm-content">
                <img :src="zmPic" class="zmPic" />
            </p>
            <h1>加入群主招募</h1>
            <p class="yellow-f">成为群主组织社群活动</p>
            <p class="yellow-f" style="margin-bottom: 20px">享有很多政府优惠策略</p>
            <div class="zmPic">
              <x-button type="primary" @click="showdialog=true">立即参与</x-button>
              <x-button type="primary" @click="showdialog=true">暂不参与，先看热闹</x-button>
            </div>
          </div>
        </swiper-item>

      </swiper> -->

      <dialog :show.sync="showdialog" class="dialog-demo" :hide-on-blur="true">
        <group title="基本资料">
          <x-input title="姓名" :value.sync="joinPost.name" placeholder="请输入姓名" is-type="china-name"></x-input>
          <x-input title="手机号码" :value.sync="joinPost.mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
        </group>
        <group title="">
          <div class="zmPic">
            <x-button type="primary" @click="doPost">提交</x-button>
          </div>
        </group>
      </dialog>
  </div>
</template>

<script>
import { Tab, TabItem, Swiper, SwiperItem, XButton, GMedia, Dialog, Group, XInput } from '../../components'
import { mapActions, mapGetters } from 'vuex'
import { getAboutList, signupPaty, getPack } from '../../api'

export default {
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    XButton,
    GMedia,
    Dialog,
    Group,
    XInput
  },
  route: {
    canReuse: false
  },
  ready () {
    this.getPaty(this.$route.params.id).then((res) => {
      // this.$nextTick(function () {
      //   this.$refs.swiper.rerender()
      //   console.log(this.$refs.sitem1.$el.getElementsByClassName('pary-area')[0].scrollHeight)
      //   let newHeight = this.$refs.sitem1.$el.getElementsByClassName('pary-area')[0].scrollHeight + 'px'
      //   this.$refs.sitem1.xheight = newHeight
      // })
    })
    getAboutList().then(res => {
      const Json = res.data.results
      this.artilceList = Json.map(item => ({
        id: item.id,
        image: item.image,
        title: item.title,
        desc: item.address + item.abstract
      }))
    })
    this.height = (document.body.clientHeight - 50 - 44) + 'px'
    getPack().then(res => {
      // const pack = res.data
      // window.wx.config({
      //   debug: true,
      //   appId: pack.appId,
      //   timestamp: pack.timestamp,
      //   nonceStr: pack.nonceStr,
      //   signature: pack.signature,
      //   jsApiList: ['onMenuShareTimeline']
      // })
    })
  },
  data () {
    return {
      patyId: 0,
      zmPic: 'static/pic_qun.jpg',
      titles: ['活动展示', '群主招募'],
      demo2: '活动展示',
      index: 0,
      height: '470px',
      artilceList: [],
      joinPost: {
        name: '',
        mobile: ''
      },
      showdialog: false
    }
  },
  computed: {
    ...mapGetters([
      'paty'
    ])
  },
  methods: {
    ...mapActions([
      'setPageTitle',
      'getArticleList',
      'showTabbar',
      'hideTabbar',
      'getPaty'
    ]),
    share () {
      // var self = this
      // window.wx.onMenuShareTimeline({
      //   title: self.paty.title,
      //   link: 'http://qd.hh.wangzhi.cc/#!/' + self.$route.path,
      //   imgUrl: '',
      //   success: function () {
      //     alert('分享成功')
      //   },
      //   cancel: function () {
      //   }
      // })
    },
    doPost () {
      this.showdialog = false
      let postData = {
        name: this.joinPost.name,
        mobile: this.joinPost.mobile
      }
      if (postData.name === '') {
        this.$vux.toast.show({
          type: 'text',
          text: '请填写姓名'
        })
        return false
      }
      if (postData.mobile === '') {
        this.$vux.toast.show({
          type: 'text',
          text: '请手机号码'
        })
        return false
      }

      signupPaty(this.$route.params.id, postData).then(response => {
        let json = response.data
        if (json.result === true) {
          this.$vux.toast.show({
            type: 'success',
            text: '报名成功'
          })
        } else {
          this.$vux.toast.show({
            type: 'text',
            text: json.message
          })
        }
      })
    }
    // getArticle () {
    //   this.$store.dispatch('getArticleList', this.itemOpation, true)
    //   this.itemOpation.page++
    // }
  }
}
</script>

<style scoped lang="less">
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
  width: 70%;
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
