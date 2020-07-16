<template>
  <div class="block">
    <div id="kline" :style="{ width: '100%', height: '100%' }"></div>
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
      this.myChart = echarts.init(document.getElementById('kline'))

      var colors = ['#d14a61', '#FFB900']
      const option = {
        color: colors,
        xAxis: {
          data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27', '2017-10-28', '2017-10-29']
        },
        yAxis: {},
        series: [{
          type: 'k',
          data: [
            [20, 30, 10, 35],
            [40, 35, 30, 55],
            [33, 38, 33, 40],
            [40, 30, 62, 52],
            [40, 50, 42, 62],
            [48, 55, 32, 62]
          ],
          itemStyle: {
            normal: {
              color: '#d14a61', // 阳线填充颜色
              color0: '#8cd5c2', // 阴线填充颜色
              lineStyle: {
                width: 2,
                color: '#d14a61', // 阳线边框颜色
                color0: '#8cd5c2' // 阴线边框颜色
              }
            }
          }
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
.block {
  height: 100%;
  height: 100%;
  background-color: #fff;
  padding: 12px;
}
</style>
