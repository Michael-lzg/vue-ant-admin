<template>
  <div class="list">
    <div class="listItem" v-for="(item,index) in list" :key="index">
      <div class="title">{{item.title}}</div>
      <div class="tag">
        <a-tag v-for="(v,k) in item.tag" :key="k" color="blue">{{v}}</a-tag>
      </div>
      <div class="content">{{item.content}}</div>
    </div>
  </div>
</template>

<script>
import { githubList } from '../data/github'
export default {
  data () {
    return {
      list: githubList
    }
  }

}
</script>

<style lang="less" scoped>
.list {
  height: 100%;
  overflow: auto;
}
.listItem {
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
  color: #333;
}
.title {
  padding: 10px 0;
  font-weight: bold;
}
.content {
  margin-top: 10px;
}
.el-tag {
  margin-right: 10px;
}
</style>
