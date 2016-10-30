<template>
<div>
  <group title="">
    <x-button type="primary" @click="newOrder()">新订单</x-button>
  </group>
  <group title="订单列表">
    <cell :title="li.ask.substring(0,6)+'...'" :value="li.state_name" :link="'/order/view/' + li.id" v-for="li in list"></cell>
  </group>
</div>
</template>

<script>
import { Group, Cell, XButton } from '../../components'
import { go } from '../../libs/router'
import { getOrderList } from '../../api'
// import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    Group,
    Cell,
    XButton
  },
  ready () {
    getOrderList().then(response => {
      const Json = response.data
      this.list = Json.results
    })
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    newOrder () {
      go('/order/new', this.$router)
    }
  }
}
</script>

<style scoped lang="less">
</style>
