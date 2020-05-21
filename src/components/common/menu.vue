<template>
  <div class="menu">
    <a-menu :default-selected-keys="['1']" :default-open-keys="['sub1']" mode="inline" theme="dark" :inline-collapsed="collapsed">
      <a-sub-menu v-for="(item,index) in list" :key="index">
        <span slot="title">
          <a-icon type="mail" />
          <span>{{item.title}}</span>
        </span>
        <a-menu-item v-for="(v) in item.subs" :key="v.index" @click="toUrl(v.index)">{{v.title}}</a-menu-item>
      </a-sub-menu>
    </a-menu>
    <!-- <el-menu :router=true :default-active="onRoutes" :default-openeds="openList" class="el-menu-vertical-demo" background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff" :collapse="collapse" unique-opened>
      <template v-for="item in list">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index" @click="showSusb(item)">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <el-menu-item :index="item.index" v-for="(item, i) in item.subs" :key="i">{{item.title}}</el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>

    </el-menu> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      collapsed: false,
      router: true,
      openList: [],
      list: [
        {
          icon: 'el-icon-menu',
          title: '系统首页'
        },
        {
          icon: 'el-icon-tickets',
          title: '基础组件',
          subs: [
            {
              index: 'table',
              title: '列表数据'
            },
            {
              index: 'form',
              title: '基础表单'
            },
            {
              index: 'linkage',
              title: '三级联动'
            },
            {
              index: 'drag',
              title: '拖拽列表'
            }
          ]
        },
        {
          icon: 'icon-yingyongguanli iconfont',
          title: '文件相关',
          subs: [
            {
              index: 'upload',
              title: '文件上传'
            },
            {
              index: 'excel',
              title: '导出excel'
            },
            {
              index: 'pdf',
              title: 'PDF预览'
            },
            {
              index: 'editor',
              title: '富文本编辑'
            }
          ]
        },
        {
          icon: 'el-icon-message',
          title: '图片相关',
          subs: [
            {
              index: 'preview',
              title: '图片预览'
            },
            {
              index: 'swiper',
              title: '图片特效'
            }
          ]
        },
        {
          icon: 'el-icon-message',
          title: '可视化',
          subs: [
            {
              index: 'charts',
              title: 'charts图表'
            },
            {
              index: 'map',
              title: '高德地图'
            },
            {
              index: 'ChinaMap',
              title: '中国地图'
            }
          ]
        }
      ]
    }
  },
  computed: {
    onRoutes () {
      return this.$route.path.replace('/', '')
    }
  },
  methods: {
    showSusb (item) {
      if (!item.showSusb) {
        this.$set(item, 'showSubs', true)
        this.openList.push(item.index)
      }
    },
    toUrl (path) {
      this.$router.push({
        path: '/admin/' + path
      })
    }
  }
}
</script>

<style lang="less">
.menu {
  width: 240px;
  height: 100%;
  overflow-y: auto;
  background-color: rgb(45, 58, 75);
  position: relative;
}
.menu::-webkit-scrollbar {
  display: none;
}
.iconfont {
  vertical-align: middle;
  margin-right: 5px;
  width: 24px;
  text-align: center;
  font-size: 18px;
  display: inline-block;
}
.ant-menu-dark, .ant-menu-inline, .ant-menu-sub, .ant-menu-dark .ant-menu-inline.ant-menu-sub{
  background-color: rgb(45, 58, 75) !important;
  box-shadow: none !important;
}
</style>
