<template>
  <div class="bg-withe">
    <div class="pary-area">
      <div class="datail" v-if="isOk">
        <h2>{{toupiao.theme}}</h2>
        <div class="pic"><img :src="toupiao.image" /></div>
        <div class="toupiao">
          <h3>哪个是你的菜</h3>
          <ul class="pbox">
            <li v-for="piao in piaoList">
              <div class="doc"><span class="fk"></span></div>
              <div class="info">
                <img :src="piao.picture" class="av">
                <span class="t">{{piao.solution}}</span>
              </div>
              <div class="btn-a">
                <p class=""><a href="javascript:;" class="btn" @click="dotoupiao(piao)">点我投票</a></p>
                <p>{{piao.vote}}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="content" id="article_content">{{{toupiao.abstract}}}</div>
        <p>创建时间： {{toupiao.created_at}}</p>
        <p>最后修改： {{toupiao.updated_at}}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import { Tab, TabItem, Swiper, SwiperItem, XButton, GMedia, Dialog, Group, XInput } from '../../components'
// import { mapActions, mapGetters } from 'vuex'
import { getToupiaoDetail, getIssuelist, getIssue } from '../../api'
export default {
  components: {
  },
  ready () {
    this.id = this.$route.params.id
    getToupiaoDetail(this.id).then(res => {
      this.isOk = true
      this.toupiao = res.data
    })
    getIssuelist(this.id).then(res => {
      this.piaoList = res.data[0].child
    })
  },
  data () {
    return {
      id: 0,
      isOk: false,
      piaoList: [],
      toupiao: {}
    }
  },
  methods: {
    dotoupiao (piao) {
      getIssue(this.id, piao.id).then(res => {
        const Json = res.data
        if (Json.result === true) {
          this.$vux.toast.show({
            type: 'success',
            text: '投票成功'
          })
          piao.vote++
        } else {
          this.$vux.toast.show({
            type: 'text',
            text: Json.message
          })
          return false
        }
      })
    }
  }
}
</script>

<style type="text/css">
#article_content img{
  width: 100%;
  height: auto;
}
</style>
<style scoped lang="less">
.vux-tab .vux-tab-item{
  font-size: 16px
}
.qunzhu-area{
  text-align: center;
}
.qunzhu-area h1{
  margin: 10px 0 30px 0;
}
.zmPic{
  display: block;
  width: 50%;
  margin: 20px auto;
}
.zm-content{
}
.weui_btn_primary{
  border: solid 1px #fbbe01;
  border-radius: 5px;
  background: linear-gradient(to bottom, #fee7a1 0%,#fabf01 100%);
  color: #000;
  font-family: "Microsoft YaHei"
}

.pary-area{
  .datail{
    padding: 15px;

    h2{
      text-align: center;
      font-weight: normal;
      margin-bottom: 20px;
      border-bottom: solid 1px #ccc;
      padding-bottom: 10px;
    }
    .pic img{
      width: 100%;
      height: auto;
    }
    .desc{
      border:solid 1px #7d7d7d;
      padding: 10px;
      margin: 10px 0;
    }
    .p-info{
      margin: 10px 0;
      text-align: right;
    }
  }
}
.toupiao{
  padding: 15px 0;
  h3{
    border-bottom: #333 solid 1px;
  }
  .pbox{
    li{
      display: flex;
      border-bottom: #333 solid 1px;
      height: 50px;
      .doc{
        width: 10%;
        .fk{
          margin-top: 16px;
          height: 15px;
          width: 15px;
          display: block;
          background-color: yellow;
        }
      }
      .info{
        width: 60%;
        margin-top: 10px;
        border-left: #333 solid 1px;
        height: 30px;
        padding-left: 10px;
        line-height: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-style: normal;
        .av{
          height: 30px;
          width: 30px;
          border-radius: 100%;
          margin-right: 10px;
          float: left;
        }
        .t{
          
        }
      }
      .btn-a{
        margin-top: 5px;
        text-align: right;
        width: 30%;
        color: #ccc;
        .btn{
          background: linear-gradient(to bottom, #fee7a1 0%, #fabf01 100%);
          display: block;
          padding: 2px 5px;
          border-radius: 10px;
          font-size: 12px;
          text-align: center;
          border: solid 1px #fbbe01;
        }
      }
    }
  }
}
</style>
