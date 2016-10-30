<template>
<div>

  <div class="msg">
    <div class="item-r">
      <div class="av"><img src="/static/demo/comment/2.jpg"></div>
      <div class="msgarea">
        <p>{{order.ask}}</p>
      </div>
    </div>
    <div class="item-l">
      <div class="av"><img src="/static/av_qun.jpg"></div>
      <div class="msgarea">
        <p>主人，小观乐意为您解答，您觉得解答得好，请为我亮起5颗星哟！</p>
      </div>
    </div>
  </div>
  <div class="warp-step">
    <step :current="1" background-color="#fff" gutter="2px">
      <step-item title="提交" description="2016-10-10"></step-item>
      <step-item title="受理" description="2016-10-11"></step-item>
      <step-item title="完成" description="2016-10-11"></step-item>
    </step>
  </div>

  <group title="">
    <cell title="评分">
      <rater :value.sync="order.star" :disabled="star_dis" slot="value" star="☻" active-color="#FF9900" :margin="4"></rater>
    </cell>
  </group>

</div>
</template>

<script>
import { Group, XInput, XTextarea, XButton, Step, StepItem, Cell, Rater } from '../../components'
import { getOrder } from '../../api'
// import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Group,
    XInput,
    XButton,
    XTextarea,
    Step,
    StepItem,
    Cell,
    Rater
  },
  ready () {
    this.loading(this.$route.params.id)
  },
  data () {
    return {
      order: {}
    }
  },
  computed: {
    star_dis () {
      if (this.order.star === 0) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    loading (id) {
      getOrder(id).then(response => {
        const Json = response.data
        this.order = Json
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
    margin-bottom: 10px;
    position: relative;
    .av{
      margin-top: 5px;
      height: 45px;
      width: 45px;
      overflow: hidden;
      float: left;
      img{
        width: 45px;
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
      margin-left: 60px;
      position: relative;
      border: solid 1px #e5b723;
      border-radius: 5px;
    }
  }
  .item-r{
    margin-bottom: 10px;
    position: relative;
    .av{
      margin-top: 5px;
      height: 45px;
      width: 45px;
      overflow: hidden;
      float: right;
      img{
        width: 45px;
        height: auto;
      }
    }
    .msgarea:after{
      position: absolute;
      right: -8px;
      top: 10px;
      content: "";
      width: 0;
      height: 0;
      border-top: 5px solid transparent;
      border-left: 8px solid #e5b723;
      border-bottom: 5px solid transparent;
    }
    .msgarea{
      color: #fff;
      font-size: 14px;
      background-color: #e5b723;
      padding: 5px;
      margin-right: 60px;
      position: relative;
      border: solid 1px #e5b723;
      border-radius: 5px;
    }
  }
}
</style>
