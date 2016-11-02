<template>
<div>
  <group title="栏目分类">
    <cell :title="li.name" :value="进入" :link="'/article/list/' + li.id" v-for="li in list"></cell>
  </group>
</div>
</template>

<script>
import { Group, Cell, XButton } from '../../components'
import { getAllList } from '../../api'
// import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    Group,
    Cell,
    XButton
  },
  ready () {
    getAllList().then(response => {
      const Json = response.data
      this.list = Json
    })
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
</style>
