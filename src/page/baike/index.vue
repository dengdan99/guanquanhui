<template>
<div>
  <group title="办事百科">
    <div class="m-s">
    <x-input title="" placeholder="输入关键词查询办事电话" :value.sync="sreachData.keyword">
      <x-button slot="right" type="primary" mini @click="fristLoad">搜索</x-button>
      <x-button slot="right" type="primary" mini @click="showBook">常用电话</x-button>
    </x-input>
    </div>
    <popup-picker :fixed-columns="2" :columns="1" :data="dic.baikeType" title="按类别搜索" :value.sync="sreachData.type" show-name placeholder="请选择类别" ></popup-picker>
    <popup-picker :fixed-columns="2" :columns="1" :data="dic.district" title="按区域搜索" :value.sync="sreachData.district" show-name placeholder="请选择区域" ></popup-picker>
    
  </group>
  <div>
    <div v-show="telshow" class="bk_it" v-for="it in tel">
      <h3 class="tit">{{it.title}}</h3>
      <div class="tel" v-for="tl in it.list">
        <span class="n">单位：{{tl.name}}</span>
        <span class="t">电话：{{tl.phone}}</span>
      </div>
    </div>
  </div>
  <scroller v-show="!telshow" lock-x scrollbar-y use-pullup :pullup-config="pullupConfig" :height="height" @pullup:loading="load" v-ref:scroller>
    <div class="box2">
      <div class="no-data" v-show="baikeList.length <= 0 "> 没有数据 </div>
      <div class="bk_it" v-for="item in baikeList">
        <h3 class="tit">{{item.title}}</h3>
        <p>社区： {{item.social}}</p>
        <p>电话： {{item.phone}}</p>
        <p>地址： {{item.address}}</p>
      </div>
    </div>
  </scroller>
</div>
</template>

<script>
import { Group, XInput, XButton, PopupPicker, Scroller } from '../../components'
import { mapActions, mapGetters } from 'vuex'
import { getTelResource } from '../../api'

export default {
  components: {
    Group,
    XInput,
    XButton,
    PopupPicker,
    Scroller
  },
  ready () {
    this.getDic()
    this.showBook()
    this.height = '-220px'
  },
  data () {
    return {
      height: '0px',
      telshow: true,
      n: 10,
      pullupConfig: {
        content: '上拉加载更多',
        downContent: '松开进行加载',
        upContent: '上拉加载更多',
        loadingContent: '加载中...'
      },
      tel: [],
      pageParam: {
        offset: 0,
        size: 10
      }
    }
  },
  computed: {
    ...mapGetters([
      'sreachData',
      'baikeList',
      'baikeIsMore',
      'dic'
    ])
  },
  watch: {
    sreachData: {
      handler: function (val, oldVal) { console.log(this.sreachData) },
      deep: true
    }
  },
  methods: {
    ...mapActions([
      'getBaikeList',
      'getDic',
      'showLoading',
      'hideLoading'
    ]),
    load (uuid) {
      this.getBaikeList({
        isAdd: true,
        itemsPerPage: this.size,
        pageParam: this.pageParam
      }).then(() => {
        // this.telshow = false
        this.pageParam.offset += this.pageParam.size
        this.$broadcast('pullup:reset', uuid)
        if (this.baikeIsMore) {
          this.$broadcast('pullup:reset', uuid)
        } else {
          this.$broadcast('pullup:disable', uuid)
        }
      })
    },
    fristLoad () {
      this.pageParam.size = 10
      this.pageParam.offset = 0
      this.getBaikeList({
        isAdd: false,
        itemsPerPage: this.pageParam.size,
        pageParam: this.pageParam
      }).then(() => {
        this.telshow = false
        if (this.baikeList.length > 0) {
          this.$broadcast('pullup:enable', this.$refs.scroller.uuid)
        } else {
          this.$broadcast('pullup:done', this.$refs.scroller.uuid)
        }
        this.$nextTick(() => {
          this.$refs.scroller.reset({
            top: 0
          })
        })
        this.pageParam.offset += this.pageParam.size
      })
    },
    showBook () {
      getTelResource().then(res => {
        this.tel = res.data
        this.telshow = true
      })
    }
  }
}
</script>

<style scoped lang="less">
.m-s{
  .weui_input{
    text-align: left;
    font-size: 12px;
  }
}
.bk_it {
  background-color: #fabf01;
  margin: 10px;
  padding: 1px;

  .tit {
    text-align: center;
  }
  p {
    font-size: 14px;
    border-top: 1px #fff dashed;
    padding: 0px 5px;
  }
  .tel{
    font-size: 14px;
    border-top: 1px #fff dashed;
    padding: 0px 5px;
    .t{
      float: right;
      width: 50%;
    }
  }
}
.weui_btn_primary{
  background-color: #fabf01;
  color: #fff
}
.weui_btn_primary{
  margin-left: 10px;
  margin-top: 0;
}
</style>
<style lang="less">
.m-s{
  .weui_input{
    text-align: left;
    font-size: 14px;
  }
}
</style>