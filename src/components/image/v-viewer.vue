<template>
  <div>
    <viewer :images="imgList">
      <img v-for="src in imgList" :src="src" :key="src" width="150" height="100">
    </viewer>
  </div>
</template>

<script>
import Vue from 'vue'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
Vue.use(Viewer)
Viewer.setDefaults({
  Options: { inline: true, button: true, navbar: true, title: true, toolbar: true, tooltip: true, movable: true, zoomable: true, rotatable: true, scalable: true, transition: true, fullscreen: true, keyboard: true, url: 'data-source' }
})

export default {
  data () {
    return {
      imgList: [
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=85690711,3884201894&fm=27&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3564877025,796183547&fm=27&gp=0.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
