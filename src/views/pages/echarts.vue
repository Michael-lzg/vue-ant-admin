<template>
  <div class="mainPage">
    <div class="inner clearfix">
      <div class="itemBlock fl">
        <lineChart></lineChart>
      </div>
      <div class="itemBlock fl">
        <barChart></barChart>
      </div>
      <div class="itemBlock fl">
        <kLine></kLine>
      </div>
      <div class="itemBlock fl">
        <lineBar></lineBar>
      </div>
    </div>
  </div>
</template>

<script>
import lineChart from '../../components/echart/line'
import kLine from '../../components/echart/kLine'
import lineBar from '../../components/echart/lineBar'
import barChart from '../../components/echart/bar'
export default {
  components: { lineChart, barChart, kLine, lineBar }
}
</script>

<style lang="less" scoped>
.mainPage {
  background-color: #f6f6f6;
  padding: 12px;
}
.inner {
  width: 100%;
  height: 100%;
  .itemBlock {
    width: 50%;
    height: 50%;
    padding-right: 12px;
    padding-bottom: 12px;
  }
}
</style>
