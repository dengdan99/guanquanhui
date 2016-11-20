<template>
<div>
  <div class="top-bg"><img src="/static/top-bg.jpg"></div>
  <div class="al-conent">

    <flexbox :gutter="0">
      <flexbox-item>
        <a href="javascript:;" @click="goto('/paty/index')" class="item item1">
          <div class="img iconfont" style="color: blue">&#xe603;</div>
          <div class="text">活动报名 </div>
        </a>
      </flexbox-item>
      <flexbox-item>
        <a class="item item2" href="javascript:;" @click="goto('/toupiao/index')">
          <div class="img iconfont" style="color: red">&#xe639;</div>
          <div class="text">活动投票</div>
        </a>
      </flexbox-item>
    </flexbox>
    <flexbox :gutter="0">
      <flexbox-item>
        <a class="item item3" href="javascript:;" @click="goto('/order/index')">
          <div class="img iconfont" style="color: yellow">&#xe638;</div>
          <div class="text">趣味测试</div>
        </a>
      </flexbox-item>
      <flexbox-item>
        <a class="item item4" href="javascript:;" @click="goto('/apply/tep')">
          <div class="img iconfont" style="color: green">&#xe658;</div>
          <div class="text">趣味游戏</div>
        </a>
      </flexbox-item>
    </flexbox>

  </div>
  <div class="bottom-bg"><img src="/static/bottom-bg.jpg"></div>
</div>
</template>

<script>

import { Flexbox, FlexboxItem } from '../../components'
import { go } from '../../libs/router'
// import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Flexbox,
    FlexboxItem
  },
  ready () {
  },
  data () {
    return {
      status: -2
    }
  },
  methods: {
    goto (link) {
      go(link, this.$router)
    }
  }
}
</script>

<style scoped lang="less">
.al-conent{
  min-height: 310px;
  width: 80%;
  margin: 0 auto;
}
.tep{
  text-align: center;
  padding-bottom: 30px;
  .red{
    color: red;
    font-size: 20px;
  }
  .gray{
    color: #ccc;
  }
}
.iconfont{
  text-align: center;
  font-size: 50px;
  color: red;
}
.top-bg img{
  width: 100%;
  height: auto;
}
.bottom-bg img{
  width: 100%;
  height: auto;
}
.weui_btn_primary{
  border: solid 1px #fbbe01;
  border-radius: 5px;
  width: 80%;
  margin: 0 auto;
  background: linear-gradient(to bottom, #fee7a1 0%,#fabf01 100%);
  color: #000;
  font-family: "Microsoft YaHei"
}
.item{
  text-align: center;
  .text{
    color: #333
  }
}
.shenhezhong{
  border-radius: 100%;
  height: 100px;
  width: 100px;
  line-height: 100px;
  font-size: 28px;
  margin-bottom: 30px;
}
.bt10{
  margin-bottom: 10px;
}
</style>
