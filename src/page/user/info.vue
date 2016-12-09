<template>
<div class="o-bg user-info">
  <div class="info-header">
    <h3>完成资料填写有小惊喜哦</h3>
  </div>
  <div class="userInfo">
    <img :src="userInfo.avator" class="av_img">
  </div>
  <group title="基本资料">
    <x-input title="姓名" name="username" :value.sync="userInfo.nickname" placeholder="" is-type="china-name"></x-input>
    <datetime
      :value.sync="userInfo.birthday"
      :min-year="1930"
      :max-year="2016"
      format="YYYY-MM-DD"
      title="出生年月"
      confirm-text="确定"
      cancel-text="取消"
    ></datetime>
    <x-input title="手机号码" :value.sync="userInfo.mobile" name="mobile" placeholder="" keyboard="number" is-type="china-mobile"></x-input>
  </group>

  <group title="其他资料">
    <popup-picker :fixed-columns="2" :columns="1" :data="dic.sex" title="性别" :value.sync="showGender" show-name placeholder="" ></popup-picker>
    <popup-picker :fixed-columns="2" :columns="1" :data="dic.profession" title="职业" :value.sync="showJob" show-name placeholder="" ></popup-picker>
    <popup-picker :fixed-columns="2" :columns="1" :data="dic.feature" title="政治面貌" :value.sync="showParty" show-name placeholder="" ></popup-picker>
    <popup-picker :fixed-columns="2" :columns="1" :data="dic.area" title="所在社区" :value.sync="showArea" show-name placeholder="" ></popup-picker>
    <cell title="我的积分" :link="'/article/detail/' + articleId" value="查看"></cell>
  </group>
  <p style="margin-top: 10px;">
    <x-button type="primary" @click="doPost">确认修改</x-button>
  </p>
</div>
</template>

<script>
import { Switch, Group, XInput, Checklist, XButton, Radio, PopupPicker, Datetime, Cell } from '../../components'
import { mapActions, mapGetters } from 'vuex'
import { go } from '../../libs/router'
import { updateFrontUserInfo, getJifen } from '../../api/'

export default {
  components: {
    Switch,
    Group,
    XInput,
    Checklist,
    XButton,
    Radio,
    PopupPicker,
    Datetime,
    Cell
  },
  ready () {
    // 获取user 并 赋值
    this.getDic().then(res => {
      if (this.userInfo.sex !== 0) {
        this.showGender.push(this.userInfo.sex.toString())
      }
      if (this.userInfo.profession_id !== 0) {
        this.showJob.push(this.userInfo.profession_id.toString())
      }
      if (this.userInfo.feature_id !== 0) {
        this.showParty.push(this.userInfo.feature_id.toString())
      }
      if (this.userInfo.area_id !== 0) {
        this.showArea.push(this.userInfo.area_id.toString())
      }
    })
    getJifen().then(res => {
      this.articleId = res.data.id
    })
  },
  data () {
    return {
      articleId: 0,
      weeksList: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
      showGender: [],
      showJob: [],
      showParty: [],
      showArea: []
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
      'getDic',
      'showLoading',
      'hideLoading',
      'getUserInfo'
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
        professionId: this.showJob.length === 0 ? 0 : this.showJob[0],
        featureId: this.showParty.length === 0 ? 0 : this.showParty[0],
        areaId: this.showArea.length === 0 ? 0 : this.showArea[0]
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

<style scoped lang="less">
.av_img{
  display: block;
  border-radius: 100%;
  margin: 15px auto;
  height: 80px;
  width: 80px;
}
.o-bg{
  background-color: #fabf01;
}
.o-bg .weui_cell{
  background-color: #fabf01;
}
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
.user-info .weui_cell{
  background-color: #fabf01;
}
.user-info .weui_cells_title{
  color: #000
}
.user-info .weui_cell:before{
  border-top-color: #000;
  background-color: #000;
}
.user-info .weui_cells:before,.user-info .weui_cells:after{
  border-top-color: #000;
  background-color: #000;
}
.user-info .weui_cell_ft{
  color: #000;
}
.user-info .weui_cell_ft.with_arrow:after{
  border-color:#000;
}
.user-info button.weui_btn_primary{
  width: 80%;
  margin: 0 auto;
  border: solid 1px #fbbe01;
  border-radius: 5px;
  background: linear-gradient(to bottom, #787878 0%,#222222 100%);
  color: #fff;
  font-family: "Microsoft YaHei"
}
</style>