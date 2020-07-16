<template>
  <div class="block">
    <div id="line" :style="{ width: '100%', height: '100%' }"></div>
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
      this.myChart = echarts.init(document.getElementById('line'))
      const option = {
        // title: {
        //   text: '堆叠区域图'
        // },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['邮件营销', '视频广告', '直接访问', '搜索引擎']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            itemStyle: {
              normal: {
                areaStyle: { type: 'default' }
                // color: '#8cd5c2', // 改变折线点的颜色
                // lineStyle: {
                //   color: '#8cd5c2' // 改变折线颜色
                // }
              }
            },
            data: [220, 232, 241, 264, 290, 330, 410]
          },

          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            itemStyle: {
              normal: {
                areaStyle: { type: 'default' },
                color: '#FFB900', // 改变折线点的颜色
                lineStyle: {
                  color: '#FFB900' // 改变折线颜色
                }
              }
            },
            data: [580, 562, 541, 584, 620, 860, 1050]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            itemStyle: {
              normal: {
                areaStyle: { type: 'default' },
                color: '#8cd5c2', // 改变折线点的颜色
                lineStyle: {
                  color: '#8cd5c2' // 改变折线颜色
                }
              }
            },
            data: [720, 732, 701, 834, 890, 930, 1020]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            itemStyle: {
              normal: {
                areaStyle: { type: 'default' },
                color: '#0E8FE8', // 改变折线点的颜色
                lineStyle: {
                  color: '#0E8FE8' // 改变折线颜色
                }
              }
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
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
  padding: 12px;
}
</style>
