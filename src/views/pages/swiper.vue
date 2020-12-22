<template>
  <div>
    <div class="tips">
      <a href="https://github.com/Agontuk/vue-cropperjs" target="_blank" class="c1">vue-cropperjs</a>一个封装了 cropperjs 的 Vue 组件，支持图片剪裁。
    </div>
    <vueCropper></vueCropper>
  </div>
</template>

<script>
import vueCropper from '../../components/image/vue-cropper'
export default {
  name: 'swiper',
  components: {
    vueCropper
  }
}
</script>

<style lang="scss" scoped>
</style>
