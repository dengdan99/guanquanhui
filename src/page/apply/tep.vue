<template>
<div>
  <div class="top-bg"><img src="/static/top-bg.jpg"></div>
  <div class="al-conent">
    <div class="tep1 tep" v-show="status === -2 || status === -1">
      <div class="img iconfont">&#xe649;</div>
      <p class="red">主人， 您还不是志愿者</p>
      <p class="gray">加入我们吧踏上新的路程</p>
      <x-button type="primary" @click="agree">申请成为志愿者</x-button>
    </div>

    <div class="tep2 tep" v-show="status === 0">
      <div class="weui_btn_primary shenhezhong">审核中</div>
      <p class="gray">您的志愿者申请正在审核中</p>
    </div>

    <div class="tep1 tep" v-show="status === 1">
      <div class="img iconfont">&#xe7cd;</div>
      <p>主人， 您已经成为了一名光荣的志愿者</p>
      <x-button class="bt10" type="primary" @click="goto('/user/index')">参与更多活动</x-button>
      <x-button type="primary" @click="goto('/user/index')">查看志愿者积分榜</x-button>
    </div>

  </div>
  <div class="bottom-bg"><img src="/static/bottom-bg.jpg"></div>
</div>
</template>

<script>
import { Group, XButton } from '../../components'
import { go } from '../../libs/router'
import { getCookie } from '../../libs/authService'
import { volunteerState } from '../../api'
// import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Group,
    XButton
  },
  ready () {
    volunteerState(getCookie('uid')).then(response => {
      this.status = response.data.state
    })
  },
  data () {
    return {
      status: -2
    }
  },
  methods: {
    agree () {
      this.goto('/apply/agree')
    },
    goto (link) {
      go(link, this.$router)
    }
  }
}
</script>

<style scoped lang="less">
.al-conent{
  min-height: 303px;
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
  font-size: 100px;
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
