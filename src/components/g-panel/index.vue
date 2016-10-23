<template>
<div class="weui_panel g-panel">
  <div class="weui_panel_hd g-panel-hd"><span>{{info.date}}</span></div>
  <div class="weui_panel_bd g-panel-bd">
    <div class="weui_media_box weui_media_text">
      <h4 class="weui_media_title">{{info.title}}</h4>
      <p class="weui_media_desc"><img :src="info.src" height="120" class="weui_media_pic" :alt="info.alt" /></p>
      <p class="weui_media_desc">{{info.desc}}</p>
      <ul class="weui_media_info">
              <li class="weui_media_info_meta">{{info.from}}</li>
              <li class="weui_media_info_meta">{{info.date}}</li>
              <li class="weui_media_info_meta weui_media_info_meta_extra">{{info.other}}</li>
          </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    info: Object
  }
}
</script>
<style lang="less">
.g-panel{
  padding: 5px 0;
  margin-top: 0px;
  position: relative;
  overflow: hidden;
  background-color: transparent;
}
.g-panel:before,.g-panel:after{
  border: none;
}
.g-panel-hd{
  text-align: center;
}
.g-panel-hd:after{
  border: none;
}
.g-panel-bd:after{
  border: none;
}
.g-panel-bd{
  margin-left:10px;
  margin-right:10px;
  border-radius: 5px;
  overflow: hidden;
  border: solid #d1d1d1 1px;
  background-color: #fff;
}
.g-panel-hd > span{
  background-color: #d4d4d4;
  padding: 3px 8px;
  border-radius: 5px;
  color: #fff;
}
.weui_media_pic{
  width: 100%;
  max-height: 100%;
  vertical-align: top;
}
.weui_media_desc{
  margin-bottom: 2px
}
</style>
