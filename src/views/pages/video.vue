<template>
  <div class="mainPage">
    <div class="inner clearfix">
      <div class="itemBlock fl">
        <videojs></videojs>
      </div>
      <div class="itemBlock fl">
        <videoPlayer></videoPlayer>
      </div>
    </div>
  </div>
</template>

<script>
import videojs from '../../components/video/videojs'
import videoPlayer from '../../components/video/videoPlayer'
export default {
  name: 'Video',
  components: { videojs, videoPlayer }
}
</script>

<style lang="less" scoped>
.mainPage {
  background-color: #f6f6f6;
  padding: 0px !important;
}
.inner {
  width: 100%;
  height: 100%;
  .itemBlock {
    width: 50%;
    height: 50%;
    padding-right: 12px;
    padding-bottom: 12px;
  }
}
</style>
