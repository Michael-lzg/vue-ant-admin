<template>
  <div class="mainPage">
    <div class="inner clearfix">
      <div class="itemBlock fl">
        <henanMap></henanMap>
      </div>
      <div class="itemBlock fl">
        <heatMap></heatMap>
      </div>
      <div class="itemBlock fl">
        <guangDongMap></guangDongMap>
      </div>
      <div class="itemBlock fl">
        <guangzhouMap></guangzhouMap>
      </div>
    </div>
  </div>
</template>

<script>
import henanMap from '../../components/map/henanMap'
import heatMap from '../../components/map/heatMap'
import guangDongMap from '../../components/map/guangDongMap'
import guangzhouMap from '../../components/map/guangzhouMap'

export default {
  name: 'provinceMap',
  components: { henanMap, heatMap, guangDongMap, guangzhouMap }
}
</script>

<style lang="less" scoped>
.mainPage {
  background-color: #f6f6f6;
  padding: 0px !important;
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
