<template>
  <div class="bg-withe">
    <div class="pary-area">
      <div class="datail" v-if="isOk">
        <h2>{{data.title}}</h2>
        <div class="pic"><img :src="data.image" /></div>
        <div class="content" id="article_content">{{{data.content}}}</div>
      </div>
    </div>
    <article-part></article-part>
  </div>
</template>

<script>
// import { Tab, TabItem, Swiper, SwiperItem, XButton, GMedia, Dialog, Group, XInput } from '../../components'
// import { mapActions, mapGetters } from 'vuex'
import ArticlePart from '../index/ArticlePart'
import { getArticle } from '../../api'
export default {
  components: {
    ArticlePart
  },
  ready () {
    this.loading(this.$route.params.id)
  },
  route: {
    canReuse: false
  },
  data () {
    return {
      isOk: false,
      data: {}
    }
  },
  methods: {
    loading (id) {
      getArticle(id).then(response => {
        this.isOk = true
        this.data = response.data
      })
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
</style>
