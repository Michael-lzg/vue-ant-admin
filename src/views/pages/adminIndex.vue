<template>
  <div class="mainpage clearfix">
    <div class="left-block fl">
      <div class="left-top-block">
        <div class="img">
          <img src="../../assets/img/admin.jpg" alt="" width="120">
        </div>
        <div class="info">
          <div class="name">admin</div>
          <div class="job c8">web前端开发</div>
          <div class="tag">
            <a-tag color="blue"> javascript </a-tag>
            <a-tag color="blue"> Vue </a-tag>
            <a-tag color="blue"> webpack </a-tag>
          </div>
        </div>
      </div>
      <div class="left-mid-block">
        <!-- <el-card style="height:350px;"> -->
        <div slot="header" class="clearfix">
          <span>技术技能</span>
        </div>
        javaScript
        <a-progress :percent="90" />
        vue
        <a-progress :percent="85" strokeColor="#42b983" />
        webpack
        <a-progress :percent="85" strokeColor="#75AFCC" />
        微信小程序
        <a-progress :percent="75" strokeColor="#FAAD14" />
        react
        <a-progress :percent="70" strokeColor="#F5223C" />
      </div>
      <div class="left-bot-block">
        <!-- <el-card style="height:350px;"> -->
        <div slot="header" class="clearfix">
          <span>友情链接</span>
        </div>
        <div class="list clearfix">
          <div class="item fl">
            <img src="https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png" alt="" width="20">vue官方文档
          </div>
          <div class="item fl">
            <img src="https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png" alt="" width="20">webapck官网
          </div>
          <div class="item fl">
            <img src="https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png" alt="" width="20">react中文网
          </div>
          <div class="item fl">
            <img src="https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png" alt="" width="20">element-ui
          </div>
          <div class="item fl">
            <img src="https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png" alt="" width="20">掘金论坛
          </div>
          <div class="item fl">
            <img src="https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png" alt="" width="20">vue官方文档
          </div>
          <div class="item fl">
            <img src="https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png" alt="" width="20">掘金论坛
          </div>
          <div class="item fl">
            <img src="https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png" alt="" width="20">vue官方文档
          </div>
        </div>

        <!-- </el-card> -->
      </div>
    </div>
  </div>
</template>

<script>
// import artical from '../../components/artical'
// import github from '../../components/github'
export default {
  name: 'adminIndex',
  data () {
    return {
      activeName: 'first'
    }
  },
  // components: { artical, github },
  methods: {
    handleClick () { }
  }
}
</script>

<style scoped lang="less">
.mainpage {
  // height: calc(100% - 120px);
  overflow: auto;
  background-color: #f6f6f6;
}
.left-block {
  width: 30%;
  // background-color: #fff;
  // height: 100%;
  // overflow: auto;
}
.left-top-block {
  height: 200px;
  background-color: white;
  padding: 20px;
  padding-left: 120px;
  position: relative;
  .img {
    position: absolute;
    left: 20px;
    img {
      border-radius: 120px;
    }
  }
  .info {
    margin-left: 20px;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    margin-top: 20px;
    .job {
      font-size: 16px;
    }
  }
}
.left-mid-block {
  margin: 10px 0;
  background-color: #fff;
  padding: 15px;
}
.left-bot-block {
  margin: 15px 0;
  background-color: #fff;
  padding: 15px;
  .el-card {
    height: auto !important;
  }
  .item {
    width: 50%;
    padding-bottom: 12px;
    > img {
      border-radius: 50%;
      margin-right: 10px;
    }
  }
}
.right-block {
  width: 68%;
  // height: 100%;
  background-color: white;
  .el-card {
    height: 100%;
    overflow: auto;
  }
}
</style>
