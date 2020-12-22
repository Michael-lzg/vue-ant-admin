<template>
  <div>
    <div class="tips">
      <a href="https://github.com/surmon-china/vue-quill-editor" target="_blank" class="c1">Vue-Quill-Editor</a>：基于Quill、适用于Vue2的富文本编辑器。
    </div>
    <div class="tips">
      <a href="https://github.com/tinymce/tinymce" target="_blank" class="c1">Tinymce</a>：各种功能强大富文本编辑器，还能去格式化。
    </div>
    <quill-editor ref="myTextEditor" v-model="content" :options="editorOption"></quill-editor>

    <a-button class="editor-btn" type="primary" @click="submit">提 交</a-button>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
export default {
  name: 'editor',
  data () {
    return {
      content: '',
      editorOption: {
        placeholder: 'Hello World'
      }
    }
  },
  components: {
    quillEditor
  },
  methods: {
    onEditorChange ({ editor, html, text }) {
      this.content = html
    },
    submit () {
      console.log(this.content)
      this.$message.success('提交成功！')
    }
  }

}
</script>

<style>
.editor-btn {
  margin-top: 10px;
}
.ql-editor {
  height: 400px !important;
}
</style>
