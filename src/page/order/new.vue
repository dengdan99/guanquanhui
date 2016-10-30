<template>
<div>
  
  <group title="新的订单服务">
    <x-input title="手机号码" :value.sync="mobile" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
    <x-textarea :max="240" :value.sync="ask" name="description" placeholder="请输入您订单服务的内容 解答可输入 240个字"></x-textarea>
  </group>

  <div class="msg">
    <div class="item-l">
      <div class="av"><img src="/static/av_qun.jpg"></div>
      <div class="msgarea">
        <p>主人，小观乐意为您解答，您觉得解答得好，请为我亮起5颗星哟！</p>
      </div>
    </div>
  </div>

  <div class="warp-step">
    <step :current="0" background-color='#fff'>
      <step-item title="提交" description=""></step-item>
      <step-item title="受理" description=""></step-item>
      <step-item title="完成" description=""></step-item>
    </step>
  </div>
  
  <group title="">
    <x-button type="primary" @click="doPost">提交</x-button>
  </group>
  
</div>
</template>

<script>
import { Group, XInput, XTextarea, XButton, Step, StepItem } from '../../components'
import { newOrder } from '../../api'
import { go } from '../../libs/router'
import { mapActions } from 'vuex'

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

  },
  data () {
    return {
      ask: '',
      mobile: ''
    }
  },
  methods: {
    ...mapActions([
      'showLoading',
      'hideLoading'
    ]),
    doPost () {
      this.showLoading()
      newOrder({
        ask: this.ask,
        mobile: this.mobile
      }).then(response => {
        this.hideLoading()
        const Json = response.data
        if (Json.result === true) {
          this.$vux.toast.show({
            type: 'success',
            text: '提交成功'
          })
          go('/order/index', this.$route)
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
.warp-step{
  padding: 20px 5px;
}
.msg{
  padding: 10px 5px;
  .item-l{
    position: relative;
    .av{
      margin-top: 5px;
      height: 30px;
      width: 30px;
      overflow: hidden;
      float: left;
      img{
        width: 30px;
        height: auto;
      }
    }
    .msgarea:after{
      position: absolute;
      left: -8px;
      top: 10px;
      content: "";
      width: 0;
      height: 0;
      border-top: 5px solid transparent;
      border-right: 8px solid #e5b723;
      border-bottom: 5px solid transparent;
    }
    .msgarea{
      color: #fff;
      font-size: 14px;
      background-color: #e5b723;
      padding: 5px;
      margin-left: 40px;
      position: relative;
      border: solid 1px #e5b723;
      border-radius: 5px;
    }
  }
}
</style>
