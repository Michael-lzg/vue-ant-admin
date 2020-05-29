<template>
  <div class="mainpage clearfix">
    <div class="inner">
      <div class="left-block fl">
        <div class="left-top-block">
          <div class="img">
            <img src="../../assets/img/admin.jpg" alt="" width="120">
          </div>
          <div class="info">
            <div class="name">lzg | 广州</div>
            <div class="job c8">web前端开发</div>
            <div class="tag">
              <a-tag color="blue"> javascript </a-tag>
              <a-tag color="blue"> Vue </a-tag>
              <a-tag color="blue"> webpack </a-tag>
            </div>
          </div>
        </div>
        <div class="left-mid-block">
          <div class="title">技术技能</div>
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
          <div class="title">友情链接</div>
          <div class="list clearfix">
            <div class="item fl" v-for="(item,index) in netList" :key="index">
              <img :src="item.icon" alt="" width="20">{{item.name}}
            </div>
          </div>
        </div>
      </div>
      <div class="right-block fl">
        <div class="tab">
          <a-tabs default-active-key="1">
            <a-tab-pane key="1" tab="掘金文章">
              <artical></artical>
            </a-tab-pane>
            <a-tab-pane key="2" tab="github项目" force-render>
              <github></github>
            </a-tab-pane>
            <a-tab-pane key="3" tab="开源项目">
              Content of Tab Pane 3
            </a-tab-pane>
          </a-tabs>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import artical from '../../components/artical'
import github from '../../components/github'
export default {
  name: 'adminIndex',
  data () {
    return {
      netList: [
        { name: 'vue', icon: require('../../assets/icon/vue.png') },
        { name: 'react', icon: require('../../assets/icon/react.png') },
        { name: 'webpack', icon: require('../../assets/icon/webpack.png') },
        { name: 'html', icon: require('../../assets/icon/html.png') },
        { name: '掘金', icon: require('../../assets/icon/juejin.png') },
        { name: '知乎', icon: require('../../assets/icon/zhihu.png') },
        { name: 'segmentfault', icon: require('../../assets/icon/segmentfault.png') },
        { name: 'CSDN', icon: require('../../assets/icon/CSDN.png') }
      ]
    }
  },
  components: { artical, github },
  methods: {
    handleClick () { }
  }
}
</script>

<style scoped lang="less">
.mainpage {
  padding: 15px;
  overflow: auto;
  background-color: #f6f6f6;
}
.inner {
  height: 100%;
  width: 100%;
}
.left-block {
  width: 30%;
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
    margin-left: 35px;
    font-size: 18px;
    line-height: 30px;
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
  .title {
    font-size: 18px;
    padding: 5px 0;
    border-bottom: 1px solid #ddd;
    margin-bottom: 5px;
  }
}
.left-bot-block {
  margin: 15px 0;
  background-color: #fff;
  padding: 15px;
  .title {
    font-size: 18px;
    padding: 5px 0;
    border-bottom: 1px solid #ddd;
    margin-bottom: 5px;
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
  width: 54%;
  padding-left: 15px;
  .tab {
    padding: 15px;
    background-color: white;
  }
}
</style>
