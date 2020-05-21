<template>
  <div>
    <div class="tips">这里使用 window.print() 来实现下载 pdf 的功能</div>
    <router-link target="_blank" to="/pdf/download">
      <a-button type="primary" size="large">打开PDF</a-button>
    </router-link>

    <div class="tips">这里使用 vue-pdf 来实现下载 pdf 预览，移动端更好</div>
    <router-link target="_blank" to="/pdf/preview">
      <a-button type="primary" size="large">预览PDF</a-button>
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped></style>
