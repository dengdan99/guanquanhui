<template>
<div class="o-bg">

  <div class="msg">
    <div class="item-l">
      <div class="av"><img :src="userInfo.avator"></div>
      <div class="msgarea">
        <x-textarea :max="240" :height="120" :value.sync="ask" name="description" placeholder="请输入您订单服务的内容 解答可输入 240个字"></x-textarea>
      </div>
    </div>
  </div>
  <div class="msg">
    <div class="item-r">
      <div class="av"><img src="/static/av_qun.jpg"></div>
      <div class="msgarea">
        <p class="gray">主人，您下订单我来答复，记得留下手机号方便联系您哦！您也可以在“关注我—我的订单”栏查找订单！订单处理得好，主人请为我亮起5颗星星，吼吼！
        </p>
      </div>
    </div>
  </div>

  <div class="bot">
    <div class="mob-input">
      <input class="inp" style="font-size:14px;" v-model="mobile"  placeholder="主人，请输手机号码，爱你么么哒" keyboard="number" />
    </div>
    <x-button type="primary" @click="doPost">提交</x-button>
  </div>

</div>
</template>

<script>
import { Group, XInput, XTextarea, XButton, Step, StepItem } from '../../components'
import { newOrder } from '../../api'
import { go } from '../../libs/router'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Group,
    XInput,
    XButton,
    XTextarea,
    Step,
    StepItem
  },
  ready () {
    this.getUserInfo()
  },
  data () {
    return {
      ask: '',
      mobile: ''
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  methods: {
    ...mapActions([
      'showLoading',
      'hideLoading',
      'getUserInfo'
    ]),
    doPost () {
      this.showLoading()
      newOrder({
        ask: this.ask,
        mobile: this.mobile
      }).then(response => {
        this.hideLoading()
        const Json = response.data
        if (typeof Json.id !== 'undefined') {
          this.$vux.toast.show({
            type: 'success',
            text: '提交成功'
          })
          go('/order/view/' + Json.id, this.$router)
        } else {
          this.$vux.toast.show({
            type: 'text',
            text: Json.message
          })
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.o-bg{
  background-color: #fff000;
  height: 100%;
}
.gray{
  color: #ccc
}

.warp-step{
  padding: 20px 5px 0 5px;
}
.msg{
  padding: 40px 20px 0 20px;
  .msgarea{
    color: #000;
    font-size: 14px;
    background-color: #fff;
    padding: 5px;
    margin-left: 80px;
    position: relative;
    border: solid 3px #000;
    border-radius: 10px;
    // transform:skew(10deg,0deg);
    min-height: 150px;
  }
  .msgarea:after{
    position: absolute;
    left: 50px;
    bottom: -36px;
    content: "";
    border-color: #fff transparent transparent transparent;
    border-style: solid;
    border-width: 20px;
    height: 0;
    width: 0;
    transform:skew(50deg, 10deg);
  }
  .msgarea:before{
    position: absolute;
    left: 53px;
    bottom: -39px;
    content: "";
    border-color: #000 transparent transparent transparent;
    border-style: solid;
    border-width: 19px;
    height: 0;
    width: 0;
    transform:skew(47deg, 2deg);
  }
  .item-l{
    position: relative;
    .av{
      margin-top: 5px;
      height: 55px;
      width: 55px;
      border-radius: 100%;
      overflow: hidden;
      float: left;
      img{
        width: 55px;
        height: auto;
      }
    }
  }
  .item-r{
    position: relative;
    .av{
      margin-top: 5px;
      height: 55px;
      width: 55px;
      border-radius: 100%;
      overflow: hidden;
      float: right;
      img{
        width: 55px;
        height: auto;
      }
    }
    .msgarea{
      margin-left: 0;
      margin-right: 80px;
      min-height: 80px;
    }
  }
}
.bot{
  width: 250px;
  margin: 0 auto;
  text-align: center;
  .mob-input{
    margin: 40px 0 15px 0;
  }
  .inp{
    border:solid 3px #000;
    border-radius: 3px;
    padding: 10px 10px;
    width: 90%;
  }
}
.weui_btn_primary{
  border: solid #000 2px;
  background: linear-gradient(to bottom, #ccc 0%,#000 100%);
  color: yellow;
  width: 50%;
  line-height: 28px;
}
</style>
