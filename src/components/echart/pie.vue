<template>
  <div class="block">
    <div id="pie" :style="{ width: '100%', height: '250px' }"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      myChart: null
    }
  },
  methods: {
    drawLine () {
      this.myChart = echarts.init(document.getElementById('pie'))

      // var colors = ['#d14a61', '#FFB900', '#8cd5c2', '#0E8FE8']
      var colors = ['#0E8FE8', '#FFB900', '#59ccf7', '#c3b4df', '#13a8a8', '#F34848']
      const option = {
        color: colors,
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [{
          name: '销量',
          type: 'pie',
          // radius: '55%',
          radius: ['40%', '60%'],
          // roseType: 'radius',
          data: [
            { value: 600, name: 'Javascript' },
            { value: 450, name: 'Vue' },
            { value: 350, name: 'Webpack' },
            { value: 350, name: 'HTML' },
            { value: 250, name: 'CSS' },
            { value: 100, name: 'React' }
          ]
        }]
      }

      this.myChart.setOption(option)
    }
  },
  mounted () {
    this.drawLine()
    window.addEventListener('resize', () => {
      this.myChart.resize()
    })
  },
  destroyed () {
    window.removeEventListener('resize', () => {
      this.myChart.resize()
    })
  }
}
</script>

<style lang="less" scoped>
