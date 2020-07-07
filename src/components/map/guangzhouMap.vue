<template>
  <div class="block">
    <div id="gz" :style="{ width: '100%', height: '100%' }"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/province/guangdong' // 引入china.js地图文件
export default {
  methods: {
    randomData () {
      return Math.round(Math.random() * 500)
    },
    drawChinaMap () {
      const myChart = echarts.init(document.getElementById('gz'), 'shine')

      const data = [
        { name: '荔湾区', value: 1350 },
        { name: '越秀区', value: 1190 },
        { name: '白云区', value: 167 },
        { name: '海珠区', value: 555 },
        { name: '从化区', value: 743 },
        { name: '黄浦区', value: 293 },
        { name: '增城区', value: 724 },
        { name: '天河区', value: 405 },
        { name: '花都区', value: 451 },
        { name: '番禺区', value: 608 },
        { name: '南沙区', value: 608 }
      ] // 数据
      var option = {
        backgroundColor: '#FFFFFF',
        title: {
          // text: '河南地图大数据',
          subtext: '',
          x: 'center'
        },
        tooltip: {
          trigger: 'item'
        },

        // 左侧小导航图标
        // visualMap: {
        //   show: true,
        //   x: '30',
        //   y: 'center',
        //   splitList: [
        //     { start: 500, end: 600 },
        //     { start: 400, end: 500 },
        //     { start: 300, end: 400 },
        //     { start: 200, end: 300 },
        //     { start: 100, end: 500 },
        //     { start: 0, end: 100 }
        //   ],
        //   color: [
        //     '#5475f5',
        //     '#9feaa5',
        //     '#85daef',
        //     '#74e2ca',
        //     '#e6ac53',
        //     '#9fb5ea'
        //   ]
        // },
        visualMap: {
          min: 0,
          max: 1400,
          x: '30',
          y: 'center',
          text: ['高', '低'],
          inRange: {
            color: ['lightskyblue', 'yellow', 'orangered']
          }
        },

        // 配置属性
        series: [
          {
            name: '数据',
            type: 'map',
            map: '广州',
            roam: true,
            label: {
              normal: {
                show: false // 省份名称
              },
              emphasis: {
                show: false
              }
            },
            data: data // 数据
          }
        ]
      }

      myChart.setOption(option)
    }
  },
  mounted () {
    this.drawChinaMap()
  }
}
</script>

<style scoped>
.block {
  height: 100%;
  height: 100%;
  background-color: #fff;
}
</style>
