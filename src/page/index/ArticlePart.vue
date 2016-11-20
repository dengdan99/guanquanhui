<template>
  <div>

    <div class="zt_list" @click="gotoP(paty)">
      <div class="pic"><div class="img-area"><img :src="paty.image" /></div></div>
      <div class="text">
        <h3 class="title">{{paty.title}}</h3>
        <p class="desc">{{paty.abstract}}</p>
      </div>
    </div>
    <div class="zt_list" @click="gotoT(toupiao)">
      <div class="pic"><div class="img-area"><img :src="toupiao.image" /></div></div>
      <div class="text">
        <h3 class="title">{{toupiao.theme}}</h3>
        <p class="desc">{{toupiao.abstract}}</p>
      </div>
    </div>
    <div class="zt_list" @click="gotoA(article)">
      <div class="pic"><div class="img-area"><img :src="article.image" /></div></div>
      <div class="text">
        <h3 class="title">{{article.title}}</h3>
        <p class="desc">{{article.abstract}}</p>
      </div>
    </div>

  </div>
</template>

<script>
import { Flexbox, FlexboxItem, GMedia } from '../../components'
import { getPatyLast, getLatestLast, getArticleLatest } from '../../api'
import { go } from '../../libs/router'

export default {
  components: {
    Flexbox,
    FlexboxItem,
    GMedia
  },
  ready () {
    getPatyLast().then(res => {
      this.paty = res.data
    })
    getLatestLast().then(res => {
      this.toupiao = res.data
    })
    getArticleLatest().then(res => {
      this.article = res.data
    })
  },
  data () {
    return {
      paty: {},
      toupiao: {},
      article: {}
    }
  },
  computed: {
  },
  methods: {
    goUrl (link) {
      go(link, this.$router)
    },
    gotoP (item) {
      go('/paty/detail/' + item.id, this.$router)
    },
    gotoT (item) {
      go('/dasha/club/' + item.id, this.$router)
    },
    gotoA (item) {
      go('/article/detail/' + item.id, this.$router)
    }
  }
}
</script>

<style scoped lang="less">

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
