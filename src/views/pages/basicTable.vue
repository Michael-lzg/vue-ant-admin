<template>
  <div>
    <a-table :columns="columns" :data-source="list" :pagination="pagination" @change="handleTableChange" :rowKey="row=>row.name" bordered :loading="loading">
      <span slot="zans" slot-scope="zans">
        <a-rate :default-value="zans" />
      </span>
      <span slot="action" slot-scope="index, row">
        <a-button type="primary" size="small" @click="toEdit(index, row)">编辑</a-button>
        <a-button type="primary" size="small" style="margin-left:5px">删除</a-button>
      </span>
    </a-table>
  </div>
</template>

<script>
const columns = [
  {
    title: '序号',
    customRender: (text, record, index) => `${index + 1}`
  },
  {
    dataIndex: 'title',
    title: '文章标题'
  },
  {
    dataIndex: 'date',
    title: '发表时间'
  },
  {
    dataIndex: 'name',
    title: '作者'
  },
  {
    dataIndex: 'address',
    title: '地址'
  },
  {
    dataIndex: 'zans',
    title: '评级',
    scopedSlots: { customRender: 'zans' }
  },
  {
    dataIndex: 'nums',
    title: '点赞数'
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    scopedSlots: { customRender: 'action' }
  }
]
export default {
  name: 'basicTable',
  data () {
    return {
      list: [],
      columns: columns,
      pagination: { total: 100 },
      loading: false
    }
  },
  methods: {
    toEdit (index, row) {
      console.log(index)
      console.log(row)
    },
    getList () {
      this.loading = true
      this.axios.post('http://xxx.com', {}).then(res => {
        this.list = res.list
        this.loading = false
      })
    },
    handleTableChange () {
      this.getList()
    }
  },
  mounted () {
    this.getList()
  }
}
</script>

<style lang="scss" scoped></style>
