<template>
<div class="bg-withe">
  <tab :line-width=2 active-color='#fabf01' :index.sync="index">
    <tab-item class="vux-center" :selected="currentTitle === item" v-for="item in titles" @click="currentTitle = item">{{item}}</tab-item>
  </tab>
  <swiper :index.sync="index" :height="height" :show-dots="false">

    <swiper-item>
      <div class="item-list">
        <a href="javascript:;" @click="goUrl(item)" class="item" v-for="item in commList.list3">
          <div class="img"><img :src="item.logo" class="logo" /></div>
          <div class="text">{{item.name}}</div>
        </a>
      </div>
    </swiper-item>

    <swiper-item>
      <div class="item-list">
        <a href="javascript:;" @click="goUrl(item)" class="item" v-for="item in commList.list1">
          <div class="img"><img :src="item.logo" class="logo" /></div>
          <div class="text">{{item.name}}</div>
        </a>
      </div>
    </swiper-item>

    <!-- <swiper-item>
      <div class="item-list">
        <a href="javascript:;" @click="goUrl(item)" class="item" v-for="item in commList.list2">
          <div class="img"><img :src="item.logo" class="logo" /></div>
          <div class="text">{{item.name}}</div>
        </a>
      </div>
    </swiper-item> -->
  </swiper>
</div>
</template>

<script>
import { Tab, TabItem, Swiper, SwiperItem, Flexbox, FlexboxItem } from '../../components'
import { go } from '../../libs/router'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    Flexbox,
    FlexboxItem
  },
  ready () {
    this.getCommunityList()
    this.height = (document.body.clientHeight - 50 - 44) + 'px'
  },
  data () {
    return {
      height: '500px',
      index: 0,
      titles: ['社群', '企业'],
      currentTitle: '社群'
    }
  },
  computed: {
    ...mapGetters([
      'commList'
    ])
  },
  methods: {
    ...mapActions([
      'getCommunityList'
    ]),
    goUrl (item) {
      if (item.type === 3) {
        go('/dasha/club/' + item.id, this.$router)
      } else {
        go('/dasha/comp/' + item.id, this.$router)
      }
    }
  }
}
</script>

<style scoped lang="less">
@import '../../styles/1px.less';
.item-list{
  overflow: hidden;
  padding: 10px 0;
}
.item {
  width: 30%;
  padding: 0 1.6%;
  height: 100px;
  text-align: center;
  float: left;
  font-size: 12px;
  color: #303030;
  position: relative;
  margin-bottom: 20px;
}
.img {
  width: 60px;
  height: 60px;
  overflow: hidden;
  line-height: 60px;
  text-align: center;
  margin: 8px auto 5px;
  background-repeat: no-repeat;
  background-size: 40px auto!important;
  background-position: center;
}
.img.iconfont {
  font-size: 50px;
}
.text {
  font-size: 14px;
  text-align: center;
  line-height: 1em;
  overflow: hidden;
  height: 14px;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.logo{
  width: 100%;
  height: auto;
}
</style>