<template>
<div>
  <div class="info-header">
    <h3>申请成为志愿者细则</h3>
  </div>
  <div class="bg-yellow">
    <p>1. 规则规则规则规则规则规则规则规则规则规则规则</p>
    <p>1. 规则规则规则规则规则规则规则规则规则规则规则</p>
    <p>1. 规则规则规则规则规则规则规则规则规则规则规则</p>
    <p>1. 规则规则规则规则规则规则规则规则规则规则规则</p>
    <p>1. 规则规则规则规则规则规则规则规则规则规则规则</p>
  </div>
  <group>
    <switch title="同意协议" :value="false"></switch>
  </group>
  <group>
    <x-button type="primary" @click="submit">提交</x-button>
  </group>
</div>
</template>

<script>
import { Group, XButton, Switch } from '../../components'
import { go } from '../../libs/router'
// import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Group,
    XButton,
    Switch
  },
  ready () {

  },
  data () {
    return {

    }
  },
  methods: {
    submit () {
      go('/apply/tep', this.$router)
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
}
</style>
