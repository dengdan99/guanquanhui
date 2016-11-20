<template>
  <div class="bg-withe">
    <div class="pary-area">
      <div class="datail">
        <h2>{{data.name}}</h2>
        <div class="pic"><img :src="data.logo" /></div>
        <div class="content">{{{data.description}}}</div>
      </div>
    </div>
    <div class="zmPic">
      <x-button type="primary" @click="showdialog=true">立即加入社群</x-button>
      <x-button type="primary" @click="showdialog2=true">我要当群主</x-button>
    </div>

    <dialog :show.sync="showdialog" class="dialog-demo" :hide-on-blur="true">
        <group title="基本资料">
          <x-input title="姓名" :value.sync="joinPost.name" v-ref:name :required="true" placeholder="请输入姓名" is-type="china-name"></x-input>
          <x-input title="手机号码" :value.sync="joinPost.mobile" v-ref:mobile :required="true" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
        </group>
        <group title="">
          <div class="zmPic">
            <x-button type="primary" @click="doPost">加入社群</x-button>
          </div>
        </group>
      </dialog>

      <dialog :show.sync="showdialog2" class="dialog-demo" :hide-on-blur="true">
        <group title="基本资料">
          <x-input title="姓名" :value.sync="joinBossPost.name" v-ref:nameboss :required="true" placeholder="请输入姓名" is-type="china-name"></x-input>
          <x-input title="手机号码" :value.sync="joinBossPost.mobile" v-ref:mobileboss :required="true" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
        </group>
        <group title="">
          <div class="zmPic">
            <x-button type="primary" @click="doPostBoss">我要当群主</x-button>
          </div>
        </group>
      </dialog>

  </div>
</template>

<script>
import { XButton, Dialog, Group, XInput } from '../../components'
// import { mapActions, mapGetters } from 'vuex'
import { getClub, joinClub, clubBoss } from '../../api'
export default {
  components: {
    XButton,
    Dialog,
    Group,
    XInput
  },
  ready () {
    this.loading(this.$route.params.id)
  },
  data () {
    return {
      data: {},
      showdialog: false,
      showdialog2: false,
      joinPost: {
        name: '',
        mobile: ''
      },
      joinBossPost: {
        name: '',
        mobile: ''
      }
    }
  },
  methods: {
    loading (id) {
      getClub(id).then(response => {
        this.data = response.data
      })
    },
    doPostBoss () {
      this.$refs.nameboss.validate()
      this.$refs.nameboss.getError()
      this.$refs.mobileboss.validate()
      this.$refs.mobileboss.getError()

      if (!this.$refs.nameboss.valid) {
        this.$vux.toast.show({
          type: 'text',
          text: this.$refs.name.firstError
        })
        return false
      }
      if (!this.$refs.mobileboss.valid) {
        this.$vux.toast.show({
          type: 'text',
          text: this.$refs.mobile.firstError
        })
        return false
      }
      // $refs.name.valid
      // $refs.mobile.valid
      clubBoss(this.$route.params.id, this.joinBossPost).then(response => {
        const json = response.data
        if (json.result && json.result === true) {
          this.$vux.toast.show({
            type: 'success',
            text: '申请群主成功'
          })
        } else {
          this.$vux.toast.show({
            type: 'warn',
            text: json.message
          })
        }
        this.showdialog2 = false
      })
    },
    doPost () {
      this.$refs.name.validate()
      this.$refs.name.getError()
      this.$refs.mobile.validate()
      this.$refs.mobile.getError()

      if (!this.$refs.name.valid) {
        this.$vux.toast.show({
          type: 'text',
          text: this.$refs.name.firstError
        })
        return false
      }
      if (!this.$refs.mobile.valid) {
        this.$vux.toast.show({
          type: 'text',
          text: this.$refs.mobile.firstError
        })
        return false
      }
      // $refs.name.valid
      // $refs.mobile.valid
      joinClub(this.$route.params.id, this.joinPost).then(response => {
        const json = response.data
        if (json.result && json.result === true) {
          this.$vux.toast.show({
            type: 'success',
            text: '恭喜,报名成功'
          })
        } else {
          this.$vux.toast.show({
            type: 'warn',
            text: json.message
          })
        }
        this.showdialog = false
      })
    }
  }
}
</script>

<style scoped lang="less">
.vux-tab .vux-tab-item{
  font-size: 16px
}
.qunzhu-area{
  text-align: center;
}
.qunzhu-area h1{
  margin: 10px 0 30px 0;
}
.zmPic{
  display: block;
  width: 50%;
  margin: 20px auto;
}
.zm-content{
}
.weui_btn_primary{
  border: solid 1px #fbbe01;
  border-radius: 5px;
  background: linear-gradient(to bottom, #fee7a1 0%,#fabf01 100%);
  color: #000;
  font-family: "Microsoft YaHei"
}

.pary-area{
  .datail{
    padding: 15px;

    h2{
      text-align: center;
      font-weight: normal;
    }
    .pic img{
      width: 100%;
      height: auto;
    }
    .desc{
      border:solid 1px #7d7d7d;
      padding: 10px;
      margin: 10px 0;
    }
    .p-info{
      margin: 10px 0;
      text-align: right;
    }
  }
}
</style>
