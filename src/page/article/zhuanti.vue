<template>
  <div>
    <swiper :list="banner_list" auto height="180px" dots-class="custom-bottom" height="-225px" dots-position="center"></swiper>
    <scroller lock-x scrollbar-y use-pullup :pullup-config="pullupConfig" @pullup:loading="load" heigth="-50px">
      <div class="box2">
        <div class="zt_list" @click="goto(item)" v-for="item in articleList">
          <div class="pic"><img :src="item.image"></div>
          <div class="text">
            <h3 class="title">{{item.title}}</h3>
            <p class="desc">{{item.title}}</p>
          </div>
        </div>
      </div>
    </scroller>
  </div>
</template>

<script>
import { Swiper, Scroller } from '../../components'
import { mapGetters, mapActions } from 'vuex'
import { go } from '../../libs/router'

export default {
  components: {
    Swiper,
    Scroller
  },
  ready () {
    this.getArticleList({
      id: this.$route.params.id,
      isAdd: false,
      itemsPerPage: this.param.size,
      param: this.param
    }).then(() => {
      this.param.offset += this.param.size
    })
  },
  data () {
    return {
      pullupConfig: {
        content: '上拉加载更多',
        downContent: '松开进行加载',
        upContent: '上拉加载更多',
        loadingContent: '加载中...'
      },
      param: {
        offset: 0,
        size: 1
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
        id: this.$route.params.id,
        isAdd: true,
        itemsPerPage: this.param.size,
        param: this.param
      }).then(res => {
        console.log(res)
        this.param.offset += this.param.size

        if (this.baikeIsMore) {
          this.$broadcast('pullup:reset', uuid)
        } else {
          this.$broadcast('pullup:done', uuid)
        }
      })
    },
    goto (item) {
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

    img{
      width: 60px;
      height: auto;
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
    font-style: 16px;
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
