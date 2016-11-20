<template>
<div class="bg">
  <div class="item" v-for="li in list">
    <div class="time">{{li.created_at}}</div>
    <div class="box">
      <div class="av">
        <img src="/static/demo/1.jpg" />
      </div>
      <div class="text"> {{li.active_id_name}} 赞了你</div>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getorderUserPassive } from '../../api'

export default {
  components: {
  },
  ready () {
    getorderUserPassive().then(response => {
      this.list = response.data.results
    })
  },
  data () {
    return {
      list: []
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  methods: {
    zan: rankId => {
    }
  }
}
</script>

<style scoped lang="less">
.bg{
  height: 100%;
  background-color: #fabf01;
}
.item{
  padding:10px 15px;
  .time{
    width: 50%;
    margin: 0 auto;
    border-radius: 3px;
    text-align: center;
    line-height: 25px;
    font-size: 12px;
    color: #fff;
    border: solid #000 1px;
    background: linear-gradient(to bottom, #ccc 0%,#000 100%);
  }
  .box{
    border: solid #000 1px;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #fff;
    margin-top: 10px;
    .av{
      float: left;
      height: 30px;
      width: 30px;
      img{
        width: 30px;
        height: auto;
        border-radius: 100%;
      }
    }
    .text{
      height: 30px;
      line-height: 30px;
      overflow: hidden;
      position: relative;
      margin-left: 50px;
    }
  }
}
</style>
