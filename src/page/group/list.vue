<template>
<div>
  <div class="info-header">
    <h3>是否愿意加入下列兴趣小组</h3>
  </div>
  <div class="zt_list" @click="goto(item)" v-for="item in list">
    <div class="pic"><div class="img-area"><img :src="item.logo" /></div></div>
    <div class="text">
      <h4 class="title">{{item.name}} <span class="join_num">加入人数{{item.is_allow_join}}</span></h4>
      <p class="desc">{{item.description}}</p>
    </div>
  </div>
</div>
</template>

<script>
import { Group, XButton, Switch, XInput } from '../../components'
import { go } from '../../libs/router'
import { getClubList } from '../../api'
// import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Group,
    XButton,
    Switch,
    XInput
  },
  ready () {
    getClubList().then(res => {
      this.list = res.data.results
    })
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    goto (item) {
      go('/dasha/club/' + item.id, this.$router)
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

.zt_list{
  padding: 5px 10px;
  background: linear-gradient(to bottom, #fff 50%,#ccc 100%);

  .pic{
    overflow: hidden;
    float: left;
    height: 60px;
    width: 60px;
     
    .img-area{
      display: table-cell;
      vertical-align:middle;
      height: 60px;
    }
    img{
      width: 60px;
      height: auto;
      vertical-align:middle;
    }
  }

  .text{
    height: 60px;
    position: relative;
    margin-left: 70px;
  }

  .title{
    line-height: 30px;
    height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-style: normal;
    .join_num{
      float: right;
      font-size: 12px;
      color: #ccc
    }
  }

  .desc{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 30px;
    height: 30px;
    color: #aaa;
    font-size: 14px;
  }
}
</style>
