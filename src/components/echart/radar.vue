<template>
  <div id="radar" style="width:100%;height:250px"></div>
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
      this.myChart = echarts.init(document.getElementById('radar'))

      var colors = ['#0E8FE8', '#13a8a8', '#FFB900']
      const option = {
        color: colors,
        title: {
          // text: '基础雷达图'
        },
        tooltip: {
          // 雷达图的tooltip不会超出div，也可以设置position属性，position定位的tooltip 不会随着鼠标移动而位置变化，不友好
          confine: true,
          enterable: true // 鼠标是否可以移动到tooltip区域内
        },
        grid: {
          position: 'center'
        },
        legend: {
          data: ['掘金', 'CSDN', 'github'],
          y: 'bottom' // 'center' | 'bottom' | {number}
        },
        radar: {
          // shape: 'circle',
          splitNumber: 3, // 雷达图圈数设置
          name: {
            textStyle: {
              color: '#838D9E'
            }
          },
          indicator: [
            { name: '粉丝', max: 100 },
            { name: '点赞', max: 100 },
            { name: '评论', max: 100 },
            { name: '潜力', max: 100 },
            { name: '影响力', max: 100 }
          ],
          splitArea: {
            show: false
            // areaStyle: {
            //   color: 'rgba(255,0,0,0)' // 图表背景的颜色
            // }
          },
          splitLine: {
            show: true
            // lineStyle: {
            //   width: 1,
            //   color: 'rgba(131,141,158,.1)' // 设置网格的颜色
            // }
          }
        },
        series: [{
          name: '预算 vs 开销（Budget vs spending）',
          type: 'radar',
          radius: '55%',
          // areaStyle: {normal: {}},
          data: [
            {
              value: [90, 95, 85, 70, 88],
              name: '掘金'
            },
            {
              value: [60, 45, 35, 50, 48],
              name: 'CSDN'
            },
            {
              value: [68, 75, 75, 80, 78],
              name: 'github'
            }
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
</style>
