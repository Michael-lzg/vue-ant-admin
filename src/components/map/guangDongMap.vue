<template>
  <div class="block">
    <div id="gd" :style="{ width: '100%', height: '100%' }"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/province/guangdong' // 引入china.js地图文件
export default {
  data () {
    return {
      myChart: null
    }
  },
  methods: {
    randomData () {
      return Math.round(Math.random() * 500)
    },
    drawChinaMap () {
      this.myChart = echarts.init(document.getElementById('gd'), 'shine')

      const data = [
        { name: '广州市', value: 1350 },
        { name: '深圳市', value: 1190 },
        { name: '珠海市', value: 167 },
        { name: '汕头市', value: 555 },
        { name: '佛山市', value: 743 },
        { name: '韶关市', value: 293 },
        { name: '湛江市', value: 724 },
        { name: '肇庆市', value: 405 },
        { name: '江门市', value: 451 },
        { name: '茂名市', value: 608 },
        { name: '惠州市', value: 475 },
        { name: '梅州市', value: 434 },
        { name: '汕尾市', value: 302 },
        { name: '河源市', value: 307 },
        { name: '阳江市', value: 251 },
        { name: '清远市', value: 383 },
        { name: '东莞市', value: 825 },
        { name: '中山市', value: 320 },
        { name: '潮州市', value: 264 },
        { name: '揭阳市', value: 605 },
        { name: '云浮市', value: 246 }
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
            map: '广东',
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

      this.myChart.setOption(option)
    }
  },
  mounted () {
    this.drawChinaMap()
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

<style scoped>
.block {
  height: 100%;
  height: 100%;
  background-color: #fff;
}
</style>
