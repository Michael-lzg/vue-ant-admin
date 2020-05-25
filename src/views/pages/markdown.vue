<template>
  <div>
    <div class="tips">mavon-editor：一款强大的Vue-markdown编辑器插件。 访问地址：
      <a href="https://github.com/hinesboy/mavonEditor/blob/master/doc/cn/use.md" target="_blank" class="c1">mavon-editor</a>
    </div>
    <mavon-editor v-model="value" style="height: 500px" />
  </div>
</template>

<script>
import Vue from 'vue'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)
export default {
  data () {
    return { value: '' }
  }
}
</script>

<style lang="less" scoped></style>
