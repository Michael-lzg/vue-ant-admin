<template>
  <div class="menu">
    <a-menu :default-selected-keys="['1']" :default-open-keys="['sub1']" mode="inline" theme="dark" :inline-collapsed="collapsed">
      <a-sub-menu v-for="(item,index) in list" :key="index">
        <span slot="title">
          <a-icon type="user" />
          <span>{{item.title}}</span>
        </span>
        <a-menu-item v-for="(v) in item.children" :key="v.key" @click="toUrl(item,v)">{{v.title}}</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
import { menu } from '../../js/menu'
export default {
  data () {
    return {
      collapsed: false,
      router: true,
      openList: [],
      list: menu
    }
  },
  methods: {
    toUrl (item, v) {
      const breadcrumbList = [item.title, v.title]
      this.$store.commit('updateBreadcrumbList', breadcrumbList)
      this.$router.push({
        path: '/admin/' + v.key
      })
    }
  }
}
</script>

<style lang="less">
.menu {
  // width: 200px;
  height: 100%;
  // height: calc(100% - 32px);
  overflow-y: auto;
  padding-bottom: 32px;
  // background-color: rgb(45, 58, 75);
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
.ant-menu-dark,
.ant-menu-inline,
.ant-menu-sub,
.ant-menu-dark .ant-menu-inline.ant-menu-sub {
  // background-color: rgb(45, 58, 75) !important;
  box-shadow: none !important;
}
</style>
