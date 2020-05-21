<template>
  <div style="width:60%;margin:0 auto;">
    <a-spin :spinning="spinning">
      <pdf v-for="i in numPages" :key="i" :src="url" :page="i"></pdf>
    </a-spin>
  </div>
</template>

<script>
import pdf from 'vue-pdf'
export default {
  components: { pdf },
  data () {
    return {
      url: '',
      numPages: 1,
      spinning: true
    }
  },
  methods: {
    getNumPages (url) {
      const loadingTask = pdf.createLoadingTask(url)
      loadingTask.then(pdf => {
        this.url = loadingTask
        this.numPages = pdf.numPages
        this.spinning = false
      }).catch(error => {
        console.error(error)
      })
    }
  },
  mounted () {
    this.getNumPages('http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf')
  }
}
// 参考资料  https://juejin.im/post/5ea2bcd0f265da47e44a1fd5#heading-3
</script>

<style lang="less" scoped>

</style>
