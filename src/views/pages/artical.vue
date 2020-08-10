<template>
  <div class="mainpage clearfix">
    <div class="inner">
      <div class="left-block fl">
        <div class="tab">
          <a-tabs default-active-key="1">
            <a-tab-pane key="1" tab="掘金文章">
              <articalList></articalList>
            </a-tab-pane>
            <a-tab-pane key="2" tab="github项目" force-render>
              <githubList></githubList>
            </a-tab-pane>
            <a-tab-pane key="3" tab="开源项目">
              Content of Tab Pane 3
            </a-tab-pane>
          </a-tabs>
        </div>
      </div>

      <div class="right-block fl">
        <div class="block">
          <div class="title">社区活跃度</div>
          <radar></radar>
        </div>

        <div class="block">
          <div class="title">技能属性</div>
          <pie></pie>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import radar from '../../components/radar'
import pie from '../../components/pie'
import articalList from '../../components/articalList'
import githubList from '../../components/githubList'
export default {
  name: 'artical',
  components: { radar, pie, articalList, githubList },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped lang="less">
.mainpage {
  overflow: auto;
  background-color: #f6f6f6;
  padding: 0 !important;
}
.inner {
  height: 100%;
  width: 100%;
}
.left-block {
  width: 75%;
  height: 100%;
  padding-right: 15px;
  .tab{
    background-color: #fff;
    padding-left: 15px;
  }
}
.right-block {
  width: 25%;
  height: 100%;
  .block {
    background-color: #fff;
    padding: 0 15px 15px 15px;
    margin-bottom: 15px;
  }
  .title {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eee;
    font-size: 18px;
  }
}
</style>
