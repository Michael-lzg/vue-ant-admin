<template>
  <div class="dndList">
    <div class="dndList-list">
      <h3>列表1</h3>
      <draggable :list="list1" class="dragArea" group="article" @change="toChange">
        <div v-for="(element,index) in list1" :key="element.title" class="list-complete-item">
          <div class="list-complete-item-handle">
            {{ index + 1 }}、 {{ element.title }}
          </div>
        </div>
      </draggable>
    </div>
    <div class="dndList-list">
      <h3>列表2</h3>
      <draggable :list="list2" class="dragArea" group="article">
        <div v-for="(element,index) in list2" :key="element.title" class="list-complete-item">
          <div class="list-complete-item-handle2">
             {{ index + 1 }}、 {{ element.title }}
          </div>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'drag',
  components: { draggable },
  data () {
    return {
      list1: [],
      list2: []
    }
  },
  methods: {
    getList1 () {
      this.axios.post('http://xxx.com', {}).then(res => {
        this.list1 = res.list
      })
    },
    getList2 () {
      this.axios.post('http://xxx.com', {}).then(res => {
        this.list2 = res.list
      })
    },
    toChange (val) {
      console.log(this.list1)
      console.log(this.list2)
    }
  },
  mounted () {
    this.getList1()
    this.getList2()
  }
}
</script>

<style lang="less" scoped>
.dndList {
  background: #fff;
  padding: 24px;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  .dndList-list {
    float: left;
    padding-bottom: 30px;
    width: 48%;
    &:first-of-type {
      margin-right: 2%;
    }
    .dragArea {
      margin-top: 15px;
      min-height: 50px;
      padding-bottom: 30px;
    }
  }
}

.list-complete-item {
  cursor: pointer;
  position: relative;
  font-size: 14px;
  padding: 5px 12px;
  margin-top: 4px;
  border: 1px solid #bfcbd9;
  transition: all 1s;
}

.list-complete-item-handle {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 50px;
}

.list-complete-item-handle2 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 20px;
}

.list-complete-item.sortable-chosen {
  background: skyblue;
}

.list-complete-item.sortable-ghost {
  background: skyblue;
}

.list-complete-enter,
.list-complete-leave-active {
  opacity: 0;
}
</style>
