<template>
  <div>
    <a-layout-header style="background: #fff; padding: 0">
      <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="trigger" />

      <div class="avator fr" style="margin-left:15px">
        <img src="../../assets/img/avatar.png" width="40">
      </div>
      <div class="name fr">
        <a-dropdown>
          <a>lzg
            <a-icon type="caret-down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;">github文档</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">修改资料</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">退出登录</a>
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
    </a-layout-header>
  </div>
</template>

<script>
export default {
  data () {
    return {
      collapsed: false
    }
  },
  methods: {
    trigger () {
      this.$emit('trigger')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
