<template>
  <div>
    <div class="tips"><a href="https://mirari.cc/2017/08/27/Vue%E5%9B%BE%E7%89%87%E6%B5%8F%E8%A7%88%E7%BB%84%E4%BB%B6v-viewer%EF%BC%8C%E6%94%AF%E6%8C%81%E6%97%8B%E8%BD%AC%E3%80%81%E7%BC%A9%E6%94%BE%E3%80%81%E7%BF%BB%E8%BD%AC%E7%AD%89%E6%93%8D%E4%BD%9C/" target="_blank" class="c1">v-viewer</a>：Vue图片浏览组件v-viewer，支持旋转、缩放、翻转等操作。
    </div>
    <vViewer></vViewer>

    <div class="tips"><a href="https://www.npmjs.com/package/vue-photo-preview" target="_blank" class="c1">vue-photo-preview</a>：基于photoswipe的vue图片预览插件。
    </div>
    <div class="imgList">
      <img v-for="src in imgList" :src="src" :key="src" preview="1" preview-text="描述文字" width="150" height="100">
    </div>

    <div class="tips"> <a href="https://github.com/jsonpeter/vue2.0-zoom" target="_blank" class="c1">vue2.0-zoom</a>：基于Vue的放大镜插件，常用于电商项目。
    </div>
    <imgZoom></imgZoom>
  </div>
</template>

<script>
import vViewer from '../../components/image/v-viewer'
import imgZoom from '../../components/image/imgZoom'

import Vue from 'vue'
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'

var options = {
  allowPanToNext: false,
  arrowKeys: true
}
Vue.use(preview, options)
export default {
  name: 'preview',
  components: { vViewer, imgZoom },
  data () {
    return {
      imgList: [
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=85690711,3884201894&fm=27&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3564877025,796183547&fm=27&gp=0.jpg'
      ]
    }
  },
  mounted () {
    this.$previewRefresh()
  }
}
</script>
