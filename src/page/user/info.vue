<template>
<div>
  <div class="info-header">
    <h3>完成资料填写有小惊喜哦</h3>
  </div>
  <group title="基本资料">
    <x-input title="姓名" name="username" :value.sync="userInfo.nickname" placeholder="请输入姓名" is-type="china-name"></x-input>
    <calendar :value.sync="userInfo.birthday" :weeks-list="weeksList" title="出生年月" disable-future></calendar>
    <x-input title="手机号码" :value.sync="userInfo.mobile" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
  </group>

  <group title="其他资料">
    <popup-picker :fixed-columns="2" :columns="1" :data="dic.sex" title="性别" :value.sync="showGender" show-name placeholder="请选择性别" ></popup-picker>
    <popup-picker :fixed-columns="2" :columns="1" :data="dic.profession" title="职业" :value.sync="showJob" show-name placeholder="请选择职业" ></popup-picker>
    <popup-picker :fixed-columns="2" :columns="1" :data="dic.feature" title="政治面貌" :value.sync="showParty" show-name placeholder="请选择政治面貌" ></popup-picker>
  </group>

  <group title="">
    <x-button type="primary" @click="doPost">提交</x-button>
  </group>
  
</div>
</template>

<script>
import { Switch, Group, XInput, Calendar, Checklist, XButton, Radio, PopupPicker } from '../../components'
import { mapActions, mapGetters } from 'vuex'
import { go } from '../../libs/router'
import { updateFrontUserInfo } from '../../api/'

export default {
  components: {
    Switch,
    Group,
    XInput,
    Calendar,
    Checklist,
    XButton,
    Radio,
    PopupPicker
  },
  ready () {
    // 获取user 并 赋值
    this.getUserInfo(9).then(() => {
      if (this.userInfo.sex !== 0) {
        this.showGender.push(this.userInfo.sex.toString())
      }
      if (this.userInfo.profession_id !== 0) {
        this.showJob.push(this.userInfo.profession_id.toString())
      }
      if (this.userInfo.feature_id !== 0) {
        this.showParty.push(this.userInfo.feature_id.toString())
      }
    })
    this.getDic()
  },
  data () {
    return {
      weeksList: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
      showGender: [],
      showJob: [],
      showParty: []
    }
  },
  computed: {
    ...mapGetters([
      'userInfo',
      'dic'
    ])
  },
  methods: {
    ...mapActions([
      'setPageTitle',
      'hideTabbar',
      'getUserInfo',
      'getDic',
      'showLoading',
      'hideLoading'
    ]),
    goUrl (link) {
      go(link, this.$router)
    },
    doPost () {
      let _this = this
      let postData = {
        nickname: this.userInfo.nickname,
        mobile: this.userInfo.mobile,
        birthday: this.userInfo.birthday,
        sex: this.showGender.length === 0 ? 0 : this.showGender[0],
        profession_id: this.showJob.length === 0 ? 0 : this.showJob[0],
        feature_id: this.showParty.length === 0 ? 0 : this.showParty[0]
      }
      if (!this.checkPost(postData)) {
        this.$vux.toast.show({
          type: 'text',
          text: '请全部填写'
        })
        return false
      }
      updateFrontUserInfo(this.userInfo.id, postData).then(response => {
        let json = response.data
        if (json.integral !== 0) {
          this.$vux.toast.show('恭喜您,获得 ' + json.integral + ' 个积分')
        } else {
          this.$vux.toast.show({
            type: 'success',
            text: '修改成功'
          })
        }
        go('/user/index', _this.$router)
      })
    },
    checkPost (data) {
      let checked = true
      Object.keys(data).forEach(value => {
        if (data[value] === 0 || data[value] === '') {
          checked = false
        }
      })
      return checked
    }
  }
}
</script>

<style scoped>

.info-header{
  padding: 10px 0;
  border-bottom: solid 2px #000;
  text-align: center;
}
</style>
<style>
.inline-calendar .week{
  font-size: 12px;
}
</style>