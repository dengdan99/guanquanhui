<template>
<div class="article-list">
    <a v-for="list in lists" href="javascript:void(0);" @click="goUrl('/paty/detail/' + list.id)" class="media-box">
        <div class="media-box__hd">
            <img class="media-box__thumb" :src="list.image" alt="">
        </div>
        <div class="media-box__bd">
            <h4 class="media-box__title">{{list.title}}</h4>
            <p class="media-box__desc">{{list.desc}}</p>
        </div>
    </a>
  </div>
</div>
</template>

<script>
import { go } from '../../libs/router'

export default {
  props: {
    lists: Array
  },
  methods: {
    goUrl (link) {
      go(link, this.$router)
    }
  }
}
</script>
<style lang="less" scoped>
.article-list{
  margin-right: 0 10px;

  .media-box {
    color: #000000;
    display: flex;
    align-items: center;
    padding: 15px;
    position: relative;
    background: linear-gradient(to bottom, #fefefe 0%,#dbdbdb 100%);
  }
  .media-box__hd{
    margin-right: .8em;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  .media-box__thumb{
    width: 100%;
    max-height: 100%;
    vertical-align: top;
  }
  .media-box__bd{
    flex: 1;
    min-width: 0;
  }
  .media-box__title{
    font-weight: 400;
    font-size: 17px;
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    word-wrap: break-word;
    word-break: break-all;
  }
  .media-box__desc{
    color: #999999;
    font-size: 13px;
    height: 30px;
    line-height: 1.2;
    overflow: hidden;
    text-overflow: ellipsis;
    display: box;
  }
}
</style>
