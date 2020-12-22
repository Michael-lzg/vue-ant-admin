<template>
  <div>
    <div class="tips"><a href="https://github.com/hinesboy/mavonEditor/blob/master/doc/cn/use.md" target="_blank" class="c1">mavon-editor</a>：一款强大的Vue-markdown编辑器插件。
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
  name: 'markdown',
  data () {
    return { value: '' }
  }
}
</script>

<style lang="less" scoped></style>
