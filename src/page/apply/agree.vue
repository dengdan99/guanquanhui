<template>
<div>
  <div class="info-header">
    <h3>申请成为志愿者细则</h3>
  </div>
  <div class="bg-yellow">
    <p>{{rule}}</p>
  </div>
  <group>
    <x-input title="姓名" name="username" :value.sync="name" placeholder="请输入姓名" is-type="china-name"></x-input>
    <x-input title="手机号码" :value.sync="mobile" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
    <switch title="同意协议" :value.sync="agree"></switch>
  </group>
  <group>
    <x-button type="primary" @click="submit">提交</x-button>
  </group>
</div>
</template>

<script>
import { Group, XButton, Switch, XInput } from '../../components'
import { go } from '../../libs/router'
import { volunteer, getVolunteerRule } from '../../api'
// import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Group,
    XButton,
    Switch,
    XInput
  },
  ready () {
    getVolunteerRule().then(res => {
      this.rule = res.data.rules
    })
  },
  data () {
    return {
      rule: '',
      agree: false,
      name: '',
      mobile: ''
    }
  },
  methods: {
    submit () {
      if (this.name === '') {
        this.$vux.toast.show({
          type: 'text',
          text: '请填写真实姓名'
        })
        return false
      }
      if (this.mobile === '') {
        this.$vux.toast.show({
          type: 'text',
          text: '请填写手机号码'
        })
        return false
      }
      if (this.agree === false) {
        this.$vux.toast.show({
          type: 'text',
          text: '请同意协议'
        })
        return false
      }
      volunteer({
        name: this.name,
        mobile: this.mobile
      }).then(response => {
        console.log(response.data)
        if (response.data.code === '200006') {
          this.$vux.toast.show({
            type: 'success',
            text: '申请已提交，请等待审核'
          })
          go('/user/index', this.$router)
        } else {
          this.$vux.toast.show({
            type: 'text',
            text: response.data.message
          })
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.info-header{
  padding: 10px 0;
  border-bottom: solid 2px #000;
  text-align: center;
}
.bg-yellow{
  border: solid 1px #fbbe01;
  border-radius: 5px;
  width: 90%;
  margin: 0 auto;
  background: linear-gradient(to bottom, #fee7a1 0%,#fabf01 100%);
  color: #000;
  font-family: "Microsoft YaHei";
  margin-top: 10px;
  p{
    padding: 20px;
  }
}
</style>
