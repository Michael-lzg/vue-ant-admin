<template>
  <div class="block">
    <div id="map" :style="{ width: '100%', height: '100%' }"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/province/henan' // 引入china.js地图文件
export default {
  methods: {
    randomData () {
      return Math.round(Math.random() * 500)
    },
    drawChinaMap () {
      const myChart = echarts.init(document.getElementById('map'), 'shine')

      const data = [
        { name: '郑州市', value: '100' },
        { name: '洛阳市', value: this.randomData() },
        { name: '商丘市', value: this.randomData() },
        { name: '安阳市', value: this.randomData() },
        { name: '南阳市', value: this.randomData() },
        { name: '开封市', value: this.randomData() },
        { name: '平顶山市', value: this.randomData() },
        { name: '焦作市', value: this.randomData() },
        { name: '新乡市', value: this.randomData() },
        { name: '鹤壁市', value: this.randomData() },
        { name: '濮阳市', value: this.randomData() },
        { name: '许昌市', value: this.randomData() },
        { name: '漯河市', value: this.randomData() },
        { name: '三门峡市', value: this.randomData() },
        { name: '信阳市', value: this.randomData() },
        { name: '周口市', value: this.randomData() },
        { name: '驻马店市', value: this.randomData() },
        { name: '济源市', value: this.randomData() }
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
        visualMap: {
          show: true,
          x: '30',
          y: 'center',
          splitList: [
            { start: 500, end: 600 },
            { start: 400, end: 500 },
            { start: 300, end: 400 },
            { start: 200, end: 300 },
            { start: 100, end: 200 },
            { start: 0, end: 100 }
          ],
          color: [
            '#5475f5',
            '#9feaa5',
            '#85daef',
            '#74e2ca',
            '#e6ac53',
            '#9fb5ea'
          ]
        },
        // visualMap: {
        //   min: 0,
        //   max: 600,
        //   text: ['高', '低'],
        //   inRange: {
        //     color: ['lightskyblue', 'yellow', 'orangered']
        //   }
        // },

        // 配置属性
        series: [
          {
            name: '数据',
            type: 'map',
            map: '河南',
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
