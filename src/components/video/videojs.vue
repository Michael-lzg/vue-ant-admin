<template>
  <!-- <div> -->
    <video
      id="videobox"
      class="video-js vjs-default-skin vjs-big-play-centered vjs-16-9"
      controls
      preload="auto"
      webkit-playsinline="true"
      playsinline="true"
      type="application/x-mpegURL"
      allowsInlineMediaPlayback="YES"
      webview.allowsInlineMediaPlayback="YES"
      width="100%"
      height="100%"
      ref="videoRef"
      x5-video-player-fullscreen="true"
    >
      <source id="sourceBox" :src="url" />
      <p class="vjs-no-js">不支持播放</p>
    </video>
  <!-- </div> -->
</template>

<script>
import videojs from 'video.js'
import 'video.js/dist/video-js.min.css'
export default {
  data () {
    return {
      url:
        'http://yame-o2o-oss.iauto360.cn/common_0/9/8cb5-1956-4095-a14c-6613513f9842_20200928_55b6ee8b-b2d1-43ad-87b4-2299899669e9.webm',
      player: null
    }
  },
  methods: {
    prepareVideo () {
      // 为避免在初始化video时播放源是空的，报播放源错误，需要先给source 的src赋值
      this.player = videojs(
        'videobox',
        {
          autoplay: false, // 自动播放
          bigPlayButton: true, // 是否显示暂停按钮
          textTrackDisplay: true, // 文本轨道显示
          posterImage: true, // 是否显示视频封面图
          errorDisplay: false, // url错误时是否显示视频组件
          controlBar: false, // 是否显示视频控制组件
          playbackRates: [0.5, 1, 1.5, 2], // 播放速率选项
          ControlBar: {
            customControlSpacer: true // 自定义控制间隔按钮
          }
        },
        function onPlayerReady () {
          // this.play();
          const _this = this
          setTimeout(() => {
            // 延时确保能监听到视频源错误
            const mediaError = this.error()
            if (mediaError != null && mediaError.code) {
              _this.isError = true
              alert('啊哦，播放出错了')
            }
          }, 500)
        }
      )
      // player.width(this.videoW)   //设置播放器宽度
    }
  },
  mounted () {
    this.prepareVideo()
  },
  beforeDestroy () {
    if (this.player) {
      this.player.dispose()
    }
  }
}
</script>

<style lang="scss" scoped></style>
