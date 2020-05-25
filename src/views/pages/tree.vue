<template>
  <div>
    <div class="left fl" style="width:70%">
      <a-table :columns="columns" :data-source="list" :rowKey="row=>row.name" bordered :pagination="false">
        <span slot="action" slot-scope="index, row">
          <a-button type="primary" size="small" @click="toEdit(index, row)">编辑</a-button>
          <a-button type="primary" size="small" style="margin-left:5px">删除</a-button>
        </span>
      </a-table>
    </div>

    <div class="right fr" style="width:25%">
      <div class="tip">{{role}}的权限分配</div>
      <a-tree v-model="checkedKeys" checkable :expanded-keys="expandedKeys" :auto-expand-parent="true" :selected-keys="selectedKeys" :tree-data="treeData" @expand="onExpand" @select="onSelect" />

      <div style="margin-top:10px">
        <a-button type="primary">取消</a-button>
        <a-button type="primary" style="margin-left:15px">保存</a-button>
      </div>

    </div>
  </div>
</template>

<script>
import { menu } from '../../js/menu'

const columns = [
  {
    dataIndex: 'role',
    title: '角色',
    align: 'center'
  },
  {
    dataIndex: 'name',
    title: '姓名',
    align: 'center'
  },
  {
    dataIndex: 'description',
    title: '描述',
    align: 'center'
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    scopedSlots: { customRender: 'action' },
    align: 'center'
  }
]
const list = [
  { role: '项目经理', name: '张三', description: '终极大boss' },
  { role: '前端开发', name: '李四', description: '面向浏览器' },
  { role: '后端开发', name: '王大锤', description: '面向数据库' },
  { role: '测试人员', name: '刘大', description: '专门提bug' },
  { role: '产品经理', name: '邓晓', description: '人人喊打的人' },
  { role: 'UI设计', name: '张红', description: '漂亮美眉' },
  { role: '运维人员', name: '王大锤', description: '通宵熬夜的主' }
]
export default {
  data () {
    return {
      list: list,
      columns: columns,
      menu: menu,
      expandedKeys: [],
      checkedKeys: [],
      selectedKeys: [],
      treeData: menu,
      role: '项目经理'
    }
  },
  methods: {
    toEdit (index, row) {
      this.role = row.role
    },
    onExpand (expandedKeys) {
      console.log('onExpand', expandedKeys)
      this.expandedKeys = expandedKeys
      this.autoExpandParent = false
    },
    onCheck (checkedKeys) {
      console.log('onCheck', checkedKeys)
      this.checkedKeys = checkedKeys
    },
    onSelect (selectedKeys, info) {
      console.log('onSelect', info)
      this.selectedKeys = selectedKeys
    }
  },
  mounted () {
    for (const i in this.menu) {
      this.checkedKeys.push(this.menu[i].key)
    }
  }
}
</script>

<style lang="scss" scoped></style>
