<template>
  <div style="padding:24px">
    <div class="tips">v-org-tree：一款展示组织架构的组件。 访问地址：
      <a href="https://github.com/lison16/v-org-tree" target="_blank" class="c1">v-viewer</a>
    </div>
    <OrgTree :data="data" collapsable expandAll label-class-name="bg-color" />
  </div>
</template>

<script>
import Vue from 'vue'
import OrgTree from 'v-org-tree'
import 'v-org-tree/dist/v-org-tree.css'
Vue.use(OrgTree)
export default {
  data () {
    return {
      data: {
        id: 0,
        label: '广州程序员科技有限公司',
        children: [
          {
            id: 2,
            label: '研发中心',
            children: [
              {
                id: 5,
                label: '前端研发部'
              },
              {
                id: 6,
                label: 'java研发部'
              },
              {
                id: 9,
                label: 'UI设计部'
              },
              {
                id: 10,
                label: '运维部'
              }
            ]
          },
          {
            id: 3,
            label: '产品中心',
            children: [
              {
                id: 7,
                label: '产品设计部'
              },
              {
                id: 8,
                label: 'UI设计部'
              }
            ]
          },
          {
            id: 4,
            label: '行政中心'
          },
          {
            id: 11,
            label: '财务中心'
          }
        ]
      }
    }
  },
  components: { OrgTree },
  methods: {
    collapse (list) {
      var _this = this
      list.forEach(child => {
        if (child.expand) {
          child.expand = false
        }
        child.children && _this.collapse(child.children)
      })
    },
    onExpand (e, data) {
      this.$set(data, 'expand', true)
      if (data.expand) {
        data.expand = !data.expand
        if (!data.expand && data.children) {
          this.collapse(data.children)
        }
      } else {
        this.$set(data, 'expand', true)
      }
    },
    toggleExpand (data, val) {
      var _this = this
      if (Array.isArray(data)) {
        data.forEach(item => {
          _this.$set(item, 'expand', val)
          if (item.children) {
            _this.toggleExpand(item.children, val)
          }
        })
      } else {
        this.$set(data, 'expand', val)
        if (data.children) {
          _this.toggleExpand(data.children, val)
        }
      }
    }
  },
  mounted () {
    // this.toggleExpand(this.data, true)
  }
}
</script>

<style lang="less">
.bg-color{
  color: #fff;
  background-color: #2d8cf0;
}
</style>
