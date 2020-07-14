<template>
  <div class="header">
    <!-- <div class="collapse-btn fl" @click="collapseChage">
    </div> -->
    <div class="logo">后台管理系统</div>
    <div class="main clearfix">
      <div class="breadcrumb fl">面包屑导航</div>

      <div class="user-avator fr">
        <img src="../../assets/img/avatar.png" width="40" class="cupo">
      </div>

      <div class="name fr">
        <a-dropdown>
          <a>lzg
            <a-icon type="caret-down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;">1st menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">2nd menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">3rd menu item</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>

      <div class="notice fr">
        <span style="margin-right:24px">
          <a-badge :count="3">
            <a-icon type="qq" style="font-size:20px;margin-top:4px" />
          </a-badge>
        </span>
      </div>
      <!-- <div class="btn-fullscreen fr cupo" @click="handleFullScreen">
        <a-tooltip placement="topLeft">
          <template slot="title">
            <span>{{fullscreen?`取消全屏`:`全屏`}}</span>
          </template>
          <a-icon type="fullscreen" />
        </a-tooltip>
      </div> -->

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showMenu: true,
      fullscreen: false
    }
  },
  methods: {
    collapseChage () { },
    handleFullScreen () {
      const element = document.documentElement
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen()
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen()
        }
      }
      this.fullscreen = !this.fullscreen
    },
    handleCommand (command) {
      if (command === 'loginout') {
        this.$router.push('/')
      }
      sessionStorage.removeItem('isLogin')
    }
  }
}
</script>

<style scoped lang="less">
.header {
  width: 100%;
  height: 70px;
  // background-color: rgb(45, 58, 75);

  position: absolute;
  top: 0;
  left: 0;
  line-height: 70px;
  // color: white;
  padding-right: 20px;
  padding-left: 240px;
}
.collapse-btn {
  font-size: 22px;
  padding: 0 20px;
  cursor: pointer;
}
.logo {
  font-size: 22px;
  background-color: rgb(45, 58, 75);
  width: 240px;
  padding-left: 20px;
  color: white;
  position: absolute;
  left: 0;
}
.main {
  padding-left: 20px;
  // width: calc(100% - 240px);
  // height: 70px;
  // border-bottom: 1px solid #ddd;
}
.user-avator {
  margin-left: 20px;
  margin-right: 6px;
}
.btn-fullscreen {
  transform: rotate(45deg);
  margin-right: 5px;
  font-size: 24px;
}
.el-dropdown-link {
  color: #fff;
}
.cupo {
  cursor: pointer;
}
</style>
