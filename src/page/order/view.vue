<template>
<div class="order-bg">
  <div class="o-bg">
    <div class="msg">
      <div class="item-l">
        <div class="av"><img :src="order.avator === '' ? '/static/def-av.jpg' : order.avator"></div>
        <div class="msgarea">
          <p>{{order.ask}}</p>
        </div>
      </div>
    </div>
    <div class="msg">
      <div class="item-r">
        <div class="av"><img src="/static/av_qun.jpg"></div>
        <div class="msgarea">
          <p :class="order.finished_at !== 0 ? 'gray' : ''">{{order.answer}}</p>
        </div>
      </div>
    </div>
  </div>
  <img src="/static/order-bg.jpg" class="h-ling" />
  <div class="order-bot" v-if="typeof order.state !== 'undefined'">
    <div class="warp-step">
      <img :src="'/static/tep-' + order.state + '.jpg'" class="tep-bg" />
      <div class="step">
        <div class="t1">
          <p>您的订单<br>已经提交</p>
          <p class="time">{{order.created_at}}</p>
        </div>
        <div class="t2" v-show="order.accepted_at !== 0">
          <p class="time">{{order.accepted_at}}</p>
          <p>您的订单<br>已经受理</p>
        </div>
        <div class="t3" v-show="order.finished_at !== 0">
          <p>您的订单<br>已经完成</p>
          <p class="time">{{order.finished_at}}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="star_area" v-show="order.state >= 3">
      <rater :value.sync="star" class="iconfont" slot="value" star="&#xe62e;" :disabled="star_dis"></rater>
  </div>

  <div class="s-tips" style="color:#fff; padding: 10px 20px;" v-show="order.state >= 3 && star <= 3 && showText">主人，小的为您鞍前马后，那么辛苦，亮起5颗星给点正能量鼓励咯</div>

  <div class="bottt" v-show="!star_dis && order.state >= 3 && showText">
    <x-button type="primary" @click="doZan">点赞</x-button>
  </div>
  </group>

</div>
</template>

<script>
import { Group, XInput, XTextarea, XButton, Step, StepItem, Cell, Rater } from '../../components'
import { getOrder, starOrder } from '../../api'
import { mapActions, mapGetters } from 'vuex'
import { go } from '../../libs/router'
import { getCookie } from '../../libs/authService'

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
      showText: false,
      star: 0,
      order: {}
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ]),
    star_dis () {
      if (this.order.star === 0) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    ...mapActions([
      'getUserInfo'
    ]),
    loading (id) {
      getOrder(id).then(response => {
        const Json = response.data
        this.order = Json
        this.star = Json.star
        if (getCookie('uid') === Json.user_id) {
          this.showText = true
        }
      })
    },
    doZan () {
      const val = this.star
      if (val === 0) return
      starOrder(this.$route.params.id, {
        star: val
      }).then(res => {
        const Json = res.data
        if (Json.result !== true) {
          this.$vux.toast.show({
            type: 'text',
            text: Json.message
          })
          return false
        } else {
          this.$vux.toast.show({
            type: 'success',
            text: '点赞成功'
          })
          go('/order/index', this.$router)
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.o-bg{
  background-color: #fff000;
  padding-bottom: 20px;
}
.gray{
  color: #ccc;
}

.warp-step{
  position: relative;
  color: #fff;
  font-size: 12px;
  .tep-bg{
    width: 100%;
    height: auto;
  }
  .step{
    position: absolute;
    display: flex;
    top: -10px;
    left: 0;
    width: 100%;
    text-align: center;
    .t1{
      width: 33%;
      padding-left: 15px;
      .time{
        color: #fabf01;
      }
    }
    .t2{
      width: 33%;
      padding-top: 70px;
      .time{
        color: #e47063;
      }
    }
    .t3{
      width: 33%;
      .time{
        color: #a2d1a3;
      }
    }
  }
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
    border-radius: 5px;
    // transform:skew(10deg,0deg);
    min-height: 50px;
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
    margin: 40px 0 20px 0;
  }
  .inp{
    border:solid 3px #000;
    border-radius: 3px;
    padding: 10px 15px;
    width: 80%;
  }
}
.h-ling{
  width: 100%;
  height: auto;
  display: block;
}
.order-bg{
  background-color: #222222;
  min-height: 600px;
  .star_area{
    text-align: center;
    padding-bottom: 20px;
  }
}
.order-bot{
  padding: 20px 10px;
}
.bottt{
  width: 250px;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 10px;
  .mob-input{
    margin: 40px 0 20px 0;
  }
  .inp{
    border:solid 3px #000;
    border-radius: 3px;
    padding: 10px 15px;
    width: 80%;
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
