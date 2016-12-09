<template>
  <div>
    <scroller lock-x scrollbar-y use-pullup :pullup-config="pullupConfig" @pullup:loading="load" height="-50px" keep-alive>
      <div class="box2">
      <swiper :list="banner_list" auto height="210px" dots-class="custom-bottom" dots-position="center"></swiper>
      <div class="zt_list" @click="goto(item)" v-for="item in articleList">
        <div class="pic"><div class="img-area"><img :src="item.image" /></div></div>
        <div class="text">
          <h4 class="title">{{item.title}}</h4>
          <p class="desc">{{item.abstract}}</p>
        </div>
      </div>
      </div>
    </scroller>
  </div>
</template>

<script>
import { Swiper, Scroller } from '../../components'
import { mapGetters, mapActions } from 'vuex'
import { getAdList } from '../../api'
import { go } from '../../libs/router'

export default {
  components: {
    Swiper,
    Scroller
  },
  route: {
    canReuse: false,
    activate: function (transition) {
      this.listId = transition.to.params.id
      transition.next()
    }
  },
  ready () {
    // this.listId = this.$route.params.id
    // this.firstLoad()
  },
  data () {
    return {
      listId: 0,
      pullupConfig: {
        content: '上拉加载更多',
        downContent: '松开进行加载',
        upContent: '上拉加载更多',
        loadingContent: '加载中...'
      },
      param: {
        offset: 0,
        size: 10
      },
      banner_list: [{
        url: 'javascript:',
        img: '/static/bottom-bg.jpg',
        title: 'banner1'
      }, {
        url: 'javascript:',
        img: '/static/top-bg.jpg',
        title: 'banner2'
      }, {
        url: 'javascript:',
        img: '/static/bottom-bg.jpg',
        title: 'banner3'
      }]
    }
  },
  watch: {
    listId: function (val, oldVal) {
      this.firstLoad()
      this.param.offset = 0
    }
  },
  computed: {
    ...mapGetters([
      'articleList',
      'articleIsMore'
    ])
  },
  methods: {
    ...mapActions([
      'getArticleList'
    ]),
    load (uuid) {
      this.getArticleList({
        id: this.listId,
        isAdd: true,
        itemsPerPage: this.param.size,
        param: this.param
      }).then(res => {
        this.param.offset += this.param.size
        this.$broadcast('pullup:reset', uuid)
        if (this.articleIsMore) {
          this.$broadcast('pullup:reset', uuid)
        } else {
          this.$broadcast('pullup:done', uuid)
        }
      })
    },
    firstLoad () {
      this.getArticleList({
        id: this.listId,
        isAdd: false,
        itemsPerPage: this.param.size,
        param: this.param
      }).then(() => {
        this.param.offset += this.param.size
      })
      getAdList(this.listId).then(response => {
        let Json = response.data.map(item => {
          return {
            url: '/article/detail/' + item.id,
            img: item.img,
            title: item.text
          }
        })
        this.banner_list = Json
      })
    },
    goto (item) {
      if (item.jump !== '' && item.jump.indexOf('http') >= 0) {
        window.location.href = item.jump
      } else {
        go('/article/detail/' + item.id, this.$router)
      }
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
    color: #474747;
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
