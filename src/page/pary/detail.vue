<template>
  <div class="bg-withe">
      <tab :line-width=2 active-color='#fabf01' :index.sync="index">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="item in titles" @click="demo2 = item">{{item}}</tab-item>
      </tab>
      <swiper :index.sync="index" :aspect-ratio="20" :show-dots="false">
        <swiper-item>
          <div class="qunzhu-area">
            <p class="zm-content">
                <img :src="zmPic" class="zmPic" />
            </p>
            <h1>加入群主招募</h1>
            <p class="yellow-f">成为群主组织社群活动</p>
            <p class="yellow-f" style="margin-bottom: 20px">享有很多政府优惠策略</p>
            <div class="zmPic">
              <x-button type="primary" @click="showdialog=true">立即加入活动</x-button>
            </div>
          </div>
        </swiper-item>
        <swiper-item>
          <div class="pary-area">
            <div class="datail">
              <h2>{{paty.title}}</h2>
              <div class="desc">{{paty.abstract}}</div>
              <div class="content">{{{paty.content}}}</div>
              <div class="p-info">
                <span>浏览 {{paty.click}}</span>
                <span>收藏 {{paty.favorite}}</span>
              </div>
            </div>
            <g-media :lists="paty.recommend"></g-media>
            <div class="zmPic">
              <x-button type="primary" @click="showdialog=true">立即加入活动</x-button>
            </div>
          </div>
        </swiper-item>
      </swiper>

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
  ready () {
    this.getPaty(this.$route.params.id).then((res) => {
    })
  },
  data () {
    return {
      patyId: 0,
      zmPic: 'static/pic_qun.jpg',
      titles: ['群主招募', '活动展示'],
      demo2: '群主招募',
      index: 0,
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
      ],
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
    doPost () {
      this.showdialog = false
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
