<template>
  <div class="block">
    <div id="bar" :style="{ width: '100%', height: '100%' }"></div>
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
      this.myChart = echarts.init(document.getElementById('bar'))

      var colors = ['#d14a61', '#FFB900', '#8cd5c2', '#0E8FE8']
      const option = {
        color: colors,
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['直接访问', '邮件营销', '视频广告', '搜索引擎']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value'
        },
        yAxis: {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        series: [
          {
            name: '直接访问',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [320, 302, 301, 334, 390, 330, 320]
          },
          {
            name: '邮件营销',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '视频广告',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [150, 212, 201, 154, 190, 330, 410]
          },
          {
            name: '搜索引擎',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320]
          }

        ]
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
}
</style>
