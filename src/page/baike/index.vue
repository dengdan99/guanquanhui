<template>
<div>
  <group title="办事百科">
    <popup-picker :fixed-columns="2" :columns="1" :data="dic.district" title="按区域搜索" :value.sync="sreachData.district" show-name placeholder="请选择区域" ></popup-picker>
    <popup-picker :fixed-columns="2" :columns="1" :data="dic.baikeType" title="按类别搜索" :value.sync="sreachData.type" show-name placeholder="请选择类别" ></popup-picker>
    <x-input title="搜索关键字" placeholder="请输入关键字" :value.sync="sreachData.keyword">
      <x-button slot="right" type="primary" mini @click="fristLoad">搜索</x-button>
    </x-input>
  </group>
  <scroller lock-x scrollbar-y use-pullup :pullup-config="pullupConfig" height="-225px" @pullup:loading="load" v-ref:scroller>
    <div class="box2">
      <div v-if="baikeList.length <= 0" class="no-data"> <span>没有数据</span> </div>
      <div class="bk_it" v-for="item in baikeList">
        <h3 class="tit">{{item.title}}</h3>
        <p>社区： {{item.area}}</p>
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
    this.fristLoad()
  },
  data () {
    return {
      n: 10,
      pullupConfig: {
        content: '上拉加载更多',
        downContent: '松开进行加载',
        upContent: '上拉加载更多',
        loadingContent: '加载中...'
      },
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
    }
  }
}
</script>

<style scoped lang="less">
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
  }
}
</style>
